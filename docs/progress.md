# Progress

> Updated after each feature lands or status changes. Source of truth for "where are we?".
> Last updated: 2026-04-21

---

## Status summary

**Phase:** Phase 0 — Foundation (scaffolding complete, feature work not started).

---

## Done

### 2026-04-21 — Landing page + legal skeletons
- Landing page at `/` with tactical-dark styling, accent color, Riot disclaimer.
- 9 legal skeleton pages at `/legal/{imprint,privacy,terms,cookies,refunds,ai-info,accessibility,riot-disclaimer,contact-dpo}`.
- Shared `<Footer>` links all 9 + copyright + contact email.
- Accent color decided (OD1 closed): desaturated teal in OKLCH — `oklch(0.72 0.1 195)` dark, `oklch(0.55 0.1 195)` light.
- Tactical-dark design tokens wired into `globals.css` via Tailwind v4 `@theme inline`.
- `pnpm build` green (13 static routes). `pnpm lint` clean.
- Unblocks task #7 (Paddle Merchant Account) once deployed to production URL.

### 2026-04-21 — Service accounts + scaffold
- Brand: Vantage. Working domain reserved: `vantage-app.gg` (not yet purchased, on deferred list until pre-release).
- Social handles: X `@vantage_app_gg`, Discord server, GitHub org `vantage-app-gg`, Instagram `vantage.app.gg`, Reddit `r/vantage_app`.
- Gmail: `vantage.app.gg@gmail.com`.
- Service accounts live: Vercel CLI, Google Cloud + YouTube Data API v3, Riot Developer, Neon (EU-Frankfurt), Clerk (Email/Google/Discord OAuth), Sentry (EU), PostHog (EU Cloud), GitHub repo with branch protection + rulesets.
- Next.js 16.2.4 + Turbopack + Tailwind v4 + TypeScript strict scaffold pushed to `vantage-app-gg/vantage-app`.
- `vercel.ts` (fra1 region), `.env.example` committed.
- Vercel Project linked, Marketplace integrations installed (Neon, Clerk, Sentry), env vars pulled locally.
- 19 doc skeletons committed.
- Creator whitelist v1 researched (20 creators) — channel IDs require YouTube API resolution before ingestion.

---

## In progress

- Task #7: Paddle Merchant Account — unblocked as soon as Vercel finishes auto-deploying this push.

---

## Next up

1. First real feature: **Auth + Onboarding** (Clerk integration + rank entry).
2. YouTube channel sync + video pool (unblocks content features).
3. First topic content authored in Payload CMS.

---

## Milestones

- [ ] **M1: Foundation** — accounts + scaffold + docs. → expected by EOW 2026-04-25.
- [ ] **M2: Auth + Onboarding live** — first end-user-visible deploy.
- [ ] **M3: Content infra live** — video pool synced, first topic browsable.
- [ ] **M4: Projects + Notes live** — free tier functionally complete.
- [ ] **M5: Paddle + AI Coach live** — paid tier functionally complete.
- [ ] **M6: Private Beta opens** — 50 hand-picked testers.
- [ ] **M7: Public Launch** — MVP (V1.0) live.

---

## Format for future updates

```
### YYYY-MM-DD — <short headline>
- What shipped
- What moved from Todo → In-progress
- Anything blocking
```

Keep entries short. If context is needed, link to the PR or issue.
