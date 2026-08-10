import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { getServiceBySlug, services } from "@/data/services";
import { getCaseStudySlugForService } from "@/data/service-case-studies";
import { serviceDeepContent } from "@/data/service-deep-content";
import { ServiceCaseStudyCard } from "@/components/services/service-case-study-card";
import { ServiceDetailBody } from "@/components/services/service-detail-body";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return createMetadata({
    title: svc.title,
    pathname: `/services/${slug}`,
    description: svc.excerpt,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();
  const rich = serviceDeepContent[svc.slug] ?? [{ type: "p" as const, text: svc.excerpt }];
  const caseStudySlug = getCaseStudySlugForService(svc.slug);
  const featuredCaseStudy =
    caseStudySlug === null || caseStudySlug === undefined
      ? null
      : getCaseStudyBySlug(caseStudySlug) ?? null;

  return (
    <main id="main-content" className="flex-1 bg-mm-white text-mm-graphite">
      <section className="relative isolate overflow-hidden border-b border-mm-white/10 text-mm-cream">
        <div className="relative aspect-[16/9] w-full max-h-[min(52vh,520px)]">
          <Image
            src={svc.heroImage}
            alt={svc.title}
            fill
            unoptimized
            className={`object-cover ${svc.heroImagePosition ?? "object-center"}`}
            sizes="100vw"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${svc.heroGradient} mix-blend-multiply`} />
          <div className="absolute inset-0 bg-mm-graphite/55" />
        </div>
        <Container className="absolute inset-x-0 bottom-0 pb-10 pt-16 lg:pb-14">
          <Link href="/services" className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-cream/70">
            ← Services
          </Link>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.2rem,5vw,3.75rem)] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-mm-white">
            {String(svc.index).padStart(2, "0")}. {svc.title}
          </h1>
        </Container>
      </section>

      <section className="border-b border-mm-graphite/10 py-16 lg:py-24">
        <Container className="max-w-[1380px]">
          <div
            className={
              featuredCaseStudy
                ? "grid gap-12 lg:grid-cols-[1.06fr_minmax(0,0.98fr)] lg:items-start lg:gap-[min(4vw,3.5rem)]"
                : "max-w-3xl"
            }
          >
            <div className={featuredCaseStudy ? "order-2 space-y-10 lg:order-1" : "space-y-10"}>
              <h2 className="max-w-2xl font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-tight mm-headline-brand-blue">
                {svc.tagline}
              </h2>
              <ServiceDetailBody blocks={rich} tone="light" />
            </div>
            {featuredCaseStudy ? (
              <div className="order-1 lg:sticky lg:top-40 lg:order-2">
                <ServiceCaseStudyCard study={featuredCaseStudy} />
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    </main>
  );
}
