import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Off the map",
};

export default function NotFound() {
  return (
    <section className="relative flex-1 flex items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--accent) 35%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-xl px-6 py-28 flex flex-col items-center text-center gap-8">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          404 · Off the map
        </span>

        <h1 className="text-6xl sm:text-7xl font-semibold tracking-tight leading-none">
          <span className="text-gradient-accent">Lost</span>
          <span className="text-foreground"> callout.</span>
        </h1>

        <p className="text-muted leading-relaxed max-w-md">
          This page doesn&apos;t exist — or hasn&apos;t shipped yet.
          Vantage is in early development, so a lot of surfaces are still
          stubs.
        </p>

        <Link
          href="/"
          className="btn-accent-glow inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-base font-semibold tracking-wide text-accent-foreground"
        >
          <span aria-hidden>←</span>
          Return to base
        </Link>
      </div>
    </section>
  );
}
