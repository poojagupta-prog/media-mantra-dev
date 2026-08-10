import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { MantraPageContent } from "@/data/mantra-pages-content";
import { cn } from "@/lib/cn";

/** Banner hero + white content band — About sub-pages (Gaming / Startup Mantra). */
export function MantraSubpageLayout({ page }: { page: MantraPageContent }) {
  const imagePosition = page.banner.imagePosition ?? "object-cover object-center";

  return (
    <main id="main-content" className="flex-1 bg-mm-graphite text-mm-cream">
      <section className="relative isolate min-h-[min(72svh,560px)] overflow-hidden bg-mm-graphite lg:min-h-[min(68vh,600px)]">
        {/* Right panel — image fills and covers the banner edge */}
        <div className="absolute inset-y-0 right-0 z-0 w-[68%] sm:w-[62%] lg:w-[58%]">
          <Image
            src={page.banner.imageSrc}
            alt={page.banner.imageAlt}
            fill
            unoptimized
            className={cn(imagePosition)}
            sizes="(max-width: 1024px) 68vw, 58vw"
            priority
          />
        </div>

        {/* Merge image into graphite banner */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[52%] bg-mm-graphite sm:w-[48%] lg:w-[44%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-[38%] z-[1] w-[22%] bg-gradient-to-r from-mm-graphite via-mm-graphite/85 to-transparent sm:left-[40%] sm:w-[24%] lg:left-[42%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-mm-graphite-deep/45 via-transparent to-mm-graphite/15"
          aria-hidden
        />

        <Container className="relative z-[2] flex min-h-[min(72svh,560px)] flex-col justify-end pb-16 pt-[6.75rem] lg:min-h-[min(68vh,600px)] lg:justify-center lg:pb-24 lg:pt-28">
          <div className="relative max-w-[28rem] lg:max-w-[32rem]">
            <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.06] tracking-tight text-mm-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
              {page.banner.headline}
            </h1>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center border border-mm-cream/40 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            >
              Contact us
            </Link>
          </div>
        </Container>
      </section>

      <section
        aria-label={page.title}
        className="relative z-[1] scroll-mt-28 border-t-4 border-mm-gold/35 bg-mm-white py-16 text-mm-graphite lg:scroll-mt-32 lg:py-[5.5rem]"
      >
        <Container className="max-w-3xl">
          <div className="space-y-5 font-editorial text-[1.05rem] leading-[1.85] text-mm-graphite/82">
            {page.paragraphs.map((p, i) => (
              <p key={`${i}-${p.slice(0, 32)}`}>{p}</p>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center border-b border-mm-brand-navy pb-0.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-brand-navy transition hover:border-mm-gold hover:text-mm-gold"
          >
            Contact us →
          </Link>
        </Container>
      </section>
    </main>
  );
}
