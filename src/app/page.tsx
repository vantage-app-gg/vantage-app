export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl flex flex-col gap-10">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 bg-accent" aria-hidden />
          <span className="font-mono text-sm uppercase tracking-widest text-muted">
            Vantage
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Climb with intent.
          </h1>
          <p className="text-lg text-muted max-w-xl">
            A curated Valorant learning platform for Gold–Ascendant players.
            Trusted creator content, matched to your rank and goals — plus
            AI-powered match analysis that links every suggestion back to a
            lesson.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <div className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-3 text-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Status
            </span>
            <span className="text-muted">
              In development · Build in public · Early access TBD
            </span>
          </div>
        </div>

        <p className="text-xs text-muted max-w-xl leading-relaxed">
          Vantage isn&apos;t endorsed by Riot Games and doesn&apos;t reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games, and all
          associated properties, are trademarks or registered trademarks of
          Riot Games, Inc.
        </p>
      </div>
    </div>
  );
}
