import Link from "next/link";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { homeExpertiseHub } from "@/data/home-content";
import { Container } from "@/components/ui/container";
import { HiArrowRight } from "react-icons/hi2";

/** Hopscotch-style “trades & sectors” band — airy cream panel, pills, minimal chrome */
export function HomeExpertiseHubSection() {
  return (
    <section id="expertise" className="scroll-mt-28 bg-mm-cream py-20 text-mm-graphite lg:scroll-mt-32 lg:py-[clamp(5rem,14vw,8.5rem)]">
      <Container>
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homeExpertiseHub.label}</p>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(1.75rem,3.8vw,2.85rem)] font-semibold leading-[1.1] tracking-tight text-mm-royal">
          {homeExpertiseHub.headline}
        </h2>

        <div className="mt-10 grid gap-12 border-t border-mm-graphite/[0.08] pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="space-y-6 font-editorial text-base leading-relaxed text-mm-graphite/85 md:text-lg md:leading-relaxed">
            <p>{homeExpertiseHub.intro}</p>
            <p>{homeExpertiseHub.follow}</p>
            <Link
              href={homeExpertiseHub.cta.href}
              className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-royal transition hover:text-mm-graphite"
            >
              {homeExpertiseHub.cta.label}
              <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-mm-graphite/45">Expertise lanes</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-mm-graphite/[0.1] bg-mm-white/85 px-4 py-2.5 text-[12px] font-medium leading-snug tracking-[0.01em] text-mm-graphite/90 transition hover:border-mm-royal/25 hover:bg-mm-white"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.35em] text-mm-graphite/45">
              Sector focus
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span
                  key={i.name}
                  className="rounded-full bg-mm-graphite/[0.06] px-3 py-2 text-[11px] font-medium capitalize tracking-[0.04em] text-mm-graphite/80"
                >
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
