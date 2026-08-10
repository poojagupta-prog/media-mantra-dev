"use client";

import { useRef } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import type { CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/cn";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  study: CaseStudy;
  images: readonly string[];
};

const navButtonClass =
  "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/20 text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 disabled:pointer-events-none disabled:opacity-35 md:h-12 md:w-12";

/** Edelman work-page campaign slider — full bleed, dark canvas, edge arrows. */
export function CaseStudyCampaignGallery({ study, images }: Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const showNav = images.length > 1;

  return (
    <div className="relative w-full bg-mm-black" aria-label={`${study.brand} campaign imagery`}>
      {showNav ? (
        <>
          <button
            ref={prevRef}
            type="button"
            className={cn(navButtonClass, "left-3 sm:left-5 md:left-8")}
            aria-label="Previous campaign image"
          >
            <HiChevronLeft className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
          </button>
          <button
            ref={nextRef}
            type="button"
            className={cn(navButtonClass, "right-3 sm:right-5 md:right-8")}
            aria-label="Next campaign image"
          >
            <HiChevronRight className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
          </button>
        </>
      ) : null}

      <Swiper
        modules={[Navigation, Keyboard, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        loop={showNav}
        speed={480}
        keyboard={{ enabled: showNav }}
        navigation={
          showNav
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            : false
        }
        onBeforeInit={(swiper: SwiperInstance) => {
          if (!showNav || typeof swiper.params.navigation === "boolean") return;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onInit={(swiper: SwiperInstance) => {
          if (!showNav || typeof swiper.params.navigation === "boolean") return;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="case-study-gallery-swiper w-full"
      >
        {images.map((src, imageIndex) => (
          <SwiperSlide key={`${src}-${imageIndex}`}>
            <div className="relative flex min-h-[min(52vw,420px)] w-full items-center justify-center sm:min-h-[min(58vh,520px)] md:min-h-[min(72vh,680px)]">
              <Image
                src={src}
                alt={`${study.brand} campaign ${imageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority={imageIndex === 0}
                loading={imageIndex === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showNav ? (
        <p className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
          Campaign gallery
        </p>
      ) : null}
    </div>
  );
}
