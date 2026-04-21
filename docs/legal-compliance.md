# Legal & Compliance

> **Jurisdiction:** Switzerland (primary) + EU (user base) + USA (Riot/YouTube origin).
> **Business form:** Einzelfirma (sole proprietor) at MVP stage. GmbH upgrade triggered by liability needs or scaling, not time.
> **Status:** Framework defined. Final legal text awaits lawyer review before public launch.

---

## 1. Business structure

- **Start:** Einzelfirma (no Handelsregister entry required under CHF 100'000 annual revenue).
- **AHV:** Register as self-employed (Selbständigerwerbender) once side income exceeds CHF 2'300/year.
- **CH VAT (MWST):** Not required under CHF 100'000 global annual turnover.
- **GmbH migration:** Triggered by (a) need for liability limitation, (b) external investor, or (c) revenue scale. CHF 20'000 Stammkapital required.

## 2. Data protection

- **revDSG (Switzerland)** applies — effective 1 Sep 2023.
- **GDPR (EU)** applies extraterritorially because our target audience is in the EU.
- **US/Third-country transfers:** minimized by using EU regions for all sub-processors. Transfers only via Standard Contractual Clauses (SCC) where unavoidable.

### Sub-processors (all EU-region where possible)

| Service | Role | Region | DPA |
|---|---|---|---|
| Vercel | Hosting | Frankfurt (fra1) | Yes (DPA auto-accepted) |
| Neon | Postgres DB | EU Central (Frankfurt) | Yes |
| Clerk | Auth | US + EU (configurable) | Yes |
| Sentry | Error monitoring | EU | Yes |
| PostHog | Product analytics | EU Cloud | Yes |
| Paddle | Merchant of Record | UK/EU | Yes |
| Anthropic (via Vercel AI Gateway) | LLM inference | EU routing preferred | Vercel DPA umbrella |
| Google (YouTube Data API) | Video metadata fetch | Global | Standard Google ToS |
| Riot Games | Match data | US | Riot Dev Terms |

Full DPA register stored separately (not in repo).

### Consent architecture
- OSS cookie banner, consent-first, no tracking cookies pre-consent.
- PostHog and Vercel Analytics behind consent toggle. Sentry error logging allowed pre-consent (legitimate-interest basis, anonymized).

## 3. Riot Games compliance

### Hard commitments (Riot Developer Terms)
1. No in-game overlays.
2. No scrapers, no unofficial data sources (no HenrikDev).
3. Rate-limit programmatically enforced.
4. Match data retention ≤ 30 days.
5. Account deletion cascades Riot data.
6. No Riot/Valorant logos or iconography without written permission.
7. "Not endorsed by Riot Games" disclaimer in footer and About page.
8. Match-data usage scoped to logged-in user only (no cross-user analysis).

### Approval path
- **Personal/Dev key** (auto-issued, 24h rotation) — used during development and private beta.
- **Production key** — application submitted after private beta stabilizes. Not a blocker for public launch because manual-entry fallback + OCR flow (V1.1) cover the gap.

## 4. YouTube compliance

- **Embeds only** via `youtube-nocookie.com/embed/<videoId>`.
- **No rehosting** of video content.
- **API quota respect:** 10k units/day. Nightly sync uses `playlistItems.list` (1 unit), never `search.list` (100 units) in hot paths.
- **Creator whitelist** — editorial curation of channels. No automatic inclusion.

## 5. AI output governance

- **User-facing disclaimer** on every AI analysis: "AI-generated, educational, no guarantees."
- **Prompt guardrails** — grounding in Riot match data + curated video pool. Model must not make claims about other users (cheating, toxicity).
- **Output logs** retained 90 days for quality review. Anonymized (no PII, no Riot handles).
- **User-flag "Low Quality"** button on every AI report.
- **No medical, legal, or financial advice** masquerading as coaching. The scope is gameplay improvement only.

## 6. Required legal documents (9) — pre public launch

| Document | Purpose | Basis |
|---|---|---|
| Impressum | Provider identification | UWG Art. 3 (CH) |
| Datenschutzerklärung (Privacy Policy) | Processing disclosure | revDSG + GDPR Art. 13/14 |
| AGB / Terms of Service | Contract terms | OR (CH contract law) |
| Widerrufsbelehrung | EU consumer withdrawal | EU Consumer Rights Directive (via Paddle) |
| Cookie-Richtlinie | Cookie disclosure | ePrivacy + revDSG |
| AI-Info-Seite | AI output disclosure | Voluntary best-practice, pre-empting EU AI Act |
| Riot-Disclaimer | Non-endorsement | Riot Developer Terms |
| Barrierefreiheit-Erklärung | Accessibility statement | WCAG 2.2 AA commitment, CH BehiG |
| Datenschutz-Kontakt | DPO/data protection contact | revDSG + GDPR Art. 27 |

### Creation path
- DIY via generators (eRecht24, Paddle templates, CH legal-tech).
- **One-time lawyer review before public launch** (CHF 500–1000 budget).
- Version control: legal docs live under `src/content/legal/` as MDX, versioned in git.

## 7. Insurance

- **Not at MVP stage.** Trigger: regular recurring revenue.
- **Then:** Business liability + legal protection (CH provider, ~CHF 300–600/year).

## 8. Payment processing

- **Paddle as Merchant of Record** handles global VAT/sales tax including CH MWST and EU VAT.
- We never store card data — Paddle hosts the checkout.
- Webhook signature verification mandatory for every event.
- Subscription state is mirrored in our DB but Paddle is the source of truth.

## 9. Jurisdiction & disputes

- **Governing law:** Swiss law (AGB).
- **Jurisdiction:** Canton of founder's registered business address.
- **Consumer protection:** EU consumers retain protection under their home jurisdiction per EU Consumer Rights Directive — Paddle handles this layer.

## 10. IP & licensing

- **Project code:** BUSL 1.1. Source-available, converts to Apache-2.0 after 4 years. Not OSS. Commercial production use requires a commercial license.
- **Trademarks:** "Vantage" word-mark — consider registration (IGE, Swiss Federal Institute of Intellectual Property) once brand value justifies the CHF 550–1000 cost.
- **User-generated content:** users retain ownership of their projects, notes, and uploaded clips. We have a non-exclusive license to display and process their content within the service (ToS clause).
