"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { blogCategories, blogPosts } from "@/data/blog";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export default function BlogPage() {
  const [cat, setCat] = useState<string>("All");
  const filtered = useMemo(() => {
    if (cat === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === cat);
  }, [cat]);

  return (
    <main id="main-content" className="flex-1 bg-mm-graphite pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel>Blogs</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">Blogs</h1>
        <p className="mt-6 max-w-2xl font-editorial text-lg leading-[1.85] text-mm-light">
          Perspective on communications, markets, and what we’re learning in the work.
        </p>
      </Container>

      <Container className="mt-12 flex flex-wrap gap-2">
        {blogCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition ${
              cat === c
                ? "border-mm-gold/60 bg-mm-gold/10 text-mm-cream"
                : "border-mm-white/10 text-mm-light hover:border-mm-white/25"
            }`}
          >
            {c}
          </button>
        ))}
      </Container>

      <Container className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-3xl border border-mm-white/10">
            <div className="relative h-52">
              <Image src={p.coverImage} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-mm-black/80 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mm-gold">{p.category}</p>
              <h2 className="font-display text-xl font-semibold">{p.title}</h2>
              <p className="text-sm text-mm-light line-clamp-3">{p.dek}</p>
              <p className="mt-auto text-[10px] uppercase tracking-[0.25em] text-mm-light/60">
                {p.date} · {p.readTime}
              </p>
            </div>
          </Link>
        ))}
      </Container>
    </main>
  );
}
