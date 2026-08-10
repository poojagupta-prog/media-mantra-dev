import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import { gamingMantraPage, startupMantraPage } from "@/data/mantra-pages-content";
import { cn } from "@/lib/cn";

export const metadata = createMetadata({
  title: "Gaming Mantra & Startup Mantra",
  description:
    "Dedicated Media Mantra verticals for gaming and startups — specialist communications for emerging ecosystems and high-growth brands.",
  pathname: "/about/mantras",
});

function MantraSection({
  id,
  page,
  reverse = false,
}: {
  id: string;
  page: typeof gamingMantraPage;
  reverse?: boolean;
}) {
  const imagePosition = page.banner.imagePosition ?? "object-cover object-center";

  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-mm-cream/[0.08] bg-mm-graphite text-mm-cream lg:scroll-mt-32"
    >
      <div className="grid items-stretch lg:grid-cols-2">
        <div className={cn("relative min-h-[320px] lg:min-h-[520px]", reverse ? "lg:order-2" : "")}>
          <Image
            src={page.banner.imageSrc}
            alt={page.banner.imageAlt}
            fill
            unoptimized
            className={cn(imagePosition)}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mm-graphite-deep/70 via-transparent to-mm-graphite/15" />
        </div>

        <div className={cn("flex items-center", reverse ? "lg:order-1" : "")}>
          <Container className="py-14 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-gold">About</p>
              <h1 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.06] tracking-tight text-mm-white">
                {page.title}
              </h1>
              <div className="mt-8 space-y-5 font-editorial text-[1.02rem] leading-[1.85] text-mm-cream/85">
                {page.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center border-b border-mm-gold/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-gold transition hover:border-mm-cream hover:text-mm-cream"
              >
                Contact us
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default function MantrasPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-graphite">
      <MantraSection id="gaming-mantra" page={gamingMantraPage} />
      <MantraSection id="startup-mantra" page={startupMantraPage} reverse />
    </main>
  );
}
