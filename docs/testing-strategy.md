# Testing Strategy

> **Philosophy:** Specs-first / TDD for core features. Acceptance criteria → E2E → implementation.
> **Coverage goal:** 70% unit on `lib/` · 100% E2E on critical paths.
> **CI posture:** Soft-gates at MVP — CI warns, doesn't block. Hardens after first 10 PRs.

---

## Tooling

| Layer | Tool |
|---|---|
| Unit | Vitest |
| Component | Vitest + Testing Library |
| Integration | Vitest + MSW + Neon Branching |
| E2E | Playwright |
| A11y (automated) | `@axe-core/playwright` integrated in E2E |
| Load | k6 (one-off, pre-launch) |
| Lint | ESLint + `eslint-config-next` |
| Type | `tsc --noEmit` |

---

## Test pyramid

```
         /\
        /E2\        Playwright — 12 critical flows
       /----\
      /  IT  \      Integration — feature boundaries, DB, API mocks
     /--------\
    / COMPONENT \   Testing Library — complex UI behavior
   /------------\
  /     UNIT     \  Vitest — pure logic in lib/
 /________________\
```

**Shape:** fat unit base on `lib/`, moderate component + integration, thin critical-path E2E.

---

## Critical E2E flows (12, all MVP-required)

1. Email/password signup + email verify
2. Google OAuth signup
3. Discord OAuth signup
4. Onboarding with rank
5. View a video + progress updates
6. Project CRUD (create, edit, delete)
7. Free-limit enforcement on 3rd project
8. Paddle upgrade flow → paid features unlock
9. Create a note on a video
10. Request AI analysis + see structured report
11. Click a video-link in an AI report → lands on video detail
12. Request account deletion → soft-delete state

Each must:
- Run on `main` and PR branch (slow path, blocking only for merge-to-main).
- Run `axe-core` injected at key moments.
- Use MSW for Riot API + AI Gateway calls; use Neon Branching for a per-PR test DB.

---

## What to unit-test

- All `lib/` modules (riot client, youtube client, matching logic, db queries).
- Business logic in `features/<name>/logic/`.
- Pure utilities (formatters, parsers, schema validators).
- **Don't unit-test** React components that are thin display layers — they belong in component or E2E tests.

## What to component-test

- Anything with non-trivial interactive logic (wizards, forms with dependent fields, tables with sort/filter).
- Error boundaries.
- Loading-empty-error triad on each data-backed component.

## What to integration-test

- Server Actions end-to-end (input → DB state change → returned result).
- Webhook handlers (Paddle, Clerk).
- Cron endpoints (YouTube sync, account purge).

## What to E2E-test

- Only the 12 critical flows above. Resist "one more E2E" urge — they're expensive.

---

## Mocking strategy

### Riot API
- **Dev/Test:** MSW with fixtures from anonymized production responses.
- **CI integration:** mocked entirely; real Riot API never hit in tests.
- **Fixtures live at:** `tests/fixtures/riot/`.

### YouTube API
- **Dev/Test:** MSW with fixtures for `playlistItems.list`, `channels.list`.
- **CI integration:** mocked.
- **Fixtures live at:** `tests/fixtures/youtube/`.

### AI Gateway (Claude)
- **Dev/Test:** MSW with canned responses for each prompt template.
- **Local dev:** can optionally call real AI Gateway if `AI_GATEWAY_API_KEY` is set, to iterate on prompts.
- **Fixtures live at:** `tests/fixtures/ai/`.

### Paddle
- **Webhook test:** signed test payloads via Paddle Sandbox webhooks + MSW.
- **Checkout flow:** Paddle Sandbox environment for E2E.

### Clerk
- **Clerk provides a testing token** for E2E — use that, not mocks, for realistic behavior.

---

## Test data strategy

- **Fixtures:** anonymized snapshots of real responses, committed under `tests/fixtures/`.
- **DB seeding:** `tests/seed.ts` inserts canonical users, projects, videos for integration + E2E.
- **No PII in fixtures.** Riot account names replaced with generated handles.

---

## Per-PR vs main vs nightly

| Check | PR | main | Nightly |
|---|:-:|:-:|:-:|
| Lint | ✅ | ✅ | — |
| Typecheck | ✅ | ✅ | — |
| Unit | ✅ | ✅ | — |
| Component | ✅ | ✅ | — |
| Integration | ✅ | ✅ | — |
| E2E (critical 12) | — | ✅ | ✅ |
| A11y (axe on E2E) | — | ✅ | ✅ |
| Lighthouse CI | — | — | ✅ |
| Broken-link crawler | — | — | ✅ |

Rationale: PRs get fast, cheap checks. `main` gets expensive checks that gate production deploy. Nightly catches drift (performance regressions, external link rot).

---

## Coverage targets (soft)

- `lib/` → 70% line coverage. Anything below investigated.
- `features/` → no coverage target; drive via acceptance criteria.
- Hard rule: **no code without at least one caller test** in critical paths.

Coverage reported in CI summary, not gating.

---

## Flake policy

- Any flaky test fails CI on the first flake.
- Flaky tests are quarantined (moved to `@flaky` tag), not skipped or retried silently.
- Quarantine is reviewed weekly — if a test can't be de-flaked in 2 weeks, it's deleted.

---

## Load testing (one-off, pre-public-launch)

k6 script hitting:
- Auth: 100 signups/min sustained for 5 min
- AI analysis endpoint: 30 concurrent requests (simulating paid tier concurrent use)
- Project create: 50/min

Targets:
- p95 latency < 2s for auth flows
- p95 latency < 20s for AI analysis (LLM-bound)
- 0 errors at sustained load

Budget: 1× run pre-launch, re-run after V1.2 multi-tier launch.

---

## QA phase

Private beta = 50 hand-picked testers over ~2 weeks. Bug board on GitHub Projects. Triage daily.
