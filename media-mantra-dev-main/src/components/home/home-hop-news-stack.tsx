"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { blogPosts } from "@/data/blog";
import { homeInsightsRibbon } from "@/data/home-content";
import { Container } from "@/components/ui/container";

const MAX = 3;

/** Hopscotch news stack — bordered horizontal cards (text spine + image rail) */
export function HomeHopNewsStack() {
  const posts = blogPosts.slice(0, MAX);

  return (
    <section id="news" className="scroll-mt-28 bg-mm-white pb-24 pt-12 lg:scroll-mt-32 lg:pb-32 lg:pt-16">
      <Container className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:px-4">
        <h2 className="font-display text-[clamp(1.65rem,3.8vw,2.75rem)] font-semibold uppercase tracking-tight text-mm-graphite">
          {homeInsightsRibbon.label}
        </h2>
        <Link
          href={homeInsightsRibbon.cta.href}
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-graphite underline-offset-8 transition hover:text-mm-graphite/70"
        >
          {homeInsightsRibbon.cta.label}
          <HiArrowUpRight className="h-4 w-4" />
        </Link>
      </Container>

      <Container className="flex flex-col gap-10 lg:max-w-[1100px] lg:px-4">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="flex flex-col overflow-hidden border border-mm-graphite bg-[#f6f6f4] sm:flex-row"
          >
            <Link href={`/blog/${p.slug}`} className="group flex flex-1 flex-col p-8 sm:p-10 lg:max-w-[62%]">
              <h3 className="font-display text-xl font-semibold leading-snug text-mm-graphite transition group-hover:text-mm-graphite/80 sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-4 font-editorial text-sm leading-relaxed text-mm-graphite/75">{p.dek}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite underline underline-offset-[10px]">
                <HiArrowUpRight className="h-4 w-4" />
                Read insight
              </span>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-mm-graphite/50">
                ■ Media Mantra Global · {p.date.replace(/-/g, " · ")}
              </p>
              <span className="mt-4 inline-flex w-fit rounded-full border border-mm-graphite/15 bg-[#ebe8df] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-mm-graphite">
                {p.category}
              </span>
            </Link>
            <Link
              href={`/blog/${p.slug}`}
              className="relative aspect-square w-full shrink-0 border-t border-mm-graphite sm:w-[clamp(220px,30vw,320px)] sm:border-l sm:border-t-0"
            >
              <Image src={p.coverImage} alt="" fill className="object-cover" sizes="320px" />
            </Link>
          </article>
        ))}
      </Container>
    </section>
  );
}
