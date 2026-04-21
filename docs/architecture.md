# Architecture

> Modules, data flows, and key flows. Update this doc when the structure changes.

---

## High-level shape

```
┌─────────────────────────────────────────────────────┐
│  Next.js 16 App Router (Vercel Fluid Compute)       │
│                                                      │
│  ┌─────────────────┐    ┌─────────────────────────┐ │
│  │  App Routes     │    │  Payload CMS (same app) │ │
│  │  (src/app/)     │    │  /admin                  │ │
│  └────────┬────────┘    └──────────┬──────────────┘ │
│           │                         │                │
│  ┌────────▼─────────────────────────▼──────────────┐│
│  │  Features (src/features/)                        ││
│  │  analysis · projects · content · notes · billing ││
│  └────────┬─────────────────────────────────────────┘│
│           │                                           │
│  ┌────────▼──────────────────────────────────────────┤
│  │  Shared Libs (src/lib/)                           │
│  │  ai/ · riot/ · youtube/ · matching/ · db/ ·       │
│  │  payload/ · auth/                                 │
│  └───────────────────────────────────────────────────┘
│                          │                            │
│                          ▼                            │
└──────────────────────────┼────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────────────────┐
         │                 │                              │
         ▼                 ▼                              ▼
   ┌─────────┐       ┌──────────┐                  ┌──────────┐
   │  Neon   │       │  Clerk   │                  │ External │
   │ Postgres│       │  Auth    │                  │  APIs    │
   │ (EU)    │       │          │                  │ (Riot,   │
   │         │       │          │                  │ YouTube, │
   │         │       │          │                  │ AI GW,   │
   │         │       │          │                  │ Paddle)  │
   └─────────┘       └──────────┘                  └──────────┘
```

---

## Directory layout

```
src/
├── app/                       Next.js routes + layouts
│   ├── (marketing)/          Public landing + legal pages
│   ├── (app)/                Authenticated app routes
│   ├── admin/                Payload CMS admin
│   └── api/                  Route handlers (cron, webhooks)
│
├── components/               Shared UI
│   ├── ui/                   shadcn/ui primitives (code-owned)
│   └── vantage/              Custom components (stat cards, video cards, etc.)
│
├── lib/                      Cross-cutting utilities
│   ├── ai/                   AI SDK + Gateway clients, prompt templates
│   ├── riot/                 Riot API client (rate-limit, retry, cache)
│   ├── youtube/              YouTube Data API client, sync logic
│   ├── matching/             LLM-matching for topics and projects
│   ├── db/                   Drizzle schema, queries, migrations
│   ├── payload/              Payload collections & helpers
│   └── auth/                 Clerk helpers, RSO linking
│
├── features/                 Vertical slices (each owns its UI, logic, DB queries)
│   ├── analysis/             AI Match Coach
│   ├── projects/             Projects wizard + CRUD
│   ├── content/              Topics + feed + video detail
│   ├── notes/                Freetext notepad
│   └── billing/              Paddle integration + subscription state
│
└── styles/                   Global CSS, Tailwind tokens
```

---

## Key data flows

### Content discovery (nightly creator channel sync)

```
1. Vercel Cron (03:00 UTC)
   └─> POST /api/cron/youtube-sync
       └─> lib/youtube/sync.ts
           ├─ Read whitelist channels from Payload (creator-whitelist collection)
           ├─ For each channel: playlistItems.list (1 quota unit)
           ├─ Upsert new videos into lib/db video_pool table
           └─ Log run summary to Sentry + PostHog
```

**Quota budget:** ~20 channels × 1 unit/day = 20 units. 9,980 units headroom for emergencies.

### Topic page render

```
1. User requests /topics/crosshair-aim
2. RSC reads:
   ├─ User's rank from Clerk session + Neon
   ├─ Topic content from Payload (topics collection)
   └─ Pre-matched videos from Neon (cached, recomputed when topic/whitelist updates)
3. RSC renders, ships HTML + React Flight payload
4. Client hydrates; user interactions (mark-complete) via Server Actions
```

### Project create (LLM match)

```
1. User submits wizard (name, goal, knowledge_level)
2. Server Action:
   ├─ Persist project (Drizzle)
   ├─ Call lib/matching/matchForProject(project, videoPool) using Claude Haiku via AI Gateway
   │   └─ Prompt includes: project info + compressed video pool (title + tags + channel)
   │   └─ Output: ranked videoIds with reasons
   ├─ Persist match results to project_videos table
   └─ Redirect to /projects/<id>
```

### AI Match Coach (Tier 1)

```
1. User submits match data form (server action)
2. Quota check: matchAnalyses_remaining_this_month > 0?
3. If ok:
   ├─ Call lib/ai/analyzeMatch(matchData, userRank, videoPool) using Claude Sonnet 4.6
   │   └─ Grounding: Riot-style stats + compressed video pool
   │   └─ Output: structured JSON { strengths, weaknesses, actionItems: [{title, body, videoIds}] }
   ├─ Persist to analyses table (90-day log retention)
   ├─ Decrement quota
   └─ Render report UI with video links embedded
4. If quota exhausted: show upgrade/wait message
```

### Paddle subscription lifecycle

```
1. User starts trial → Paddle hosted checkout
2. Paddle webhooks → /api/webhooks/paddle
   ├─ Verify signature
   ├─ Upsert subscription record in Neon
   └─ Update user's tier flag (free / trialing / active / past_due / canceled)
3. Feature gates read the tier flag on every request
```

### Account deletion (30-day soft-delete)

```
1. User requests deletion → account.deletedAt = now()
2. Nightly cron: /api/cron/purge-deleted-accounts
   ├─ Find accounts where deletedAt < now() - 30 days
   ├─ Hard-delete: user, projects, notes, analyses, matchData, progress
   └─ Release email
```

---

## Caching strategy

- **RSC default static** where possible (topic definitions, authored content)
- **Cache Components / `use cache`** for personalized-but-slow-moving data (user rank, project list)
- **Request-scoped memoization** via React `cache()` for fan-out queries within a single render
- **Upstash Redis** only for:
  - AI-quota counters (atomic decrements)
  - Riot API rate-limit token bucket

---

## Security boundaries

- **Clerk session** → passes via `auth()` in server code
- **Webhook signatures** → verified per provider (Paddle, Clerk, Vercel Deploy Protection)
- **Env vars** → never touch client bundle unless `NEXT_PUBLIC_*` prefixed
- **Riot API key** → server-only, never exposed to client
- **LLM prompts** → injected user input is tagged + fenced (`<user_data>...</user_data>`) for defense-in-depth

---

## Observability

- **Sentry:** exceptions + traces, EU region, PII scrubbed
- **PostHog:** events + session replay (consent-gated)
- **Vercel Speed Insights:** Core Web Vitals
- **Vercel Logs:** structured logs from Route Handlers + Cron
- **AI output log:** 90-day retention in Neon (anonymized) for quality review
