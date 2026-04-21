import type { ReactNode } from "react";

type Props = {
  title: string;
  lastUpdated: string;
  status?: "preliminary" | "final";
  children: ReactNode;
};

export function LegalPage({
  title,
  lastUpdated,
  status = "preliminary",
  children,
}: Props) {
  return (
    <>
      <header className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="font-mono text-xs text-muted">
          Last updated: {lastUpdated}
          {status === "preliminary" && (
            <>
              {" · "}
              <span className="text-accent">
                Preliminary — finalized before public launch
              </span>
            </>
          )}
        </p>
      </header>
      <div className="flex flex-col gap-6 text-base leading-relaxed">
        {children}
      </div>
      <footer className="mt-10 border-t border-border pt-6 text-sm text-muted">
        <p>
          Questions? Contact{" "}
          <a
            href="mailto:vantage.app.gg@gmail.com"
            className="text-foreground hover:text-accent transition-colors"
          >
            vantage.app.gg@gmail.com
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export function Section({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      <div className="flex flex-col gap-3 text-muted">{children}</div>
    </section>
  );
}
