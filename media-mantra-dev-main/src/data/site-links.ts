import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";
import { publicStaticRoutes } from "@/data/site-routes";
import { services } from "@/data/services";

export type SiteLinkGroup = {
  readonly title: string;
  readonly links: readonly { readonly label: string; readonly href: string }[];
};

const staticRouteLabels: Partial<Record<(typeof publicStaticRoutes)[number], string>> = {
  "/": "Home",
  "/about": "About",
  "/about/mantras": "Gaming & Startup Mantra",
  "/about/founders-vision-global-leadership": "Founders Vision · Global Leadership",
  "/about/gaming-mantra": "Gaming Mantra (redirect → mantras)",
  "/about/startup-mantra": "Startup Mantra (redirect → mantras)",
  "/services": "Services",
  "/case-studies": "Case Studies · Commercial",
  "/case-studies/government": "Case Studies · Government",
  "/industries": "Industries",
  "/blog": "Blog",
  "/careers": "Careers",
  "/contact": "Contact",
  "/campaigns": "Campaigns (internal)",
  "/privacy": "Privacy",
  "/terms": "Terms",
  "/in": "India",
  "/us": "United States",
  "/au": "Australia",
  "/ae": "UAE",
  "/sg": "Singapore",
};

export function getSiteLinkGroups(): SiteLinkGroup[] {
  const mainPages = publicStaticRoutes.map((href) => ({
    label: staticRouteLabels[href] ?? href,
    href,
  }));

  const servicePages = services.map((s) => ({
    label: `${String(s.index).padStart(2, "0")}. ${s.title}`,
    href: `/services/${s.slug}`,
  }));

  const commercialStudies = caseStudies.filter((c) => c.section !== "government");
  const governmentStudies = caseStudies.filter((c) => c.section === "government");

  const blogPages = blogPosts.map((p) => ({
    label: p.title,
    href: `/blog/${p.slug}`,
  }));

  return [
    { title: "Main pages", links: mainPages },
    { title: "Services", links: servicePages },
    {
      title: "Case studies · Commercial",
      links: commercialStudies.map((c) => ({ label: c.title, href: `/case-studies/${c.slug}` })),
    },
    {
      title: "Case studies · Government",
      links: governmentStudies.map((c) => ({ label: c.title, href: `/case-studies/${c.slug}` })),
    },
    { title: "Blog", links: blogPages },
    {
      title: "SEO",
      links: [
        { label: "Sitemap", href: "/sitemap.xml" },
        { label: "Robots", href: "/robots.txt" },
      ],
    },
  ];
}

export function getAllSiteLinkHrefs(): string[] {
  return getSiteLinkGroups().flatMap((g) => g.links.map((l) => l.href));
}
