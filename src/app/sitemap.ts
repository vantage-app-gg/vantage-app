import type { MetadataRoute } from "next";

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

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalPaths.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
