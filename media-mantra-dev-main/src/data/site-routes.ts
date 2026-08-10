/** All public static routes — used by sitemap and internal linking */
export const publicStaticRoutes = [
  "/",
  "/about",
  "/about/mantras",
  "/about/founders-vision-global-leadership",
  "/about/gaming-mantra",
  "/about/startup-mantra",
  "/services",
  "/case-studies",
  "/case-studies/government",
  "/industries",
  "/blog",
  "/awards",
  "/careers",
  "/contact",
  "/links",
  "/campaigns",
  "/privacy",
  "/terms",
  "/in",
  "/us",
  "/au",
  "/ae",
  "/sg",
] as const;

export type PublicStaticRoute = (typeof publicStaticRoutes)[number];
