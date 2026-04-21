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

## Setting up a new machine (from zero)

This guide assumes you're sitting in front of a brand-new computer with **nothing installed**. Every step is copy-paste — follow them in order. Total time: ~15 minutes.

Primary instructions are for **Windows 11**. Mac instructions at the bottom.

---

### Step 1 — Install four programs

Click each link, download the installer, run it with default settings. After installing, restart any open terminal windows so the new tools are picked up.

| Program | Download link | What it does |
|---|---|---|
| **Git** | https://git-scm.com/download/win | downloads code from GitHub |
| **Node.js 24 LTS** | https://nodejs.org/en | runs the app |
| **GitHub CLI** | https://cli.github.com | so you can push code changes |
| **VS Code** | https://code.visualstudio.com | your editor |

---

### Step 2 — Open PowerShell and install the command-line tools

Press the **Windows key** → type **PowerShell** → press **Enter**. Paste this and press **Enter**:

```powershell
npm install -g pnpm vercel @anthropic-ai/claude-code
```

This installs three more tools:
- `pnpm` — the package manager we use instead of `npm`
- `vercel` — fetches your project secrets securely
- `claude` — the Claude Code AI coding assistant

---

### Step 3 — Log in to everything

Still in PowerShell, run these one at a time. Each opens a browser tab — sign in using **`vantage.app.gg@gmail.com`** wherever asked.

```powershell
gh auth login
vercel login
claude
```

`claude` will prompt you to log in once and then exit — that's expected.

---

### Step 4 — Download the project

Pick where to store it (Documents is a safe default) and run:

```powershell
cd $HOME\Documents
git clone https://github.com/vantage-app-gg/vantage-app.git
cd vantage-app
pnpm install
```

`pnpm install` downloads all the code dependencies. Takes ~1 minute.

---

### Step 5 — Pull your secrets from Vercel

```powershell
vercel link --project vantage-app
vercel env pull .env.local
```

This creates a hidden file called `.env.local` containing every API key the app needs (Clerk, Neon database, Sentry, PostHog, YouTube, Riot). The file is automatically ignored by Git — **never commit it**.

---

### Step 5b — Apply the database schema (first time only)

```powershell
pnpm db:push
```

This creates the tables in your Neon database using Drizzle. Only needed on first setup of a new environment. On later machines you don't need to rerun it — Neon holds the schema centrally.

---

### Step 6 — Run the app

```powershell
pnpm dev
```

Open **http://localhost:3000** in your browser. If you see the Vantage landing page — you're done. ✅

To stop the server, press `Ctrl + C` in PowerShell.

---

### Step 7 — Start coding

From the same folder:

```powershell
code .       # opens VS Code in this folder
claude       # starts Claude Code inside this folder
```

---

### Step 8 (optional but recommended) — Bring over Claude's memory

Claude keeps notes about our decisions and your preferences in **your user profile** — these notes are **not** stored in the repo. On a fresh machine they'll be empty.

To bring them over, on the **old** machine locate this folder:

```
C:\Users\<old-username>\.claude\projects\C--Users-<old-username>-Documents-Valorant-Improvement-Tool\memory\
```

Copy it via USB stick, cloud drive, or zip → email. On the **new** machine paste it into the matching path:

```
C:\Users\<new-username>\.claude\projects\C--Users-<new-username>-Documents-Valorant-Improvement-Tool\memory\
```

The folder name encodes the full path — if you saved the project somewhere other than Documents, rename the folder so it matches your new path.

**Easier long-term alternative:** move your entire `C:\Users\<you>\.claude\` folder into OneDrive or another cloud-sync folder. Then it's mirrored automatically whenever you switch machines.

If you skip this step, Claude will still work — it just won't remember what we've talked about in past sessions.

---

### What you do NOT need to do

- ❌ Re-create any of the 20 service accounts — they all exist and are tied to `vantage.app.gg@gmail.com`, just log in.
- ❌ Install PostgreSQL locally — our database (Neon) lives in the cloud.
- ❌ Copy any `.env` files between machines — `vercel env pull` handles that.

---

### On a Mac?

Replace Step 1 and Step 2 with these, run in **Terminal** instead of PowerShell. Everything from Step 3 onwards is identical.

```bash
# Install Homebrew first: https://brew.sh
brew install git node pnpm gh
brew install --cask visual-studio-code
npm install -g vercel @anthropic-ai/claude-code
```

Claude's memory folder on Mac is `~/.claude/projects/...`.

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
