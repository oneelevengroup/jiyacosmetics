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

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  // Individual procedure detail pages (excludes external/href links like NCO + Ziplyft).
  const procedureEntries: MetadataRoute.Sitemap = getAllProcedures().map((p) => ({
    url: `${BASE_URL}/services/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...procedureEntries];
}
