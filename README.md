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

## Getting started on a new machine

Cloud-first by design — the repo is the source of truth, Vercel holds the env vars, every third-party account is tied to `vantage.app.gg@gmail.com`. You should be coding again within ~10 minutes.

**1. Install prerequisites**
```bash
# Git, Node 24 LTS, pnpm (install via your OS package manager or nvm)
npm i -g vercel                         # Vercel CLI
npm i -g @anthropic-ai/claude-code      # Claude Code CLI
```

**2. Clone + install**
```bash
git clone https://github.com/vantage-app-gg/vantage-app.git
cd vantage-app
pnpm install
```

**3. Link to Vercel + pull env vars**
```bash
vercel login                            # browser auth, once per machine
vercel link --project vantage-app       # associates this folder with the Vercel project
vercel env pull .env.local              # writes every secret you need (Clerk, Neon, Sentry, PostHog, YouTube, Riot)
```

**4. Authenticate for git pushes**

Either GitHub CLI (easiest):
```bash
gh auth login                           # follow the browser flow
```
…or configure an SSH key / personal access token on GitHub manually.

**5. First run**
```bash
pnpm dev                                # http://localhost:3000
pnpm build                              # sanity-check the production build
```

### What does NOT come from the repo

- **Claude Code CLI memory** lives in your user profile (`~/.claude/projects/<path-hash>/memory/`), not in git. Options on a new machine:
  - (a) Mirror your whole `~/.claude/` via a cloud-sync folder (OneDrive, Dropbox, iCloud) — most robust.
  - (b) Copy only the project's `memory/` directory manually (`MEMORY.md` + the few `*.md` entries).
  - (c) Start empty; Claude rebuilds memory over time but loses prior-session context.
- **Claude Code CLI auth** — run `claude` once; it opens a browser for login.
- **Browser-based third-party logins** — Clerk, Neon, Sentry, PostHog, Paddle, Vercel, GitHub, Google Cloud, Riot Developer Portal. All use `vantage.app.gg@gmail.com`. Just log in; never re-create accounts.

### What you do NOT need to reinstall

- A local Postgres — Neon is cloud-hosted; `vercel env pull` wires you up.
- Any secrets in dotfiles or a password manager — Vercel is the source of truth.
- Any of the 20 service accounts — they're already provisioned.

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
