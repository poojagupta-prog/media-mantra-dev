import Image from "next/image";
import Link from "next/link";
import { homeCsrBand, homePeopleBand } from "@/data/home-content";
import { Container } from "@/components/ui/container";

const csrVisual =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80";

/** Hopscotch twin column — CSR | People on white */
export function HomeHopCsrPeople() {
  return (
    <section id="csr-people" className="scroll-mt-28 bg-mm-white py-20 text-mm-graphite lg:scroll-mt-32 lg:py-28">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-0 lg:px-0">
        <div className="flex flex-col border-mm-graphite/15 lg:border-r lg:pr-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-mm-graphite/55">{homeCsrBand.label}</p>
          <h2 className="mt-6 font-display text-[clamp(1.85rem,3.8vw,2.65rem)] font-semibold uppercase leading-tight tracking-tight">
            {homeCsrBand.headline}
          </h2>
          <p className="mt-8 font-editorial text-base leading-relaxed text-mm-graphite/78">{homeCsrBand.body}</p>
          <Link
            href={homeCsrBand.cta.href}
            className="mt-10 inline-block w-fit border-b border-mm-graphite pb-1 text-[10px] font-semibold uppercase tracking-[0.32em] transition hover:border-mm-gold"
          >
            {homeCsrBand.cta.label}
          </Link>
          <div className="relative mt-12 aspect-[5/4] w-full overflow-hidden bg-mm-graphite/[0.06]">
            <Image src={csrVisual} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>

        <div className="flex flex-col lg:pl-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-mm-graphite/55">{homePeopleBand.label}</p>
          <h2 className="mt-6 font-display text-[clamp(1.85rem,3.8vw,2.65rem)] font-semibold uppercase leading-tight tracking-tight">
            {homePeopleBand.headline}
          </h2>
          <p className="mt-8 font-editorial text-base leading-relaxed text-mm-graphite/78">{homePeopleBand.body}</p>
          <Link
            href={homePeopleBand.cta.href}
            className="mt-10 inline-block w-fit border-b border-mm-graphite pb-1 text-[10px] font-semibold uppercase tracking-[0.32em] transition hover:border-mm-gold"
          >
            {homePeopleBand.cta.label}
          </Link>
          <div className="relative mt-12 aspect-[5/4] w-full overflow-hidden bg-mm-graphite/[0.06]">
            <Image src={homePeopleBand.image} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
