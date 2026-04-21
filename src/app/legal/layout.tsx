import Link from "next/link";

export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto max-w-3xl w-full px-6 py-16">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
      >
        ← Vantage
      </Link>
      <article className="prose mt-8 flex flex-col gap-4 text-foreground">
        {children}
      </article>
    </div>
  );
}
