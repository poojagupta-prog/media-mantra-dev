import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { homeHopIntroSplit } from "@/data/home-content";
import { Container } from "@/components/ui/container";

/**
 * Slide 5 — directly after hero video.
 * Reference: stacked blue headline left · body + underlined CTA right · plain white.
 */
export function HomeIntroExpertiseSection() {
  const { headlineLines, introLead, introBody, cta } = homeHopIntroSplit;

  return (
    <section
      id="intro"
      className="scroll-mt-28 bg-mm-white py-[clamp(5rem,12vw,9rem)] text-mm-graphite lg:scroll-mt-32"
      aria-labelledby="home-intro-heading"
    >
      <Container className="max-w-[1440px]">
        <div className="grid items-start gap-12 sm:gap-14 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-x-[clamp(2.5rem,5vw,5rem)] xl:gap-x-20">
          <h2
            id="home-intro-heading"
            className="mm-headline-brand-blue flex min-w-0 flex-col gap-2.5 font-display text-[clamp(2rem,4.8vw,4.25rem)] font-bold uppercase leading-[1.08] tracking-[-0.01em] sm:gap-3 lg:gap-3.5"
          >
            {headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="flex min-w-0 max-w-[38rem] flex-col gap-8 font-editorial text-[0.98rem] leading-[1.8] text-mm-graphite/90 sm:text-[1.0625rem] lg:max-w-none lg:pt-1">
            <p className="font-semibold text-mm-graphite">
              {introLead.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p>{introBody}</p>
            <Link
              href={cta.href}
              className="group mt-1 inline-flex w-fit items-center gap-2 border-b border-mm-graphite/40 pb-1 text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-graphite transition hover:border-mm-brand-navy hover:text-mm-brand-navy"
            >
              {cta.label}
              <HiArrowUpRight
                className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
