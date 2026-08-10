import { Container } from "@/components/ui/container";
import { homeIntro } from "@/data/home-content";

/** Intro copy — PDF section 2 (below video banner). */
export function HomeIntroSection() {
  return (
    <section
      id="intro"
      aria-labelledby="home-intro-heading"
      className="scroll-mt-28 bg-mm-charcoal py-20 lg:scroll-mt-32 lg:py-28 xl:py-32"
    >
      <Container className="max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homeIntro.label}</p>
        <h2 id="home-intro-heading" className="sr-only">
          Introduction
        </h2>
        <div className="mt-6 space-y-6 font-editorial text-base leading-[1.85] text-mm-cream/95 md:text-[1.0625rem]">
          {homeIntro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-10 h-px w-20 bg-gradient-to-r from-mm-gold/80 to-transparent" aria-hidden />
      </Container>
    </section>
  );
}
