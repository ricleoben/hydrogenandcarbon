import type { MetadataRoute } from "next";

const routes = [
  "",
  "/research",
  "/publications",
  "/infrastructure",
  "/team",
  "/safe",
  "/mosa",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://hydrogenandcarbon.at${route}`,
    lastModified: new Date(),
  }));
}
