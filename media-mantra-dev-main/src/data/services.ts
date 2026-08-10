export type Service = {
  slug: string;
  index: number;
  title: string;
  tagline: string;
  excerpt: string;
  pillars: readonly string[];
  deliverables: readonly string[];
  heroGradient: string;
  heroImage: string;
  /** Tailwind aspect ratio class for detail-page hero frame */
  heroAspect?: string;
  /** Tailwind object-position for hero crop */
  heroImagePosition?: string;
};

export const services: Service[] = [
  {
    index: 1,
    slug: "strategic-pr-media-relations",
    title: "PR & Media Relations",
    tagline: "Most PR is Forgettable. Ours Isn't.",
    excerpt:
      "PR today is about shaping perception across an ecosystem that includes media, digital, search, and social.",
    pillars: ["Ecosystem mindset", "Editorial credibility", "Always-on relevance"],
    deliverables: ["Narratives", "Relationships", "Multi-channel amplification"],
    heroGradient: "from-mm-royal/80 via-mm-graphite/60 to-mm-gold/20",
    heroImage: "/services/strategic-pr-media-relations.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
  {
    index: 2,
    slug: "digital-social-media",
    title: "Digital & Social Media",
    tagline: "Boring content is invisible. We donʼt do anything that is invisible.",
    excerpt:
      "Your audience scrolls past 300+ pieces of content a day. Algorithms decide what lives. Creativity and keywords decide what wins.",
    pillars: ["Channel fluency", "Performance craft", "Cultural resonance"],
    deliverables: ["Platform strategy", "Content systems", "Always-on optimisation"],
    heroGradient: "from-mm-graphite via-mm-royal to-mm-cream",
    heroImage: "/services/digital-social-media.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
  {
    index: 3,
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "The right voice, in the right feed, in front of the right people.",
    excerpt:
      "Influencer marketing doesnʼt fail. Bad strategy does. Itʼs not about who has the most followers. Itʼs about who actually moves opinion.",
    pillars: ["Creator intelligence", "Community truth", "Measurable impact"],
    deliverables: ["Casting matrices", "Always-on arcs", "Attribution overlays"],
    heroGradient: "from-mm-gold/60 via-mm-cream to-mm-graphite",
    heroImage: "/services/influencer-marketing.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
  {
    index: 4,
    slug: "global-event-management",
    title: "Event Management",
    tagline: "Moments are easy to create. Impact isnʼt.",
    excerpt:
      "Anyone can host an event. Very few create experiences people remember and talk about.",
    pillars: ["Immersive design", "Amplification choreography", "Logistics sovereignty"],
    deliverables: ["Summits & launches", "Roadshows", "Live capture"],
    heroGradient: "from-mm-royal via-mm-black to-mm-gold/50",
    heroImage: "/services/global-event-management.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
  {
    index: 5,
    slug: "reputation-management",
    title: "Reputation & Crisis Management",
    tagline: "Your reputation took years to build. Don't let it crumble in 24 hours.",
    excerpt:
      "Reputation is built over time, lost in moments. But it can be controlled by strategy.",
    pillars: ["Signals", "Readiness", "Recovery"],
    deliverables: ["Monitoring", "Crisis playbooks", "Stakeholder choreography"],
    heroGradient: "from-mm-royal/90 via-mm-graphite to-mm-black",
    heroImage: "/services/reputation-management.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
  {
    index: 6,
    slug: "seo-performance-marketing",
    title: "AI Optimisation & Performance Marketing",
    tagline: "Performance marketing has changed in the era of AI.",
    excerpt:
      "Itʼs about showing up in answers, recommendations, summaries, and every AI layer shaping how people discover brands.",
    pillars: ["Discovery science", "Engineering readiness", "Attribution honesty"],
    deliverables: ["Technical SEO", "Content moats", "Paid acceleration"],
    heroGradient: "from-mm-graphite/90 via-mm-gold/30 to-mm-royal/60",
    heroImage: "/services/seo-performance-marketing.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
  {
    index: 7,
    slug: "corporate-reputation-advisory",
    title: "Corporate & Reputation Advisory",
    tagline: "Advisory that Moves Boardrooms.",
    excerpt:
      "The most consequential communications decisions are made in boardrooms, not press rooms.",
    pillars: ["Boardroom counsel", "Stakeholder alignment", "Complex transitions"],
    deliverables: ["Executive positioning", "IPO & M&A comms", "Public affairs"],
    heroGradient: "from-mm-black via-mm-royal/80 to-mm-gold/30",
    heroImage: "/services/reputation-management.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
  {
    index: 8,
    slug: "content-marketing",
    title: "Content Marketing",
    tagline: "Relevant content is still the King!",
    excerpt:
      "Thereʼs no shortage of content. Just a shortage of content that works.",
    pillars: ["Narrative IP", "Modular slicing", "Channel-native craft"],
    deliverables: ["Content OS", "Editorial franchises", "Distribution"],
    heroGradient: "from-mm-graphite via-mm-royal/80 to-mm-gold/40",
    heroImage: "/services/content-marketing.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
  {
    index: 9,
    slug: "founder-branding",
    title: "Founder & Leadership Branding",
    tagline: "The brand is the business. The founder is the brand.",
    excerpt:
      "Your audience Googles you before they take the meeting. Founder branding isn't vanity.",
    pillars: ["Editorial proofs", "Strategic narratives", "Market transitions"],
    deliverables: ["Media mapping", "POV architectures", "Team visibility"],
    heroGradient: "from-mm-gold/40 via-mm-royal/70 to-mm-graphite",
    heroImage: "/services/founder-branding.png",
    heroAspect: "aspect-[16/9]",
    heroImagePosition: "object-center",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
