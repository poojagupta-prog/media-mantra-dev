import Link from "next/link";
import { Container } from "@/components/ui/container";
import { homeNetworkBand } from "@/data/home-content";
import { MARKET_COUNT, officeLinks } from "@/data/markets";

const STATS = [
  { value: String(MARKET_COUNT), suffix: "", label: "Markets" },
  { value: "13", suffix: "+", label: "Years" },
  { value: "600", suffix: "+", label: "Brand programmes" },
] as const;

/**
 * Hopscotch “integrated network” — oversized figures with ":" rhythm
 * (see https://hopscotch.one/en/).
 */
export function HomeNetworkStatsSection() {
  return (
    <section id="network" className="scroll-mt-28 bg-mm-graphite py-20 text-mm-cream lg:scroll-mt-32 lg:py-[clamp(5rem,14vw,8.5rem)]">
      <Container className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homeNetworkBand.label}</p>
        <h2 className="mx-auto mt-6 max-w-[46rem] font-display text-[clamp(1.45rem,3.4vw,2.05rem)] font-semibold leading-snug tracking-tight text-mm-cream/95">
          {homeNetworkBand.headline}
        </h2>

        <div className="mx-auto mt-20 grid max-w-5xl gap-14 border-y border-mm-cream/[0.1] py-16 sm:grid-cols-3 sm:gap-8 sm:py-20">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-display text-mm-cream">
                <span className="text-[clamp(3rem,10vw,5.25rem)] font-semibold leading-none tracking-tighter tabular-nums">
                  {s.value}
                  {s.suffix ? <span className="text-mm-gold">{s.suffix}</span> : null}
                </span>
                <span className="select-none text-[clamp(1.35rem,4vw,2.25rem)] font-light leading-none text-mm-cream/35">
                  :
                </span>
                <span className="max-w-[14ch] text-[11px] font-semibold uppercase leading-snug tracking-[0.26em] text-mm-light">
                  {s.label}
                </span>
              </p>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-16 flex flex-col flex-wrap justify-center gap-10 text-left sm:flex-row sm:gap-14 lg:gap-24">
          {officeLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group block transition">
                <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-gold group-hover:text-mm-cream">
                  {l.label}
                </p>
                <p className="mt-2 font-editorial text-sm text-mm-light group-hover:text-mm-cream">{l.line}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
