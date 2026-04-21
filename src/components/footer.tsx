import Link from "next/link";

const legalLinks = [
  { href: "/legal/imprint", label: "Imprint" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/refunds", label: "Refunds" },
  { href: "/legal/ai-info", label: "AI Info" },
  { href: "/legal/accessibility", label: "Accessibility" },
  { href: "/legal/riot-disclaimer", label: "Riot Disclaimer" },
  { href: "/legal/contact-dpo", label: "Data Protection Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6">
        <nav aria-label="Legal">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} Vantage. Not endorsed by Riot Games.
          </p>
          <p className="font-mono">
            Contact:{" "}
            <a
              href="mailto:vantage.app.gg@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              vantage.app.gg@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
