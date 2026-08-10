"use client";

import Image from "next/image";
import { useState } from "react";
import { HiTrophy } from "react-icons/hi2";
import type { AwardItem } from "@/data/awards-content";

export function AwardImage({ item }: { item: AwardItem }) {
  const [failed, setFailed] = useState(false);

  if (!item.imageSrc || failed) {
    return (
      <div className="flex aspect-[3/4] w-full items-center justify-center bg-gradient-to-br from-mm-graphite/8 via-mm-gold/10 to-mm-graphite/5">
        <HiTrophy className="h-10 w-10 text-mm-gold/55" aria-hidden />
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-mm-cream/60">
      <Image
        src={item.imageSrc}
        alt={item.imageAlt ?? item.title}
        fill
        unoptimized
        className="object-contain object-center"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
