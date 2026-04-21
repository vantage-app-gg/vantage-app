@AGENTS.md

# Vantage — Claude Entry Point

> Valorant improvement tool for Gold–Ascendant EU players. Curated learning content + AI-powered match analysis.

**Current phase:** Pre-MVP foundation (scaffold + doc skeletons committed, feature work not started).

## Before you write code

Read these, in order:

1. [docs/prd.md](./docs/prd.md) — Product requirements, scope, business model
2. [docs/negative-constraints.md](./docs/negative-constraints.md) — What NOT to do (Riot ToS, YouTube policy, scope fences)
3. [docs/tech-stack.md](./docs/tech-stack.md) — Stack choices and reasoning
4. [docs/architecture.md](./docs/architecture.md) — Modules, data flows
5. [docs/acceptance-criteria.md](./docs/acceptance-criteria.md) — Gherkin specs per feature

## All docs

| File | Purpose |
|---|---|
| [README.md](./README.md) | Dev setup, commands, deployment |
| [docs/prd.md](./docs/prd.md) | Product requirements (source of truth) |
| [docs/implementation-phases.md](./docs/implementation-phases.md) | V1.0 → V3+ roadmap breakdown |
| [docs/acceptance-criteria.md](./docs/acceptance-criteria.md) | Gherkin per feature |
| [docs/domain-glossary.md](./docs/domain-glossary.md) | Valorant terminology for Claude |
| [docs/tech-stack.md](./docs/tech-stack.md) | Stack reasoning |
| [docs/architecture.md](./docs/architecture.md) | Modules + data flows |
| [docs/design-system.md](./docs/design-system.md) | Tokens, components, naming |
| [docs/ux-principles.md](./docs/ux-principles.md) | UX Do/Don'ts |
| [docs/accessibility-requirements.md](./docs/accessibility-requirements.md) | WCAG 2.2 AA checklist |
| [docs/testing-strategy.md](./docs/testing-strategy.md) | Test types, coverage, mocking |
| [docs/negative-constraints.md](./docs/negative-constraints.md) | Explicit prohibitions |
| [docs/progress.md](./docs/progress.md) | What's done, what's in progress |
| [docs/learnings.md](./docs/learnings.md) | Past Claude mistakes + mitigations |
| [docs/risks-and-open-questions.md](./docs/risks-and-open-questions.md) | Active risks, open decisions |
| [docs/content-taxonomy.md](./docs/content-taxonomy.md) | Payload schemas, rank tags, channel whitelist |
| [docs/legal-compliance.md](./docs/legal-compliance.md) | CH legal framework, Riot/YouTube policies |
| [docs/agent-playbook.md](./docs/agent-playbook.md) | Reusable prompt patterns |

## Quick commands

```bash
pnpm dev              # Next.js 16 dev server with Turbopack
pnpm build            # production build
pnpm lint             # ESLint
pnpm typecheck        # tsc --noEmit (add to package.json)
pnpm test             # Vitest (add when tests exist)
pnpm test:e2e         # Playwright E2E (add when e2e exists)

vercel env pull       # sync env vars from Vercel to .env.local
```

## Claude behavior notes

- **TypeScript strict** is on. No `any`, no `// @ts-ignore` without a one-line reason comment.
- **Never commit `.env.local`** or secrets. `.env.example` documents required keys.
- **Never add features beyond the current acceptance criteria.** If unclear, ask before implementing.
- **Tests first for Kernfeatures** (TDD). Specs → E2E → implementation.
- **Every AI-generated Analysis/Coaching output gets the disclaimer** "AI-generated, educational, no guarantees."
- **Never scrape, never use HenrikDev, never build an overlay.** See negative-constraints.md.
