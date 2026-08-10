import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { commercialCaseStudies } from "@/data/case-studies";
import { CaseStudiesGrid } from "@/components/case-study/case-studies-grid";
import { CaseStudiesSectionTabs } from "@/components/case-study/case-studies-section-tabs";
import { Container } from "@/components/ui/container";
import { HiArrowUpRight } from "react-icons/hi2";

export const metadata = createMetadata({
  title: "Case Studies",
  pathname: "/case-studies",
  description:
    "Commercial and government communications case studies — Barista, Amirah, Swastik, boAt, Archies, OPG Mobility, ISMA, LPU, Blaupunkt, Hartek, IEEMA, and government mandates.",
});

/** Commercial case studies listing */
export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-cream pb-20 pt-8 text-mm-graphite sm:pb-24 sm:pt-10 lg:pt-14">
      <Container>
        <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-mm-graphite/45 sm:text-[10px] sm:tracking-[0.38em]">
          Our work
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(1.85rem,6vw,3.25rem)] font-semibold leading-tight tracking-tight sm:mt-4">
          Case studies
        </h1>
        <CaseStudiesSectionTabs />
      </Container>

      <Container className="mt-10 sm:mt-14 md:mt-20">
        <CaseStudiesGrid studies={commercialCaseStudies} />
      </Container>

      <section className="mt-24 border-t border-mm-graphite/10 bg-mm-cream py-12">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border-b border-mm-graphite/25 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-graphite transition hover:border-mm-gold hover:text-mm-graphite"
          >
            Start a conversation
            <HiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
