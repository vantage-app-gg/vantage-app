# Negative Constraints — "Claude, NEVER do X"

> Explicit prohibitions. Read before writing code for this project.
> Source: Riot ToS, YouTube ToS, revDSG/GDPR, architectural decisions in the PRD.

---

## Riot / gameplay

1. **No in-game overlays.** Ever. Not during pre-round, not for stats, not for callouts. The app is used pre-game, post-game, between sessions — never during a live match.
2. **No scrapers. No HenrikDev. No third-party data sources.** Only the official Riot API. If a Riot endpoint doesn't give us the data we need, we live without it until Riot ships the endpoint.
3. **Never claim a user is cheating or toxic** based on stats. AI outputs must not assert misconduct about Riot accounts.
4. **No Riot logos, no Valorant iconography, no agent art** without explicit written permission from Riot Games.
5. **Rate-limit programmatically enforced** — every Riot API client goes through the rate-limiter in `lib/riot/`. Never call Riot API directly from a route handler without the client.
6. **Match data retention ≤ 30 days** (soft-delete). Cascade on account deletion.
7. **"Not endorsed by Riot Games" disclaimer** in the footer and on the About page. Always.
8. **Riot account linking is separate from Clerk auth** — do not use Clerk's generic OAuth for Riot. Riot uses RSO (Riot Sign On), wired as a second identity layer in `lib/riot/auth/`.

## YouTube / content

9. **Embed only via `youtube-nocookie.com`** — never `youtube.com/embed`. Privacy-preserving iframe is non-negotiable.
10. **Never download, rip, or re-host videos.** Embed only. No audio extraction, no transcription in V1 (we'll evaluate with creator permission for V2+).
11. **No YouTube Data API calls per user-query.** All content discovery hits the internal video pool (Postgres FTS). Only the nightly cron calls YouTube.
12. **Creator whitelist is editorially curated.** Videos appear in the pool only if their channel is in the whitelist collection.
13. **Respect YouTube API quota (10k units/day).** If a feature would require blowing the quota, redesign it. Search (`search.list` = 100 units) is forbidden in the hot path.

## AI / outputs

14. **Never output as fact** what the model cannot verify from the provided data (Riot stats, matched videos). Ground every claim.
15. **Every AI output ships with the disclaimer** "AI-generated, educational, no guarantees." User-facing, not buried.
16. **AI outputs are logged 90 days** for quality review — but anonymized (no PII, no account handles in logs).
17. **User flag "Low Quality"** must be present on every AI analysis in the UI.
18. **No chat UI in V1.0.** Structured reports only. Chat comes in V1.2.
19. **No autonomous model-chaining** or agentic loops without explicit scope fences. Every LLM call has a concrete purpose and a budget.

## Data protection

20. **EU regions only** for all processors: Neon EU, Sentry EU, PostHog EU, Vercel EU deployments.
21. **Consent-first cookie architecture.** No tracking cookies pre-consent. OSS banner.
22. **Never log passwords, API keys, Riot tokens, or Clerk session tokens.** Sentry PII-scrubbing must be on.
23. **30-day soft delete → hard delete** for account deletion. Riot data cascades.
24. **No data sold, no data shared with advertisers.** Period.

## Code / architecture

25. **TypeScript strict.** No `any`, no `@ts-ignore` without a one-line reason comment pointing to a specific issue.
26. **No backend secrets in client components.** All secrets stay server-only; use env vars correctly (`NEXT_PUBLIC_*` only for public).
27. **No `useEffect` for data fetching.** React Server Components + server actions only. Client-side fetches only for user-initiated mutations.
28. **No half-finished implementations committed to main.** If a feature isn't done, it's feature-flagged off by default.
29. **No premature abstractions.** Three similar lines is not "duplication that needs a helper." Wait for four or five.
30. **No backwards-compatibility shims** inside the app. We don't have a prior version to be compatible with yet.

## Scope

31. **No features beyond the current V1.0 acceptance criteria** unless the PRD is updated first. If unclear, ask.
32. **No mobile app, no browser extension, no Discord bot in V1.0.** Explicit V3+ territory.
33. **No community/social features** (comments, likes, public profiles, friends) in V1.0.
34. **No team/multi-user workflows.** Solo use-case only through V2.
