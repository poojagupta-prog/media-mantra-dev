import { createMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Industries We Serve",
  pathname: "/industries",
  description:
    "Technology, mobility, consumer, financial services, health, hospitality — calibrated communications at category velocity.",
});

export default function IndustriesPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel>Sectors</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">
          Industries shaped by reputational choreography.
        </h1>
        <p className="mt-6 max-w-2xl text-mm-light">
          Each vertical owns distinct regulatory, cultural, and capital dynamics — our pods deploy fluency native to those
          surfaces.
        </p>
      </Container>

      <Container className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className="group relative overflow-hidden rounded-[2rem] border border-mm-white/10 bg-mm-white/[0.02] px-10 py-12 transition hover:border-mm-gold/35"
          >
            <span className="absolute right-10 top-8 font-display text-6xl font-bold text-mm-gold/10 transition group-hover:text-mm-gold/20">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="font-display text-2xl font-semibold">{ind.name}</h2>
            <p className="mt-6 text-sm leading-relaxed text-mm-light">{ind.desc}</p>
            <Link
              href="/contact"
              className="mt-10 inline-flex text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-gold"
            >
              Request sector counsel →
            </Link>
          </div>
        ))}
      </Container>
    </main>
  );
}
