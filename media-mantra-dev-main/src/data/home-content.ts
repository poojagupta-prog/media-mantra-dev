import { clientGridEntries, clientTickerBrands } from "@/data/clients";
import {
  footerOfficesLine,
  footerSignOff,
} from "@/data/footer-content";
import {
  MARKETS_DOT,
  MARKETS_NETWORK_LINE,
  MARKETS_PRESENCE,
  MARKETS_PRESENCE_SHORT,
} from "@/data/markets";

export const introLead = [
  "Making history as the first independent communications agency from India to build a global presence across five countries.",
  "Powered by AI. Driven by creativity. Defined by strategy. ",
] as const;

export const introBody =
  "We are built for whatʼs next, fueled by 13 years of experience turning bold ideas into measurable results. We started in traditional PR, grew into digital, and today we operate as a fully integrated communications agency, the only way we know how to work. From influencer ecosystems that move culture to digital and PR strategies that dominate search, we make communications the sharpest pillar of your marketing, whether the objective is a global launch, a viral strategy, or category ownership that lasts. Ranked the third-fastest growing agency in AMEA by PRovoke Media four times running, we measure success in categories owned and campaigns that people actually remember." as const;

const introParagraphs = [introLead.join(" "), introBody] as const;

export const homeHero = {
  lines: ["Beyond communications.", "Global influence."] as const,
  lead: MARKETS_NETWORK_LINE,
  badge: "",
} as const;

export const homeHeroStory = [introParagraphs[0], introParagraphs[1]] as const;

export const homeHeroAside = [MARKETS_NETWORK_LINE, "13 years shaping narratives that compound."];

export const homeIntro = {
  label: "Introduction",
  paragraphs: [...introParagraphs],
} as const;

export const homeLocations = {
  label: "Locations",
  paragraph: `${MARKETS_DOT} — one network, local fluency, one standard of craft.`,
} as const;

/** Hero — video only on homepage: leave strings empty (no overlay copy over the film). */
export const homeHopscotchHero = {
  headline: "",
  subline: "",
  tradeLinks: [] as readonly { label: string; href: string }[],
  discoverLabel: "",
  discoverHref: "#expertise" as const,
} as const;

/** Slide 5 — intro after video: white + cube texture, blue stacked headline, Content Doc copy. */
export const homeHopIntroSplit = {
  headlineLines: ["Beyond Communications.", "We Are Global Influence."] as const,
  introLead,
  introBody,
  cta: { label: "Our expertise", href: "/services" as const },
} as const;

export const homeCsrBand = {
  label: "CSR",
  headline: "Responsible creativity at the centre of how we build influence.",
  body:
    "Our strength lies in the quality of connections we build with audiences and communities. Sustainability and ethics inform how we counsel leadership, produce campaigns, and show up in sensitive markets.",
  cta: { label: "Our approach", href: "/about" as const },
} as const;

/** Homepage band under hero — intro: white two-column layout (deck); paste final copy from Content Doc when ready. */
export const homeExpertiseHub = {
  label: "Our trades and sectors",
  headline:
    "360° communications expertise calibrated for boards, scrutiny, and market velocity.",
  intro:
    `Media Mantra Global combines editorial instinct with digital orchestration across ${MARKETS_PRESENCE} — the same uncompromising standard in every market relationship.`,
  follow:
    "From transformation mandates to launches, reputational arcs, visibility, retention, engagement, or category ownership — integrated is how we've always operated.",
  cta: { label: "Our expertise", href: "/services" as const },
  /** Swap for client asset — `docs/CLIENT_IMAGE_SPECS.md` */
  imageSrc:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=82",
  imageAlt: "Strategy and analytics on laptop — communications capability",
} as const;


export const homeNetworkBand = {
  label: "Location",
  headline: "India-born, Middle East proven, now is USA and Australia",
  body: "With dedicated employees across the globe, we operate across 5 of the world's most dynamic growth corridors, and we are making history doing it. As the first India-born independent communications firm to own offices in India, UAE, Singapore, USA, and Australia, our integrated international network brings a global vision to every brief with a local understanding of every market, the same uncompromising standard of quality and a relentless commitment to driving positive change, for our people, our clients, and our world.",
  officesHeading: "Our offices",
  linkLabel: "Contact us",
  linkHref: "/contact" as const,
  stats: [] as const,
} as const;

