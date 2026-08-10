"use client";

import { Container } from "@/components/ui/container";
import { frameworkSteps } from "@/data/framework-steps";
import { homeFrameworkIntro } from "@/data/home-content";

/** About — deck: cream band, headline left, six framework steps right with gold divider. */
export function FrameworkSection() {
  return (
    <section id="framework" className="scroll-mt-28 bg-mm-cream py-20 text-mm-graphite lg:scroll-mt-32 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <div>
            <h2 className="max-w-md font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-mm-graphite">
              {homeFrameworkIntro.label}
            </h2>
            <p className="mt-6 max-w-md font-editorial text-sm leading-relaxed text-mm-graphite/80 md:text-base md:leading-[1.75]">
              {homeFrameworkIntro.headline}
            </p>
            <div className="mt-8 h-px w-24 bg-mm-gold/70" aria-hidden />
          </div>

          <div className="relative border-l border-mm-gold/35 pl-8 sm:pl-10 lg:pl-12">
            <ol className="space-y-10 sm:space-y-12">
              {frameworkSteps.map((s, idx) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[calc(0.5rem+1px+2rem)] top-1 hidden h-2 w-2 rounded-full bg-mm-gold sm:-left-[calc(0.625rem+1px+2.5rem)] sm:block lg:-left-[calc(0.75rem+1px+3rem)]" aria-hidden />
                  <p className="font-display text-xs font-semibold tabular-nums text-mm-gold">{String(idx + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-mm-graphite md:text-xl">{s.title}</h3>
                  <p className="mt-3 font-editorial text-sm leading-relaxed text-mm-graphite/75 md:text-[15px]">{s.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
