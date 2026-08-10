"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/cn";
import { homeProven } from "@/data/home-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = homeProven.stats;

type ProvenResultsSectionProps = {
  /** Omit stat body copy for a quieter homepage rhythm */
  dense?: boolean;
};

export function ProvenResultsSection({ dense = false }: ProvenResultsSectionProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      stats.forEach((s, i) => {
        const num = el.querySelector(`[data-stat-index="${i}"]`);
        if (!(num instanceof HTMLElement)) return;
        const end = s.value;
        const obj = { v: 0 };
        ScrollTrigger.create({
          trigger: num,
          start: "top 82%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              v: end,
              duration: 2.1,
              ease: "power3.out",
              onUpdate: () => {
                let display: string;
                if (s.displayType === "mult") {
                  display = obj.v.toFixed(1).replace(/\.0$/, "");
                } else {
                  const rounded = Math.round(obj.v);
                  display =
                    rounded >= 10000
                      ? new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(rounded)
                      : rounded.toString();
                }
                num.textContent = `${display}${s.suffix}`;
              },
              onComplete: () => {
                const display =
                  s.displayType === "mult"
                    ? end.toString()
                    : end >= 10000
                      ? new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(end)
                      : Math.round(end).toString();
                num.textContent = `${display}${s.suffix}`;
              },
            });
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="proven"
      className="relative scroll-mt-28 overflow-hidden bg-mm-graphite py-24 lg:scroll-mt-32 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-1/2 top-[-22%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-mm-gold/10 blur-[130px] mm-mesh" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-4 border-b border-mm-cream/10 pb-10">
          {homeProven.label.trim() ? <SectionLabel>{homeProven.label}</SectionLabel> : null}
          {homeProven.intro.trim() ? (
            <p className="max-w-xl font-editorial text-base font-semibold leading-relaxed text-mm-cream/90 md:text-lg">{homeProven.intro}</p>
          ) : null}
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.35rem)] font-semibold uppercase leading-[1.05] tracking-tight text-mm-cream">
            {homeProven.headline}
          </h2>
        </div>

        <div
          className={`grid gap-14 sm:grid-cols-2 sm:gap-16 lg:grid-cols-5 lg:gap-0 lg:gap-y-0 ${
            homeProven.intro.trim() ? "mt-20 lg:mt-24" : "mt-12 lg:mt-16"
          }`}
        >
          {stats.map((s, i) => (
            <div
              key={s.key}
              className={cn(
                "relative flex flex-col lg:border-l lg:px-6 xl:px-8 lg:first:border-l-0 lg:first:pl-0",
                i % 2 === 0 ? "lg:border-mm-cream/[0.1]" : "lg:border-mm-gold/[0.22]",
              )}
            >
              <p
                data-stat-index={i}
                className="font-display text-[clamp(2rem,3.5vw,3.25rem)] font-semibold tabular-nums tracking-tight text-mm-gold"
              >
                {`0${s.suffix}`}
              </p>
              <p className="mt-6 text-[11px] font-semibold uppercase leading-snug tracking-[0.18em] text-mm-cream/95">
                {s.label}
              </p>
              {!dense ? <p className="mt-3 font-editorial text-sm leading-relaxed text-mm-light md:text-[15px]">{s.dek}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
