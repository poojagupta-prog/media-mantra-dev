import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/data/case-studies";

export function ServiceCaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mm-gold"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-mm-graphite/[0.08] bg-mm-graphite/[0.04] shadow-[0_28px_90px_-48px_rgba(0,0,0,0.28)] ring-1 ring-mm-graphite/[0.05]">
        <Image
          src={study.heroImage}
          alt=""
          fill
          unoptimized
          className="object-cover transition duration-700 [@media(hover:hover)]:group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 42vw"
          priority
        />
      </div>
      <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/50 sm:text-[10px]">
        {study.brand}
      </p>
      <h2 className="mt-2 break-words font-display text-base font-semibold uppercase leading-snug tracking-[0.03em] text-mm-graphite sm:text-lg md:text-xl">
        {study.title}
      </h2>
      <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-mm-royal transition [@media(hover:hover)]:group-hover:text-mm-gold">
        View case study →
      </p>
    </Link>
  );
}
