import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudiesGrid({ studies }: { studies: readonly CaseStudy[] }) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
      {studies.map((c) => (
        <Link
          key={c.slug}
          href={`/case-studies/${c.slug}`}
          className="group block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mm-gold"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-mm-graphite/[0.06]">
            <Image
              src={c.heroImage}
              alt=""
              fill
              unoptimized
              className="object-cover transition duration-700 [@media(hover:hover)]:group-hover:scale-[1.03]"
              loading="lazy"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
          <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/50 sm:mt-5 sm:text-[10px]">
            {c.brand}
          </p>
          <h2 className="mt-2 break-words font-display text-base font-semibold uppercase leading-snug tracking-[0.03em] sm:text-lg md:text-xl">
            {c.title}
          </h2>
          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-mm-graphite/45">
            {c.category}
          </p>
        </Link>
      ))}
    </div>
  );
}
