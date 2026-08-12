import type { MetadataRoute } from "next";
import { h2cPublicationPosters } from "@/data/h2c-publications";
import { h2cResearchItems } from "@/data/h2c-research";
import { SITE_URL } from "@/lib/metadata";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/research", priority: 0.9, changeFrequency: "monthly" },
  { path: "/publications", priority: 0.9, changeFrequency: "monthly" },
  { path: "/infrastructure", priority: 0.7, changeFrequency: "yearly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/safe", priority: 0.8, changeFrequency: "monthly" },
  { path: "/mosa", priority: 0.8, changeFrequency: "monthly" },
  { path: "/mosa/teachers", priority: 0.7, changeFrequency: "yearly" },
  { path: "/mosa/municipalities", priority: 0.7, changeFrequency: "yearly" },
  { path: "/mosa/associations", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...h2cResearchItems.map((item) => ({
      url: `${SITE_URL}/research/${item.id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...h2cPublicationPosters.map((poster) => ({
      url: `${SITE_URL}/publications/${poster.id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
