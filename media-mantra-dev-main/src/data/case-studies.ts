/** Document order — Case study- WEBSITE.docx (11 case studies) */
import { governmentCaseStudies } from "@/data/government-case-studies";

export const CASE_STUDY_DOCUMENT_ORDER = [
  "barista-coffee",
  "amirah-developments",
  "swastik-wellbeing",
  "boat-middle-east",
  "archies",
  "opg-mobility",
  "isma-crisis-pr",
  "lpu",
  "blaupunkt-audio",
  "hartek",
  "elecrama",
] as const;

/** Unified case study catalogue for listings + detail routes */
export type CaseStudy = {
  slug: string;
  title: string;
  brand: string;
  campaign: string;
  category: string;
  section?: "commercial" | "government";
  /** BRIEF — doc copy only */
  brief: readonly string[];
  /** Short summary for metadata / previews */
  excerpt: string;
  /** IDEA (or APPROACH for ISMA) — doc copy only */
  idea: readonly string[];
  ideaSectionTitle?: string;
  /** EXECUTION — doc copy only */
  execution: readonly string[];
  /** RESULTS — doc copy only */
  results: readonly string[];
  /** Headline metrics — Edelman-style counters below full outcome copy */
  resultsHighlights: readonly { value: string; label: string }[];
  heroImage: string;
  accent: string;
  campaignImages?: readonly string[];
};

