import type { Service } from "@/data/services";

/** Service detail sidebar → featured case study (null = hide sidebar). */
export const serviceCaseStudySlug: Partial<Record<Service["slug"], string | null>> = {
  "strategic-pr-media-relations": "nayi-disha-naya-sankalp-dav-2016",
  "digital-social-media": "mythali",
  "influencer-marketing": "boat-middle-east",
  "global-event-management": "amirah-developments",
  "reputation-management": "isma-crisis-pr",
  "seo-performance-marketing": null,
  "corporate-reputation-advisory": "elecrama",
  "content-marketing": "swastik-wellbeing",
  "founder-branding": "hartek",
};

export function getCaseStudySlugForService(serviceSlug: string): string | null | undefined {
  if (!(serviceSlug in serviceCaseStudySlug)) return undefined;
  return serviceCaseStudySlug[serviceSlug as Service["slug"]] ?? null;
}
