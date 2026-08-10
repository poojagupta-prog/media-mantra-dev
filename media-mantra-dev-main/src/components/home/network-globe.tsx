"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GLOBE_IMAGE, globeMarketMarkers } from "@/lib/globe-projection";

/** Rotating globe with five interactive market markers. */
export function NetworkGlobe() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [staticGlobe, setStaticGlobe] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStaticGlobe(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(100%,520px)] sm:max-w-[580px] lg:max-w-[min(100%,680px)] xl:max-w-[760px]">
      <div
        className={`relative h-full w-full ${staticGlobe ? "" : "mm-globe-spin"}`}
        style={{ transformOrigin: "50% 50%" }}
      >
        <Image
          src={GLOBE_IMAGE}
          alt="Media Mantra Global network — India, US, Australia, Singapore, and UAE"
          width={800}
          height={800}
          className="h-full w-full select-none"
          priority
          draggable={false}
        />

        <div className="pointer-events-none absolute inset-0">
          {globeMarketMarkers.map((market) => {
            const isActive = activeSlug === market.slug;
            const isDimmed = activeSlug !== null && !isActive;
            const facing = market.depth > 0.08;

            return (
              <Link
                key={market.slug}
                href={market.href}
                className="pointer-events-auto absolute z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{
                  left: `${market.left}%`,
                  top: `${market.top}%`,
                  opacity: isDimmed ? 0.45 : facing ? 1 : 0.72,
                }}
                onMouseEnter={() => setActiveSlug(market.slug)}
                onMouseLeave={() => setActiveSlug(null)}
                onFocus={() => setActiveSlug(market.slug)}
                onBlur={() => setActiveSlug(null)}
                aria-label={`${market.label} — ${market.hub}`}
              >
                <span className="relative flex items-center justify-center">
                  <span
                    className={`absolute rounded-full border border-mm-gold/70 bg-mm-gold/10 transition-all duration-300 ${
                      isActive ? "h-11 w-11 opacity-100" : "h-7 w-7 opacity-0"
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`relative block rounded-full border-2 border-mm-gold bg-mm-cream shadow-[0_0_12px_rgba(210,180,80,0.45)] transition-all duration-300 ${
                      isActive ? "h-4 w-4 scale-110" : "h-2.5 w-2.5"
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`absolute left-1/2 top-[calc(100%+0.55rem)] z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-mm-gold/40 bg-mm-graphite/95 px-3 py-1.5 text-center shadow-lg backdrop-blur-sm transition-all duration-300 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-1 opacity-0"
                    }`}
                  >
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-mm-cream">
                      {market.label}
                    </span>
                    <span className="mt-0.5 block text-[9px] tracking-[0.12em] text-mm-gold">{market.hub}</span>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