const caseStudyBySlug: Record<(typeof CASE_STUDY_DOCUMENT_ORDER)[number], CaseStudy> = {
  "barista-coffee": {
    slug: "barista-coffee",
    title: "Barista Coffee · #BrewingCoffeeIndustry",
    brand: "Barista Coffee",
    campaign: "#BrewingCoffeeIndustry",
    category: "F&B",
    brief: [
      "In 2000, Barista introduced the country to the idea of sitting in a café for sheer pleasure of it, and became part of a generation's dating history, breakup rituals, and job interview prep routines.",
      "Then the category exploded with the likes of Starbucks and Blue Tokai pulling the artisanal crowd. And Barista, India's original café, found itself fighting to stay relevant in the very segment it had created.",
      "Media visibility had dropped sharply. The brand was innovating, expanding aggressively, and launching new formats, but no one was really talking about it. Our job was to fix that.",
    ],
    excerpt:
      "In 2000, Barista introduced the country to the idea of sitting in a café for sheer pleasure of it, and became part of a generation's dating history, breakup rituals, and job interview prep routines.",
    idea: [
      "We built a multi-track PR campaign '#BrewingCoffeeIndustry', to work on 3 levels simultaneously. First, re-establish Barista's credentials as the pioneer of India's café culture. Second, make the expansion story loud enough that franchisees, investors, and consumers all sat up. Third, make CEO Rajat Agrawal a genuine voice in the QSR and food service industry.",
      "Running parallel to all of this was an influencer and social strategy aimed squarely at the youth segment, who had grown up hearing about Barista from their parents but needed their own reasons to walk in.",
    ],
    execution: [
      "We broke the campaign into many clear streams.",
      "Long-format leadership interviews were our entry point. We placed Rajat Agrawal in The Hindu Business Line, Economic Times Retail, AFAQS, and other tier-one business publications. Stories covered Barista's international expansion ambitions of opening 500 stores in Middle East & Maldives.",
      "Every new café opening became a media moment. We worked with CAT A food and lifestyle publications to generate reviews, outlet features, and opening stories. NDTV Food covered the iconic Defence Colony outlet revival. Economic Times Hospitality covered the 400th outlet milestone at Rajiv Chowk Metro Station, New Delhi, a genuinely newsworthy milestone that we made sure landed properly.",
      "We secured speaker opportunities for the CEO at multiple industry awards and roundtable conferences. This placed Barista & its leadership in conversations about the future of QSR, not just coffee. Stories about doubling retail presence to 800 outlets in 5 years ran on ET Retail. AFAQS covered the brand's core business strategy. Press Trust of India did a video story. Financial Express put Barista on the front page.",
      "We ran engagement campaigns with 50+ national and regional influencers across festive launches, store visits, and product reveals. Barista Diner, the brand's new dining format with a live kitchen, got a dedicated push through reviews, community collaborations, and influencer storytelling.",
      "We also did an unexpected tie-up with a leading age-tech startup, bringing senior citizens together at a Barista outlet. It generated warmth in coverage and reinforced the brand's community angle in a way no press release ever could.",
    ],
    results: [
      "Media visibility went up 300%.",
      "65% of all articles carried Barista's name directly in the headline.",
      "150+ coverages in a single year, with 200+ journalists engaged across PAN India activities.",
      "50+ industry stories covering the coffee category, leadership vision, and trend-led narratives.",
      "50+ influencers were activated across campaigns.",
      "The CEO went from rarely quoted to one of QSR's more recognisable voices",
      "Sales went up 40% without any negative stories. Not one. In a category where brands get picked apart constantly, where one bad review can spiral, Barista ran a full year of aggressive PR activity and came out with a completely clean slate.",
    ],
    resultsHighlights: [
      { value: "300%", label: "Media visibility uplift" },
      { value: "150+", label: "Coverages in one year" },
      { value: "40%", label: "Sales uplift" },
    ],
    heroImage: "/campaigns/barista/campaign-02-diner-interior.png",
    accent: "from-mm-gold/40 to-mm-royal/45",
    campaignImages: [
      "/campaigns/barista/campaign-01-team-storefront-night.png",
      "/campaigns/barista/campaign-02-diner-interior.png",
      "/campaigns/barista/campaign-03-press-coverage.png",
      "/campaigns/barista/campaign-04-mountain-outdoor.png",
      "/campaigns/barista/campaign-05-celebration.png",
    ],
  },
  "amirah-developments": {
    slug: "amirah-developments",
    title: "Amirah Developments · Crown Palace, Dubai",
    brand: "AMIRAH DEVELOPMENTS",
    campaign: "Amirah Developments Grand Launch of Crown Palace, Dubai",
    category: "Real Estate",
    brief: [
      "Dubai has seen thousands of property launches. Most of them are presentations in boardrooms with brochures and cold coffee. Amirah Developments wanted something different for Crown Palace. Crown Palace was Amirah Developments' second landmark residential project, a European palatial-inspired development in Dubai South, one of the emirate's fastest-growing districts. So we built an evening that felt as grand as the project itself. They needed investors, brokers, media, and industry leaders in one room, believing in one vision. We designed and delivered that room.",
    ],
    excerpt:
      "Dubai has seen thousands of property launches. Most of them are presentations in boardrooms with brochures and cold coffee. Amirah Developments wanted something different for Crown Palace.",
    idea: [
      "A development inspired by royal European architecture deserved an evening built to the same standard. We curated an exclusive, invite-only launch targeting Dubai's most relevant real estate voices including investors, high-net-worth buyers, top brokers, and regional media. Every touchpoint from invitation to entry was crafted to signal that this was a different kind of real estate launch, one built on experience, not just announcement.",
    ],
    execution: [
      "We held the launch on November 20, 2025 at Al Joud Ballroom, Al Habtoor City, one of Dubai's most prestigious event addresses. 500 guests filled the room including investors, brokers, media representatives, and industry leaders, all gathered for the formal introduction of Crown Palace.",
      "Every detail of the evening was managed by Media Mantra, from the event concept and guest experience to the media narrative that ran alongside it. Press materials positioned Crown Palace firmly within Dubai South's growth story, and post-event media outreach pushed the story across the region's leading publications.",
      "Post-event, we drove regional media coverage to amplify what happened in that room to audiences far beyond it.",
    ],
    results: [
      "500 guests attended, including investors, brokers, media, and industry leaders",
      "Coverage featured in Khaleej Times, Zawya, MENAFN, Middle East News 247, Gulf Today, Trade Arabia, and mid-east.info",
      "Crown Palace positioned as one of Dubai South's most significant new residential addresses across regional publications",
      "Muhammad Yousuf Jafrani's founder quote on Dubai South's growth vision picked up across multiple outlets, driving brand credibility beyond the event",
    ],
    resultsHighlights: [
      { value: "500", label: "Launch guests" },
      { value: "6+", label: "Regional publications" },
      { value: "UAE", label: "Markets covered" },
    ],
    heroImage: "/campaigns/amirah-developments/campaign-01-hero.jpg",
    accent: "from-mm-gold/35 to-mm-royal/40",
    campaignImages: [
      "/campaigns/amirah-developments/campaign-01-hero.jpg",
      "/campaigns/amirah-developments/campaign-02-event-stage.jpg",
      "/campaigns/amirah-developments/campaign-04-habtoor-launch.jpg",
      "/campaigns/amirah-developments/campaign-03-brand.webp",
    ],
  },
  "swastik-wellbeing": {
    slug: "swastik-wellbeing",
    title: "Swastik Wellbeing · #BloomInAbundance",
    brand: "Swastik Wellbeing Sanctuary",
    campaign: "#BloomInAbundance",
    category: "Health & Wellness",
    brief: [
      "The challenge in a market full of wellness pitstops claiming transformation, how do you prove yours is real?",
      "Swastik Wellbeing Sanctuary was built to be something else entirely. Set across 51 acres in Peacock Valley, Pune, with hobbit-home-styled guhas, an 11,000 sq ft meditation hall, and a philosophy rooted in 5 dimensions of life, Health, Wealth, Love, Bliss, and Spirituality. Our job was to make sure people actually believed that.",
    ],
    excerpt:
      "The challenge in a market full of wellness pitstops claiming transformation, how do you prove yours is real?",
    idea: [
      "We decided to let the experience do the talking. Literally.",
      "Instead of running ads or placing promotional features, we built a campaign #BloomInAbundance around people whose audiences already trusted them. Celebrities, influencers, nutritionists, spiritual healers, couples, & wellness advocates. That word-of-mouth authenticity was worth far more than any brand-produced content.",
      "We mapped collaborations to Swastik's 5 dimensions so every piece of content had purpose. A nutritionist shares Sattvic food. A couple on a healing retreat together. A spiritual healer doing chakra cleansing. A fitness icon doing Surya Namaskar in the meditation dome. Each collaboration reinforced its multi-dimensional positioning over and over again.",
      "Simultaneously, we brought in journalists and writers from CAT A publications across travel, architecture, luxury lifestyle, and interior design for media FAM experiences.",
    ],
    execution: [
      "We engaged 26 celebrities and 57 influencers, all on a barter basis, no paid amplification.",
      "For Health, we collaborated with celebrity integrative nutritionist Neha Ranglani, actress and fitness personality Vidya Malavade, nutrition expert Kavita Devgan, wellness coach Isha Lall, Gunjan Taneja, and yoga practitioner Jenil Dholakia. Vidya gave us 5 Instagram story shoutouts, 2 reels, and a carousel post. Kavita added a LinkedIn post to the mix.",
      "For Wealth, the anchor was Kabir Bedi, veteran actor, global face who did a reel and a personal testimonial after a five-day stay with daughter Pooja Bedi. Malini Aggarwal (MissMalini), TV host and entrepreneur, delivered 20 story shoutouts and 2 reels. Reshma Bombaywalla gave 18 stories and a reel. Aanjali Agarwal added 21 stories, 2 reels, and a carousel.",
      "For Love, Rubina Dilaik and Abhinav Shukla spent the New Year at Swastik, pulling 30,517 likes and their YouTube video crossed 728,885 views. Poppy Jabbal and Karan Grover did a reel together after their stay. Vidhi Agarwal & Abhinandan Jain contributed 2 reels and 8 stories.",
      "For Bliss, actress Nauheed Cyrusi's yoga reel gathered 10,170 likes. Jinal Imandar gave 32 story shoutouts and 2 reels. Radhika Bangia's post crossed 9,895 likes. Krissann Barretto, Ridhima Pandit, Reyna, and Divya Seth Shah each contributed reels and story series.",
      "For Spirituality, Kamya Buch (30 story shoutouts, 1 reel) called Swastik \"the peak of luxury wellness in India\". Parul H Kakad gave 28 stories and a reel. Archana L Pania, Junelia Aguiar, Mridula Kanwar, and Vidhi Agarwal rounded out the cohort with deeply personal content about meditation, breathwork, and cow-petting therapy.",
      "On the media side, we secured features across Man's World, Entrepreneur India Magazine (national edition, pages 64-65), The Hindu Sunday Magazine (page 1, April 2025), Times of India (Delhi, Gurugram, & Kolkata editions), StyleSpeak, Sunday Mid-day, The New Sunday Express Magazine, The Daily Guardian, Exotica, and Soul of Hospitality. Online, coverage ran in Architectural Digest India, Harper's Bazaar, Business Today, India Today, Femina, The Hindu, Moneycontrol, Luxebook, and Zee Zest.",
    ],
    results: [
      "From 2,629 Instagram followers in November 2024 to 30,500 by March 2025. That is the simplest way to describe what happened. Here is the fuller picture:",
      "Total CAT A coverages with Swastik in headline: 350+",
      "Online CAT A coverages (Swastik in headline): 100+",
      "Print CAT A coverages (Swastik in headline): 80+",
      "Reach via media coverage: 50+ Million",
      "Celebrities collaborated: 26",
      "Influencers collaborated: 57",
      "Total social reach: 100+ Million",
      "Increase in booking queries: 30%",
      "Bookings attributed to celeb/influencer campaign: 20%+",
    ],
    resultsHighlights: [
      { value: "30.5K", label: "Instagram followers" },
      { value: "350+", label: "CAT A coverages" },
      { value: "100M+", label: "Social reach" },
    ],
    heroImage: "/campaigns/swastik/campaign-01-wellness-holiday-program.png",
    accent: "from-mm-graphite/50 to-mm-gold/30",
    campaignImages: [
      "/campaigns/swastik/campaign-01-wellness-holiday-program.png",
      "/campaigns/swastik/campaign-02-dhyan-vihar-aerial.png",
      "/campaigns/swastik/campaign-03-resort-swing-lifestyle.png",
      "/campaigns/swastik/campaign-04-dining-experience.png",
    ],
  },
  "boat-middle-east": {
    slug: "boat-middle-east",
    title: "boAt Middle East · Ramadan Gifting 2026",
    brand: "boAt Middle East",
    campaign: "boAt for Ramadan Gifting 2026",
    category: "Consumer Electronics · Regional",
    brief: [
      "boAt Middle East has a clear ask to make their audio products the gift of Ramadan 2026. With 3 products 'Nirvana Crystal, Partypal 63 Pro, and Rockerz 480' on the table, we had one cultural moment to own. The challenge was earning genuine resonance in a market where audiences can spot an inauthentic campaign instantly, and where Ramadan storytelling demands real cultural fluency.",
    ],
    excerpt:
      "boAt Middle East has a clear ask to make their audio products the gift of Ramadan 2026.",
    idea: [
      "Culture-first, feed-native storytelling built around micro-influencers who actually live Ramadan, speak its language, and carry real credibility with their audiences. We moved away from polished brand-speak and built a campaign around personal, lived-in narratives. Each creator told their own story. boAt just happened to be in it.",
    ],
    execution: [
      "We activated a sharp mix of micro-influencers across the region, each chosen for cultural fit over follower count. Creators wore the products, gifted them, unboxed them with genuine joy, and wove them into their own Ramadan moments. Collab reels ran across Instagram, giving boAt co-branded reach through voices audiences already trusted. Stories spanned gifting rituals, personal reflection, and everyday moments, keeping boAt present across the full arc of Ramadan rather than a single campaign burst.",
    ],
    results: [
      "12 micro-influencers activated across UAE and wider GCC",
      "30+ pieces of content published across Instagram Reels and Stories",
      "2.5 million+ total reach across all creator and collab content",
      "600K+ combined reel views across the campaign",
      "Average engagement rate of 4.8%, well above the regional platform benchmark of 2.1%",
      "Campaign ran across the full arc of Ramadan 2026, February 17 to March 19, sustaining presence through peak gifting weeks",
    ],
    resultsHighlights: [
      { value: "2.5M+", label: "Total reach" },
      { value: "600K+", label: "Reel views" },
      { value: "4.8%", label: "Engagement rate" },
    ],
    heroImage: "/campaigns/boat-middle-east/campaign-02-ramadan-gifting.png",
    accent: "from-mm-royal/40 to-mm-gold/35",
    campaignImages: [
      "/campaigns/boat-middle-east/campaign-01-uae-launch.png",
      "/campaigns/boat-middle-east/campaign-02-ramadan-gifting.png",
      "/campaigns/boat-middle-east/campaign-03-dubai-creator-ramadan.png",
      "/campaigns/boat-middle-east/campaign-04-earbuds-product.png",
    ],
  },
  archies: {
    slug: "archies",
    title: "Archies · Hai Toh Celebration Hai",
    brand: "ARCHIES LIMITED",
    campaign: "Archies Hai Toh Celebration Hai",
    category: "Retail & Gifting",
    brief: [
      "Everyone knows Archies, it's woven into the emotional memory of India. But memory is different from relevance. By 2022, a new generation was growing up in a world of e-vouchers, Instagram DMs, and five-minute deliveries. Gifting had been reduced to a link in a WhatsApp chat. The physical, thoughtful act of choosing a gift was becoming a ritual of past.",
      "The challenge was that could something beloved by one generation become an obsession of the next without losing its soul in the process?",
    ],
    excerpt:
      "Everyone knows Archies, it's woven into the emotional memory of India. But memory is different from relevance.",
    idea: [
      "India had never stopped celebrating. From Mother's Day, Father's Day, Valentine's, Diwali, and Rakshabandhan to Friendship Day, we celebrate all. What had changed was how people were doing it.",
      "The strategy was to own the idea that Archie's anchor celebration. That no amount of digital convenience can replace the feeling of being genuinely remembered.",
      "We built a belief system with \"Archies Hai Toh Celebration Hai\" and repositioned the brand from a nostalgic gifting brand to a modern expression of emotion and ritual across 3 years of culturally-rooted storytelling in India's metros.",
    ],
    execution: [
      "Year 1: 2022",
      "The first year was about reclaiming the narrative. Economic Times and Business Today ran features framing Archies as a category innovator. The Times of India reported on the growth of personalised gifting, with the brand prominently featured.",
      "On ground, we partnered with influencers, mCaffeine, and CRY Foundation, building associations that connected Archies to modern India's values of sustainability, family, and emotional honesty. On social, interactive polls and quizzes revived vintage Archies moments and generated organic engagement that paid media cannot manufacture.",
      "Year 2: 2023",
      "Leveraging Q-commerce reality, we partnered with Blinkit and Amazon, putting Archies products in consumers hands within minutes during peak gifting windows. ET Now and Financial Express covered the brand's digital evolution, framing it as a story of legacy meeting innovation.",
      "The year's most talked-about move was launch of Ama, brand's new giraffe mascot built to win over Gen Z and a bridge to kids category. Afaqs covered the launch. A digital video campaign brought \"Archies Hai Toh Celebration Hai\" ethos to screens across the country. Festive collaborations with Skillmatics turned Christmas gifting into a cultural moment across platforms.",
      "Year 3: 2024-2025",
      "By year three, we did sub-campaigns around every major occasion such as Mother's Day, Father's Day, Valentine's Day, Rakshabandhan, and Friendship Day. Each rooted in the same belief that real celebration deserves real thought.",
      "Brand collaborations expanded to EaseMyTrip, Meena Bazaar, Zepto, Blinkit, and Swiggy, embedding Archies into gifting moments across categories. Metro PR amplification ran as a consistent thread throughout, with coverage across ETPrime, BrandWagon, Times Entertainment, and Financial Express.",
    ],
    results: [
      "Over 3 years, 100+ spokesperson and brand profile interviews across retail and business media.",
      "34 press releases disseminated, covering campaign launches, collaborations, and global expansion.",
      "300+ product inclusions across lifestyle, retail media, and radio on stations like IshqFM, Punjabi Fever, Radio One, and RedFM.",
      "350+ influencer partnerships activated, including Yuvika Abrol, LBB, and iDiva.",
      "Brand collaborations with EaseMyTrip, Meena Bazaar, Skillmatics, PVR Cinema, and Color Essence extended reach into new audiences.",
      "20+ panel discussions and podcast appearances, from Josh Talks to ET Now, kept Archies leadership at the centre of retail conversation.",
      "In January 2024, the month before Valentine's Day, Archies recorded 28% growth.",
    ],
    resultsHighlights: [
      { value: "100+", label: "Spokesperson interviews" },
      { value: "350+", label: "Influencer partnerships" },
      { value: "28%", label: "Valentine's growth" },
    ],
    heroImage: "/campaigns/archies/campaign-04-storefront.png",
    accent: "from-mm-gold/35 to-mm-royal/30",
    campaignImages: [
      "/campaigns/archies/campaign-02-banner.png",
      "/campaigns/archies/campaign-03-retail.png",
      "/campaigns/archies/campaign-04-storefront.png",
    ],
  },
  "opg-mobility": {
    slug: "opg-mobility",
    title: "OPG Mobility · #EVeryMoveMatters",
    brand: "OPG MOBILITY",
    campaign: "#EVeryMoveMatters",
    category: "Mobility & EV",
    brief: [
      "Okaya EV had spent 4 decades building one of India's most trusted names in batteries and power electronics. But with the EV market moving fast, rebranding from a battery brand to OPG Mobility was a declaration for building for the road ahead.",
      "At India's biggest automotive stage, Bharat Mobility Global Expo 2025, the requirement was to:",
      "Introduce a new brand",
      "Launched a new product, Ferrato DEFY 22, an electric scooter priced at Rs. 99,999, built specifically for Indian roads, Indian weather, and Indian riders.",
    ],
    excerpt:
      "Okaya EV had spent 4 decades building one of India's most trusted names in batteries and power electronics.",
    idea: [
      "The EV conversation in India had a perception problem that it's premium and complicated. OPG's answer was to reframe the entire category. Every move towards sustainability counts, whether it is a company rebranding around clean mobility or a daily commuter switching from petrol to electric. The DEFY 22 was proof that this future is accessible and already here.",
      "#EVeryMoveMatters.",
      "The campaign used the double meaning deliberately. Every EV move matters for the planet. And every move OPG made, from the rebrand to the product launch to the media strategy, was a step in that direction.",
    ],
    execution: [
      "The Bharat Mobility Global Expo 2025 was the launchpad. We made sure every angle of story was covered, from brand transformation and product reveal to the larger narrative around accessible clean mobility.",
      "The rebranding story ran through media channels that matter in auto and business space, framing company's move from legacy battery expert to a full-scale, design-led electric mobility brand.",
      "Publications from Economic Times and ET Auto to Autocar, DriveSpark, Social Samosa, Rajasthan Patrika, Dainik Bhaskar, and United News of India covered the rebrand across English, Hindi, and regional language media.",
      "For DEFY 22, our approach was to let product do the talking across every format. Launch releases detailed the specs. Demo coverage gave journalists and influencers time with the bike. Influencer content, explainer videos, and pre-booking buzz on social media ran alongside traditional PR, creating a multi-platform moment around a single product.",
      "OPG's leadership was positioned as voices of India's clean mobility future throughout. Anshul Gupta, Managing Director of OPG Mobility, featured in interviews on manufacturing scale, sustainability strategy, and brand's long-term roadmap, giving the rebrand a credible human face and reinforcing company's 45-acre, 1-million-unit-per-year production capacity.",
    ],
    results: [
      "500+ media coverages across national, auto, tech, and regional publications, with zero negative coverage.",
      "193 focused stories captured Okaya to OPG transformation",
      "270 Ferrato DEFY 22 product features and reviews across auto and tech verticals.",
      "60 electronic auto media shows featured DEFY 22. NDTV India, News Nation, Times Drive, and regional TV channels covered the launch, with the scooter's Rs 99,999 price point and 80 km range becoming the two most-repeated facts across coverage.",
      "With 80+ journalists on-ground spanning national, auto, tech, and regional publications at Bharat Mobility Global Expo.",
      "Pre-booking for DEFY 22 opened at Rs. 499 and generated strong traction on booking site and dealership enquiries within days of campaign going live.",
    ],
    resultsHighlights: [
      { value: "500+", label: "Media coverages" },
      { value: "270", label: "DEFY 22 features" },
      { value: "80+", label: "Journalists on-ground" },
    ],
    heroImage: "/campaigns/opg-mobility/campaign-01-exhibition-booth.png",
    accent: "from-mm-royal/50 to-mm-graphite/50",
    campaignImages: [
      "/campaigns/opg-mobility/campaign-01-exhibition-booth.png",
      "/campaigns/opg-mobility/campaign-02-product-spokesperson.png",
      "/campaigns/opg-mobility/campaign-03-red-scooter-display.png",
      "/campaigns/opg-mobility/campaign-04-connected-dashboard.png",
    ],
  },
  "isma-crisis-pr": {
    slug: "isma-crisis-pr",
    title: "ISMA · #TurningCrisisIntoOpportunity",
    brand: "ISMA Crisis PR",
    campaign: "#TurningCrisisIntoOpportunity",
    category: "Crisis Communications",
    brief: [
      "On March 12, 2025, Indian Sugar and Bio-Energy Manufacturers Association (ISMA) issued its routine press release on revised sugar production estimates for 2024-25, projecting 264 lakh tonnes after ethanol diversion, with 233.09 lakh tonnes produced as of March 10 across 228 operating mills.",
      "Within days, messages began circulating across industry WhatsApp groups questioning ISMA's credibility, accusing it of bias toward private sugar mills and disputing the accuracy of its methodology. This was compounded when NFCSF (National Federation of Cooperative Sugar Factories Limited) issued a counter press release projecting a lower estimate of 259 lakh tonnes, citing a 16.11% production decline to 237.15 lakh tonnes and raising uncertainty around earlier figures. Several media houses covering the story had little prior familiarity with ISMA's work, which meant accusations landed without context or pushback.",
      "ISMA's reputation as a credible, scientifically rigorous industry body was under direct attack, and the window to respond was narrow.",
    ],
    excerpt:
      "On March 12, 2025, Indian Sugar and Bio-Energy Manufacturers Association (ISMA) issued its routine press release on revised sugar production estimates for 2024-25.",
    idea: [
      "We went on front foot. Our goal was to move the story from dispute to credibility, using ISMA's own data and legacy to do it.",
    ],
    ideaSectionTitle: "Approach",
    execution: [
      "On March 19, 2025, we issued a counter press release titled \"Sugar Industry Stable with Adequate Stocks and Positive Future Outlook\". It reinforced ISMA's revised production estimate of 264 lakh tonnes, acknowledged the government's progressive policy stance on ethanol, and laid out the scientific methodology behind ISMA's projections in clear, accessible language.",
      "Alongside, we arranged 8 one-on-one media interactions for Mr Deepak Ballani, Director General of ISMA, with some of India's most influential financial and business publications: Reuters, Bloomberg, PTI TV, The Economic Times, NDTV Profit, ET Now, ET Now Swadesh, and Zee Business. Each interaction gave ISMA's leadership the space to explain association's perspective directly, address inaccuracies in the competing narrative, and restate facts on record.",
      "We also deliberately reached out to media outlets that had previously been unfamiliar with ISMA, building new relationships and expanding pool of journalists who understood the association's role and rigour.",
    ],
    results: [
      "33 positive articles generated via press release, including 22 pieces in Tier A media: The Hindu, Hindu Business Line, Economic Times, Reuters, IANS, ANI, Moneycontrol, CNBC TV18, The Statesman, Kisantak, Chinimandi, and IANS Business.",
      "8 articles generated directly from DG interviews, with coverage in Reuters, Bloomberg, PTI TV, Economic Times, NDTV Profit, ET Now, ET Now Swadesh, and Zee Business.",
      "Additional coverage appeared in Financial Express, Business Standard, ABP News, Times of India, CNBC Awaaz, and other mainline publications, spanning print, digital, and broadcast.",
    ],
    resultsHighlights: [
      { value: "33", label: "Positive articles" },
      { value: "22", label: "Tier A pieces" },
      { value: "8", label: "DG interview hits" },
    ],
    heroImage: "/campaigns/isma/campaign-02-sugarcane-farmer.png",
    accent: "from-mm-royal/60 to-mm-graphite/55",
    campaignImages: [
      "/campaigns/isma/campaign-01-smart-agri-post.png",
      "/campaigns/isma/campaign-02-sugarcane-farmer.png",
      "/campaigns/isma/campaign-03-et-now-dg-interview.png",
      "/campaigns/isma/campaign-04-moneycontrol-opinion.png",
    ],
  },
  lpu: {
    slug: "lpu",
    title: "LPU · Path to Olympic Glory",
    brand: "Lovely Professional University (LPU): Paris Olympics",
    campaign: "LPU's Path to Olympic Glory",
    category: "Education & Sports Communications",
    brief: [
      "LPU had something genuinely remarkable on its hands. A record 24 students represented India at Paris 2024, with another 11 competing at Paralympics. Great numbers need a great story to travel. LPU needed a PR campaign that could land this achievement across national media, position them as India's premier sports institution, and hold attention through an entire Olympic cycle. We got to work.",
    ],
    excerpt:
      "LPU had something genuinely remarkable on its hands. A record 24 students represented India at Paris 2024, with another 11 competing at Paralympics.",
    idea: [
      "One in five Indian Olympians in Paris came from LPU. That's a sentence that stops people mid-scroll. We built our entire campaign around it. Our approach was to shift LPU's narrative from \"university with good sports facilities\" to \"institution that built India's Olympic team.\" That framing gave every journalist, editor, and reader a reason to care. We paired it with a bold, high-value felicitation event where LPU put real money behind its athletes, making the story tangible and giving audiences something to rally around.",
    ],
    execution: [
      "We structured the campaign in two phases, pre-Games buzz and post-Games amplification, each driven by a press release crafted to land hard in a competitive news environment.",
      "For the first phase, we pitched LPU's record-breaking Olympic representation across national and regional media, conducting 5 exclusive interviews with LPU athletes and their coaches. Campus visits for media gave journalists first-hand access to the sports infrastructure that produced these athletes, grounding the story in something real and visual. Stories ran in Times of India, Hindustan Times, and PTI, reaching audiences across print and digital.",
      "Once Paris was underway, we worked through LPU's show of loyalty toward its athletes including their public backing of Vinesh Phogat during one of the Games' most discussed moments, with a ₹25 lakh cash reward reserved in her honour regardless of outcome. That gesture generated a wave of coverage on its own.",
      "Post-Games, we activated an Olympic Felicitation Ceremony on campus, where LPU announced ₹2.5 crore in prize money for its Olympians including Harmanpreet Singh and 10 members of the Indian hockey team. We drove media attendance and social amplification around the event, with broadcast coverage landing on News 18 and Lokmat TV alongside online coverage across education and sports verticals.",
    ],
    results: [
      "230 pieces of coverage, total. 95 in the pre-event phase, 135 post-event.",
      "PR value of ₹2.3 crore generated across national print, digital, and broadcast media including Times of India, Hindustan Times, PTI, Shiksha.com, and major regional TV channels.",
      "Media coverage ranged from hard news to human interest, from education desks to sports pages, giving LPU's story width across audiences that a single-track campaign rarely achieves.",
    ],
    resultsHighlights: [
      { value: "230", label: "Total coverage" },
      { value: "₹2.3 Cr", label: "PR value" },
      { value: "24", label: "Paris Olympians" },
    ],
    heroImage: "/campaigns/lpu/campaign-02-neeraj-chopra-gold.png",
    accent: "from-mm-royal/55 to-mm-gold/40",
    campaignImages: [
      "/campaigns/lpu/campaign-02-neeraj-chopra-gold.png",
      "/campaigns/lpu/campaign-01-paris-olympics-contingent.png",
      "/campaigns/lpu/campaign-03-vinesh-phogat-ceremony.png",
    ],
  },
  "blaupunkt-audio": {
    slug: "blaupunkt-audio",
    title: "Blaupunkt · Rejoice Every Moment",
    brand: "Blaupunkt",
    campaign: "Blaupunkt Rejoice Every Moment",
    category: "Consumer Electronics",
    brief: [
      "Blaupunkt came to Media Mantra with a three-part challenge. First, carve out a distinct identity in a market packed with audio brands fighting for the same shelf space. Second, make ANC (Active Noise Cancellation) technology feel relevant and desirable to consumers in Tier 2 and Tier 3 cities, where awareness of premium audio tech is still catching up. Third, build a brand reputation strong enough to hold every journalist's confidence across a full year. We took it on.",
    ],
    excerpt:
      "Blaupunkt came to Media Mantra with a three-part challenge. First, carve out a distinct identity in a market packed with audio brands fighting for the same shelf space.",
    idea: [
      "India's audio market is loud. Everyone claims to be best-in-class. Blaupunkt's edge was German technology, genuine ANC innovation, and a product range that competed hard at every price point. Our job was to translate that into a media narrative sharp enough to cut through category noise.",
      "We built two campaign pillars. The first, \"Buzz for the Launch,\" centred on Blaupunkt's ANC technology story and what it genuinely meant for Indian consumers. The second, \"Making it to THE List,\" focused on getting Blaupunkt products onto the recommendation lists that Indian buyers actually read before they purchase. Mint's best headphones under ₹2000. Hindustan Times' top 10 soundbars. These lists are where buying decisions live, and we made sure Blaupunkt was on them.",
    ],
    execution: [
      "We mapped out a pan-India media strategy across CAT A financial publications, mainline titles, and vernacular outlets, targeting journalists who could shift product perception at every level of the market.",
      "For flagship coverage, we pitched standalone stories, by-line articles, and product features to Times of India, Hindustan Times, Indian Express, Financial Express, Digit, BGR, Zee News, Amar Ujala, Dainik Jagran, Dainik Bhaskar, and Punjab Kesari, among others. Reviews landed in Lallantop (India Today), The Hindu, Deccan Chronicle, and GizmoChina, each one reinforcing Blaupunkt's credibility across a different reader's world.",
      "To build understanding of ANC technology beyond metro audiences, we ran agenda-based closed-door meetings and Zoom interactions with key publication editors, business magazine teams, and TV channels. These sessions gave journalists a proper education on what ANC does and why it matters, turning them into informed advocates rather than passive recipients of a press release.",
      "Proactive industry story pitches on consumer tech trends and retail cycles kept Blaupunkt visible between product launches, including a story on Black Friday electronics sales trends in BW Retail that kept brand momentum alive through peak shopping season.",
    ],
    results: [
      "500+ pieces of coverage in a single year.",
      "400+ journalists engaged across PAN India.",
      "Media stories on Blaupunkt ANC technology grew by 85%, and 85% of those stories positioned Blaupunkt as a key industry player in India.",
      "Relations were built and sustained with 200+ senior journalists across India's leading publications.",
      "On the business side, Blaupunkt saw a 75% increase in new customer acquisition in just 6 months, and market share grew by 85%.",
    ],
    resultsHighlights: [
      { value: "500+", label: "Media coverages" },
      { value: "400+", label: "Journalists engaged" },
      { value: "75%", label: "New customer acquisition" },
    ],
    heroImage: "/campaigns/blaupunkt/campaign-01-headphones-gaming-latency.png",
    accent: "from-mm-royal/45 to-mm-graphite/55",
    campaignImages: [
      "/campaigns/blaupunkt/campaign-01-headphones-gaming-latency.png",
      "/campaigns/blaupunkt/campaign-02-press-hindu-boombox.png",
      "/campaigns/blaupunkt/campaign-03-authored-spatial-audio.png",
      "/campaigns/blaupunkt/campaign-04-creator-sbw550-video.png",
    ],
  },
  hartek: {
    slug: "hartek",
    title: "Hartek Group · #PoweringTheNation",
    brand: "Hartek Group",
    campaign: "#PoweringTheNation",
    category: "Power & Renewable Infrastructure",
    brief: [
      "Hartek Group is one of India's strongest names in power system solutions and downstream solar. End-to-end infrastructure, design, engineering, procurement, construction, they do all of it well. But in a sector where brand visibility is often an afterthought, Hartek's reputation had room to grow far beyond industry insiders. They needed thought leadership, a stronger public profile for founder Simarpreet Singh, and a seat at every major renewable energy conversation happening in India.",
    ],
    excerpt:
      "Hartek Group is one of India's strongest names in power system solutions and downstream solar.",
    idea: [
      "Hartek had real stories of massive solar orders, landmark substation wins, a young founder building something genuinely significant. We built a strategy around four pillars: position Hartek as a pioneer in downstream solar, build Simarpreet Singh's profile as one of India's most compelling young entrepreneurs, engage Relevant Business Media for deep-dive features, and keep Hartek central to India's biggest energy conversations through proactive trend pitching.",
    ],
    execution: [
      "We mapped India's energy and business media landscape, identified journalists who shape sector perception, and got to work on both fronts simultaneously.",
      "For Simarpreet Singh, we secured profile features that went well beyond company announcements. Indian Express positioned him among Punjab's top 5 solar company builders. Financial Express featured him in their Chai Pe Charcha with Brandwagon series. These were real conversations, and they landed accordingly.",
      "For business wins, we pitched fast and hard. PTI covered Hartek Power's Rs 474 crore solar order in Rajasthan. Economic Times reported on a 400 KV Substation order for SPRNG Energy's 300 MW solar plant. ET Energyworld covered Hartek's 2 MW solar installation for SML ISUZU with a 65,000 tonne carbon cut attached to it. Every story connected to a larger narrative about what Hartek was building for India's energy future.",
      "Proactive trend pitches on renewable energy and grid infrastructure kept Hartek visible between major announcements, inside conversations their competitors simply were sitting out.",
    ],
    results: [
      "500+ media coverages generated in six months",
      "150+ journalists engaged across PAN India",
      "94% increase in media stories since partnering with Media Mantra",
      "86.4% of all coverage landed in CAT A publications",
      "76.7% mainline national coverage, 23.3% regional",
      "Hartek Power captured 50% share of voice in its category, ahead of Hitachi Energy (33%) and L&T Power (15%)",
      "Hartek India held 100% share of voice in its segment",
      "Combined readership reach of approximately 3 billion across platforms",
    ],
    resultsHighlights: [
      { value: "500+", label: "Media coverages" },
      { value: "100%", label: "Share of voice" },
      { value: "3B", label: "Readership reach" },
    ],
    heroImage: "/campaigns/hartek/campaign-03-utility-scale-sunset.png",
    accent: "from-mm-gold/45 to-mm-royal/40",
    campaignImages: [
      "/campaigns/hartek/campaign-01-press-leadership.png",
      "/campaigns/hartek/campaign-02-leader-rooftop-solar.png",
      "/campaigns/hartek/campaign-03-utility-scale-sunset.png",
      "/campaigns/hartek/campaign-04-floating-pv-launch.png",
    ],
  },
  elecrama: {
    slug: "elecrama",
    title: "IEEMA · Your Link to Electricity",
    brand: "IEEMA",
    campaign: "Your Link to Electricity",
    category: "B2B Events & Infrastructure",
    brief: [
      "IEEMA, India's premier association for electrical and industrial electronics manufacturers, had a big moment on its hands. ELECRAMA 2023 was returning after a four-year gap, a gap carved out by COVID-19 that had cost India's trade exhibition industry Rs 3,570 crore. Audiences had moved on. Attention had scattered. We needed to rebuild momentum from scratch, take the show beyond the usual industry bubble, and get everyday Indians, not just the global electrical ecosystem excited about what ELECRAMA represented for the country's energy future.",
    ],
    excerpt:
      "IEEMA, India's premier association for electrical and industrial electronics manufacturers, had a big moment on its hands.",
    idea: [
      "We built our strategy around making ELECRAMA genuinely local, and making IEEMA genuinely credible as India's foremost voice in electrical and electronics manufacturing.",
      "Going hyper-local meant roadshows across 10+ cities, content in vernacular languages, and stories simple enough for a layman to understand while substantial enough for industry leaders to take seriously. Building IEEMA's authority meant thought leadership coverage, proactive industry pitching, Relationship Building Measures with key media, and introducing a first-of-its-kind recognition platform  \"Electraverse Spark Awards.\"",
    ],
    execution: [
      "We ran a 360-degree media campaign across national, regional, and vernacular platforms simultaneously.",
      "Roadshows across 10+ cities gave ELECRAMA 2023 a physical presence in markets far beyond Greater Noida, with each city generating its own localised press coverage. Press releases went out in 15+ cities across the 5-day event, each tied to a different story angle, from launch announcements to session highlights to business numbers.",
      "On the national front, we secured coverage in Business Today, Economic Times, Business Standard, Times of India, Financial Express, PTI, ANI, Mint, The Hindu BusinessLine, and Deccan Chronicle. ET Energyworld ran thought leadership pieces positioning IEEMA's president as a voice on supply chain challenges and India's $130 billion electrical equipment industry target by 2030. Union Minister R K Singh's address at ELECRAMA on' India adding 200 GW of generation capacity in 9 years' became a major news moment we amplified across outlets.",
      "Vernacular coverage landed in Dainik Jagran, Dainik Bhaskar, Amar Ujala, Punjab Kesari, and Kannada Prabha, ensuring the story reached audiences in their own language. One-on-one media interactions with IEEMA leadership and participating company executives kept story pipelines full throughout.",
    ],
    results: [
      "1000+ total media coverages generated",
      "1500 pieces of coverage through roadshows alone across 10+ cities, averaging 150+ per city",
      "600+ pieces of mainline and vernacular CAT A coverage generated in just 5 days through 6 press releases",
      "500+ journalists engaged across PAN India",
      "Business queries of close to $10 billion USD generated, $4 billion more than ELECRAMA 2019",
      "Footfall reached 37,500 with 700 buyers from 75+ countries",
      "5000 spot walk-in business meetings generated directly through media visibility at exhibition stalls",
      "65% increase in market share recorded",
      "Coverage split: 60% press releases, 40% profiling, 10% industry stories, 10% authored articles",
      "0 negative stories across entire campaign duration",
    ],
    resultsHighlights: [
      { value: "1000+", label: "Media coverages" },
      { value: "$10B", label: "Business queries" },
      { value: "37,500", label: "Event footfall" },
    ],
    heroImage: "/campaigns/elecrama/campaign-01-gateway-2023.png",
    accent: "from-mm-royal/50 to-mm-graphite/40",
    campaignImages: [
      "/campaigns/elecrama/campaign-01-gateway-2023.png",
      "/campaigns/elecrama/campaign-02-eaton-booth.png",
      "/campaigns/elecrama/campaign-03-delegation-group.png",
      "/campaigns/elecrama/campaign-04-electraverse-startup.png",
    ],
  },
};

