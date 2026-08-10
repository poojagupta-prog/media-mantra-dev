"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { AnimatedMetricsGrid } from "@/components/animations/animated-metrics";
import { GraphiteSection } from "@/components/theme/section-theme-wrapper";
import { homeProven } from "@/data/home-content";

interface AnimatedMetricsSectionProps {
  /** Omit stat body copy for a quieter homepage rhythm */
  dense?: boolean;
}

export function AnimatedMetricsSection({ dense = false }: AnimatedMetricsSectionProps) {
  const metricsData = homeProven.stats.map((stat) => ({
    value: stat.value,
    label: stat.label,
    format: stat.displayType === "mult" ? ("multiplier" as const) : ("number" as const),
    suffix: stat.suffix,
    dek: dense ? undefined : stat.dek,
  }));

  return (
    <GraphiteSection
      sectionId="metrics"
      className="scroll-mt-28 overflow-hidden py-24 lg:scroll-mt-32 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-1/2 top-[-22%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-mm-gold/10 blur-[130px] mm-mesh" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl space-y-4 border-b border-mm-cream/10 pb-10">
          {homeProven.label.trim() ? <SectionLabel>{homeProven.label}</SectionLabel> : null}
          {homeProven.intro.trim() ? (
            <p className="max-w-xl font-editorial text-base font-semibold leading-relaxed text-mm-cream/90 md:text-lg">
              {homeProven.intro}
            </p>
          ) : null}
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.35rem)] font-semibold uppercase leading-[1.05] tracking-tight text-mm-cream">
            {homeProven.headline}
          </h2>
        </div>

        <div className={homeProven.intro.trim() ? "mt-20 lg:mt-24" : "mt-12 lg:mt-16"}>
          <AnimatedMetricsGrid metrics={metricsData} staggerDelay={300} showDek={!dense} />
        </div>
      </Container>
    </GraphiteSection>
  );
}
