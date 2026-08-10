import Image from "next/image";
import { homeClientsGrid, homeClientsLead, homeClientsTicker } from "@/data/home-content";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

/** Slide 7 — graphite client section; each logo is its own file in a spaced grid. */
export function ClientsMarqueeSection() {
  const { eyebrow, titleLine1, titleLine2, description } = homeClientsLead;
  const tickerRow = [...homeClientsTicker, ...homeClientsTicker];

  return (
    <section id="clients" className="scroll-mt-28 bg-mm-graphite py-[clamp(4.5rem,10vw,7rem)] text-mm-cream lg:scroll-mt-32">
      <Container className="max-w-[1440px]">
        <div className="max-w-3xl space-y-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-mm-gold">{eyebrow}</p>
          <h2 className="font-display text-[clamp(2.15rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-tight text-mm-cream">
            {titleLine1}{" "}
            <span className="font-[Georgia,'Times_New_Roman',serif] italic text-mm-gold">{titleLine2}</span>
          </h2>
          <p className="max-w-xl font-editorial text-[15px] font-semibold leading-[1.72] text-mm-cream/90 md:text-base">
            {description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
          {homeClientsGrid.map(({ id, brand, logo }) => (
            <div
              key={id}
              className="flex min-h-[84px] items-center justify-center overflow-hidden rounded-xl bg-mm-cream px-2 py-3 sm:min-h-[92px] sm:px-2.5 sm:py-3.5 lg:min-h-[100px]"
            >
              {logo ? (
                <div
                  className={cn(
                    "relative h-12 sm:h-14 lg:h-16",
                    brand === "Sony"
                      ? "mx-auto aspect-[2.65/1] w-[58%] max-w-[118px] sm:max-w-[128px] lg:max-w-[138px]"
                      : "w-full max-w-[172px] sm:max-w-[190px] lg:max-w-[210px]",
                  )}
                >
                  <Image
                    src={logo}
                    alt={brand}
                    fill
                    unoptimized={logo.endsWith(".svg")}
                    className="object-contain object-center scale-[1.08] sm:scale-110"
                    sizes="(max-width: 640px) 172px, (max-width: 1024px) 190px, 210px"
                    loading="lazy"
                  />
                </div>
              ) : (
                <span className="text-center text-[9px] font-semibold uppercase leading-snug tracking-[0.18em] text-mm-graphite/55 sm:text-[10px]">
                  {brand}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden border-t border-mm-cream/[0.1] pt-7">
          <div className="mm-marquee-track flex w-max gap-10 text-[9px] font-semibold uppercase tracking-[0.3em] text-mm-gold sm:text-[10px]">
            {tickerRow.map((item, i) => (
              <span key={`${item}-${i}`} className="inline-flex shrink-0 items-center gap-10">
                {item}
                <span className="text-mm-gold/35" aria-hidden>
                  •
                </span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