/** Linked from services — not in main case study document order */
export const supplementalCaseStudies: CaseStudy[] = [
  {
    slug: "mythali",
    title: "MyThali · Healthy Eating Awareness",
    brand: "Arogya World · MyThali",
    campaign: "#TurnThePackage · #MeriHealthyWaliDiwali",
    category: "Health & Social",
    brief: [
      "MyThali is a global health non-profit initiative by Arogya World, dedicated to combating non-communicable diseases by promoting health education and balanced nutrition rooted in Indian dietary guidelines.",
      "The task was to create awareness around healthy eating habits — helping audiences interpret food labels, make informed choices, and adopt balanced meal patterns through social-first storytelling.",
    ],
    excerpt:
      "Social and influencer campaigns to raise awareness of healthy eating, balanced meals, and informed food choices for Arogya World's MyThali initiative.",
    idea: [
      "Campaigns were built around MyThali's unique proposition — Poshan (good nutrition) and portion (eating the right quantity) — through targeted social arcs including #TurnThePackage, #RedSareeChallenge, #NotSoFast, and #Superchef Challenge.",
      "Paid promotions and creator collaborations amplified reach while keeping the message accessible, festive, and culturally relevant for Indian audiences.",
    ],
    execution: [
      "Ran multi-track social campaigns educating the public on reading packaged food labels and making healthier choices.",
      "Activated 50+ influencer collaborations across Instagram reels, stories, and festive content including Meri Healthy Wali Diwali.",
      "Deployed paid social to extend reach and drive engagement across priority health and lifestyle audiences.",
    ],
    results: [
      "2.3M+ reach across campaign activity",
      "50+ influencer collaborations",
      "2K+ follower growth on priority channels",
      "1.4M+ individuals reached through MyThali Instagram posts, celebrity reels, and influencer videos during festive campaigns",
    ],
    resultsHighlights: [
      { value: "2.3M", label: "Campaign reach" },
      { value: "50+", label: "Influencer collaborations" },
      { value: "1.4M+", label: "Festive campaign reach" },
    ],
    heroImage: "/campaigns/mythali/campaign-01-hero.png",
    accent: "from-mm-gold/40 to-mm-royal/45",
    campaignImages: ["/campaigns/mythali/campaign-01-hero.png"],
  },
];

export const commercialCaseStudies: CaseStudy[] = CASE_STUDY_DOCUMENT_ORDER.map((slug) => ({
  ...caseStudyBySlug[slug],
  section: "commercial" as const,
}));

export { GOVERNMENT_CASE_STUDY_INTRO, GOVERNMENT_CASE_STUDY_ORDER } from "@/data/government-case-studies";
export { governmentCaseStudies };

export const caseStudies: CaseStudy[] = [
  ...commercialCaseStudies,
  ...governmentCaseStudies,
  ...supplementalCaseStudies,
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudiesBySlugs(slugs: readonly string[]): CaseStudy[] {
  return slugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));
}
