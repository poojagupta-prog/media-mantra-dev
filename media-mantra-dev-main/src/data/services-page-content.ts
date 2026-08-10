/** Services index — Website Content Document §Page 3 */

export const servicesPageIntro = {
  label: "Services",
  headline: "We're In It With You. All The Way.",
  body:
    "Whether we're running a global campaign or an influencer strategy, everything we do points to one outcome, making your brand impossible to ignore.",
  sectionLabel: "Our Core Services",
} as const;

export type ServiceListingCard = {
  readonly slug: string;
  readonly index: number;
  readonly title: string;
  readonly headline: string;
  readonly body: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imagePosition?: string;
  /** Tailwind gradient overlay on card image */
  readonly overlayClass: string;
};

/** Card copy + visuals — doc order 01–09 */
export const serviceListingCards: readonly ServiceListingCard[] = [
  {
    slug: "strategic-pr-media-relations",
    index: 1,
    title: "PR & Media Relations",
    headline: "Most PR is Forgettable. Ours Isn't.",
    body:
      "PR today is about shaping perception across an ecosystem that includes media, digital, search, and social. Knowing what to say is one part. Knowing where, when, and how it travels is what makes it work. At Media Mantra Global, we operate at that intersection.",
    imageSrc: "/services/strategic-pr-media-relations.png",
    imagePosition: "object-center",
    imageAlt: "PR and media relations",
    overlayClass: "from-[#0d4f5c]/88 via-[#0d4f5c]/55 to-[#0a2830]/75",
  },
  {
    slug: "digital-social-media",
    index: 2,
    title: "Digital & Social Media",
    headline: "Boring content is invisible. We donʼt do anything that is invisible.",
    body: "",
    imageSrc: "/services/digital-social-media.png",
    imagePosition: "object-center",
    imageAlt: "Digital and social media",
    overlayClass: "from-[#1a4d3e]/88 via-[#145042]/55 to-[#0a2820]/78",
  },
  {
    slug: "influencer-marketing",
    index: 3,
    title: "Influencer Marketing",
    headline: "The right voice, in the right feed, in front of the right people.",
    body: "",
    imageSrc: "/services/influencer-marketing.png",
    imagePosition: "object-center",
    imageAlt: "Influencer marketing",
    overlayClass: "from-[#5c2d0a]/88 via-[#4a2408]/55 to-[#281408]/78",
  },
  {
    slug: "global-event-management",
    index: 4,
    title: "Event Management",
    headline: "Moments are easy to create. Impact isnʼt.",
    body: "",
    imageSrc: "/services/global-event-management.png",
    imagePosition: "object-center",
    imageAlt: "Event management",
    overlayClass: "from-[#3d1f5c]/88 via-[#321848]/55 to-[#1a0c28]/78",
  },
  {
    slug: "reputation-management",
    index: 5,
    title: "Reputation & Crisis Management",
    headline: "Your reputation took years to build. Don't let it crumble in 24 hours.",
    body: "",
    imageSrc: "/services/reputation-management.png",
    imagePosition: "object-center",
    imageAlt: "Reputation and crisis management",
    overlayClass: "from-[#5c1830]/88 via-[#4a1228]/55 to-[#280810]/78",
  },
  {
    slug: "seo-performance-marketing",
    index: 6,
    title: "AI Optimisation & Performance Marketing",
    headline: "Performance marketing has changed in the era of AI.",
    body: "",
    imageSrc: "/services/seo-performance-marketing.png",
    imagePosition: "object-center",
    imageAlt: "AI optimisation and performance marketing",
    overlayClass: "from-[#1a3560]/88 via-[#152a4d]/55 to-[#0c1828]/78",
  },
  {
    slug: "corporate-reputation-advisory",
    index: 7,
    title: "Corporate & Reputation Advisory",
    headline: "Advisory that Moves Boardrooms.",
    body: "",
    imageSrc: "/services/reputation-management.png",
    imagePosition: "object-center",
    imageAlt: "Corporate and reputation advisory",
    overlayClass: "from-[#1a1a2e]/88 via-[#151528]/55 to-[#0a0a14]/78",
  },
  {
    slug: "content-marketing",
    index: 8,
    title: "Content Marketing",
    headline: "Relevant content is still the King!",
    body: "",
    imageSrc: "/services/content-marketing.png",
    imagePosition: "object-center",
    imageAlt: "Content marketing",
    overlayClass: "from-[#2d4a1a]/88 via-[#243d15]/55 to-[#142208]/78",
  },
  {
    slug: "founder-branding",
    index: 9,
    title: "Founder & Leadership Branding",
    headline: "The brand is the business. The founder is the brand.",
    body: "",
    imageSrc: "/services/founder-branding.png",
    imagePosition: "object-center",
    imageAlt: "Founder and leadership branding",
    overlayClass: "from-[#8a5a12]/88 via-[#6b4510]/58 to-[#3d2808]/78",
  },
] as const;
