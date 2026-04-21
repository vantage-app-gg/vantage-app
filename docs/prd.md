# Vantage — Product Requirements Document

> **Status:** Source of truth for product scope.
> **Last updated:** 2026-04-21
> **Founder:** Solo, Switzerland. Editor: VS Code + Claude Code CLI.
> **Capacity:** 4 h/week dev + 2 h/week content → realistic MVP timeline **7–9 months**.
> **Launch philosophy:** Build in Public, marketing budget 0 €.

---

## 1. Vision & Mission

**One-line:** An English-language Valorant learning platform for ambitious **Gold–Ascendant EU players** that (a) dynamically curates learning content from trusted YouTube creators and (b) delivers personalized AI match analysis. Fundamentals free, AI features gated.

### Target audience (primary)
- **Rank:** Gold–Plat (broad middle) + Diamond–Ascendant (ambitious upper middle)
- **Region:** EU primary marketing, multi-region architecture-ready
- **Language:** English only (i18n architecturally open for later)
- **Usage context:** pre-game · post-game · between sessions (**never in-game → no overlay**)

### USP vs Blitz.gg, Tracker.gg, Mobalytics, ProGuides
1. **Dynamic AI-curated content** — topics and user projects pull matching YouTube videos automatically from a curated creator whitelist (no manually-maintained playlists).
2. **Personalized AI match analysis (Tier-1 in MVP)** — stats-based via Riot API + LLM, delivers concrete improvement suggestions linked to matching learning videos from the platform's content pool — the killer move that connects free and paid tiers.

### Marketing honesty
"AI Match Coach — analyzes your Riot match data. Video analysis coming soon." — no video-AI hype until Tier-2 ships.

---

## 2. Business model

### V1.0 — Freemium (1 paid tier)

| Tier | Features |
|---|---|
| **Free** | 5 launch topics, video feed, rank sort, **max 2 projects (private)**, manual rank entry, progress tracking (Watched / In-Progress / Completed) |
| **Paid "Coach" — CHF 9.99/mo or 99/year** | Unlimited projects, **video notes (free-text notepad per video)**, **30 AI analyses/month**, stats dashboard |
| **Trial** | 7 days with credit card (Paddle, auto-convert) |
| **Early-Bird** | Lifetime deal for first 100 paying users (marketing instrument) |

### V1.2 multi-tier (direction)
Free · Basic CHF 9.99 · Pro CHF 19.99 (+100 analyses, multi-match trend, AI chat) · Elite CHF 39.99 (+300 analyses, priority support, early access).

### Merchant of Record
**Paddle** — handles CH VAT + EU VAT + global tax compliance. No self-accounting, no Stripe-Tax overhead.

### MVP success metric
≥100 signups + ≥5 paying users in 30 days post Public Launch **and** qualitative "feels good" verdict.

---

## 3. Feature roadmap by release phase

### V1.0 — MVP ("usable at launch") — ~7–9 months

**Foundation**
- Next.js 16 + shadcn/ui + Tailwind v4 setup, Vercel deploy pipeline, GitHub with branch protection
- Design system (tokens, base components, dark/light/system theme, default = system-follow)
- Clerk auth (Email/Password + Google OAuth + Discord OAuth)
- Neon Postgres + Drizzle schema
- Payload CMS for authoring

**Content discovery infrastructure**
- Google Cloud project + YouTube Data API v3
- Creator channel whitelist (15–20 top Valorant creators in MVP) in Payload
- Nightly cron: `playlistItems.list` → sync new videos from whitelist into Neon DB
- Video pool model: metadata (title, description, tags, duration, thumbnails, channel)
- Postgres full-text search for internal video search
- LLM matching layer (Claude Haiku 4.5 via AI Gateway) for topics and projects

**Content page (Free)**
- **5 launch topics:** Fundamentals · Crosshair Placement & Aim · Maps (Callouts + Angles) · Utility Usage · Economy
- Only topic-block text is authored in Payload; videos are matched dynamically from the video pool
- Rank tagging at the **topic-block level** (Iron-Silver / Gold-Plat / Diamond+)
- Home/feed, library, video detail with YouTube-nocookie embed
- Progress tracking (Watched / In-Progress / Completed)

**Projects (Free max 2, Paid ∞)**
- Multi-step project wizard:
  1. Project name
  2. Project goal
  3. Knowledge level on the topic
- AI matches on create, once, from the video pool → 5–10 suggestions
- User can also **search the whitelist pool** and add videos manually (no per-query YouTube Search API call)
- Privacy: private-only in MVP, no sharing
- Notes (Paid-only): free-text notepad per video, global (not per project)

**Paid features**
- Paddle checkout + webhooks for subscription management
- **Tier-1 AI match coach:**
  - Manual match data entry (pre Riot approval) → LLM report
  - Analyzes: aim stats · round performance · agent-specific · map-specific · death patterns · economy decisions · rank-median comparison · **concrete action items with direct links to matching videos**
  - Structured report (Strengths / Weaknesses / Action Items), no chat UI
  - 30 analyses/month paid quota
- Stats dashboard (from manually-entered matches)

**Operations**
- WCAG 2.2 AA throughout
- Empty / loading / error states system-wide
- Sentry + PostHog (EU) + Vercel Analytics live
- **Legal basis (CH):** Impressum (UWG Art. 3), privacy policy (revDSG + GDPR), ToS, cookie policy, AI info page, Riot disclaimer, accessibility statement, data protection contact
- 30-day soft-delete + cascade deletion for accounts
- Landing page + marketing copy
- **Riot production approval** application submitted (not required approved before launch)
- Dev blog / changelog for build-in-public

### V1.1 — "Automation Lift" (~1–2 mo post MVP)
- **Automatic Riot sync** (once approved) replaces manual entry for paid users
- **OCR fallback** for non-approved users: screenshot upload → auto-extract match stats
- Topic expansion: **+ Agents + Weapons**

### V1.2 — "Content breadth" (~2–3 mo post V1.1)
- Remaining 6 topics: Team Play/Comms/IGL · Mindset · VOD Review Methodology · Ranked Climbing · Meta Awareness
- Multi-match trend analysis
- AI chat interface (deep-dive questions on the report)
- **Multi-tier subscription** live (Basic / Pro / Elite)

### V2 — "Video intelligence" (~9–12 mo post MVP)
- **Tier-2 clip analysis:** user uploads 10–60 sec → CV + LLM
- **Learning paths / courses** with modules, prerequisites, progress logic
- **Project sharing** (public links)
- **Cloudflare R2** migration for video storage

### V3+ — "Ambient coaching" (open)
- Tier-3 full-VOD analysis (only realistic with team/funding)
- Community / social features
- Native mobile app
- Third-party integrations (Discord bot, aim-trainer integrations)

---

## 4. Tech stack (final)

See [tech-stack.md](./tech-stack.md) for full table and reasoning.

## 5. Repo structure

See [architecture.md](./architecture.md).

## 6. Required docs (19)

See [CLAUDE.md](../CLAUDE.md) for the index.

## 7. Legal framework (CH)

See [legal-compliance.md](./legal-compliance.md).

## 8. Testing strategy

See [testing-strategy.md](./testing-strategy.md).

## 9. Risks & assumptions

See [risks-and-open-questions.md](./risks-and-open-questions.md).

## 10. Claude workflow

See [agent-playbook.md](./agent-playbook.md).
