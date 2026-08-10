import Link from "next/link";
import { HiArrowUpRight, HiTrophy } from "react-icons/hi2";
import { AwardImage } from "@/components/home/award-image";
import { Container } from "@/components/ui/container";
import {
  awardColumns,
  awardsPageLead,
  homeFeaturedAwards,
  type AwardColumn,
  type AwardItem,
} from "@/data/awards-content";

const COLUMN_META: Record<AwardColumn["key"], { subtitle: string }> = {
  pooja: {
    subtitle: "Founder honours & leadership recognition",
  },
  udit: {
    subtitle: "Agency leadership & industry accolades",
  },
  industry: {
    subtitle: "Agency wins across campaigns & consultancy",
  },
};

function AwardPageCard({ item, featured = false }: { item: AwardItem; featured?: boolean }) {
  const hasImage = Boolean(item.imageSrc);

  const inner = (
    <>
      {hasImage ? (
        <div className={featured ? "relative" : "relative overflow-hidden"}>
          <AwardImage item={item} />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-mm-gold/40 bg-mm-graphite/85 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-mm-gold backdrop-blur-sm">
            <HiTrophy className="h-3 w-3" aria-hidden />
            Winner
          </span>
        </div>
      ) : (
        <div
          className={`flex items-start gap-4 border-b border-mm-graphite/[0.08] px-5 py-5 sm:px-6 ${featured ? "min-h-[140px]" : ""}`}
        >
          <span
            className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mm-gold/35 bg-gradient-to-br from-mm-gold/15 to-mm-gold/5"
            aria-hidden
          >
            <HiTrophy className="h-5 w-5 text-mm-gold" />
          </span>
          <div className="min-w-0 flex-1 pt-1">
            <p className="font-editorial text-[14px] font-semibold leading-snug text-mm-graphite md:text-[15px] md:leading-[1.55]">
              {item.title}
            </p>
            {item.lines?.map((line) => (
              <p key={line} className="mt-2 font-editorial text-[12px] leading-relaxed text-mm-graphite/68 md:text-[13px]">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}

      {hasImage ? (
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="font-editorial text-[14px] font-semibold leading-snug text-mm-graphite md:text-[15px] md:leading-[1.55]">
            {item.title}
          </p>
          {item.lines?.map((line) => (
            <p key={line} className="mt-2 font-editorial text-[12px] leading-relaxed text-mm-graphite/68 md:text-[13px]">
              {line}
            </p>
          ))}
          {item.href ? (
            <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-gold">
              View announcement
              <HiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          ) : null}
        </div>
      ) : item.href ? (
        <div className="border-t border-mm-graphite/[0.06] px-5 py-3 sm:px-6">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-gold">
            View announcement
            <HiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </div>
      ) : null}
    </>
  );

  const className = [
    "group flex h-full flex-col overflow-hidden rounded-2xl border bg-mm-white transition duration-300",
    hasImage
      ? "border-mm-graphite/10 shadow-[0_8px_30px_rgba(25,25,112,0.04)] hover:border-mm-gold/45 hover:shadow-[0_20px_50px_rgba(25,25,112,0.08)]"
      : "border-mm-graphite/10 hover:border-mm-gold/40 hover:shadow-[0_12px_36px_rgba(25,25,112,0.06)]",
    featured && hasImage ? "lg:col-span-1" : "",
  ].join(" ");

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${item.title} — open announcement`}
      >
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}

function CategorySection({ column, index }: { column: AwardColumn; index: number }) {
  const meta = COLUMN_META[column.key];
  const withImages = column.items.filter((i) => i.imageSrc);
  const textOnly = column.items.filter((i) => !i.imageSrc);
  const isAlt = index % 2 === 1;

  return (
    <section
      id={`awards-${column.key}`}
      className={`scroll-mt-28 py-16 lg:scroll-mt-32 lg:py-24 ${isAlt ? "bg-mm-white" : "bg-mm-cream"}`}
      aria-labelledby={`awards-${column.key}-heading`}
    >
      <Container className="max-w-[1440px]">
        <div className="flex flex-col gap-6 border-b border-mm-graphite/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2
              id={`awards-${column.key}-heading`}
              className="mt-3 font-display text-[clamp(1.65rem,3.2vw,2.35rem)] font-semibold tracking-tight text-mm-brand-navy"
            >
              {column.label}
            </h2>
            <p className="mt-2 max-w-xl font-editorial text-sm text-mm-graphite/72 md:text-[15px]">{meta.subtitle}</p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mm-graphite/55">
            {column.items.length} honours
          </p>
        </div>

        {withImages.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {withImages.map((item) => (
              <AwardPageCard key={item.id} item={item} />
            ))}
          </div>
        ) : null}

        {textOnly.length > 0 ? (
          <ul
            className={`grid gap-4 sm:grid-cols-2 ${withImages.length > 0 ? "mt-8" : "mt-10"} ${column.key === "industry" ? "xl:grid-cols-2" : ""}`}
          >
            {textOnly.map((item) => (
              <li key={item.id}>
                <AwardPageCard item={item} />
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}

export function AwardsPageView() {
  const { eyebrow, title, description } = awardsPageLead;
  const totalHonours = awardColumns.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-mm-graphite text-mm-cream">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(210,180,80,0.18),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-mm-gold/10 blur-3xl"
          aria-hidden
        />
        <Container className="relative max-w-[1440px] py-16 lg:py-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-mm-gold">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.35rem,5.5vw,4rem)] font-semibold leading-[1.04] tracking-tight text-mm-white">
            {title.split(" & ").map((part, i) => (
              <span key={part}>
                {i > 0 ? (
                  <>
                    {" "}
                    <span className="font-[Georgia,'Times_New_Roman',serif] italic text-mm-gold">&</span>{" "}
                  </>
                ) : null}
                {part}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-2xl font-editorial text-base leading-[1.8] text-mm-cream/82 md:text-[17px]">
            {description}
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-mm-cream/10 pt-8">
            <div>
              <dt className="sr-only">Total honours listed</dt>
              <dd className="font-display text-3xl font-semibold tabular-nums text-mm-gold">{totalHonours}+</dd>
              <dd className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light/80">
                Listed honours
              </dd>
            </div>
            <div>
              <dt className="sr-only">Categories</dt>
              <dd className="font-display text-3xl font-semibold tabular-nums text-mm-white">3</dd>
              <dd className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light/80">
                Award categories
              </dd>
            </div>
            <div>
              <dt className="sr-only">Industry recognition</dt>
              <dd className="font-display text-3xl font-semibold tabular-nums text-mm-white">700+</dd>
              <dd className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light/80">
                Industry awards
              </dd>
            </div>
          </dl>

          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Award categories">
            {awardColumns.map((col) => (
              <a
                key={col.key}
                href={`#awards-${col.key}`}
                className="rounded-full border border-mm-cream/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-mm-cream/90 transition hover:border-mm-gold/50 hover:text-mm-gold"
              >
                {col.label.replace(" Awards", "")}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {/* Featured spotlight */}
      <section className="border-b border-mm-graphite/10 bg-mm-cream py-16 lg:py-20">
        <Container className="max-w-[1440px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">Spotlight</p>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.15rem)] font-semibold tracking-tight text-mm-brand-navy">
                Recent award moments
              </h2>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/60 transition hover:text-mm-gold"
            >
              Back to home
              <HiArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {homeFeaturedAwards.map((item) => (
              <AwardPageCard key={item.id} item={item} featured />
            ))}
          </div>
        </Container>
      </section>

      {/* Category sections */}
      {awardColumns.map((column, index) => (
        <CategorySection key={column.key} column={column} index={index} />
      ))}

      {/* Footer note */}
      <section className="border-t border-mm-graphite/10 bg-mm-graphite py-12 text-mm-cream">
        <Container className="max-w-[1440px] text-center">
          <HiTrophy className="mx-auto h-8 w-8 text-mm-gold/80" aria-hidden />
          <p className="mt-4 font-editorial text-sm text-mm-light/85 md:text-[15px]">
            Tap any linked honour to view the original announcement on Instagram or LinkedIn.
          </p>
        </Container>
      </section>
    </>
  );
}
