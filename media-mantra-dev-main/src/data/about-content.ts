/** About page — aligned with approved “About Us” copy (Page 2). */

/** Hero banner — Content Doc §1 (deck: bright office visual, copy on left) */
export const aboutBanner = {
  /** Replace `public/about/about-banner.jpg` when client delivers deck slide asset */
  imageSrc: "/about/about-banner.png",
  imageAlt: "India, UAE, and Singapore — Media Mantra Global markets",
  eyebrow: "",
  headline: "Everyone Claims to Be Integrated.",
  headlineAccent: "Very Few Actually Are.",
  intro:
    "Media Mantra Global was founded in 2012 by two of India's youngest independent founders who dared to be Aggressive, Bold, and Credible and a singular belief that communications, done right, is the most powerful force in business. What began as an operation in India is today an integrated agency operating across India, UAE, Singapore, USA and Australia, one of the world's most valuable communications markets.",
} as const;

/**
 * White section — Content Doc Page 2 “AFTER BANNER CONTENT” only.
 * No headline here (banner carries “Everyone Claims…” + “It started in 2012…”).
 */
export const aboutBodyParagraphs = [
  "We combine data-driven content strategy, 360-degree strategy, digital marketing, and influencer marketing. In an industry being rapidly reshaped by AI, we are the influence that the communications world needs by using it to move faster, think sharper, and tell stories that cut through louder than ever before.",
  "Something about us that even the entire industry recognised was when Media Mantra was named PR Agency of the Year at IMAGEXX Awards 2026, PR Agency of the Year 2025 at the BW Excel Awards and Best Independent Agency of the Year 2024 at IMAGEXX Awards by Adgully.",
  "Whether it's a disruptive startup in need of building credibility with stakeholders, or a multinational company requiring brand awareness, we help brands customize a strategy that works for them. From securing coverage in relevant top-tier publications, strategic influencer marketing to encourage sales, founder storytelling or fun videos to promote on social media we help brands go viral in a crowded market across India, UAE, and Singapore. And we've been good enough at it that people keep asking us why they should choose Media Mantra over anyone else.",
  "Fair question.",
  "Keep reading.",
] as const;

/** Section 2 — pull quote between story body and founders. */
export const aboutQuote = {
  text: "From building an independent agency in India to creating a global communications network across the world's growth economies.",
} as const;

/** @deprecated Use aboutBodyParagraphs */
export const aboutHeroIntro = [aboutBodyParagraphs[0]] as const;
export const aboutRecognition = [aboutBodyParagraphs[1]] as const;
export const aboutClosing = [aboutBodyParagraphs[3]] as const;
export const aboutFoundersPrompt = {
  line: aboutBodyParagraphs[3],
  highlight: aboutBodyParagraphs[4],
} as const;

/** Founder portraits — `/about` founders section. */
export const aboutFounderImages = {
  puja: "/campaigns/leadership/campaign-01-puja-pathak.png",
  udit: "/campaigns/leadership/campaign-02-udit-pathak.png",
} as const;

export const aboutUdit = [
  "Some people talk about disrupting an industry. Udit went ahead and did it.",
  "Udit Pathak is the Global Chairman of Media Mantra Global and one of India's youngest independent PR and communications entrepreneurs. He founded Media Mantra with a vision so clear it had no room for doubt and no appetite for mediocrity.",
  "With almost two decades of experience in public relations, Udit began his career with the India Today Group before moving through some of the industry's leading PR agency India. Along the way, he developed a clear understanding of how narratives shape perception, and how the right strategy turns visibility into value.",
  "In 2012, he founded Media Mantra and built an independent communications agency that delivers measurable impact. At the firm, Udit leads business acquisition and oversees the broader growth trajectory. His approach is hands-on and analytical, identifying gaps, creating opportunities, and ensuring the business stays ahead of the curve. Equal parts strategic and accessible, he brings clarity, energy, and direction to every engagement.",
  "Over the years, he has led communications mandates for a diverse portfolio, from high-growth startups to global corporations, helping brands secure visibility, credibility, and, in many cases, critical funding momentum.",
  "The industry has taken note. Udit has been recognised as PR Agency Head of the Year 2026, Brand Communication Icon 2026, PR & Corp Comm Maestro 2024 by exchange4media, PR Agency Head of the Year at Adgully IMAGEXX Awards 2024, and PR Professional of the Year in both 2021 and 2022 by IPRCCA. He has appeared twice on exchange4media's Top 100 Influential Game Changers list and features among the Top 10 Men Leading Large PR Agencies in India.",
  "Today, Udit is driving market strategy, client advisory, and the firm's presence across India, UAE, Singapore, Australia and North America. His vision for the firm is direct: communications should be the most measurable investment a brand makes, and every engagement should produce outcomes that boardrooms can quantify.",
] as const;

export const aboutPuja = [
  "Puja Pathak founded Media Mantra and clearly defined what it would become. But she didn't do it alone.",
  "With over 20 years in communications, she is Global Managing Director as well as the strategic and operational backbone of Media Mantra Global. From client strategy to day-to-day operations, Puja oversees it all with the kind of hands-on leadership that keeps a multi-market agency running like clockwork.",
  "She's the one who looks at a brand brief and sees not just what needs to be said, but what needs to change, shaping narratives that travel across markets without losing their edge, and building editorial relationships that actually move the needle.",
  "The industry has been paying attention for a while now. Puja has earned recognition that most communications professionals spend entire careers chasing, PR Professional of the Year, Woman Entrepreneur of the Year, Mentor of the Year, PR Agency Head of the Year, and Best PR Professional of the Year. She's appeared twice on exchange4media's Top 100 Influential Game Changers list, been featured in Reputation Today, Campaign India, and IMAGEXX, and was most recently named among 50+ influential voices in IIMC Delhi's Trailblazers initiative.",
  "Puja leads Media Mantra Global's Australia practice, bringing the same editorial rigour, creative standards, and operational discipline that built the firm in India to one of the world's most demanding communications markets.",
] as const;
