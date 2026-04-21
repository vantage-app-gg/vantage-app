const items = [
  {
    label: "01",
    title: "Curated creator content",
    body: "We tap a hand-picked whitelist of trusted Valorant coaches on YouTube. Videos are automatically matched to topics and your personal goals, tagged by rank tier and focus area — no endless scrolling, no algorithm roulette.",
  },
  {
    label: "02",
    title: "AI match coach",
    body: "Paste a match, get a structured coaching report: strengths, weaknesses, concrete action items. Every suggestion links back to a lesson from our library so you know exactly what to practice next.",
  },
  {
    label: "03",
    title: "Built in public",
    body: "Solo founder shipping in the open from Switzerland. Follow the progress, read the decisions, call out the mistakes. No hype, no fake benchmarks — just the honest weekly state of the build.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-b border-border overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-6 py-24 flex flex-col gap-14">
        <header className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Three pillars, one loop.
          </h2>
          <p className="text-muted">
            Every feature either teaches you something specific or points you
            at content that will.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.label}
              className="group card-gradient relative flex flex-col gap-4 border border-border p-7 transition-all hover:border-accent/60"
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, color-mix(in oklch, var(--accent) 12%, transparent), transparent 70%)",
                }}
              />
              <div className="relative flex items-baseline justify-between">
                <span className="font-mono text-sm text-accent">
                  {item.label}
                </span>
                <span
                  className="h-px flex-1 ml-3"
                  style={{
                    background:
                      "linear-gradient(to right, var(--border), transparent)",
                  }}
                  aria-hidden
                />
              </div>
              <h3 className="relative text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="relative text-muted leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
