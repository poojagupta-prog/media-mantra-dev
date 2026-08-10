"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { blogPosts } from "@/data/blog";
import { homeInsights } from "@/data/home-content";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { HiArrowUpRight } from "react-icons/hi2";

type Props = {
  /** `ribbon` keeps the homepage airy — marquee insight only, full grid lives on `/blog` */
  variant?: "ribbon" | "full";
};

export function InsightsPreviewSection({ variant = "full" }: Props) {
  const featured = blogPosts[0];
  const slides = blogPosts.slice(0, 3);

  if (variant === "ribbon") {
    return (
      <section id="insights" className="scroll-mt-28 bg-mm-black py-20 lg:scroll-mt-32 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <SectionLabel>{homeInsights.label}</SectionLabel>
              <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.35rem)] font-semibold tracking-tight text-mm-cream">
                {homeInsights.headline}
              </h2>
              <p className="mt-4 max-w-md font-editorial text-base text-mm-light">{homeInsights.description}</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-gold transition hover:text-mm-cream md:self-center md:text-xs"
            >
              View all <HiArrowUpRight />
            </Link>
          </div>

          <div className="mt-11 overflow-hidden rounded-sm bg-mm-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <Swiper loop grabCursor slidesPerView={1} className="insights-home-swiper">
              {slides.map((p) => (
                <SwiperSlide key={p.slug}>
                  <div className="grid lg:grid-cols-[minmax(0,1.06fr)_0.94fr]">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group relative block aspect-[16/11] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[300px]"
                    >
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width:1024px) 100vw,55vw"
                        priority={p.slug === featured.slug}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mm-black/75 via-mm-black/35 to-transparent" />
                    </Link>
                    <div className="flex flex-col justify-center gap-4 p-7 lg:gap-5 lg:p-12">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">{p.category}</p>
                      <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-mm-cream md:text-3xl">{p.title}</h3>
                      <p className="font-editorial text-sm leading-relaxed text-mm-light line-clamp-3 md:text-[0.975rem]">{p.dek}</p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] uppercase tracking-[0.25em] text-mm-light/60">
                        <span>{p.date}</span>
                        <span>{p.readTime}</span>
                      </div>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-cream transition hover:text-mm-gold"
                      >
                        Continue reading <HiArrowUpRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative bg-mm-black py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>{homeInsights.label}</SectionLabel>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.85rem)] font-semibold leading-tight tracking-tight text-mm-cream">
              {homeInsights.headline}
            </h2>
            <p className="mt-5 max-w-2xl font-editorial text-lg leading-relaxed text-mm-light">{homeInsights.description}</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-mm-gold hover:underline hover:underline-offset-4"
          >
            All insights <HiArrowUpRight />
          </Link>
        </div>

        <div className="mt-14 overflow-hidden rounded-sm bg-mm-white/[0.03] backdrop-blur-xl">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 6200, disableOnInteraction: false }} loop slidesPerView={1}>
            {blogPosts.slice(0, 3).map((p) => (
              <SwiperSlide key={p.slug}>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <Link href={`/blog/${p.slug}`} className="group relative block h-[320px] overflow-hidden lg:h-[420px]">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width:1024px) 100vw,55vw"
                      priority={p.slug === featured.slug}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-mm-black/80 via-mm-black/40 to-transparent" />
                  </Link>
                  <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">{p.category}</p>
                    <h3 className="font-display text-3xl font-semibold tracking-tight text-mm-cream md:text-4xl">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-mm-light">{p.dek}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-mm-light/70">
                      <span>{p.date}</span>
                      <span>{p.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-mm-cream transition hover:text-mm-gold"
                    >
                      Read essay <HiArrowUpRight />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-mm-white/10 bg-mm-white/[0.02]"
            >
              <Link href={`/blog/${p.slug}`} className="relative h-48 overflow-hidden">
                <Image
                  src={p.coverImage}
                  alt={p.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw,33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mm-black/70 to-transparent opacity-80" />
              </Link>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mm-gold">{p.category}</p>
                <h4 className="font-display text-xl font-semibold text-mm-cream">{p.title}</h4>
                <p className="text-sm text-mm-light line-clamp-3">{p.dek}</p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-mm-cream/80 transition group-hover:text-mm-gold"
                >
                  Continue <HiArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
