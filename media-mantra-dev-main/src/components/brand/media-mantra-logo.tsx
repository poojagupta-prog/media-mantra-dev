"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { MARKETS_DOT } from "@/data/markets";

/** Official identity lockup — full-colour PNG (`public/brand/mm-global-lockup.png`). */
const LOGO_SRC = "/brand/mm-global-lockup.png";

type LogoVariant = "onDark" | "onLight";

type Props = {
  variant: LogoVariant;
  /** When false, still shows full lockup (PNG includes wordmark). */
  wordmark?: boolean;
  /** Unused — raster lockup already uses caps wordmark. */
  captionCaps?: boolean;
  /** Nav: compact height. Footer: slightly taller + optional lines below image. */
  density?: "compact" | "full";
  /** Homepage hero — lighter badge over video */
  onVideo?: boolean;
  className?: string;
};

/**
 * Approved brand lockup (`public/brand/mm-global-lockup.png`).
 * Full lockup on white — mm mark, wordmark, and “Building Your Story”.
 */
export function MediaMantraLogo({
  variant,
  wordmark = true,
  captionCaps: _captionCaps = false,
  density = "compact",
  onVideo = false,
  className,
}: Props) {
  const sub = variant === "onDark" ? "text-mm-light group-hover:text-mm-cream/90" : "text-mm-graphite/90";

  /** Header lockup — smaller on mobile; scales up from md. */
  const frame =
    density === "full"
      ? "h-[3.25rem] w-auto aspect-[684/374] sm:h-[4rem] md:h-[4.5rem]"
      : [
          "max-md:w-[min(calc(100vw-6.5rem),5.75rem)] max-md:max-w-[5.75rem]",
          "md:w-[min(calc(100vw-8rem),10.5rem)] md:max-w-[10.5rem]",
          "lg:w-[min(calc(100vw-9rem),11.25rem)] lg:max-w-[11.25rem]",
          "aspect-[684/374]",
        ].join(" ");

  const badge = onVideo
    ? "rounded px-1 py-0.5 shadow-[0_6px_20px_rgba(0,0,0,0.2)] bg-white/95 sm:rounded-md sm:px-1.5"
    : "rounded px-1 py-0.5 shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/8 bg-mm-white sm:rounded-md sm:px-1.5";

  return (
    <span className={cn("group inline-flex flex-col items-start gap-3", className)}>
      <span className={cn("inline-flex shrink-0 items-center justify-center overflow-hidden", badge, frame)}>
        <Image
          src={LOGO_SRC}
          alt="Media Mantra Global — Building Your Story"
          width={684}
          height={374}
          sizes={
            density === "compact"
              ? "(max-width: 767px) 92px, (max-width: 1024px) 168px, 180px"
              : "(max-width: 768px) 208px, 288px"
          }
          className="h-full w-full object-contain object-center"
          priority={density === "compact"}
          draggable={false}
        />
      </span>

      {wordmark && density === "full" ? (
        <span className={cn("text-[7px] font-medium uppercase tracking-[0.42em]", sub)}>
          {MARKETS_DOT}
        </span>
      ) : null}
    </span>
  );
}
