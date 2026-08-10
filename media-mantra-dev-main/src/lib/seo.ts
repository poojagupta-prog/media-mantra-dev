import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export function absoluteUrl(path: string) {
  const base = siteConfig.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function createMetadata(opts: {
  title: string;
  description?: string;
  pathname: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const { title, description, pathname, image, noIndex } = opts;
  const pageTitle = pathname === "/" ? title : `${title} · ${siteConfig.name}`;
  const desc = description ?? siteConfig.description;
  const hasOg = typeof image === "string" && image.length > 0;

  const openGraph: Metadata["openGraph"] = hasOg
    ? {
        type: "website",
        locale: siteConfig.locale,
        siteName: siteConfig.name,
        title: pageTitle,
        description: desc,
        url: absoluteUrl(pathname),
        images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
      }
    : {
        type: "website",
        locale: siteConfig.locale,
        siteName: siteConfig.name,
        title: pageTitle,
        description: desc,
        url: absoluteUrl(pathname),
      };

  const twitter: Metadata["twitter"] = hasOg
    ? {
        card: "summary_large_image",
        title: pageTitle,
        description: desc,
        images: [image],
      }
    : {
        card: "summary",
        title: pageTitle,
        description: desc,
      };

  return {
    title: pageTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: pathname },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph,
    twitter,
  };
}
