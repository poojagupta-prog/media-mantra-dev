import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata = createMetadata({
  title: "Founders Vision & Global Leadership",
  description:
    "Founders' vision and global leadership across India, the Middle East, Southeast Asia, North America, and Australia.",
  pathname: "/about/founders-vision-global-leadership",
});

const leadershipContactEmail = "info@mediamantraglobal.com";

const uditVision = [
  "In 2012, Media Mantra started with a single conviction that independent agencies could build stronger brands than any network, if they were willing to be accountable for the outcome. There were no safety nets, no global holding company behind us, and no inherited client list. There was only the work.",
  "14 years in, that distinction is what still drives every decision I make.",
  "The world I am most excited about operating in is the one we are in right now, where a single idea, executed with creative precision and distributed through the right voices, can shift how an entire category is perceived in 72 hours. Where a creator with real credibility can make brands viral. Where AI is not replacing creative instinct but weaponising it and letting us move faster, see patterns earlier, tell stories that reach the exact person who needs to hear them at the exact moment they are ready to act.",
  "That is the agency we are building. Ideas first, always. Strategy in service of the idea. Technology in service of the strategy.",
  "What's next for Media Mantra Global is the question I find most energising. We went into Dubai not with a flag-planting exercise, but with a genuine conviction that communications in that market was underserved by real creative thinking. We were right. What we built there in two years took other agencies a decade. Singapore and Australia followed for the same reason.",
  "USA is the chapter I have been building toward. Our vision for the firm is that Media Mantra Global will be the communications advisory of choice for ambitious brands moving between Asia, Middle East, USA and Oceania region for global brands entering those markets. Independent, integrated, and accountable.",
] as const;

const pujaVision = [
  "My vision for Media Mantra has always been rooted in the belief to build with purpose. Build something that the people inside it are proud of. Build something where the work is honest, the culture is human, and the results speak with clarity. Everything else follows from that.",
  "What grounds me in this work is the people I work with everyday. I have always led from the place that great communications is an act of service. To the brand, to the audience, to the idea itself. When those three are in alignment, something extraordinary happens.",
  "What's next is continuing to build something that proves independent agencies can lead with the same quality, depth, and global reach as any network and with considerably more soul. We are expanding, but growth is a by-product of the work here. The work is the point.",
] as const;

const leadershipIntro =
  "Global agencies are built on people. Across every market we operate in, Media Mantra Global is led by people with deep category knowledge, established media relationships, creativity and the kind of operating fluency that only comes from years of actually doing the work in that geography.";

const leadershipBlocks = [
  {
    title: "Udit Pathak",
    role: "Founder & Global Chairman",
    region: "",
    flags: [] as const,
    body: "Udit leads global strategy, new market development, and business advisory for Media Mantra Global. He oversees all market entry decisions, major client relationships, and the firm's expansion into international markets. His philosophy is that communications that don't produce measurable business outcomes are not communications, it is noise.",
  },
  {
    title: "Puja Pathak",
    role: "Founder & Global MD",
    region: "",
    flags: [] as const,
    body: "Puja oversees all strategic operations and integrated methodology across Media Mantra Global. With 18+ years in communications, she authored the firm's editorial and operational framework, the system that allows Media Mantra to serve 600+ brands simultaneously without dropping quality. Her practice is grounded in the conviction that communications done with real purpose produce results that last beyond a campaign cycle.",
  },
  {
    title: "Middle East Leadership",
    role: "",
    region: "UAE",
    flags: ["🇦🇪"],
    body: "Our Middle East leadership operates out of Dubai's Business Bay, the commercial heart of the UAE, spearheaded by Udit Pathak. The team brings deep fluency in the region's media landscape across Arabic and English platforms, strong relationships with UAE-based editors and broadcast journalists, and an understanding of how brands communicate across a market where government, enterprise, and social media operate in distinctly different registers.",
  },
  {
    title: "Southeast Asia Leadership",
    role: "",
    region: "Singapore",
    flags: ["🇸🇬"],
    body: "Our Singapore practice operates from one of the world's most competitive communications markets where financial media, tech journalism, regional headquarters, and multilingual audiences create a uniquely demanding communications environment. The team understands how regional holding companies and Asia-Pacific headquarters evaluate their communications agencies on data, on speed, and on the quality of relationships with Tier-1 regional and international media. Our Singapore office serves as the gateway for brands moving between India, Southeast Asia, and the broader Asia-Pacific.",
  },
  {
    title: "USA Advisor",
    role: "",
    region: "United States",
    flags: ["🇺🇸"],
    body: "Media Mantra Global is establishing its North America advisory capability. Our focus is on communications strategy for three audiences: Asian and Middle Eastern brands seeking entry into the U.S. and Canadian markets; American brands seeking representation across Asia and the Gulf; and multinational companies navigating the complexity of communicating across all four of our markets simultaneously. We are actively building our America senior advisory team.",
  },
  {
    title: "Australia Leadership",
    role: "",
    region: "Australia",
    flags: ["🇦🇺"],
    body: "In Australia, our practice is led by Puja Pathak, with Chand Chaddha serving as Senior Advisor, bringing 45 years of experience in the market. Together they lead a practice built on deep editorial relationships, category expertise, and the creative conviction that defines our integrated work globally.",
  },
] as const;

