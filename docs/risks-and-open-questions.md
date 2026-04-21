# Risks & Open Questions

> Updated as risks change status. Risks with no mitigation plan should be escalated, not ignored.

---

## Active risks

### R1 — Riot Production Approval Uncertain
- **Impact:** Without production key, paid users must manually enter match data (poor UX).
- **Likelihood:** Medium. Riot approval rate is opaque; solo founder + pre-revenue is disadvantaged.
- **Mitigation:** Manual-entry + OCR-fallback cover the gap. Approval is not a blocker for launch.
- **Owner:** Founder.
- **Status:** Accepted with mitigation.

### R2 — YouTube API Quota (10k/day)
- **Impact:** Content pipeline breaks if we exceed quota (nightly sync fails).
- **Likelihood:** Low at current whitelist size (~20 channels × 1 unit = 20 units/day).
- **Mitigation:** Nightly sync uses `playlistItems.list` (cheap). Internal search via Postgres FTS, not YouTube. Alerts on ≥50% quota usage.
- **Owner:** Founder.
- **Status:** Mitigated, monitored.

### R3 — AI Costs Scale With Usage
- **Impact:** Per-user LLM costs could erode margin at scale.
- **Likelihood:** Medium once paid users accumulate.
- **Mitigation:** Quota (30 analyses/month on Coach tier). Claude Haiku for high-volume matching tasks. Model swap path via AI Gateway if costs spike.
- **Owner:** Founder.
- **Status:** Monitored.

### R4 — Solo Capacity (4h dev + 2h content / week)
- **Impact:** MVP takes 7–9 months; scope creep extends this.
- **Likelihood:** High that scope wants to grow.
- **Mitigation:** Strict V1.0 scope per PRD. Any addition requires PRD update + scope trade-off (pull something else out).
- **Owner:** Founder.
- **Status:** Ongoing discipline.

### R5 — Content Quality Variance on YouTube
- **Impact:** Bad videos in pool = bad user experience.
- **Likelihood:** Medium. Even trusted creators sometimes post mediocre content.
- **Mitigation:** Curated whitelist (15–20 channels only). Manual review of creator whitelist quarterly. User-flag "Low Quality" surfaces problem videos.
- **Owner:** Founder (content role).
- **Status:** Mitigated.

### R6 — Solo Legal Risk (CH)
- **Impact:** Regulatory or contract issue could halt service.
- **Likelihood:** Low if we follow Swiss + EU basics.
- **Mitigation:** Paddle as MoR handles tax/VAT. Lawyer review before public launch. Insurance once revenue is stable.
- **Owner:** Founder.
- **Status:** Mitigated pre-launch.

### R7 — Clerk Pricing at Scale
- **Impact:** Clerk's MAU-based pricing could jump at user growth.
- **Likelihood:** Not a near-term risk (free tier covers 10k MAU).
- **Mitigation:** Monitor Clerk pricing post-2026 changes. Evaluate Auth0 / Descope at 8k MAU.
- **Owner:** Founder.
- **Status:** Monitored.

### R8 — Vercel Plan Friction for Private Repos
- **Impact:** Hobby plan doesn't deploy private org repos. Pro is $20/mo.
- **Likelihood:** Current — repo is public via Build-in-Public + BUSL 1.1. No current cost impact.
- **Mitigation:** Repo stays public until revenue justifies Pro.
- **Owner:** Founder.
- **Status:** Mitigated via public + BUSL.

---

## Open decisions (needed before relevant feature lands)

### OD1 — Accent color (visual identity) — RESOLVED 2026-04-21
- **Decision:** desaturated teal. OKLCH-based, slightly brighter than originally planned to pop against the tactical-dark surface.
  - Primary: `oklch(0.78 0.13 195)`
  - Strong (hover / gradients): `oklch(0.86 0.15 195)`
- **Rationale:** tactical feel, differentiated from Valorant red and generic gaming blue, good luminance against `oklch(0.13 0 0)` background.
- **Where it lives:** `--accent` / `--accent-strong` / `--accent-foreground` in `src/app/globals.css`, exposed via Tailwind v4 `@theme inline`.
- **Updated 2026-04-22:** Site is dark-only for now (`color-scheme: dark`). Light mode returns with a manual toggle in V1.1+.

### OD2 — Notes model: global vs per-project
- **Blocks:** Notes feature implementation.
- **Current decision (from PRD):** global (free-text notepad per video, not per-project).
- **Timing:** Confirmed in PRD. Revisit only if user research during private beta reveals per-project is needed.

### OD3 — Rank auto-detection vs manual input
- **Blocks:** Onboarding completeness.
- **Current decision (from PRD):** hybrid — manual at onboarding, Riot-auto once approval lands (V1.1).
- **Timing:** Resolved for MVP.

### OD4 — Trial model: card required vs not
- **Blocks:** Paddle flow.
- **Current decision (from PRD):** 7 days with card, auto-convert.
- **Timing:** Resolved. Evaluate post-launch if trial-to-paid rate is low.

---

## Closed / historical

*(Add closed risks here with resolution notes once retired.)*

---

## Review cadence

- Risks reviewed at every release milestone (M1–M7).
- Open decisions reviewed when unblocking a feature that depends on them.
