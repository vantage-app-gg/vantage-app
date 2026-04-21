const faqs = [
  {
    q: "Is Vantage affiliated with Riot Games?",
    a: "No. Vantage is an independent project, not endorsed by Riot Games. Match statistics are accessed through the official Riot Games API under their Terms of Service — no scrapers, no unofficial third-party APIs.",
  },
  {
    q: "When will it launch?",
    a: "We're targeting a private beta with a small group of hand-picked testers first, followed by a public launch. No hard date — we ship when the core flow genuinely feels useful, not before. Follow the build in public to see where we are.",
  },
  {
    q: "How much will it cost?",
    a: "Fundamentals stay free forever: five launch topics, curated creator videos matched to your rank, and up to two personal projects. The paid Coach tier (CHF 9.99 / month or CHF 99 / year) adds unlimited projects, video notes, and a monthly quota of AI match analyses.",
  },
  {
    q: "Do I need to connect my Riot account?",
    a: "Not initially. At first you'll enter match data manually. Once Riot approves our production API access, automatic sync lands for paid users. Screenshot-based OCR is planned as a fallback for the in-between.",
  },
  {
    q: "Where is my data stored?",
    a: "EU regions only: Neon (Frankfurt) for our database, Sentry EU for error monitoring, PostHog EU for product analytics. Payments go through Paddle as Merchant of Record. Full sub-processor list lives in the privacy policy.",
  },
  {
    q: "What does the AI actually do?",
    a: "Two things. It matches YouTube videos from our creator whitelist to topics and user projects (high-volume, low-latency work). And it generates coaching reports from your Riot match data — grounded in stats and linked back to our content, with an explicit disclaimer that outputs are educational, not authoritative.",
  },
];

export function Faq() {
  return (
    <section className="relative border-b border-border">
      <div className="relative mx-auto max-w-4xl px-6 py-24 flex flex-col gap-12">
        <header className="flex flex-col gap-3 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Answers.
          </h2>
        </header>

        <dl className="flex flex-col">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="group py-7 flex flex-col gap-3 border-t border-border hover:border-accent/50 transition-colors"
              style={i === faqs.length - 1 ? { borderBottom: "1px solid var(--border)" } : undefined}
            >
              <dt className="flex items-start gap-3 text-lg font-semibold tracking-tight text-foreground">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 group-hover:scale-150 transition-transform"
                  style={{ boxShadow: "0 0 12px var(--accent)" }}
                  aria-hidden
                />
                {f.q}
              </dt>
              <dd className="pl-6 text-muted leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
