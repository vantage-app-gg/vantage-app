import Image from "next/image";

export function WhoItsFor() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-24 flex flex-col gap-14">
        <header className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Who it&apos;s for
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Built for the ambitious middle.
          </h2>
          <p className="text-muted">
            Tools for people who want to climb but don&apos;t want to grind
            blindly.
          </p>
        </header>

        <div className="grid gap-px bg-border border border-border sm:grid-cols-2">
          {/* Rank cell — with actual rank imagery */}
          <div className="card-gradient flex flex-col gap-4 p-7 sm:row-span-2 sm:col-span-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Rank
              </span>
              <span
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, var(--border), transparent)",
                }}
                aria-hidden
              />
            </div>
            <div className="flex items-center gap-6 py-4">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 blur-2xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklch, #d4a93a 40%, transparent) 0%, transparent 70%)",
                  }}
                />
                <Image
                  src="/ranks/gold.png"
                  alt="Valorant Gold rank"
                  width={96}
                  height={96}
                  className="relative drop-shadow-xl"
                />
              </div>
              <div
                className="h-12 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, var(--border-strong), transparent)",
                }}
                aria-hidden
              />
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 blur-2xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklch, #2dd4bf 50%, transparent) 0%, transparent 70%)",
                  }}
                />
                <Image
                  src="/ranks/ascendant.png"
                  alt="Valorant Ascendant rank"
                  width={96}
                  height={96}
                  className="relative drop-shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                Gold → Ascendant
              </span>
              <span className="text-sm text-muted leading-relaxed">
                Primary focus. Iron–Silver and Immortal+ welcome; content
                coverage grows over time.
              </span>
            </div>
          </div>

          <div className="card-gradient flex flex-col gap-2 p-7">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Region
            </span>
            <span className="text-xl font-semibold tracking-tight text-foreground">
              EU first
            </span>
            <span className="text-sm text-muted leading-relaxed">
              Servers and data in EU. Multi-region ready from day one.
            </span>
          </div>

          <div className="card-gradient flex flex-col gap-2 p-7">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Language
            </span>
            <span className="text-xl font-semibold tracking-tight text-foreground">
              English
            </span>
            <span className="text-sm text-muted leading-relaxed">
              V1.0 is English only. i18n architecture kept open for later.
            </span>
          </div>

          <div className="card-gradient flex flex-col gap-2 p-7 sm:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Mindset
            </span>
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Intentional practice
            </span>
            <span className="text-sm text-muted leading-relaxed">
              If you review your demos and think about your mistakes, this is
              for you.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