export const homePeopleBand = {
  label: "People",
  headline: "Bold, founder-led practitioners — built for prestige and pace.",
  body: `Practitioner-led teams across ${MARKETS_PRESENCE_SHORT} — built for prestige, pace, and proof.`,
  cta: { label: "Join our talents", href: "/careers" as const },
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
} as const;

export const homeInsightsRibbon = {
  label: "Our last news",
  cta: { label: "All blogs", href: "/blog" as const },
} as const;

export const homeContactStrip = {
  label: "",
  headline: "Let's Build Influence Together",
  lines: [
    "Your brand deserves to be known. Loudly. In the right rooms. Across the right markets. Let's figure out what that looks like, together.",
  ] as const,
  primaryCta: "Get in Touch",
} as const;

/** Slide 7 — client logo section (left-aligned headline, "Trust Us" in gold italic) */
export const homeClientsLead = {
  eyebrow: "Our Clients",
  titleLine1: "Brands That",
  titleLine2: "Trust Us",
  description:
    "From Fortune 500 leaders to disruptive challengers, we are trusted by brands and organisation across the world",
} as const;

/** Homepage logo grid — approved client order (30 brands). */
export const homeClientsGrid = clientGridEntries;

/** Bottom ticker — notable associations. */
export const homeClientsTicker = [...clientTickerBrands];

/** Section 5 — proven metrics (Website Content Document) */
export const homeProven = {
  label: "",
  headline: "Proven Results Across Markets",
  intro: "",
  stats: [
    {
      key: "placements",
      label: "1,00,000 MEDIA PLACEMENTS",
      dek: "Top-tier print, digital & broadcast coverage across 4 markets.",
      value: 100000,
      suffix: "" as const,
      displayType: "int" as const,
    },
    {
      key: "brands",
      label: "600+ BRANDS SERVED",
      dek: "Startups to Fortune 500s, across every growth stage.",
      value: 600,
      suffix: "+" as const,
      displayType: "int" as const,
    },
    {
      key: "influencer",
      label: "100X INFLUENCER IMPACT",
      dek: "Share of voice tripled, measurable, documented, repeatable.",
      value: 100,
      suffix: "X" as const,
      displayType: "mult" as const,
    },
    {
      key: "industries",
      label: "25+ INDUSTRIES COVERED",
      dek: "Tech · FMCG · Finance · Real Estate · Health · Luxury & more.",
      value: 25,
      suffix: "+" as const,
      displayType: "int" as const,
    },
    {
      key: "awards",
      label: "700+ INDUSTRY AWARDS",
      dek: "Recognised globally across PRovoke, SABRE, IPRCCA, BW Excel, IMAGEXX, and Adgully.",
      value: 700,
      suffix: "+" as const,
      displayType: "int" as const,
    },
  ],
};

export const homeFrameworkIntro = {
  label: "Media Mantra Global Framework",
  headline: "We built a system. That's why brands choose us.",
  headlineAccent: "",
  description: "",
} as const;

/** Section 6 — work preview (Website Content Document) */
export const homeWork = {
  sectionLabel: "Our work",
  label: "Case Studies",
  headline: "We Let the Work Talk.",
  description:
    "Ideas truly worth their weight in gold across India, UAE, and Singapore",
  /** Homepage hopscotch gallery order */
  featuredSlugs: [
    "barista-coffee",
    "amirah-developments",
    "swastik-wellbeing",
    "boat-middle-east",
  ] as const,
} as const;

export const homeInsights = {
  label: "Blogs",
  headline: "Notes from our teams",
  description: "Practical perspective on communications, markets, and craft.",
};

export const homeCta = {
  headline: "Let's Build Influence Together",
  description:
    "Your brand deserves to be known. Loudly. In the right rooms. Across the right markets. Let's figure out what that looks like, together.",
  primary: { label: "Get in Touch", href: "/contact" },
  secondary: { label: "See Our Work", href: "/case-studies" },
};

/** Section 8 — SEO footer paragraph */
export {
  footerSeoParagraph,
  footerServicesLine,
  footerOfficesLine,
  footerSignOff,
} from "@/data/footer-content";

export const homeHopFooterLead = {
  discoverLabel: "Discover our work",
} as const;

/** Homepage black footer — section 8 (also uses `footerSeoParagraph`, `footerServicesLine`) */
export const homePageFooter = {
  officesHeading: "Offices",
  officesLine: footerOfficesLine,
  servicesHeading: "Services",
  tagline: footerSignOff,
} as const;
