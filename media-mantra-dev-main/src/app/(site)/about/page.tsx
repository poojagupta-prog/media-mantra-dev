import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { FrameworkSection } from "@/components/home/framework-section";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  aboutBanner,
  aboutBodyParagraphs,
  aboutFounderImages,
  aboutPuja,
  aboutQuote,
  aboutUdit,
} from "@/data/about-content";

export const metadata = createMetadata({
  title: "About Media Mantra Global",
  description:
    "Founded in 2012 — integrated PR, digital, content, and influence across India, UAE, and Singapore. Founder-led, award-winning, built for what's next.",
  pathname: "/about",
});

const PREVIEW_PARAS = 2;

/** Deck: photo on top, content below, read more — side-by-side founder cards. */
function FounderColumn({
  name,
  role,
  paragraphs,
  imageSrc,
  imageAlt,
}: {
  name: string;
  role: string;
  paragraphs: readonly string[];
  imageSrc: string;
  imageAlt: string;
}) {
  const lead = paragraphs.slice(0, PREVIEW_PARAS);
  const extra = paragraphs.slice(PREVIEW_PARAS);

  return (
    <article className="flex h-full flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.25rem] border border-mm-cream/[0.1] bg-mm-graphite/40 sm:aspect-[4/5]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mm-graphite/80 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col pt-8">
        <h3 className="font-display text-xl font-semibold text-mm-white md:text-2xl">{name}</h3>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-light">{role}</p>
        <div className="mt-6 space-y-4 font-editorial text-sm leading-relaxed text-mm-light/90 md:text-[15px] md:leading-[1.8]">
          {lead.map((p) => (
            <p key={p.slice(0, 52)}>{p}</p>
          ))}
        </div>
        {extra.length > 0 ? (
          <details className="group mt-auto border-t border-mm-cream/10 pt-5">
            <summary className="cursor-pointer list-none text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-gold marker:content-none group-open:hidden [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2 border-b border-mm-gold/40 pb-1 transition hover:border-mm-gold">
                Read more
                <HiArrowUpRight className="h-4 w-4" aria-hidden />
              </span>
            </summary>
            <div className="space-y-4 font-editorial text-sm leading-relaxed text-mm-light/90 md:text-[15px] md:leading-[1.8] group-open:pt-0">
              {extra.map((p) => (
                <p key={p.slice(0, 52)}>{p}</p>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-graphite text-mm-cream">
      <section className="relative isolate min-h-[min(88svh,680px)] overflow-hidden lg:min-h-[min(82vh,720px)]">
        <Image
          src={aboutBanner.imageSrc}
          alt={aboutBanner.imageAlt}
          fill
          unoptimized
          className="z-0 object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Left grey scrim — strong under copy, fades out so photo stays visible on the right */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(88%,52rem)] bg-gradient-to-r from-mm-graphite-deep/98 from-0% via-mm-graphite/82 via-[42%] to-transparent to-100%"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-mm-graphite-deep/55 via-transparent to-mm-graphite/25"
          aria-hidden
        />

        <Container className="relative z-[2] flex min-h-[min(88svh,680px)] flex-col justify-end pb-16 pt-[6.75rem] lg:min-h-[min(82vh,720px)] lg:justify-center lg:pb-24 lg:pt-28">
          <div className="relative max-w-[44rem]">
            <div
              className="pointer-events-none absolute -inset-x-4 -inset-y-6 -z-10 rounded-[1.75rem] bg-mm-graphite-deep/50 sm:-inset-x-8 sm:-inset-y-8 lg:bg-mm-graphite-deep/35"
              aria-hidden
            />
            {aboutBanner.eyebrow ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-cream drop-shadow-sm">
                {aboutBanner.eyebrow}
              </p>
            ) : null}
            <h1
              className={`font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight text-mm-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] ${aboutBanner.eyebrow ? "mt-6" : ""}`}
            >
              {aboutBanner.headline}
              <span className="mt-3 block text-mm-cream">{aboutBanner.headlineAccent}</span>
            </h1>
            <p className="mt-8 max-w-2xl font-editorial text-base leading-[1.8] text-mm-cream drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] md:text-[1.0625rem]">
              {aboutBanner.intro}
            </p>
          </div>
        </Container>
      </section>

      <section
        id="about-story"
        aria-label="About Media Mantra Global"
        className="relative z-[1] scroll-mt-28 border-t-4 border-mm-gold/35 bg-mm-white py-16 text-mm-graphite lg:scroll-mt-32 lg:py-[5.5rem]"
      >
        <Container className="max-w-3xl">
          <div className="space-y-5 font-editorial text-[1.05rem] leading-[1.85] text-mm-graphite/82">
            {aboutBodyParagraphs.map((p, i) => (
              <p
                key={`${i}-${p.slice(0, 32)}`}
                className={i >= 3 ? "font-display text-xl font-semibold tracking-tight text-mm-brand-navy md:text-2xl" : undefined}
              >
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-label="Media Mantra Global quote"
        className="relative border-y border-mm-gold/30 bg-mm-graphite py-16 lg:py-20"
      >
        <Container className="max-w-3xl">
          <blockquote className="border-l-4 border-mm-gold pl-6 sm:pl-8">
            <p className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(1.35rem,2.8vw,2rem)] italic leading-[1.45] text-mm-cream md:leading-[1.5]">
              &ldquo;{aboutQuote.text}&rdquo;
            </p>
          </blockquote>
        </Container>
      </section>

      <section id="founders" className="scroll-mt-24 border-y border-mm-cream/[0.08] bg-mm-graphite py-16 lg:scroll-mt-32 lg:py-24">
        <Container>
          <h2 className="text-center font-display text-[clamp(1.85rem,3.3vw,2.65rem)] font-semibold uppercase leading-tight tracking-[0.04em] text-mm-white">
            Meet the youngest independent founders
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 xl:gap-12">
            <FounderColumn
              name="Udit Pathak"
              role="Founder & Director"
              paragraphs={aboutUdit}
              imageSrc={aboutFounderImages.udit}
              imageAlt="Udit Pathak — Founder & Director, Media Mantra Global"
            />
            <FounderColumn
              name="Puja Pathak"
              role="Founder & Director"
              paragraphs={aboutPuja}
              imageSrc={aboutFounderImages.puja}
              imageAlt="Puja Pathak — Founder & Director, Media Mantra Global"
            />
          </div>
        </Container>
      </section>

      <FrameworkSection />
    </main>
  );
}
