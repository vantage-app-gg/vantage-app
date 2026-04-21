# UX Principles

> What we optimize for, and what we refuse to do.

---

## Core principles

### 1. Respect the player's time
Every click should move them toward improvement. No engagement tricks, no dark patterns, no artificial scarcity.

### 2. Honest feedback, never shame
Weaknesses are framed as improvable skills. Never assert a user is "bad" — frame in terms of gap to target.

### 3. Ground everything in data
AI suggestions link to specific videos. Stats compared to rank-medians, not vague "average". No vibes.

### 4. Tactical, not bro-speak
Voice is direct, respectful, competent. No "gg ez", no "rekt", no gamer-bro tropes.

### 5. No overlay, no in-game intrusion
Vantage is used pre-game, post-game, between sessions. Never disrupts active play.

### 6. Progress is visible, granular, and persistent
Watched states survive. Projects survive. No ephemeral "streaks" that shame lapsed users.

### 7. Free tier is genuinely useful
A free user must get real value. Free is not a crippled demo — it's a legitimate product tier for casuals.

### 8. Paid tier is genuinely differentiated
Paid is not a paywall on what was free — it's AI-driven personalization and advanced tooling. The upgrade decision should be easy when the value is clear.

---

## Do's

- ✅ **Load the smallest usable view first.** Progressive enhancement: show the most important thing, reveal details on interaction.
- ✅ **Preserve context across interactions.** Back buttons return to scroll position. Search state survives a tab switch.
- ✅ **Show real counts in empty states.** "0 projects" is honest. "Create your first project to get started" is the right CTA.
- ✅ **Link outward generously.** A good video from a creator is a good video. Link to their channel, not just the embed.
- ✅ **Write copy in plain, direct English.** 8th-grade reading level for UI copy. Technical only when unavoidable.
- ✅ **Explain AI limitations up-front.** "AI-generated, educational, no guarantees." Not buried in ToS.
- ✅ **Make "Do nothing" a valid path.** If a user doesn't want AI analysis, they can still use projects and content.
- ✅ **Keyboard-first.** Every action reachable via keyboard. Shortcuts documented.
- ✅ **Undo-friendly.** Destructive actions have confirmations + soft-delete where reasonable.

---

## Don'ts

- ❌ **No dark patterns.** No "Are you sure you want to miss out?" cancellation flows. No pre-checked upsell boxes.
- ❌ **No gamification theater.** No XP points, no badges for badges' sake. Progress is its own reward.
- ❌ **No manipulative scarcity.** "Only 3 spots left!" when there aren't.
- ❌ **No push notifications.** We're a web app. Email notifications only, and sparingly.
- ❌ **No auto-playing video.** Every video starts paused. User decides when to engage.
- ❌ **No interstitials, modals on load, or "welcome" takeovers.**
- ❌ **No infinite scroll.** Pagination with clear "next" — we want users to finish reading, not graze.
- ❌ **No comparison shaming.** Showing "You're bottom 10%" helps nobody. Show gap-to-target instead.
- ❌ **No unsolicited "recommendations" that feel like advertising.** Recommendations only when user asks or context demands.
- ❌ **No tracking beyond what's needed.** If we don't use the event, we don't collect it.
- ❌ **No forced community.** Discord link exists. We don't push users into it.

---

## Error handling posture

When something goes wrong:
1. **Tell the user what happened** in plain terms. Never "something went wrong".
2. **Tell them what they can do** about it. Retry button. Link to status. Email us.
3. **Log the real error** to Sentry with enough context to debug.
4. **Never blame the user** for system errors.

---

## Responsive posture

- **Desktop:** top navigation, dense information layouts.
- **Tablet:** adaptive layouts, touch-friendly hit targets (≥44px).
- **Mobile:** bottom nav for main sections, single-column content, video player optimized for portrait.
- **Parallel responsive, not mobile-last.** Design breakpoints at 640, 768, 1024, 1280, 1536 simultaneously.

---

## Internationalization posture

English-only at MVP. But:
- Date/time formatting uses `Intl.DateTimeFormat`, not hardcoded.
- Number formatting uses `Intl.NumberFormat`.
- No string concatenation for localized strings (use a format-function pattern from day one).
- This lets us i18n later without a rewrite.

---

## Decision checklist for new UX

Before shipping a new interaction, ask:
- [ ] Is this reachable by keyboard?
- [ ] Does it have loading / empty / error states?
- [ ] Does the copy read like a helpful coach, not a marketer?
- [ ] Is the free-vs-paid boundary obvious and non-manipulative?
- [ ] Does it work on 320px-wide mobile without horizontal scroll?
- [ ] Does the focus state survive Tab-out-and-back?
- [ ] Does it respect `prefers-reduced-motion` / `prefers-color-scheme`?
- [ ] Does it log an event to PostHog (only if useful)?
- [ ] Does it require a new string, and is that string in a place we can i18n later?
