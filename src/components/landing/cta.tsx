export function Cta() {
  return (
    <section
      id="early-access"
      className="relative border-b border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, color-mix(in oklch, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-28 flex flex-col gap-10">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Early access
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="text-foreground">Follow the </span>
            <span className="text-gradient-accent">build</span>
            <span className="text-foreground">.</span>
          </h2>
          <p className="text-muted leading-relaxed">
            A proper waitlist lands later. For now, the best way to follow
            along — and raise your hand for the private beta — is through
            the channels below.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <a
            href="https://x.com/vantage_app_gg"
            target="_blank"
            rel="noopener noreferrer"
            className="card-gradient group flex flex-col gap-1 border border-border p-5 hover:border-accent transition-all"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
              X / Twitter
            </span>
            <span className="font-semibold text-foreground">
              @vantage_app_gg
            </span>
          </a>
          <a
            href="https://www.reddit.com/r/vantage_app/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-gradient group flex flex-col gap-1 border border-border p-5 hover:border-accent transition-all"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
              Reddit
            </span>
            <span className="font-semibold text-foreground">
              r/vantage_app
            </span>
          </a>
          <a
            href="mailto:vantage.app.gg@gmail.com?subject=Vantage%20early%20access"
            className="card-gradient group flex flex-col gap-1 border border-border p-5 hover:border-accent transition-all"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
              Email
            </span>
            <span className="font-semibold text-foreground">
              vantage.app.gg@gmail.com
            </span>
          </a>
        </div>

        <p className="text-xs text-muted leading-relaxed max-w-2xl">
          Vantage isn&apos;t endorsed by Riot Games and doesn&apos;t reflect
          the views or opinions of Riot Games or anyone officially involved
          in producing or managing Riot Games properties. Riot Games, and
          all associated properties, are trademarks or registered trademarks
          of Riot Games, Inc.
        </p>
      </div>
    </section>
  );
}
