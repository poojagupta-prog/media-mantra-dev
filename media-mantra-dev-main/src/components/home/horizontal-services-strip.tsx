"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { HiArrowUpRight } from "react-icons/hi2";

export function HorizontalServicesStrip() {
  return (
    <section className="border-b border-mm-white/10 bg-mm-black py-20">
      <Container className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mm-cream md:text-4xl">
            Capability stack across every influential surface.
          </h2>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-mm-gold"
        >
          Services index <HiArrowUpRight />
        </Link>
      </Container>

      <Swiper modules={[FreeMode]} slidesPerView="auto" spaceBetween={20} freeMode centeredSlidesBounds className="!px-5 sm:!px-8 lg:!px-12">
        {services.map((s) => (
          <SwiperSlide key={s.slug} className="!w-[280px] sm:!w-[320px] lg:!w-[360px]">
            <Link
              href={`/services/${s.slug}`}
              className={`relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-mm-white/10 bg-gradient-to-br ${s.heroGradient} p-8 text-mm-cream transition hover:border-mm-gold/40`}
            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.45em] text-mm-cream/80">
                  {String(s.index).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{s.title}</h3>
              </div>
              <p className="text-sm text-mm-cream/80 line-clamp-3">{s.excerpt}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
