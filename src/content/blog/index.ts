export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export const posts: BlogPost[] = [
  {
    slug: "hello-vantage",
    title: "Hello, Vantage",
    date: "2026-04-22",
    summary:
      "Why I'm building a Valorant improvement tool in public on four hours a week — the scope, the constraints, and the honest timeline.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
