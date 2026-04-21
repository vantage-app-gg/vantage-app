# Tech Stack — Decisions & Reasoning

> Every choice has a reason. When the reason no longer applies, revisit the choice.

---

## Framework: Next.js 16 App Router + Turbopack

**Why:**
- Server Components give us backend-level data access without a separate API layer.
- PPR (Partial Prerendering) + Cache Components match our content+personalization mix.
- Turbopack = sub-second HMR in dev.
- Vercel deployment is zero-config.
- Large ecosystem (shadcn/ui, Clerk, Drizzle all have first-class Next.js 16 support).

**Alternative considered:** Remix. Rejected because Vercel's Next-specific features (Fluid Compute auto-warm, PPR, AI Gateway integration) are the competitive advantage.

## Runtime: Node.js 24 LTS on Vercel Fluid Compute

**Why:**
- Fluid Compute reuses instances across concurrent requests → near-zero cold starts for our traffic profile.
- Node 24 LTS supported long-term through 2027.
- Edge Functions explicitly avoided (compatibility issues per Vercel 2026 guidance).

## Language: TypeScript strict

**Why:**
- Solo dev: the compiler is my second pair of eyes.
- AI-generated code needs type boundaries to fail loudly, not silently.

## UI: shadcn/ui + Tailwind v4

**Why:**
- shadcn/ui is code-you-own, not a dependency. We can customize any primitive.
- Tailwind v4 is Next.js 16's native styling path.
- Matches our "Tactical Dark" visual identity without fighting a theme system.

**Alternative considered:** Mantine, Chakra. Rejected because they lock us into their design tokens.

## Typography: Geist Sans + Geist Mono

**Why:** Vercel's font family, shipped with Next.js scaffold, free and optimized. Geist Mono is specifically for stats/timestamps in a stats-heavy product.

## Theme: Dark / Light / System — default System-Follow

**Why:** Gaming audience tends dark, but System-Follow is a respect signal. No forced branding over OS preference.

## Config: `vercel.ts`

**Why:** Typed, dynamic, `@vercel/config/v1` replaces `vercel.json`. Per Vercel 2026 guidance.

## Database: Neon Postgres (EU Central / Frankfurt)

**Why:**
- EU-region critical for GDPR/revDSG compliance.
- Branching-per-PR lets CI spin up isolated test databases.
- Postgres FTS is good enough for our video-pool search (no ES/Meili needed).
- Scales to serverless billing.

**Alternative considered:** Supabase. Rejected because we don't need their auth (Clerk), storage (Vercel Blob), or realtime (not needed). Neon = pure Postgres.

## ORM: Drizzle

**Why:**
- Type-safe queries, SQL-like syntax.
- Schema-first, pairs with Neon Branching for PR-isolated schema changes.
- Lighter than Prisma, no code generation runtime.

## Auth: Clerk

**Why:**
- Email/password + Google OAuth + Discord OAuth all ship well.
- Hosted UI means no auth-form rebuilding.
- EU region support.
- Clerk Webhooks sync user events cleanly.

**Riot linking:** separate layer (`lib/riot/auth/`), not via Clerk. Uses Riot Sign On (RSO).

## Payments: Paddle

**Why:**
- Merchant of Record → handles CH MWST + EU VAT + global tax.
- Solo founder exempt from accounting overhead.
- Subscription lifecycle via webhooks.

**Alternative considered:** Stripe. Rejected because we'd need Stripe Tax + own CH VAT registration + EU VAT OSS filings. Paddle removes all of that.

## CMS: Payload (integrated in same repo)

**Why:**
- Code-first collections = can version-control the schema.
- Lives in the same Neon DB → one source of truth.
- Admin UI for content authoring without building it ourselves.
- Works natively with Next.js 16 App Router.

**Alternative considered:** Sanity, Contentful. Rejected for cost and data-sovereignty (both host content externally).

## Storage (MVP): Vercel Blob

**Why:**
- Avatars + screenshots only in MVP — small files, low volume.
- Zero setup on Vercel.
- Public/private support for user-uploaded screenshots.

**V2 migration:** Cloudflare R2 for video uploads (Tier-2 analysis). R2 has egress-free economics, required once we handle 100GB+ of user clips.

## AI: Vercel AI SDK v6 + AI Gateway

**Why:**
- AI Gateway gives us provider fallbacks, observability, zero data retention.
- `"provider/model"` strings via Gateway → model-agnostic.
- Token budgets and guardrails live at the Gateway layer.

**Models:**
- Claude Sonnet 4.6 — match analysis (higher quality for structured output)
- Claude Haiku 4.5 — content matching + routing (faster/cheaper for high-volume small calls)

## YouTube: Data API v3 (nightly sync)

**Why:** Direct API, officially supported. Nightly sync of creator whitelist keeps us under 10k quota/day.

## Riot API: Custom TS client (`lib/riot/`)

**Why:** Riot's official API, rate-limiter + retry wrapper enforced by the client. No third-party wrapper — their API is small enough to wrap ourselves.

**Commitment:** no HenrikDev, no scrapers, ever.

## Analytics: PostHog (EU Cloud) + Vercel Speed Insights

**Why:**
- PostHog = session replay + events + feature flags — one tool for product analytics.
- EU Cloud = GDPR clean.
- Speed Insights for Core Web Vitals, no consent required (aggregated).

## Error monitoring: Sentry (EU region)

**Why:** Mature, EU region, has Next.js source-map + RSC support, reasonable free tier.

## Bot protection: Vercel BotID

**Why:** Native Vercel, no extra integration. Blocks bad actors on signup + checkout flows.

## Deployment: Vercel + Rolling Releases

**Why:** Rolling Releases = canary-style rollout out-of-the-box. Failed deploys roll back automatically.

## CI: GitHub Actions

**Why:** Free, native to GitHub, plenty of examples. Jobs: Lint + Typecheck + Unit + Integration on PR; E2E + A11y on main; Nightly Performance + Broken-Link.

## Code review: Vercel Agent

**Why:** Public Beta, free, AI-powered PR review. Counts as 1 approval for Solo-Dev-Bypass setup.

## Repo structure: single Next.js app (no monorepo in MVP)

**Why:** Scope discipline. Monorepo adds tooling overhead that isn't justified until we have multiple deliverables (mobile, extension, marketing site).

## Testing: Vitest + Playwright + @axe-core/playwright

**Why:**
- Vitest = fast, native ESM, works with RSC.
- Playwright = cross-browser E2E with good DX.
- axe-core = automated a11y baseline (manual audit still required per WCAG 2.2 AA).

## Rate-limiting: Upstash Redis (Vercel Marketplace, on-demand)

**Why:** Serverless Redis, zero ops. Added only when we need it (AI quota, Riot API).

## Env management: `vercel env pull`

**Why:** Single source of truth. `.env.example` documents keys, Vercel Dashboard holds values, `vercel env pull` syncs locally.

## License: BUSL 1.1

**Why:** Source-available (good for Build-in-Public), commercial-use restriction (protects us from fork-and-compete), converts to Apache-2.0 after 4 years.

**Alternative considered:** "All rights reserved". Rejected — too opaque for Build-in-Public audience.
