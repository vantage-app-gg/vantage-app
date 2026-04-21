# Agent Playbook

> Reusable prompt patterns for common Claude tasks in this repo.
> When a task repeats 3+ times, codify it here so the 4th time is consistent.

---

## Pattern: New feature (vertical slice)

**Use when:** adding a new feature to `src/features/<name>/`.

**Prompt skeleton:**
```
I want to implement the <feature> feature per docs/acceptance-criteria.md.

Steps:
1. Write Playwright E2E tests for all scenarios from the acceptance criteria.
2. Write Vitest unit tests for the `lib/` utilities the feature will need.
3. Implement the feature in src/features/<name>/, matching the vertical-slice structure.
4. Wire the feature into src/app/ with a minimal route + layout.
5. Add loading/empty/error states for every data-backed view.
6. Run lint + typecheck + unit + E2E. Report any failures.
7. Update docs/progress.md with what shipped.

Constraints:
- Read docs/negative-constraints.md before starting.
- No new colors / components without checking docs/design-system.md.
- WCAG 2.2 AA throughout (docs/accessibility-requirements.md).
- No features beyond the acceptance criteria.
```

---

## Pattern: Add shadcn/ui component

**Use when:** a new shadcn/ui primitive is needed.

**Prompt:**
```
Add the shadcn/ui <ComponentName> primitive via `pnpm dlx shadcn@latest add <component>`.
After installation:
1. Confirm it landed in src/components/ui/<component>.tsx.
2. Check for new dependencies added to package.json and commit the lockfile.
3. Verify the component renders in dark, light, and system themes.
4. If the component has variants, ensure the default variant matches our design system tokens.
```

---

## Pattern: New Payload collection

**Use when:** a new CMS collection is needed (topics, whitelist, etc.).

**Prompt:**
```
Create a new Payload collection `<name>` at src/lib/payload/collections/<name>.ts:
- Fields per docs/content-taxonomy.md.
- Drizzle schema alignment: the collection's DB table must match the content-taxonomy schema exactly.
- Admin UI visible at /admin/<name>.
- Access control: authenticated admin only.
- Add a migration.
- Update docs/content-taxonomy.md if the schema extends or supersedes what's there.
```

---

## Pattern: New Riot API endpoint

**Use when:** we need to call a Riot endpoint we haven't wrapped yet.

**Prompt:**
```
Add a new method to lib/riot/client.ts for <endpoint>.
Requirements:
- Routes through the existing rate-limiter (no direct `fetch` calls).
- Retries with exponential backoff on 5xx (max 3 retries).
- Caches the response for <appropriate TTL> in lib/riot/cache.ts.
- Types the response with a Zod schema — no `any`.
- Adds a fixture at tests/fixtures/riot/<endpoint>.json.
- Adds a unit test + an integration test with MSW.
- Respects the Riot rate-limit + commitment list in docs/legal-compliance.md.
```

---

## Pattern: New AI prompt / analysis flow

**Use when:** adding a new LLM-powered feature.

**Prompt:**
```
Add a new AI flow in lib/ai/<flow-name>.ts:
- Uses Vercel AI SDK via AI Gateway (plain "provider/model" strings).
- Model selection: Sonnet 4.6 for quality-critical outputs, Haiku 4.5 for high-volume matching.
- Prompt is Zod-schema-validated on output (structured output).
- Grounds every claim in provided data (Riot stats, matched videos) — no hallucinated facts.
- Includes the "AI-generated, educational, no guarantees" disclaimer in the UI layer.
- Logs the input+output (anonymized) to the AI audit table for 90 days.
- Includes a user-flag "Low Quality" mechanism on the UI.
- Respects AI output governance in docs/legal-compliance.md.
```

---

## Pattern: Feature-flag rollout

**Use when:** shipping a feature behind a flag.

**Prompt:**
```
Wrap the <feature> feature behind a PostHog feature flag `<flag-name>`:
- Default off for all users.
- Off for new users until explicitly enabled.
- Readable via lib/flags/<flag>.ts helper.
- Variant buckets (if A/B): use PostHog's feature flag variants.
- Log exposure events to PostHog.
- Document the flag in docs/progress.md with a "will be removed by" date.
```

---

## Pattern: Accessibility regression fix

**Use when:** axe-core fails CI or a manual audit surfaces an issue.

**Prompt:**
```
Fix the WCAG 2.2 AA violation: <specific rule failure>.
Process:
1. Reproduce the violation in the browser with the axe-core DevTools extension.
2. Identify the DOM/ARIA issue — prefer native HTML to ARIA attributes.
3. Fix, verify with axe-core again, and add a test case in the relevant E2E spec.
4. If this is a systemic issue (multiple components affected), update docs/design-system.md and docs/accessibility-requirements.md.
```

---

## Pattern: Post-merge progress update

**Use when:** after shipping anything non-trivial.

**Prompt:**
```
Update docs/progress.md:
- Add a dated entry under "Done".
- Move relevant items out of "In progress" and "Next up".
- If a milestone is achieved, check it off.
```

---

## Pattern: Asking Claude to stop and align

**Use when:** scope is drifting or approach feels wrong.

**Prompt:**
```
Stop. Before continuing:
1. Tell me what you think the task is in 2-3 sentences.
2. Tell me which acceptance criteria you're implementing.
3. Tell me what constraints (from docs/negative-constraints.md) apply here.
4. Wait for my confirmation before writing code.
```

---

## Pattern: Dev-Blog entry (Build-in-Public)

**Use when:** a meaningful ship deserves a public note.

**Prompt:**
```
Draft a short dev-blog entry (150-250 words) for <shipped feature>:
- What we built (one sentence).
- Why (the user problem it solves).
- How we built it (a technically interesting detail or decision).
- What's next.
Voice: matter-of-fact, not hype. No emojis.
Save under src/content/devblog/<YYYY-MM-DD>-<slug>.mdx.
```

---

_Add new patterns above this line as they emerge. If a pattern supersedes an older one, move the older one to a "Retired patterns" section at the bottom (don't delete — the history is useful)._
