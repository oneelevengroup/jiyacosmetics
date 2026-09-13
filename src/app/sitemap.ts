import type { MetadataRoute } from "next";
import { getAllProcedures } from "@/content/services";

const BASE_URL = "https://jiyacosmetic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "", // home
    "/about",
    "/services",
    "/gallery",
    "/contact",
    "/privacy",
    "/blepharoplasty-special",
    "/services/ziplyft",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) => [
    {
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    },
    // Spanish counterpart (skip English-only ad landing pages).
    ...(path === "/blepharoplasty-special"
      ? []
      : [
          {
            url: `${BASE_URL}/es${path}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: path === "" ? 0.9 : 0.6,
          },
        ]),
  ]);

  // Individual procedure detail pages, EN + ES (excludes external/href links).
  const procedureEntries: MetadataRoute.Sitemap = getAllProcedures().flatMap((p) => [
    {
      url: `${BASE_URL}/services/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/es/services/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]);

  return [...staticEntries, ...procedureEntries];
}
