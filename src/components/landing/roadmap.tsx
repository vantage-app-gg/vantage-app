type Status = "now" | "next" | "later" | "future";

const statusStyles: Record<Status, { label: string; className: string }> = {
  now: {
    label: "Now",
    className: "bg-accent text-accent-foreground",
  },
  next: {
    label: "Next",
    className:
      "bg-transparent text-accent border border-accent/60",
  },
  later: {
    label: "Later",
    className: "bg-surface-elevated text-muted border border-border",
  },
  future: {
    label: "Future",
    className: "bg-transparent text-muted border border-border",
  },
};

const phases: Array<{
  phase: string;
  title: string;
  status: Status;
  items: string[];
}> = [
  {
    phase: "Phase 0",
    title: "Foundation",
    status: "now",
    items: [
      "Scaffold · design system · landing page",
      "Legal skeleton + CH compliance groundwork",
      "Build-in-public infrastructure",
    ],
  },
  {
    phase: "V1.0",
    title: "MVP",
    status: "next",
    items: [
      "Curated learning content (5 launch topics)",
      "AI match coach · Tier-1 (manual match input)",
      "Projects · Free tier + Coach tier · Paddle billing",
    ],
  },
  {
    phase: "V1.1",
    title: "Automation lift",
    status: "later",
    items: [
      "Automatic Riot match sync (once approval lands)",
      "OCR fallback for screenshots",
      "+ Agents and Weapons topics",
    ],
  },
  {
    phase: "V2",
    title: "Video intelligence",
    status: "future",
    items: [
      "Clip analysis (10–60s uploads)",
      "Learning paths with prerequisites",
      "Shareable public projects",
    ],
  },
];

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative border-b border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-grid"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 flex flex-col gap-14">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="text-foreground">Shipping in </span>
            <span className="text-gradient-accent">phases</span>
            <span className="text-foreground">.</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Solo-built, four hours of dev a week. The MVP takes 7–9 months —
            and that&apos;s with scope strictly held. Everything below is
            public and subject to change as we learn from beta testers.
          </p>
        </div>

        <ol className="flex flex-col">
          {phases.map((p, i) => {
            const isLast = i === phases.length - 1;
            const style = statusStyles[p.status];
            return (
              <li
                key={p.phase}
                className="relative grid grid-cols-[auto_1fr] gap-6 sm:gap-10 pb-10"
              >
                <div className="flex flex-col items-center pt-1">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-full bg-accent flex-shrink-0"
                    style={{ boxShadow: "0 0 12px var(--accent)" }}
                  />
                  {!isLast && (
                    <span
                      aria-hidden
                      className="mt-2 flex-1 w-px bg-gradient-to-b from-accent/50 to-border"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-4 pb-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {p.phase}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 ${style.className}`}
                    >
                      {style.label}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5 text-muted leading-relaxed">
                    {p.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden className="text-accent mt-[0.35em]">
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
