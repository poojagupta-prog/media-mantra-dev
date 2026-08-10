"use client";

import { HiArrowRight } from "react-icons/hi2";
import { homeContactStrip } from "@/data/home-content";
import { useContactLead } from "@/components/contact/contact-lead-context";
import { Container } from "@/components/ui/container";

/** Homepage closing strip — deck: graphite band with contact CTA. */
export function HomeContactStrip() {
  const { openContact } = useContactLead();

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-mm-graphite px-6 py-14 sm:py-16 lg:scroll-mt-32 lg:pb-20"
      aria-label={homeContactStrip.headline}
    >
      <Container className="flex max-w-[920px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          {homeContactStrip.label.trim() ? (
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homeContactStrip.label}</p>
          ) : null}
          <h2
            className={`font-display text-[clamp(1.65rem,3.2vw,2.35rem)] font-semibold leading-tight text-mm-white ${homeContactStrip.label.trim() ? "mt-3" : ""}`}
          >
            {homeContactStrip.headline}
          </h2>
          <div className="mt-5 space-y-3 font-editorial text-base leading-relaxed text-mm-light/85">
            {homeContactStrip.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={openContact}
          className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-mm-cream/25 bg-mm-graphite px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-mm-cream transition hover:border-mm-gold/45 hover:text-mm-gold"
        >
          {homeContactStrip.primaryCta}
          <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        </button>
      </Container>
    </section>
  );
}
