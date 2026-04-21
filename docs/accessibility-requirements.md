# Accessibility Requirements

> **Target:** WCAG 2.2 AA throughout the app.
> **Automated:** axe-core via Playwright on every E2E run.
> **Manual:** full audit before V1.0 public launch, then quarterly.

---

## Why WCAG 2.2 AA

- **Legal:** EU Accessibility Act (EAA) transposed into national laws, CH BehiG for Swiss context. Web-accessible product is the legal default.
- **Ethical:** gaming audience includes players with visual, motor, cognitive, and auditory differences.
- **Practical:** accessible design is usually also better design for everyone (keyboard shortcuts, high-contrast).

---

## Must-have (WCAG 2.2 AA core)

### Perceivable
- [ ] Color contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text (18px+ or 14px bold+).
- [ ] Non-text elements (icons, graphs) have text alternatives (`alt`, `aria-label`).
- [ ] Color is never the sole indicator of meaning (pair with icon, text, or pattern).
- [ ] Time-based media (video) uses YouTube's native captions — we don't burden the creator.
- [ ] Content resizes to 200% without loss of function.
- [ ] Text can be spacing-adjusted (line-height, letter-spacing, word-spacing) without layout break.

### Operable
- [ ] All functionality reachable by keyboard alone.
- [ ] Visible focus indicator on every interactive element (our custom ring).
- [ ] No keyboard traps (focus can always escape).
- [ ] `prefers-reduced-motion` respected for every animation/transition.
- [ ] Skip-to-content link on every page.
- [ ] Logical tab order (DOM order matches visual order).
- [ ] Click/tap targets ≥ 24×24 CSS pixels (2.5.8 AA) — we use 44 for comfort.
- [ ] No timing constraints on user actions (forms never expire mid-edit in MVP scope).
- [ ] Dragging avoided (or has a keyboard alternative).

### Understandable
- [ ] `html lang` set.
- [ ] Form inputs have associated `<label>`s.
- [ ] Form errors are descriptive and linked to their field.
- [ ] Navigation is consistent across pages.
- [ ] Components that behave the same are labeled the same.
- [ ] Help for interactions is available where needed (tooltips, inline help).

### Robust
- [ ] Valid HTML (no console warnings).
- [ ] ARIA roles used only when native HTML is insufficient.
- [ ] Status messages announced to assistive tech via `role="status"` / `aria-live`.

---

## WCAG 2.2 new criteria (beyond 2.1)

- [ ] **2.4.11 Focus Not Obscured (Minimum):** when an element receives focus, it's not fully hidden by other content (sticky headers, modals).
- [ ] **2.5.7 Dragging Movements:** no drag-only interactions without a keyboard alternative.
- [ ] **2.5.8 Target Size (Minimum):** tap targets ≥ 24×24.
- [ ] **3.2.6 Consistent Help:** help links/buttons appear in the same relative location across pages.
- [ ] **3.3.7 Redundant Entry:** don't ask for info twice in the same flow (form autofill across steps).
- [ ] **3.3.8 Accessible Authentication (Minimum):** no cognitive function tests for auth (captchas that require solving puzzles are out; Vercel BotID is allowed — it's invisible).

---

## Automation

### Every PR
- `axe-core` runs via `@axe-core/playwright` on the critical E2E paths.
- Violations fail the CI check.

### Weekly
- Lighthouse CI a11y run on key pages.

### Quarterly
- Manual keyboard-only walkthrough of all critical flows.
- Screen-reader spot-check (NVDA on Windows, VoiceOver on macOS).
- Color-contrast audit with `pa11y` or equivalent.

---

## Testing with real assistive tech (pre-launch)

- NVDA + Firefox (primary screen-reader test)
- JAWS + Chrome (if available)
- VoiceOver + Safari
- Keyboard-only navigation on desktop
- Talkback on mobile (Android)

---

## Accessibility statement (public page)

Pre-launch, publish `/legal/accessibility` stating:
- Our WCAG 2.2 AA commitment.
- Known accessibility issues (transparently listed).
- Contact path for reporting accessibility barriers (`accessibility@vantage-app.gg`).
- Last audit date.

---

## Red lines — never ship if these fail

- ❌ Keyboard traps anywhere.
- ❌ Form inputs without `<label>`.
- ❌ Images/icons carrying meaning without text alternatives.
- ❌ Color-only indicators (e.g., red = error with no icon or text).
- ❌ Motion that can't be reduced via `prefers-reduced-motion`.
- ❌ Contrast below 4.5:1 for body text.
