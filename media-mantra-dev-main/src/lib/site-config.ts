import { MARKETS_PRESENCE } from "@/data/markets";

export const siteConfig = {
  name: "Media Mantra Global",
  legalName: "Media Mantra Global Communications",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mediamantaraglobal.com",
  description:
    `Independent global integrated communications agency — PR, reputation, digital, and influence across ${MARKETS_PRESENCE}.`,
  twitter: "@mediamantraglobal",
  locale: "en_US",
};

export type SiteConfig = typeof siteConfig;
