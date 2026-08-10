export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string;
  readTime: string;
  /** Hero / social share — remote or `/path` from `public` */
  coverImage: string;
  /** Optional wide image inside the article (after first body paragraph) */
  articleImage?: string;
  body?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-native-communications-playbook",
    title: "The AI-Native Communications Playbook",
    dek: "How hybrid teams orchestrate predictive listening without losing editorial soul.",
    category: "Strategy",
    date: "2026-04-02",
    readTime: "7 min read",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    body: [
      "Integrated communications teams are rewiring workflows around augmentation, not replacement...",
      "Signals now arrive faster than policies — the winning agencies choreograph calibration loops...",
    ],
  },
  {
    slug: "reputation-as-a-financial-instrument",
    title: "Reputation as a Financial Instrument",
    dek: "Boardrooms finally price narrative risk alongside operational exposure.",
    category: "Leadership",
    date: "2026-03-18",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "event-film-first-storytelling",
    title: "Why Film-First Storytelling Owns the Room",
    dek: "Immersive reveals demand broadcast choreography — not slideware.",
    category: "Experiential",
    date: "2026-03-05",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    articleImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    body: [
      "When the house lights dim and the first frame holds, you are no longer “presenting an update” — you are premiering a point of view. Film‑first storytelling borrows from broadcast pacing: breath, silence, payoff. The room stops negotiating with bullet points because the medium already signalled: this matters.",
      "Slideware trains audiences to skim; cinematic story trains them to stay. Whether it is a launch, a turnaround narrative, or a founder arc, film gives you controlled reveals — wide, medium, close — so proof lands after emotion, not before it.",
      "The production bar is not vanity. It is clarity under pressure: a disciplined shot list, ruthless edit, and audio that does the authority work when words would sound defensive. That is why film‑first work “owns the room” — it respects attention as a scarce asset.",
    ],
  },
  {
    slug: "cultural-fluency-global-brands",
    title: "Cultural Fluency for Global Brands",
    dek: "Localization is etiquette; fluency is foresight.",
    category: "Global",
    date: "2026-02-22",
    readTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "measuring-narrative-momentum",
    title: "Measuring Narrative Momentum",
    dek: "Vanity metrics crumble when boards ask for causal proof.",
    category: "Analytics",
    date: "2026-02-06",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = ["All", "Strategy", "Leadership", "Experiential", "Global", "Analytics"] as const;
