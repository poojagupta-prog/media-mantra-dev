import { services } from "@/data/services";
import {
  MARKETS_PRESENCE,
  officesSummary,
  regionalNavLinks,
} from "@/data/markets";

/** Primary header — aligned with editorial sitemap (no Industries). */
export const serviceNavLinks = services.map((s) => ({
  href: `/services/${s.slug}` as const,
  label: s.title,
  index: s.index,
}));

export const aboutNavLinks = [
  { href: "/about" as const, label: "About Us", index: 1 },
  { href: "/about/mantras" as const, label: "Gaming and Startup Mantra", index: 2 },
  {
    href: "/about/founders-vision-global-leadership" as const,
    label: "Founders Vision & Global Leadership",
    index: 3,
  },
] as const;

export type NavMegaLink = {
  readonly href: string;
  readonly label: string;
  readonly index: number;
};

export type MainNavItem =
  | { readonly kind: "link"; readonly label: string; readonly href: string }
  | {
      readonly kind: "mega";
      readonly label: string;
      readonly href: string;
      readonly children: readonly NavMegaLink[];
      readonly overview?: { readonly label: string; readonly href: string };
      readonly menuWidth?: "narrow" | "wide";
    };

export const mainNav: readonly MainNavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "mega",
    label: "About",
    href: "/about",
    children: aboutNavLinks,
    menuWidth: "narrow",
  },
  {
    kind: "mega",
    label: "Services",
    href: "/services",
    children: serviceNavLinks,
    overview: { label: "All services overview", href: "/services" },
    menuWidth: "wide",
  },
  {
    kind: "mega",
    label: "Case Studies",
    href: "/case-studies",
    children: [
      { href: "/case-studies", label: "Commercial Work", index: 1 },
      { href: "/case-studies/government", label: "Government Work", index: 2 },
    ],
    overview: { label: "All case studies", href: "/case-studies" },
    menuWidth: "narrow",
  },
  { kind: "link", label: "Insights", href: "/blog" },
  { kind: "link", label: "Awards", href: "/awards" },
  { kind: "link", label: "Careers", href: "/careers" },
  { kind: "link", label: "Contact", href: "/contact" },
] as const;

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Government Work", href: "/case-studies/government" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  ...regionalNavLinks.map((m) => ({ label: m.label, href: m.href })),
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Government Work", href: "/case-studies/government" },
      { label: "Industries", href: "/industries" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Regional",
    links: regionalNavLinks.map((m) => ({ label: m.label, href: m.href })),
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
] as const;

export type SocialKey = "linkedin" | "instagram" | "x" | "youtube";

export const socialLinks: Record<SocialKey, string> = {
  linkedin: "https://www.linkedin.com/company/mediamantaraglobal/",
  instagram: "https://www.instagram.com/",
  x: "https://x.com/",
  youtube: "https://www.youtube.com/",
};

export { footerOffices } from "@/data/markets";

export const footerTagline =
  `Building brand authority, visibility, and trust across ${MARKETS_PRESENCE}.`;

export const offices = officesSummary;
export const footerLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Government Work", href: "/case-studies/government" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Gaming and Startup Mantra", href: "/about/mantras" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

/** Footer services column — all service detail pages */
export const footerServices = serviceNavLinks.map((link) => ({
  label: link.label,
  href: link.href,
}));

/** @deprecated Use footerServices */
export const footerMarkets = footerServices;

export const footerSectors = [
  { label: "Technology & SaaS", href: "/industries" },
  { label: "Fintech & Finance", href: "/industries" },
  { label: "Real Estate", href: "/industries" },
  { label: "Healthcare", href: "/industries" },
  { label: "FMCG & Retail", href: "/industries" },
  { label: "Luxury & Lifestyle", href: "/industries" },
] as const;
