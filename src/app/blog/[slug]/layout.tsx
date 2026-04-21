import Link from "next/link";
import type { ReactNode } from "react";

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <article className="relative flex-1 border-b border-border overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-grid"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-24 flex flex-col gap-6">
        <Link
          href="/blog"
          className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors w-fit"
        >
          ← All posts
        </Link>
        <div className="flex flex-col">{children}</div>
      </div>
    </article>
  );
}
