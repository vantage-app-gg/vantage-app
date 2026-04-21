# Vantage

Valorant improvement tool — curated learning content + AI-powered match analysis for Gold–Ascendant players in EU.

**Status:** Pre-MVP. Scaffold + doc skeletons committed, feature work not yet started.

## Stack

- Next.js 16 (App Router, Turbopack) on Node 24 LTS
- TypeScript strict, Tailwind v4, shadcn/ui
- Neon Postgres (EU/Frankfurt) + Drizzle ORM
- Clerk auth (Email/Password + Google + Discord)
- Payload CMS (integrated, same Neon DB)
- Paddle (Merchant of Record, CH tax-compliant)
- Vercel AI SDK v6 + AI Gateway (Claude Sonnet 4.6 + Haiku 4.5)
- YouTube Data API v3 (nightly creator channel sync)
- Riot API (TS client with retry + rate-limit)
- Sentry (EU) · PostHog (EU Cloud) · Vercel Agent · Vercel BotID
- Vitest + Playwright + @axe-core/playwright

See [docs/tech-stack.md](./docs/tech-stack.md) for reasoning.

## Local setup

Prerequisites: Node 24 LTS, pnpm, Vercel CLI (`npm i -g vercel`).

```bash
git clone https://github.com/vantage-app-gg/vantage-app.git
cd vantage-app
pnpm install
vercel link --project vantage-app
vercel env pull .env.local
pnpm dev
```

App runs at http://localhost:3000.

## Commands

| Command | Purpose |
|---|---|
| `pnpm dev` | Start Next.js dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the built app |
| `pnpm lint` | ESLint check |
| `pnpm test` | Vitest (when tests exist) |
| `pnpm test:e2e` | Playwright E2E (when e2e exists) |
| `vercel env pull` | Sync env vars from Vercel |

## Env vars

See `.env.example` for the full list. Pull real values with `vercel env pull .env.local`. Never commit `.env.local`.

## Deployment

Every push to a branch creates a Vercel Preview deployment. Merging to `main` promotes to Production (Rolling Release). See `vercel.ts` for config.

## Docs

Start at [CLAUDE.md](./CLAUDE.md) for the full doc index.

## License

BUSL 1.1 (see [LICENSE](./LICENSE)) — source-available, converts to Apache-2.0 after 4 years. Not OSS. Commercial production use requires a commercial license from the copyright holder.
