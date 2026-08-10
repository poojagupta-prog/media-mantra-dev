/** Gaming Mantra & Startup Mantra — Content Doc §About (yellow highlight). */

export type MantraPageContent = {
  readonly title: string;
  readonly pathname: `/${string}`;
  readonly metaDescription: string;
  readonly banner: {
    readonly imageSrc: string;
    readonly imageAlt: string;
    readonly headline: string;
    /** Tailwind object-position / cover classes for right-anchored hero */
    readonly imagePosition?: string;
  };
  readonly paragraphs: readonly string[];
};

export const gamingMantraPage: MantraPageContent = {
  title: "Gaming Mantra",
  pathname: "/about/gaming-mantra",
  metaDescription:
    "India's first dedicated gaming communications vertical — strategic PR for gaming brands, platforms, publishers, and esports organisations.",
  banner: {
    imageSrc: "/about/gaming-mantra-banner.png",
    imageAlt: "Virtual reality gaming experience — Gaming Mantra by Media Mantra Global",
    headline: "Gaming Mantra",
    imagePosition: "object-cover object-[center_20%]",
  },
  paragraphs: [
    "Gaming has been a core focus area at Media Mantra for years. Recognising the industry's immense potential early on, the agency launched Gaming Mantra, one of India's first dedicated communications verticals exclusively focused on the gaming ecosystem.",
    "Led by a specialised team with deep domain expertise, Gaming Mantra delivers strategic, insight-driven communication solutions tailored to gaming brands, platforms, publishers, esports organisations, and emerging industry stakeholders.",
  ],
} as const;

export const startupMantraPage: MantraPageContent = {
  title: "Startup Mantra",
  pathname: "/about/startup-mantra",
  metaDescription:
    "Startup Mantra — dedicated startup PR, business planning, and agile communications for high-growth brands across India.",
  banner: {
    imageSrc: "/about/startup-mantra-banner.png",
    imageAlt: "Collaborative startup strategy — Startup Mantra by Media Mantra Global",
    headline: "Startup Mantra",
    imagePosition: "object-cover object-center",
  },
  paragraphs: [
    "Media Mantra recognized this growing need in the industry and came up with its own vertical dedicated to start-ups called Startup Mantra. It includes its own set of start-up PR solutions and start-up business planning strategies for these agile new businesses.",
    "If you need an agile PR agency that is proactive, creative and aggressive, you couldn’t go wrong with Media Mantra, one of the top Public Relations agencies in and undoubtedly, the best PR Agency in Delhi, Bangalore, Hyderabad, Mumbai.",
  ],
} as const;
