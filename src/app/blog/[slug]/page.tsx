import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts } from "@/content/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const mdxModule = await import(`@/content/blog/${slug}.mdx`);
  const Content = mdxModule.default;

  return (
    <>
      <header className="flex flex-col gap-3 pb-6 border-b border-border mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {formatDate(post.date)} · Build in public
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-foreground">
          {post.title}
        </h1>
      </header>
      <div className="flex flex-col">
        <Content />
      </div>
    </>
  );
}
