"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import { homeInsightsRibbon } from "@/data/home-content";
import { Container } from "@/components/ui/container";

const MAX = 4;

/** Hopscotch “OUR LAST NEWS” horizontal strip */
export function HomeInsightsRibbonSection() {
  const posts = blogPosts.slice(0, MAX);

  return (
    <section className="scroll-mt-28 border-y border-mm-white/[0.06] bg-mm-charcoal py-14 lg:scroll-mt-32 lg:py-20">
      <Container className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.48em] text-mm-gold">
          {homeInsightsRibbon.label}
        </h2>
        <Link
          href={homeInsightsRibbon.cta.href}
          className="inline-flex shrink-0 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream/80 underline-offset-8 transition hover:text-mm-gold"
        >
          {homeInsightsRibbon.cta.label}
        </Link>
      </Container>

      <div className="relative overflow-x-auto pb-3 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]">
        <div className="mx-auto flex w-max gap-5 px-5 sm:gap-6 sm:px-8 lg:gap-8 lg:px-12">
          {posts.map((p, idx) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: idx * 0.06, duration: 0.45 }}
              className="w-[min(88vw,320px)] shrink-0 snap-start sm:w-[min(72vw,380px)]"
            >
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mm-white/[0.08] bg-mm-black/30 transition hover:border-mm-gold/30">
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                  <Image
                    src={p.coverImage}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mm-charcoal/90 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-mm-gold/90">{p.category}</p>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-mm-cream transition group-hover:text-mm-gold line-clamp-3">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-editorial text-sm leading-relaxed text-mm-light line-clamp-2">{p.dek}</p>
                  <span className="mt-auto pt-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                    Read
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
