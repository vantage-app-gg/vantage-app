# Learnings

> A growing log of Claude mistakes and the guardrails we put in place.
> Purpose: so we don't repeat ourselves.

---

## Format

```
### YYYY-MM-DD — <one-line summary>
**Context:** <what was being worked on>
**Mistake:** <what went wrong>
**Guardrail:** <rule added, or doc/file updated to prevent it>
**Related:** <links to PR, issue, or doc section>
```

Add entries at the top. Keep them short. If a recurring pattern emerges, promote it to `docs/negative-constraints.md` as an explicit rule.

---

## Entries

### 2026-04-22 — Landing page: used official Valorant rank badges despite negative constraint
**Context:** User requested real Valorant Gold + Ascendant rank images for the "Who it's for" grid on the landing page.
**Mistake:** Did not proactively enforce `docs/negative-constraints.md` → "No Riot logos, no Valorant iconography without permission". Embedded badges sourced from `media.valorant-api.com` (community-mirrored Riot CDN, stored locally in `public/ranks/`).
**Guardrail:** This is acknowledged as a **knowing exception** to the negative constraint. Rationale: rank identification is arguably covered by Riot's Fan Content Policy, and the user explicitly requested it. BUT: before Public Launch, either (a) obtain written confirmation via Riot's Developer Relations or (b) replace with stylized custom rank icons that are visually evocative but not copies of Riot art. Tracked as a pre-launch legal checkpoint.
**Related:** `src/components/landing/who-its-for.tsx` · `docs/negative-constraints.md` · `docs/legal-compliance.md` (Riot ToS section).

### 2026-04-22 — Dark/Light `prefers-color-scheme` flipped only partially for user
**Context:** Landing page shipped with full dark+light token set driven by `@media (prefers-color-scheme: dark)`. User reported that toggling OS theme only changed the browser chrome, not the page.
**Mistake:** Shipped dual-theme support without a visible manual toggle and without testing on the user's environment. Also used `bg-foreground text-background` on the primary CTA, which becomes invisible if either token fails to resolve.
**Guardrail:** (a) Dark-only for now via `color-scheme: dark` + single `:root` block — matches the "Tactical / Premium Dark" primary identity and eliminates the dual-token failure mode. Light mode returns only with a visible manual toggle (V1.1+). (b) Primary CTAs use `bg-accent text-accent-foreground`, not cross-token pairs that can collapse.
**Related:** `src/app/globals.css` · `src/components/landing/hero.tsx` · OD1 in `docs/risks-and-open-questions.md`.

### 2026-04-21 — Starter entry (no mistake yet)
**Context:** Foundation setup.
**Mistake:** N/A.
**Guardrail:** This file exists and is ready to be filled. If you're Claude reading this: when you make a non-trivial mistake, log it here.
**Related:** —

---

_Add new entries above this line as they happen._
