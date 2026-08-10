import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { Container } from "@/components/ui/container";
import { CreamSection } from "@/components/theme/section-theme-wrapper";
import { AwardImage } from "@/components/home/award-image";
import {
  awardColumns,
  homeAwardsLead,
  homeFeaturedAwards,
  type AwardItem,
} from "@/data/awards-content";

function FeaturedAwardCard({ item }: { item: AwardItem }) {
  const body = (
    <>
      <AwardImage item={item} />
      <div className="p-4 sm:p-5">
        <p className="font-editorial text-[14px] font-semibold leading-snug text-mm-graphite md:text-[15px] md:leading-[1.55]">
          {item.title}
        </p>
        {item.lines?.length ? (
          <p className="mt-2 font-editorial text-[12px] leading-relaxed text-mm-graphite/72 md:text-[13px]">
            {item.lines[0]}
          </p>
        ) : null}
      </div>
    </>
  );

  const className =
    "group block overflow-hidden rounded-2xl border border-mm-graphite/10 bg-mm-white transition hover:border-mm-gold/45 hover:shadow-[0_18px_40px_rgba(25,25,112,0.06)]";

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${item.title} — open link`}
      >
        <div className="relative">
          {body}
          <HiArrowUpRight
            className="absolute right-4 top-4 h-4 w-4 text-mm-gold opacity-80 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            aria-hidden
          />
        </div>
      </a>
    );
  }

  return <article className={className}>{body}</article>;
}

function AwardCard({ item }: { item: AwardItem }) {
  const body = (
    <>
      <p className="font-editorial text-[14px] font-semibold leading-snug text-mm-graphite md:text-[15px] md:leading-[1.55]">
        {item.title}
      </p>
      {item.lines?.length ? (
        <ul className="mt-3 space-y-1.5 border-t border-mm-graphite/10 pt-3">
          {item.lines.map((line) => (
            <li
              key={line}
              className="font-editorial text-[12px] leading-relaxed text-mm-graphite/72 md:text-[13px]"
            >
              {line}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  const className =
    "group block rounded-2xl border border-mm-graphite/10 bg-mm-white px-4 py-4 transition hover:border-mm-gold/45 hover:shadow-[0_18px_40px_rgba(25,25,112,0.06)] sm:px-5 sm:py-5";

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${item.title} — open link`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">{body}</div>
          <HiArrowUpRight
            className="mt-0.5 h-4 w-4 shrink-0 text-mm-gold opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            aria-hidden
          />
        </div>
      </a>
    );
  }

  return <article className={className}>{body}</article>;
}

/** Homepage awards — four featured honours with imagery */
export function AwardsSection() {
  const { eyebrow, titleLine1, titleLine2, description, viewAllLabel, viewAllHref } = homeAwardsLead;

  return (
    <CreamSection sectionId="awards" className="scroll-mt-28 py-[clamp(4.5rem,10vw,7rem)] lg:scroll-mt-32">
      <Container className="max-w-[1440px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-mm-gold">{eyebrow}</p>
            <h2 className="font-display text-[clamp(2.15rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-tight text-mm-brand-navy">
              {titleLine1}{" "}
              <span className="font-[Georgia,'Times_New_Roman',serif] italic text-mm-gold">{titleLine2}</span>
            </h2>
            <p className="max-w-xl font-editorial text-[15px] font-semibold leading-[1.72] text-mm-graphite/82 md:text-base">
              {description}
            </p>
          </div>
          <Link
            href={viewAllHref}
            className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-gold transition hover:text-mm-graphite"
          >
            {viewAllLabel}
            <HiArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {homeFeaturedAwards.map((item) => (
            <FeaturedAwardCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </CreamSection>
  );
}

/** Full awards listing — three columns */
export function AwardsFullGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-10">
      {awardColumns.map((column) => (
        <div key={column.key}>
          <h2 className="border-b border-mm-graphite/12 pb-4 font-display text-lg font-semibold uppercase tracking-[0.12em] text-mm-graphite md:text-xl">
            {column.label}
          </h2>
          <ul className="mt-5 space-y-3 sm:space-y-4">
            {column.items.map((item) => (
              <li key={item.id}>
                <AwardCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
