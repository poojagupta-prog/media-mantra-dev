import Link from "next/link";
import { Container } from "@/components/ui/container";
import { homeLocations } from "@/data/home-content";
import { MARKETS_DOT, officeLinks } from "@/data/markets";
import { NetworkGlobe } from "@/components/home/network-globe";

export function HomeLocationsBand() {
  return (
    <section
      id="locations"
      aria-labelledby="home-locations-heading"
      className="scroll-mt-28 border-y border-mm-cream/[0.08] bg-mm-charcoal py-14 lg:scroll-mt-32 lg:py-16"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">{homeLocations.label}</p>
          <h2
            id="home-locations-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold uppercase tracking-[0.06em] text-mm-cream"
          >
            {MARKETS_DOT}
          </h2>
          <p className="mt-5 max-w-xl border-l-2 border-mm-gold/40 pl-6 font-editorial text-sm leading-relaxed text-mm-light md:text-base">
            {homeLocations.paragraph}
          </p>

          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-8">
            {officeLinks.map((loc) => (
              <li key={loc.href}>
                <Link href={loc.href} className="group block border-t border-mm-cream/15 pt-5 transition hover:border-mm-gold/40">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-cream group-hover:text-mm-gold">{loc.label}</h3>
                  <p className="mt-2.5 font-editorial text-sm text-mm-light/90">{loc.line}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <NetworkGlobe />
        </div>
      </Container>
    </section>
  );
}
