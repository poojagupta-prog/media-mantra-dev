import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { caseStudies, getCaseStudiesBySlugs } from "@/data/case-studies";
import { homeWork } from "@/data/home-content";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Badge } from "@/components/ui/badge";
import { HiArrowUpRight } from "react-icons/hi2";

type Props = {
  featuredCount?: number;
  layout?: "classic" | "hopscotch";
};

/** Hopscotch “Our last work” — asymmetric portrait | landscape rows */
function HopGalleryTile({
  item,
  variant,
  matchRowHeight = false,
}: {
  item: CaseStudy;
  variant: "portrait" | "landscape";
  matchRowHeight?: boolean;
}) {
  const portrait = variant === "portrait";

  return (
    <article className={matchRowHeight ? "flex min-h-0 min-w-0 flex-1 flex-col" : "min-w-0"}>
      <Link href={`/case-studies/${item.slug}`} className={matchRowHeight ? "group flex flex-1 flex-col" : "group block"}>
        <div
          className={
            matchRowHeight
              ? "relative min-h-[220px] w-full flex-1 overflow-hidden bg-mm-cream/40 sm:min-h-[280px] md:min-h-[320px] lg:min-h-[420px]"
              : portrait
                ? "relative aspect-[4/5] w-full overflow-hidden bg-mm-cream/40 sm:aspect-[3/4]"
                : "relative aspect-[16/10] w-full overflow-hidden bg-mm-cream/40 max-sm:aspect-[5/4]"
          }
        >
          <div className={`absolute inset-0 z-[1] bg-gradient-to-tr ${item.accent} opacity-35 mix-blend-multiply`} />
          <Image
            src={item.heroImage}
            alt={item.brand}
            fill
            unoptimized
            className="object-cover object-center transition duration-[1s] ease-out [@media(hover:hover)]:group-hover:scale-[1.03]"
            sizes={portrait ? "(max-width:1024px) 100vw, 400px" : "(max-width:1024px) 100vw, 70vw"}
          />
        </div>
        <div className="mt-5 flex shrink-0 flex-col gap-2 border-t border-mm-graphite/12 pt-4 sm:mt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:pt-5">
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/55 sm:text-[10px] sm:tracking-[0.32em]">
              {item.brand}
            </p>
            <h3 className="mt-2 break-words font-display text-base font-semibold leading-snug text-mm-graphite sm:mt-3 sm:text-lg md:text-xl">
              {item.title}
            </h3>
          </div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-mm-graphite/45 sm:shrink-0 sm:text-[10px] sm:tracking-[0.26em]">
            {item.category}
          </p>
        </div>
      </Link>
    </article>
  );
}