function VisionBlock({
  eyebrow,
  title,
  role,
  paragraphs,
}: {
  eyebrow: string;
  title: string;
  role: string;
  paragraphs: readonly string[];
}) {
  return (
    <section className="border-t border-mm-graphite/10 py-14 lg:py-20">
      <Container className="max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-gold">{eyebrow}</p>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.06] tracking-tight text-mm-graphite">
          {title}
        </h2>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/55">{role}</p>
        <div className="mt-8 space-y-5 font-editorial text-[1.02rem] leading-[1.85] text-mm-graphite/82">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function FoundersVisionGlobalLeadershipPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-graphite text-mm-cream">
      <section className="relative isolate min-h-[min(72svh,620px)] overflow-hidden lg:min-h-[min(68vh,680px)]">
        <Image
          src="/about/founders-vision-banner.png"
          alt="Founders Vision and Global Leadership — India, UAE, Australia, USA, and Singapore"
          fill
          unoptimized
          className="z-0 object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(88%,52rem)] bg-gradient-to-r from-mm-graphite-deep/98 from-0% via-mm-graphite/82 via-[42%] to-transparent to-100%"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-mm-graphite-deep/55 via-transparent to-mm-graphite/25"
          aria-hidden
        />
        <Container className="relative z-[2] flex min-h-[min(72svh,620px)] flex-col justify-end pb-16 pt-28 lg:min-h-[min(68vh,680px)] lg:justify-center lg:pb-24 lg:pt-32">
          <div className="max-w-[44rem]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-gold">Our Vision</p>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1.03] tracking-tight text-mm-white">
              Founders Vision & Global Leadership
            </h1>
          </div>
        </Container>
      </section>

      <div className="bg-mm-cream text-mm-graphite">
        <VisionBlock eyebrow="Our Vision" title="Udit Pathak" role="Founder & Director" paragraphs={uditVision} />
        <VisionBlock eyebrow="Our Vision" title="Puja Pathak" role="Founder & Director" paragraphs={pujaVision} />
      </div>

      <section className="border-t border-mm-cream/[0.08] bg-mm-graphite py-14 lg:py-20">
        <Container className="max-w-5xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-gold">Global Leadership</p>
          <p className="mt-6 max-w-4xl font-editorial text-[1.02rem] leading-[1.85] text-mm-cream/86">{leadershipIntro}</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {leadershipBlocks.map((block) => (
              <article key={block.title} className="rounded-[1.25rem] border border-mm-cream/[0.08] bg-mm-white/[0.02] p-8">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-mm-white">{block.title}</h2>
                  <span className="flex shrink-0 gap-1.5 text-xl leading-none" aria-hidden>
                    {block.flags.map((flag) => (
                      <span key={`${block.title}-${flag}`}>{flag}</span>
                    ))}
                  </span>
                </div>
                {block.role ? (
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-gold">{block.role}</p>
                ) : null}
                {block.region ? <p className="mt-3 text-sm text-mm-light">{block.region}</p> : null}
                <p className="mt-5 font-editorial text-[15px] leading-[1.8] text-mm-cream/82">{block.body}</p>
                <a
                  href={`mailto:${leadershipContactEmail}`}
                  className="mt-6 inline-block text-sm text-mm-gold transition hover:text-mm-cream"
                >
                  Get in touch: {leadershipContactEmail}
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
