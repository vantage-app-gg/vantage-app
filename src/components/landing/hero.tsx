export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Hero-local glow orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--accent) 40%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-grid"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36 flex flex-col gap-10">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            style={{ boxShadow: "0 0 12px var(--accent)" }}
            aria-hidden
          />
          Valorant improvement tool · In development
        </div>

        <div className="flex flex-col gap-6 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            <span className="text-foreground">Climb with </span>
            <span className="text-gradient-accent">intent</span>
            <span className="text-foreground">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
            A curated Valorant learning platform for Gold–Ascendant players.
            Trusted creator videos, matched to your rank and goals — plus
            AI-powered match analysis that links every suggestion back to a
            lesson.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#how-it-works"
            className="btn-accent-glow inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-base font-semibold tracking-wide text-accent-foreground"
          >
            How it works
            <span aria-hidden>↓</span>
          </a>
          <a
            href="#early-access"
            className="inline-flex items-center gap-2 border border-border-strong bg-surface/50 backdrop-blur px-7 py-3.5 text-base font-semibold tracking-wide text-foreground hover:border-accent hover:text-accent-strong transition-colors"
          >
            Get early access
          </a>
        </div>
      </div>
    </section>
  );
}
