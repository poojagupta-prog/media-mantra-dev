import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import type { ServiceListingCard } from "@/data/services-page-content";
import { cn } from "@/lib/cn";

export function ServicesListingCard({ card }: { card: ServiceListingCard }) {
  return (
    <Link
      href={`/services/${card.slug}`}
      className="group relative flex aspect-[16/9] flex-col overflow-hidden rounded-2xl border border-mm-white/10"
    >
      <Image
        src={card.imageSrc}
        alt={card.imageAlt}
        fill
        unoptimized
        className={cn(
          "object-cover transition duration-700 [@media(hover:hover)]:group-hover:scale-[1.03]",
          card.imagePosition ?? "object-center",
        )}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        loading="lazy"
      />
      <div className={cn("absolute inset-0 bg-gradient-to-b", card.overlayClass)} aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" aria-hidden />

      <div className="relative z-[1] flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-cream/75">
          {String(card.index).padStart(2, "0")}
        </p>

        <div className="mt-auto space-y-4 pt-10">
          <h2 className="font-display text-[clamp(1.35rem,2.2vw,1.65rem)] font-semibold uppercase leading-[1.12] tracking-[0.02em] text-mm-white">
            {card.title}
          </h2>
          <p className="font-display text-sm font-semibold leading-snug text-mm-gold/95">{card.headline}</p>
          {card.body ? (
            <p className="font-editorial text-sm leading-relaxed text-mm-cream/88 line-clamp-4">{card.body}</p>
          ) : null}
          <span className="inline-flex items-center gap-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream transition group-hover:text-mm-gold">
            Explore
            <HiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
