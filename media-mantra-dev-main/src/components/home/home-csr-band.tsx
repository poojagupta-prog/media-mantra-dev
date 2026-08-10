import Link from "next/link";
import { homeCsrBand } from "@/data/home-content";
import { Container } from "@/components/ui/container";
import { HiArrowRight } from "react-icons/hi2";

/** Hopscotch-style CSR band — light surface, editorial rhythm */
export function HomeCsrBand() {
  return (
    <section id="csr" className="scroll-mt-28 bg-mm-white py-16 text-mm-graphite lg:scroll-mt-32 lg:py-24">
      <Container className="max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homeCsrBand.label}</p>
        <h2 className="mt-6 font-display text-[clamp(1.65rem,3.5vw,2.35rem)] font-semibold leading-[1.12] tracking-tight text-mm-royal">
          {homeCsrBand.headline}
        </h2>
        <p className="mt-8 font-editorial text-base leading-relaxed text-mm-graphite/82 md:text-lg">{homeCsrBand.body}</p>
        <Link
          href={homeCsrBand.cta.href}
          className="group mt-10 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-royal transition hover:text-mm-graphite"
        >
          {homeCsrBand.cta.label}
          <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