export function CaseStudiesPreviewSection({ featuredCount = 3, layout = "classic" }: Props) {
  const count = layout === "hopscotch" ? Math.max(featuredCount, 4) : featuredCount;
  const n = Math.min(Math.max(count, 1), caseStudies.length);
  const featured = caseStudies.slice(0, n);
  const many = n >= 3;
  const gridClass = many
    ? "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3"
    : "grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2";

  if (layout === "hopscotch") {
    const slugs = homeWork.featuredSlugs?.length
      ? homeWork.featuredSlugs
      : caseStudies.slice(0, Math.max(featuredCount, 4)).map((c) => c.slug);
    const tiles = getCaseStudiesBySlugs(slugs);
    const [a, b, c, d] = tiles;
    if (!a) return null;

    return (
      <section id="work" className="scroll-mt-28 bg-mm-white py-16 text-mm-graphite sm:py-20 lg:scroll-mt-32 lg:py-32">
        <Container className="max-w-[1320px]">
          <div className="flex flex-col gap-6 pb-10 sm:gap-8 sm:pb-14 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:pb-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.35rem)] font-semibold leading-[1.05] tracking-tight mm-headline-brand-blue">
                {homeWork.headline}
              </h2>
              <p className="mt-5 max-w-2xl font-editorial text-base leading-relaxed text-mm-graphite/72 md:mt-6 md:text-lg">
                {homeWork.description}
              </p>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex shrink-0 self-start items-center gap-3 pt-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-graphite underline-offset-[10px] transition hover:text-mm-graphite/70 lg:pt-2"
            >
              See more cases
              <HiArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
            <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-stretch lg:gap-10">
              <div className="flex w-full lg:w-[38%] lg:shrink-0">
                {a ? <HopGalleryTile item={a} variant="portrait" matchRowHeight /> : null}
              </div>
              <div className="flex min-w-0 flex-1">
                {b ? <HopGalleryTile item={b} variant="landscape" matchRowHeight /> : null}
              </div>
            </div>

            {(c || d) && (
              <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-stretch lg:gap-10">
                <div className="flex w-full lg:w-[38%] lg:shrink-0">
                  {d ? <HopGalleryTile item={d} variant="portrait" matchRowHeight /> : null}
                </div>
                <div className="flex min-w-0 flex-1">
                  {c ? <HopGalleryTile item={c} variant="landscape" matchRowHeight /> : null}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="work" className="scroll-mt-28 bg-mm-cream py-12 text-mm-graphite sm:py-14 lg:scroll-mt-32 lg:py-16">
      <Container>
        <div className="flex flex-col gap-5 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-7">
          <div className="min-w-0">
            <SectionLabel>{homeWork.label}</SectionLabel>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-[1.08] tracking-tight sm:text-[clamp(1.65rem,3.2vw,2.35rem)]">
              {homeWork.headline}
            </h2>
            {homeWork.description.trim() ? (
              <p className="mt-2 max-w-xl font-editorial text-sm leading-snug text-mm-graphite/75 sm:mt-2.5 sm:text-[0.9375rem]">
                {homeWork.description}
              </p>
            ) : null}
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-mm-graphite/15 bg-mm-white/60 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite backdrop-blur-sm transition hover:border-mm-gold/40 hover:bg-mm-white sm:self-auto"
          >
            All work
            <HiArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className={`mt-7 ${gridClass}`}>
          {featured.map((item) => (
            <article
              key={item.slug}
              className={
                many
                  ? "group/card flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-mm-graphite/[0.07] bg-mm-white/75 shadow-[0_12px_40px_-20px_rgba(30,27,24,0.12)] backdrop-blur-sm transition duration-300 hover:border-mm-graphite/25 hover:shadow-[0_20px_48px_-24px_rgba(0,0,0,0.14)]"
                  : "group/card flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-mm-graphite/[0.07] bg-mm-white/75 shadow-[0_12px_40px_-20px_rgba(30,27,24,0.12)] backdrop-blur-sm transition duration-300 hover:border-mm-graphite/25 hover:shadow-[0_20px_48px_-24px_rgba(0,0,0,0.14)] sm:flex-row sm:items-stretch"
              }
            >
              <Link
                href={`/case-studies/${item.slug}`}
                className={
                  many
                    ? "relative aspect-[16/9] w-full shrink-0 overflow-hidden sm:aspect-[16/9]"
                    : "relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:min-h-[200px] sm:w-[min(46%,220px)] sm:max-w-[240px]"
                }
              >
                <div className={`absolute inset-0 z-[1] bg-gradient-to-tr ${item.accent} opacity-55 mix-blend-multiply`} />
                <Image
                  src={item.heroImage}
                  alt={item.brand}
                  fill
                  className="object-cover transition duration-500 ease-out [@media(hover:hover)]:group-hover/card:scale-[1.04]"
                  sizes="(max-width:768px) 100vw, 240px"
                />
                <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-mm-graphite/55 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-[3] flex flex-wrap items-center gap-1.5">
                  <Badge className="border-mm-white/25 bg-mm-black/40 px-2 py-0 text-[8px] uppercase tracking-wider text-mm-cream backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
              </Link>

              <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-4 sm:px-5 sm:py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-mm-graphite/70">{item.brand}</p>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug tracking-tight text-mm-graphite line-clamp-2 sm:text-[1.0625rem]">
                  <Link href={`/case-studies/${item.slug}`} className="transition hover:text-mm-graphite">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 font-editorial text-[13px] leading-relaxed text-mm-graphite/72 line-clamp-2">{item.excerpt}</p>
                <Link
                  href={`/case-studies/${item.slug}`}
                  className="mt-3 inline-flex w-fit items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-mm-graphite transition hover:gap-2 sm:mt-3.5"
                >
                  Case file
                  <HiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
