import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ServiceContentBlock } from "@/data/service-deep-content";

type Tone = "dark" | "light";

export function ServiceDetailBody({ blocks, tone = "dark" }: { blocks: readonly ServiceContentBlock[]; tone?: Tone }) {
  const dark = tone === "dark";

  return (
    <div className="w-full space-y-8">
      {blocks.map((block, idx) => {
        if (block.type === "p") {
          return (
            <p
              key={idx}
              className={cn(
                "font-editorial text-lg leading-relaxed md:text-xl",
                dark ? "text-mm-light" : "text-mm-graphite/85",
              )}
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={idx}
              className={cn(
                "font-display text-2xl font-semibold tracking-tight md:text-3xl",
                dark ? "text-mm-cream" : "mm-headline-brand-blue",
              )}
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={idx} className="group/fig space-y-3">
              <div
                className={cn(
                  "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)] md:aspect-[2.1/1]",
                  dark ? "border-mm-white/10" : "border-mm-graphite/[0.1]",
                )}
              >
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover/fig:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 42rem"
                />
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-tr via-transparent",
                    dark ? "from-mm-black/45 to-mm-royal/15" : "from-mm-graphite/10 to-transparent",
                  )}
                />
              </div>
            </figure>
          );
        }
        if (block.type === "bullets") {
          return (
            <div key={idx} className="space-y-4">
              {block.title ? (
                <h3
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.35em]",
                    dark ? "text-mm-gold" : "text-mm-brand-navy",
                  )}
                >
                  {block.title}
                </h3>
              ) : null}
              <ul
                className={cn(
                  "space-y-3 border-l pl-5",
                  dark ? "border-mm-gold/35" : "border-mm-brand-navy/25",
                )}
              >
                {block.items.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "font-editorial text-base leading-relaxed md:text-[17px]",
                      dark ? "text-mm-cream/90" : "text-mm-graphite/85",
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (block.type === "ctas") {
          return (
            <div key={idx} className="flex flex-wrap gap-4 pt-2">
              {block.items.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className={cn(
                    "group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] transition hover:gap-3",
                    dark ? "text-mm-gold hover:text-mm-cream" : "text-mm-brand-navy hover:text-mm-graphite",
                  )}
                >
                  → {c.label}
                </Link>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
