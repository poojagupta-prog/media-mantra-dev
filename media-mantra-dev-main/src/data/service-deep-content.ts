export type ServiceContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "bullets"; title?: string; items: readonly string[] }
  | { type: "ctas"; items: readonly { label: string; href: string }[] };

/** Rich editorial layouts for `/services/[slug]` — doc copy only, no extra CTAs. */
export const serviceDeepContent: Record<string, readonly ServiceContentBlock[]> = {
  "strategic-pr-media-relations": [
    {
      type: "p",
      text: "PR today is about shaping perception across an ecosystem that includes media, digital, search, and social. Knowing what to say is one part. Knowing where, when, and how it travels is what makes it work.",
    },
    { type: "p", text: "At Media Mantra Global, we operate at that intersection." },
    {
      type: "p",
      text: "We understand how editorial rooms think, but also how algorithms rank, how audiences engage, and how narratives evolve across markets like India, UAE, Singapore, Australia & USA. From earned media to digital amplification, everything we build is designed to move beyond a single placement and into sustained visibility.",
    },
    { type: "p", text: "That knowledge is your unfair advantage." },
    { type: "h2", text: "What Strategic PR Actually Looks Like" },
    {
      type: "p",
      text: "Real public relations services are the kind that builds brand authority over time and puts your name in conversations that matter.",
    },
    {
      type: "bullets",
      items: [
        "Media strategy built around your business objectives, not the other way around",
        "Targeted media outreach to the journalists and publications that influence your audience",
        "Press release writing and global distribution that cuts through the noise",
        "Thought leadership positioning through features, interviews, and expert commentary",
        "Ongoing media relations management so you're never starting from scratch",
        "Coverage across print, digital, broadcast, and trade, wherever your audience actually is",
        "North America media relationships, U.S. and Canadian press, wire distribution, and tier-1 trade coverage for brands entering the market",
      ],
    },
    { type: "p", text: "Good PR is the reason your audience believes what they read about you." },
    { type: "h2", text: "Let's Build Your Media Presence" },
    {
      type: "p",
      text: "Whether you're launching something new, entering a new market, or just tired of being the best-kept secret in your industry, we should talk.",
    },
    {
      type: "ctas",
      items: [
        { label: "Get a PR Strategy", href: "/contact" },
        { label: "See Our Work", href: "/case-studies" },
      ],
    },
  ],
  "digital-social-media": [
    { type: "p", text: "Your audience scrolls past 300+ pieces of content a day." },
    { type: "p", text: "Algorithms decide what lives. Creativity and keywords decide what wins." },
    {
      type: "p",
      text: "At Media Mantra Global, we build digital ecosystems where ideas donʼt just look good, they perform, adapt, and scale. This is where sharp creativity integrates with real-time intelligence because digital space is where perception is built daily.",
    },
    { type: "h2", text: "What Digital & Social Media Actually Looks Like" },
    { type: "p", text: "Real digital strategy connects content, platform, and performance." },
    { type: "p", text: "Social media strategy aligned to brand and business goals" },
    {
      type: "p",
      text: "End-to-end platform management across Instagram, LinkedIn, X, YouTube, Whatsapp and more",
    },
    {
      type: "bullets",
      items: [
        "Content creation thatʼs built for engagement, not just aesthetics",
        "Influencer collaborations that drive credibility, not just reach",
        "SEO-driven content to ensure your brand is discoverable when it matters",
        "Paid media campaigns designed for precision targeting and scale",
        "Community management that builds conversations, not just responses",
        "Performance tracking across engagement, reach, conversions, and growth",
      ],
    },
    { type: "h2", text: "How We Work" },
    {
      type: "p",
      text: "We use AI where it gives us an edge and human instinct where it actually counts.",
    },
    {
      type: "bullets",
      items: [
        "AI-powered trend mapping to spot whatʼs about to break, not what already has",
        "Predictive performance insights to refine content before it even goes live",
        "Real-time optimization across campaigns, platforms, and audiences",
        "Intelligent listening tools that decode what your audience actually cares about",
      ],
    },
    {
      type: "p",
      text: "The outcome is that content that moves faster, lands sharper, and scales smarter.",
    },
    { type: "h2", text: "Letʼs Build Your Digital Presence" },
    {
      type: "p",
      text: "If your brand is ready to move beyond just being online and start being relevant",
    },
    {
      type: "ctas",
      items: [{ label: "Build Your Digital Strategy", href: "/contact" }],
    },
  ],
  "influencer-marketing": [
    { type: "p", text: "Influencer marketing doesnʼt fail. Bad strategy does." },
    {
      type: "p",
      text: "Most brands have tried it, big names, decent content, and nothing to show for it. Because visibility without relevance is just noise. And audiences can tell.",
    },
    {
      type: "p",
      text: "At Media Mantra Global, we approach influencer marketing as credible content. Itʼs not about who has the most followers. Itʼs about who actually moves opinion.",
    },
    { type: "h2", text: "What This Really Means" },
    {
      type: "p",
      text: "Influence today sits inside communities. Niche, engaged, and highly selective.",
    },
    {
      type: "p",
      text: "We identify the voices your audience trusts, and build collaborations that feel natural, not forced. Content that fits the platform, the creator, and the moment.",
    },
    { type: "h2", text: "What Our Influencer Marketing Looks Like" },
    { type: "p", text: "Strategy-led campaigns aligned to brand and business goals" },
    {
      type: "bullets",
      items: [
        "Deep audience mapping and creator identification",
        "Micro-influencer collaborations for high engagement and community trust",
        "Macro and marquee partnerships for scale and visibility",
        "B2B influencer strategies targeting decision-makers and industry voices",
        "End-to-end campaign management, from brief to execution to optimisation",
        "Integrated campaigns across social, digital, and performance channels",
        "Clear measurement across engagement, reach, and conversion impact",
      ],
    },
    { type: "h2", text: "Micro vs Macro." },
    { type: "p", text: "Itʼs not a choice. Itʼs a mix." },
    {
      type: "p",
      text: "Micro creators drive trust and action within communities whereas larger creators deliver scale and awareness. The right strategy uses both, based on what your brand actually needs, not what looks impressive on paper.",
    },
    { type: "h2", text: "Letʼs Build Real Influence" },
    {
      type: "p",
      text: "If your brand is ready to move beyond vanity metrics and start driving actual impact with the best influencer marketing agency",
    },
    {
      type: "ctas",
      items: [{ label: "Talk To Our Team", href: "/contact" }],
    },
  ],
  "global-event-management": [
    { type: "p", text: "Anyone can host an event. Very few create experiences people remember and talk about." },
    {
      type: "p",
      text: "At Media Mantra Global, we handle events end-to-end, from the first idea to on-ground execution to how it lives beyond the room. Because an event isnʼt just about what happens there. Itʼs about what happens after.",
    },
    { type: "h2", text: "What This Really Means" },
    { type: "p", text: "We donʼt just plan events. We build them, run them, and amplify them." },
    {
      type: "p",
      text: "From concept to execution to visibility, every layer is integrated, so your event doesnʼt just happen seamlessly on-ground, it continues to perform across media, digital, and audience conversations.",
    },
    { type: "h2", text: "What Our Event Management Looks Like" },
    {
      type: "bullets",
      items: [
        "End-to-end ownership, from strategy and planning to on-ground execution",
        "Concept development and experience design aligned to your brand narrative",
        "Full-scale production, logistics, and real-time event management",
        "Corporate events, product launches, investor meets, forums, and multi-city roadshows",
        "Speaker, celebrity, and influencer engagement",
        "Live content capture, video, social, and real-time storytelling",
        "Integrated amplification across media, digital, and social platforms",
        "Post-event visibility to extend reach, recall, and business impact",
        "Multi-market execution across India, UAE, Singapore, and beyond",
      ],
    },
    { type: "h2", text: "How We Work" },
    { type: "p", text: "We start with the outcome, what this event needs to achieve." },
    {
      type: "p",
      text: "Then we take complete ownership. From building the experience on-ground to ensuring it reaches the right audience beyond it. Strategy, execution, and amplification, all working together.",
    },
    { type: "h2", text: "Letʼs Build Experiences That Travel" },
    {
      type: "p",
      text: "If youʼre looking for an Event Management PR agency that donʼt end when the lights go out",
    },
    {
      type: "ctas",
      items: [{ label: "Plan Your Event With Us", href: "/contact" }],
    },
  ],
  "reputation-management": [
    {
      type: "p",
      text: "Reputation is built over time, lost in moments. But it can be controlled by strategy.",
    },
    {
      type: "p",
      text: "In a hyper-connected world, perception moves faster than facts.A single headline, a trending post, or a misstep amplified at scale can shift how your brand is seen, overnight. What determines the outcome is preparation, clarity, and the ability to act with precision when it matters most.",
    },
    {
      type: "p",
      text: "At Media Mantra Global, we give out reputation management services especially when we have to hold them under difficult circumstances.",
    },
    { type: "h2", text: "What This Really Means" },
    {
      type: "p",
      text: "Reputation today lives across media, digital, search, and stakeholder perception. Managing it requires a system and an exclusive team.",
    },
    {
      type: "p",
      text: "We work across two fronts, building long-term credibility and protecting it when tested.",
    },
    { type: "h2", text: "Proactive Reputation Building" },
    {
      type: "bullets",
      items: [
        "Continuous reputation monitoring across media, digital, and social ecosystems",
        "Strategic narrative development aligned with business, leadership, and market positioning",
        "Executive visibility and personal brand management",
        "Search and digital reputation structuring, ensuring discoverability reflects credibility",
        "Stakeholder communication strategies across investors, customers, and internal teams",
        "Reputation audits and risk identification to stay ahead of potential challenges",
      ],
    },
    { type: "h2", text: "Crisis Management & Response" },
    {
      type: "bullets",
      items: [
        "Crisis preparedness frameworks built before the moment arrives",
        "Real-time response across markets, platforms, and time zones",
        "Clear, controlled messaging across media, digital, and internal channels",
        "Stakeholder communication during high-pressure situations",
        "Media and public narrative management under scrutiny",
        "Post-crisis recovery strategies focused on rebuilding trust and stability",
      ],
    },
    { type: "h2", text: "How We Work" },
    {
      type: "p",
      text: "We combine insight, monitoring, and strategic communication to build reputations that are consistent, credible, and resilient.",
    },
    {
      type: "p",
      text: "And when pressure hits, we move fast, across India, the UAE, Singapore, and beyond, ensuring your narrative stays intact, wherever the conversation is happening.",
    },
    { type: "h2", text: "Letʼs Strengthen Your Reputation" },
    { type: "p", text: "If your brand is too valuable to leave to chance," },
    {
      type: "ctas",
      items: [
        { label: "Build Your Reputation Strategy", href: "/contact" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
  "seo-performance-marketing": [
    {
      type: "p",
      text: "Performance marketing has changed in the era of AI. Itʼs about showing up in answers, recommendations, summaries, and every AI layer shaping how people discover brands. If youʼre not visible across these surfaces, youʼre not even in the consideration set.",
    },
    {
      type: "p",
      text: "At Media Mantra Global, we build search and performance systems that work together, organic creating long-term authority, paid accelerating reach and conversion. The result is visibility that doesnʼt spike and disappear, but compounds over time.",
    },
    { type: "h2", text: "SEO That Builds Authority" },
    {
      type: "bullets",
      items: [
        "AEO (Answer Engine Optimisation) to ensure your brand shows up in AI-generated responses and summaries",
        "GEO (Generative Engine Optimisation) to align content with how AI platforms interpret and surface information",
        "Technical SEO that makes your platform structured, fast, and machine-readable across systems",
        "Content strategy built for intent across search, voice, and conversational queries",
        "Digital PR and authority building that feeds both search engines and AI models",
        "On-page and off-page optimisation that adapts to evolving algorithms and AI overlays",
        "International strategies across India, the UAE, and Singapore",
        "Continuous tracking, refinement, and adaptation to stay relevant across every discovery layer",
      ],
    },
    { type: "h2", text: "Performance Marketing That Converts" },
    {
      type: "bullets",
      items: [
        "Precision-led paid campaigns across search, social, and display",
        "Audience targeting driven by behaviour, not broad demographics",
        "Conversion-focused campaign structuring, built for outcomes, not impressions",
        "Integrated paid + organic strategies to maximise ROI",
        "Real-time optimisation to improve efficiency and scale what works",
        "Creative and messaging aligned with evolving user intent",
        "Transparent reporting with clear attribution and measurable results",
      ],
    },
    { type: "h2", text: "Letʼs Build Your Growth Engine" },
    {
      type: "p",
      text: "If youʼre done guessing and ready to scale with clarity with the best SEO agency",
    },
    {
      type: "ctas",
      items: [
        { label: "Build Your Growth Strategy", href: "/contact" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
  "corporate-reputation-advisory": [
    {
      type: "p",
      text: "The most consequential communications decisions are made in boardrooms, not press rooms. Media Mantra Global's Corporate and Reputation Advisory practice is built for the moments that define how a company is perceived by investors, regulators, the media, and the public.",
    },
    {
      type: "p",
      text: "We advise leadership teams and boards on the communications dimensions of their most complex decisions like market entry, capital raises, stakeholder friction, and leadership transitions. This is the practice we built for clients who need more than coverage. They need counsel.",
    },
    { type: "h2", text: "What We Advise On" },
    {
      type: "bullets",
      items: [
        "CEO and Executive Positioning: Building the public credibility that precedes institutional trust",
        "Crisis & Issues Management: Delivering real-time response and long-term reputation recovery",
        "Investor Relations Communications: Narrative alignment for fundraising, IPOs, and public markets",
        "IPO Communications: Supporting market readiness, analyst targeting, and financial media strategy",
        "M&A Communications: Shaping integration storytelling, stakeholder management, and media strategy for transactions",
        "Public Affairs & Regulatory Communications: Strengthening engagement with government, policy stakeholders, and regulators across globe",
        "Employee & Internal Communications: Crafting leadership narratives that align teams during change",
      ],
    },
    { type: "h2", text: "Who This Is For" },
    {
      type: "p",
      text: "Growth-stage companies preparing for institutional investment. Multinationals managing stakeholder complexity across markets. Founders and CEOs navigating the scrutiny that comes with scale. Boards who understand that reputation is a balance sheet line item.",
    },
    {
      type: "ctas",
      items: [{ label: "Talk to Our Advisory Team", href: "/contact" }],
    },
  ],
  "content-marketing": [
    {
      type: "p",
      text: "Thereʼs no shortage of content. Just a shortage of content that works.",
    },
    {
      type: "p",
      text: "Most brands are publishing more than ever and being remembered less. Because content without strategy is just output. It fills space, not perception.",
    },
    {
      type: "p",
      text: "At Media Mantra Global, we treat content as a business asset. Built to inform, engage, rank, and convert, across platforms, markets, and moments.",
    },
    { type: "h2", text: "What This Really Means" },
    { type: "p", text: "Content today doesnʼt live in one place." },
    {
      type: "p",
      text: "It moves, from search to social, from website to media, from awareness to decision. We build content systems that are consistent, connected, and designed to perform across that entire journey.",
    },
    { type: "p", text: "Because good content doesnʼt just get seen. It gets shared." },
    { type: "h2", text: "What Our Content Marketing Looks Like" },
    {
      type: "bullets",
      items: [
        "Content strategy aligned to brand voice, audience, and business goals",
        "Blog and article development designed for authority and organic growth",
        "Website and landing page content built for clarity and conversion",
        "Thought leadership content that positions brands and leadership as industry voices",
        "Visual storytelling, infographics, carousels, and platform-native formats",
        "SEO-integrated content to improve discoverability and long-term visibility",
        "Campaign-led content across digital, social, and performance channels",
        "Content calendars and distribution strategies for consistency and scale",
      ],
    },
    {
      type: "h2",
      text: "Let's Build Content That Works, if your brand is done publishing for the sake of it and wants the best content marketing service.",
    },
    {
      type: "ctas",
      items: [{ label: "Build Your Content Strategy With Us", href: "/contact" }],
    },
  ],
  "founder-branding": [
    { type: "h2", text: "Here's the Uncomfortable Truth." },
    {
      type: "p",
      text: "Your audience Googles you before they take the meeting. Investors look you up before they take the call. Journalists check your profile before they decide whether you're worth quoting.",
    },
    {
      type: "p",
      text: "What they find, or don't find, decides the conversation before it even starts.",
    },
    {
      type: "p",
      text: "Founder branding isn't vanity. It isn't a LinkedIn side project. It's one of the highest-leverage business decisions you can make because in high-growth markets people don't just buy products. They buy into the person leading the company.",
    },
    { type: "p", text: "You are the story. Let's make it one worth reading." },
    { type: "h2", text: "What We Build" },
    {
      type: "p",
      text: "We don't do generic personal branding. We build founder narratives that are specific, strategic, and built to travel, across media, markets, and moments.",
    },
    {
      type: "bullets",
      items: [
        "Founder PR strategy that positions you as the authority in your category",
        "CEO personal branding that goes beyond LinkedIn posts and into real editorial coverage",
        "Leadership branding services tied to your business goals, fundraising, expansion, acquisition",
        "Personal brand development that feels authentic, not manufactured",
        "Executive branding for leadership teams, not just the person at the top",
        "Media positioning for founders, knowing which publications to target and why",
        "Thought leadership content strategy, your insights, in your voice, in the right rooms",
      ],
    },
    { type: "h2", text: "Who We Work With" },
    {
      type: "p",
      text: "Startup founders who want to be known before their Series B. Legacy business leaders who need to modernise how the world sees them. CEOs entering new markets who need to build credibility fast. Executives who've been doing brilliant work in private and are finally ready to let the world in on it.",
    },
    {
      type: "p",
      text: "We work with personal branding agencies in India and across the Gulf, but our approach is built for founders who think globally, even if they're starting in one market.",
    },
    { type: "h2", text: "The Difference Between Being Visible and Being Credible" },
    {
      type: "p",
      text: "Anyone can post content. Anyone can run LinkedIn ads. What most personal branding consultants miss is the difference between being visible and being credible.",
    },
    {
      type: "p",
      text: "Credibility comes from earned media, from journalists quoting you, publications profiling you, and industry peers referencing your thinking. That's what we build. And it's the kind of authority that doesn't disappear when you stop paying for it.",
    },
    { type: "p", text: "We've turned founders into category leaders. Let's do it for you." },
    { type: "h2", text: "Start the Conversation" },
    {
      type: "ctas",
      items: [
        { label: "Build My Personal Brand", href: "/contact" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
};
