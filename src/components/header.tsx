import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Vantage — home"
        >
          <span
            className="h-5 w-5 bg-accent transition-transform group-hover:scale-110"
            style={{ boxShadow: "0 0 16px var(--accent)" }}
            aria-hidden
          />
          <span className="font-mono text-sm uppercase tracking-widest text-foreground">
            Vantage
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <a
            href="#roadmap"
            className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-muted hover:text-accent-strong transition-colors"
          >
            Roadmap
          </a>
          <a
            href="#pricing"
            className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-muted hover:text-accent-strong transition-colors"
          >
            Pricing
          </a>
          <a
            href="#early-access"
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent-strong transition-colors"
          >
            Early access
          </a>
        </nav>
      </div>
    </header>
  );
}
