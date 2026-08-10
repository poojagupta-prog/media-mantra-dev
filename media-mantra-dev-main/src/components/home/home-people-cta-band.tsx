import Image from "next/image";
import Link from "next/link";
import { homePeopleBand } from "@/data/home-content";
import { Container } from "@/components/ui/container";
import { HiArrowRight } from "react-icons/hi2";

/** Hopscotch People — imagery + succinct CTA */
export function HomePeopleCtaBand() {
  return (
    <section className="scroll-mt-28 bg-mm-charcoal py-14 lg:scroll-mt-32 lg:py-20">
      <Container>
        {/* Photo-forward split — Hopscotch People: imagery dominates ~58% */}
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-mm-black/40 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:items-stretch lg:gap-0">
          <Link
            href={homePeopleBand.cta.href}
            className="group relative isolate order-2 min-h-[300px] lg:order-1 lg:min-h-[min(52vh,520px)]"
            aria-label={`${homePeopleBand.cta.label} — Careers`}
          >
            <Image
              src={homePeopleBand.image}
              alt=""
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mm-charcoal via-mm-charcoal/20 to-transparent" />
          </Link>

          <div className="order-1 flex flex-col justify-center px-6 py-12 sm:px-10 lg:order-2 lg:px-16 lg:py-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homePeopleBand.label}</p>
            <h2 className="mt-6 font-display text-[clamp(1.85rem,3.8vw,2.65rem)] font-semibold leading-[1.1] tracking-tight text-mm-cream">
              {homePeopleBand.headline}
            </h2>
            <Link
              href={homePeopleBand.cta.href}
              className="group mt-10 inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-gold transition hover:text-mm-cream"
            >
              {homePeopleBand.cta.label}
              <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
