# Implementation Phases

> Source: PRD Section 3. Breakdown per release phase with concrete deliverables.

---

## Phase 0 — Foundation (pre-Dev)

- [x] Brand + social handles
- [x] Service accounts (GitHub, Vercel, Neon, Clerk, Sentry, PostHog, Google Cloud, Riot Dev)
- [x] Next.js 16 scaffold + vercel.ts + env skeleton
- [x] Doc skeletons committed
- [ ] Landing page + legal skeleton deployed
- [ ] Paddle Merchant Account verified
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Design system baseline (tokens, base components)

## Phase 1 — Auth + Onboarding (first real feature)

- [ ] Clerk integration (Email/Password + Google + Discord)
- [ ] Onboarding flow: rank input (manual), region, language-confirm
- [ ] User profile schema in Neon (Drizzle)
- [ ] Protected-route middleware
- [ ] Account deletion (30-day soft-delete → hard delete with cascade)

## Phase 2 — Content infrastructure

- [ ] Payload CMS setup (topics collection, creator-whitelist collection)
- [ ] YouTube Data API client (`lib/youtube/`)
- [ ] Nightly cron for channel sync → video pool
- [ ] Postgres FTS on video pool
- [ ] LLM matching layer (Claude Haiku via AI Gateway)

## Phase 3 — Content UI (Free tier)

- [ ] 5 launch topics authored in Payload
- [ ] Home/feed page
- [ ] Library page with rank filter
- [ ] Video detail page (youtube-nocookie embed)
- [ ] Progress tracking (Watched / In-Progress / Completed)

## Phase 4 — Projects

- [ ] Multi-step project wizard (name → goal → knowledge level)
- [ ] AI-matched video suggestions on create
- [ ] Whitelist-pool search UI
- [ ] Free-limit enforcement (max 2 projects)
- [ ] Project detail page

## Phase 5 — Paid features

- [ ] Paddle integration (checkout + webhooks)
- [ ] Subscription state in DB
- [ ] Notes feature (free-text notepad per video, global)
- [ ] Trial flow (7 days with card)
- [ ] Early-Bird lifetime deal (first 100)

## Phase 6 — AI Match Coach (Tier 1)

- [ ] Manual match data entry form
- [ ] LLM analysis prompt (8 dimensions)
- [ ] Structured report UI (Strengths / Weaknesses / Action Items)
- [ ] Video-link embedding in action items
- [ ] 30-analyses-per-month quota enforcement
- [ ] User-flag "Low Quality" mechanism

## Phase 7 — Dashboard + polish

- [ ] Stats dashboard (from manual matches)
- [ ] Empty / loading / error states everywhere
- [ ] A11y audit (axe + manual)
- [ ] Performance audit
- [ ] Load test (k6)

## Phase 8 — Launch prep

- [ ] Legal docs finalized (lawyer review)
- [ ] Riot production approval submitted
- [ ] Sentry + PostHog dashboards configured
- [ ] Private beta invite flow
- [ ] Dev blog + changelog system

---

## V1.1 — Automation lift (~1–2 mo post MVP)

- [ ] Automatic Riot sync (once approval is granted)
- [ ] OCR fallback for non-approved users (screenshot upload)
- [ ] Topic expansion: Agents + Weapons

## V1.2 — Content breadth (~2–3 mo post V1.1)

- [ ] Remaining 6 topics (Team Play/IGL, Mindset, VOD Review Methodology, Ranked Climbing, Meta Awareness)
- [ ] Multi-match trend analysis
- [ ] AI chat interface (deep-dive on report)
- [ ] Multi-tier subscription (Basic / Pro / Elite)

## V2 — Video intelligence (~9–12 mo post MVP)

- [ ] Tier-2 clip analysis (10–60s upload → CV + LLM)
- [ ] Learning paths / courses
- [ ] Project sharing (public links)
- [ ] Cloudflare R2 migration

## V3+ — Ambient coaching (open)

- [ ] Tier-3 full-VOD analysis (only with team/funding)
- [ ] Community / social features
- [ ] Native mobile app
- [ ] Third-party integrations
