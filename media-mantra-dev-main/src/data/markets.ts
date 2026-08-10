/** Global market footprint — single source of truth for offices, nav, and copy. */

export const MARKET_COUNT = 5;

export type MarketSlug = "in" | "us" | "au" | "sg" | "ae";

export type MarketHref = "/in" | "/us" | "/au" | "/sg" | "/ae";

export type MarketOffice = {
  region: string;
  location: string;
  phone: string;
  email: string;
  mapsUrl?: string;
};

export type Market = {
  slug: MarketSlug;
  label: string;
  fullName: string;
  href: MarketHref;
  hub: string;
  tagline: string;
  geo: { lat: number; lon: number };
  office: MarketOffice;
};

/** Order: India · US · Australia · Singapore · UAE */
export const markets: readonly Market[] = [
  {
    slug: "in",
    label: "India",
    fullName: "India",
    href: "/in",
    hub: "Gurugram",
    tagline: "Gurugram · Nationwide counsel",
    geo: { lat: 28.6, lon: 77.2 },
    office: {
      region: "India",
      location: "11th floor, 1106-1107, SAS Tower, Medicity, Gurugram, Haryana- 122001",
      phone: "+91-9990795002",
      email: "info@mediamantraglobal.com",
    },
  },
  {
    slug: "us",
    label: "US",
    fullName: "United States",
    href: "/us",
    hub: "Texas",
    tagline: "Texas · Americas counsel",
    geo: { lat: 31.0, lon: -99.0 },
    office: {
      region: "US",
      location: "Texas, United States",
      phone: "",
      email: "info@mediamantraglobal.com",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Texas,+United+States",
    },
  },
  {
    slug: "au",
    label: "Australia",
    fullName: "Australia",
    href: "/au",
    hub: "Sydney",
    tagline: "Sydney · ANZ counsel",
    geo: { lat: -33.9, lon: 151.2 },
    office: {
      region: "Australia",
      location: "16 Earl Street, Hunters Hill, NSW 2110",
      phone: "",
      email: "info@mediamantraglobal.com",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=16+Earl+Street,+Hunters+Hill,+NSW+2110,+Australia",
    },
  },
  {
    slug: "sg",
    label: "Singapore",
    fullName: "Singapore",
    href: "/sg",
    hub: "Singapore",
    tagline: "Singapore · APAC HQ",
    geo: { lat: 1.3, lon: 103.8 },
    office: {
      region: "Singapore",
      location: "Singapore",
      phone: "",
      email: "info@mediamantraglobal.com",
    },
  },
  {
    slug: "ae",
    label: "UAE",
    fullName: "United Arab Emirates",
    href: "/ae",
    hub: "Dubai",
    tagline: "Dubai · Emirates-wide",
    geo: { lat: 25.2, lon: 55.3 },
    office: {
      region: "UAE",
      location: "Churchill Tower, 6th Floor, 615, Business Bay, Dubai, UAE",
      phone: "+971-561791863",
      email: "info@mediamantraglobal.com",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Churchill+Tower,+6th+Floor,+615,+Business+Bay,+Dubai,+UAE",
    },
  },
] as const;

export const MARKETS_DOT = markets.map((m) => m.label).join(" · ");
export const MARKETS_PERIOD = `${markets.map((m) => m.label).join(". ")}.`;
export const MARKETS_PIPE = markets.map((m) => m.label).join(" | ");
export const MARKETS_PRESENCE =
  "India, the US, Australia, Singapore, and the UAE";
export const MARKETS_PRESENCE_SHORT = "India, US, Australia, Singapore, and UAE";
export const MARKETS_NETWORK_LINE = `${MARKETS_DOT} · One integrated network.`;

export const regionalNavLinks = markets.map((m) => ({
  label: m.label,
  href: m.href,
})) as readonly { label: string; href: MarketHref }[];

export const officeLinks = markets.map((m) => ({
  label: m.label,
  href: m.href,
  line: m.tagline,
})) as readonly { label: string; href: MarketHref; line: string }[];

export const footerOffices = markets.map((m) => m.office);

export const footerOfficesLine = MARKETS_PIPE;

export const officesSummary = markets.map((m) => ({
  region: m.label,
  lines: [m.tagline],
}));

/** Homepage location band — five owned offices with regional labels. */
export const homeNetworkOffices = [
  { flag: "🇮🇳", region: "India", location: "Gurgaon", href: "/in" as const },
  { flag: "🇦🇪", region: "Middle East", location: "Dubai, UAE", href: "/ae" as const },
  { flag: "🇸🇬", region: "Southeast Asia", location: "Singapore", href: "/sg" as const },
  { flag: "🇺🇸", region: "US", location: "Texas", href: "/us" as const },
  { flag: "🇦🇺", region: "Australia", location: "Sydney", href: "/au" as const },
] as const;
