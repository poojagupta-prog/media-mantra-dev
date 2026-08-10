import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { Container } from "@/components/ui/container";

/** Deck: replaces heavy homepage contact block — thin strip linking to case studies. */
export function HomeSeeWorkStrip() {
  return (
    <section aria-label="Case studies entry" className="border-y border-mm-white/10 bg-mm-graphite py-10">
      <Container className="flex justify-center">
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-3 border-b border-mm-gold/45 pb-1 text-[11px] font-semibold uppercase tracking-[0.34em] text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
        >
          See our work
          <HiArrowUpRight className="h-4 w-4 opacity-85 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
