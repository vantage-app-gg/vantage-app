import Link from "next/link";
import type { Metadata } from "next";
import { getSortedPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Dev blog",
  description:
    "Build-in-public notes from Vantage — scope decisions, shipping milestones, and lessons from four hours a week of solo dev.",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function BlogIndexPage() {
  const posts = getSortedPosts();

  return (
    <section className="relative flex-1 border-b border-border overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-grid"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-24 flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Dev blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
            <span className="text-foreground">Building in </span>
            <span className="text-gradient-accent">public</span>
            <span className="text-foreground">.</span>
          </h1>
          <p className="text-muted leading-relaxed max-w-2xl">
            Short notes as Vantage comes together — scope decisions,
            shipping milestones, things I got wrong. Updated as and when
            there&apos;s something worth saying, not on a schedule.
          </p>
        </header>

        <ol className="flex flex-col">
          {posts.map((post, i) => (
            <li
              key={post.slug}
              className="group py-7 border-t border-border hover:border-accent/50 transition-colors"
              style={
                i === posts.length - 1
                  ? { borderBottom: "1px solid var(--border)" }
                  : undefined
              }
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {formatDate(post.date)}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent-strong transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted leading-relaxed">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
