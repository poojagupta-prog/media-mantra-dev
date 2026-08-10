import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { publicStaticRoutes } from "@/data/site-routes";

export const dynamic = "force-static";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = publicStaticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    priority: route === "/" ? 1 : 0.72,
    changeFrequency: route === "/" ? "weekly" : "monthly",
  }));

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.68,
  }));

  const caseUrls: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.65,
  }));

  return [...staticEntries, ...serviceUrls, ...caseUrls, ...blogUrls];
}
