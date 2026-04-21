# Design System

> Tokens, components, naming. The goal: consistency without bloat.
> Visual identity: **Tactical / Premium Dark** — black/anthracite + one accent, sharp edges, mono accents.

---

## Tokens (shadcn/ui + Tailwind v4 CSS variables)

Defined in `src/app/globals.css` via `@theme` blocks. Exact hex values TBD after initial component pass — but the palette is:

- **Base:** neutral scale from black (`#0a0a0a`) through anthracite (`#1a1a1a`, `#262626`) to near-white (`#fafafa`).
- **Accent (TBD):** single cool tone — likely a desaturated teal or electric blue. No reds (Valorant uses red for enemies — avoid accidental semantic clash).
- **Status:** success green, warning amber, error red, info blue — muted, not saturated.
- **Ranks:** each rank tier has a tint used sparingly (badges, labels) — maps roughly to in-game rank colors but muted to prevent clash.

Theme switching: `:root[data-theme="dark"]`, `:root[data-theme="light"]`. System-follow is the default.

## Typography

- **Body:** Geist Sans (loaded via `next/font/google`)
- **Stats / timestamps / codes:** Geist Mono
- **Base size:** 15px (1rem = 15px, not 16 — optical balance for stats-dense UI; revisit after a11y audit)
- **Scale:** 0.75 · 0.875 · 1 · 1.125 · 1.25 · 1.5 · 2 · 2.5 rem (modular)

## Spacing

Tailwind default 4px grid. No custom spacing overrides unless justified.

## Radius

- Sharp: 2px default
- Soft: 6px for cards that invite interaction
- No fully rounded elements (no `rounded-full` except avatars)

## Shadows

Minimal. Use borders + subtle background shifts instead of shadows for hierarchy.

## Iconography

Lucide React (ships with shadcn/ui). Consistent stroke width 1.5. No icon fonts.

---

## Component conventions

### File structure
```
src/components/
├── ui/              shadcn primitives we own (Button, Card, Dialog, ...)
└── vantage/         custom compositions
    ├── RankBadge.tsx
    ├── VideoCard.tsx
    ├── StatRow.tsx
    ├── EmptyState.tsx
    └── ...
```

### Naming
- Component files: `PascalCase.tsx`
- Hooks: `useThing.ts`
- Server actions: `actionName.ts` (exports named `actionName`)
- Route handlers: `route.ts`

### Props
- Named + destructured, never positional.
- `className` always accepted for compositional flexibility via `cn()`.
- `asChild` pattern for Radix/shadcn-compatible composition.

### Client vs server
- Default = server component. Add `'use client'` only when needed (event handlers, hooks, browser APIs).
- Never mark a server action file `'use client'`. Server actions use `'use server'`.

---

## State conventions

- **Server state:** React Server Components + Server Actions. No client-side data fetching with `useEffect`.
- **UI state:** `useState` / `useReducer`. No global state library in MVP.
- **Form state:** React Hook Form + Zod for complex forms; `useActionState` for simple ones.

---

## Patterns

### Empty / loading / error triad
Every page/component that fetches data must handle all three:

- **Loading:** skeleton matching the final layout
- **Empty:** explanatory copy + actionable CTA
- **Error:** what went wrong + what the user can do + a retry

Shared primitives:
- `<LoadingSkeleton />` (pass layout variant)
- `<EmptyState icon title description action />`
- `<ErrorState error retry />`

### Progressive disclosure for stats
Show top-level summary by default. Details expand on user interaction — don't flood with raw numbers.

### Accent usage
One accent color used sparingly: CTAs, active states, key metrics. Overuse dilutes hierarchy.

---

## Motion

- **Default:** no motion. Static UI unless motion serves a purpose.
- **Purposeful transitions:**
  - Dialog / drawer open-close: 200ms ease-out
  - Page transitions via View Transitions API once stable
  - Skeleton shimmer: 1200ms linear loop
- **Respect `prefers-reduced-motion`:** all animations wrapped in a motion-safe utility.

---

## Accessibility baseline (see accessibility-requirements.md for details)

- Focus ring always visible (custom ring-2 ring-offset-2 ring-accent)
- Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- All interactive components keyboard-navigable
- ARIA labels where visual text is absent
- `<title>` + meta description per route

---

## Don'ts

- ❌ Don't add a new color to the palette without logging the reason here.
- ❌ Don't use Valorant/agent imagery without permission.
- ❌ Don't animate for decoration only.
- ❌ Don't add drop shadows "to make cards pop" — they don't.
- ❌ Don't override shadcn/ui primitives in place. If you need a variant, add a `variant` prop, don't fork the component.
- ❌ Don't mix emoji with UI icons.
