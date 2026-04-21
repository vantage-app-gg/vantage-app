const freeFeatures = [
  "5 launch topics, curated creator videos",
  "Rank-based sorting (Gold → Ascendant)",
  "Up to 2 private projects",
  "Progress tracking (watched / in-progress / done)",
];

const coachFeatures = [
  "Everything in Free",
  "Unlimited projects",
  "Video notes (free-text notepad)",
  "30 AI match analyses / month",
  "Stats dashboard",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-b border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, var(--accent) 10%, transparent), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 flex flex-col gap-14">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="text-foreground">Free to learn. </span>
            <span className="text-gradient-accent">Paid to level up</span>
            <span className="text-foreground">.</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Pre-launch pricing for the V1.0 MVP. Billed via Paddle, which
            handles Swiss VAT and EU tax for us. Cancel anytime from your
            dashboard.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-gradient flex flex-col gap-7 border border-border p-7">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Free
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold text-foreground tracking-tight">
                  CHF 0
                </span>
                <span className="text-sm text-muted">/ forever</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                The full curated library. Learn without a credit card.
              </p>
            </div>
            <ul className="flex flex-col gap-2.5 text-sm">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-muted">
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative card-gradient flex flex-col gap-7 border border-accent p-7"
            style={{
              boxShadow:
                "0 0 0 1px color-mix(in oklch, var(--accent) 30%, transparent), 0 24px 80px -28px var(--accent-glow)",
            }}
          >
            <span className="absolute -top-3 left-7 bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1">
              7-day trial
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Coach
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold text-foreground tracking-tight">
                  CHF 9.99
                </span>
                <span className="text-sm text-muted">/ month</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Or <span className="text-foreground">CHF 99 / year</span> —
                saves ~17%. 7-day free trial, credit card required,
                auto-converts to paid.
              </p>
            </div>
            <ul className="flex flex-col gap-2.5 text-sm">
              {coachFeatures.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-foreground">
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 max-w-3xl text-xs text-muted leading-relaxed">
          <p>
            <span className="font-mono uppercase tracking-widest text-accent-strong">
              Early bird ·
            </span>{" "}
            The first 100 paying users at public launch lock in a lifetime
            deal. Price and exact perks will be announced with the launch
            post — follow the{" "}
            <a
              href="#early-access"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground transition-colors"
            >
              build-in-public channels
            </a>{" "}
            to hear first.
          </p>
          <p>
            AI analysis outputs are educational only and carry no guarantees.
            Vantage isn&apos;t endorsed by Riot Games.
          </p>
        </div>
      </div>
    </section>
  );
}
