import type { MetadataRoute } from "next";
import { getSortedPosts } from "@/content/blog";

const BASE_URL = "https://vantage-app.gg";

const legalPaths = [
  "/legal/imprint",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
  "/legal/refunds",
  "/legal/ai-info",
  "/legal/accessibility",
  "/legal/riot-disclaimer",
  "/legal/contact-dpo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getSortedPosts();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...legalPaths.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
