import Link from "next/link";
import { homeNetworkBand } from "@/data/home-content";
import { homeNetworkOffices } from "@/data/markets";
import { Container } from "@/components/ui/container";
import { NetworkGlobe } from "@/components/home/network-globe";

/** Slide 6 — location: graphite band, network copy left, globe right. */
export function HomeHopNetworkSplit() {
  const { label, headline, body, officesHeading, linkLabel, linkHref, stats } = homeNetworkBand;

  return (
    <section id="location" className="scroll-mt-28 bg-mm-graphite py-[clamp(4.5rem,10vw,7rem)] text-mm-cream lg:scroll-mt-32">
      <Container className="max-w-[1440px]">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-20">
          <div className="flex min-h-[320px] flex-col justify-between gap-10 lg:min-h-[380px] lg:gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-mm-gold">{label}</p>
              {headline ? (
                <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.65rem,3.6vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.01em] text-mm-white">
                  {headline}
                </h2>
              ) : null}
              <p
                className={`max-w-xl font-editorial text-[15px] leading-[1.75] text-mm-cream/76 md:text-[17px] ${headline ? "mt-8" : "mt-5"}`}
              >
                {body}
              </p>

              <div className="mt-10">
                <p className="border-b border-mm-cream/30 pb-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-cream/90">
                  {officesHeading}
                </p>
                <ul className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {homeNetworkOffices.map((office) => (
                    <li key={office.href}>
                      <Link href={office.href} className="group flex items-start gap-3 transition">
                        <span className="mt-0.5 text-lg leading-none" aria-hidden>
                          {office.flag}
                        </span>
                        <span>
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-cream group-hover:text-mm-gold">
                            {office.region}
                          </span>
                          <span className="mt-1 block font-editorial text-sm text-mm-cream/72 group-hover:text-mm-cream">
                            {office.location}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={linkHref}
                className="mt-8 inline-block text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-gold transition hover:text-mm-cream"
              >
                {linkLabel} →
              </Link>
            </div>

            {stats.length > 0 ? (
              <dl className="flex flex-wrap gap-x-10 gap-y-3 font-mono text-[10px] uppercase tracking-[0.28em] text-mm-cream/85 sm:text-[11px]">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-2">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-semibold tabular-nums tracking-tight text-mm-white sm:text-[1.65rem]">
                        {s.value}
                        {s.suffix}
                      </span>
                      <span className="text-mm-light/70">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <NetworkGlobe />
          </div>
        </div>
      </Container>
    </section>
  );
}
