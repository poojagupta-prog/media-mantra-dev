import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { createMetadata } from "@/lib/seo";
import { CaseStudyCampaignGallery } from "@/components/case-study/case-study-campaign-gallery";
import { CaseStudyOutcomeCounters } from "@/components/case-study/case-study-outcome-counters";
import { Container } from "@/components/ui/container";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return createMetadata({
    title: study.title,
    pathname: `/case-studies/${slug}`,
    description: study.excerpt,
  });
}

const DEFAULT_CAMPAIGN_IMAGES = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529333166437-af0dfc5c086c?auto=format&fit=crop&w=1200&q=80",
] as const;

function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-mm-graphite/10 pt-14 md:pt-16">
      <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-graphite/55 md:text-xs">
        {title}
      </h2>
      <div className="mt-6 space-y-5 font-editorial text-base leading-relaxed text-mm-graphite/82 md:text-[17px] md:leading-[1.75]">
        {children}
      </div>
    </section>
  );
}

/** Case study detail — Edelman work-page format (reference: edelman.com/in/work/airbnb-home-with-open-arms). */
export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = caseStudies
    .filter((c) => c.slug !== slug && (c.section ?? "commercial") === (study.section ?? "commercial"))
    .slice(0, 4);
  const campaignImages =
    study.campaignImages && study.campaignImages.length > 0 ? study.campaignImages : DEFAULT_CAMPAIGN_IMAGES;

  const campaignIsHashtag = study.campaign.trim().startsWith("#");

  return (
    <main id="main-content" className="flex-1 bg-mm-cream pb-28 text-mm-graphite">
      <Container className="pt-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-graphite/55 transition hover:text-mm-graphite"
        >
          ← Case studies
        </Link>
      </Container>

      <section className="relative mt-6 w-full overflow-hidden bg-mm-graphite/[0.04]">
        <div className="relative mx-auto aspect-[16/9] w-full max-h-[min(56vh,520px)]">
          <Image src={study.heroImage} alt="" fill priority className="object-cover" sizes="100vw" />
        </div>
      </section>

      <Container className="mx-auto mt-12 max-w-3xl md:mt-14 lg:mt-16">
        <section id="brief" className="scroll-mt-28 text-center md:text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-graphite/50">Brand</p>
          <p className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.06em] text-mm-graphite md:text-xl">
            {study.brand}
          </p>

          <h1
            className={
              campaignIsHashtag
                ? "mt-8 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-mm-gold"
                : "mt-8 font-display text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-[1.02] tracking-tight mm-headline-brand-blue"
            }
          >
            {study.campaign}
          </h1>

          {!campaignIsHashtag ? (
            <p className="mt-4 font-display text-xl font-medium leading-snug text-mm-graphite/70 md:text-2xl">
              {study.title.replace(`${study.brand} · `, "").replace(`${study.brand}`, "").trim() || study.title}
            </p>
          ) : null}

          <div className="mt-8 space-y-5 font-editorial text-base leading-relaxed text-mm-graphite/82 md:mt-10 md:text-[17px] md:leading-[1.75]">
            {study.brief.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </Container>

      <section className="mt-12 w-full md:mt-16" aria-label="Campaign pictures">
        <CaseStudyCampaignGallery study={study} images={campaignImages} />
      </section>

      <Container className="mx-auto mt-14 max-w-3xl md:mt-16">
        <CaseStudySection id="idea" title={study.ideaSectionTitle ?? "The idea"}>
          {study.idea.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </CaseStudySection>

        {study.execution.length > 0 ? (
          <CaseStudySection id="execution" title="Execution">
            {study.execution.map((item) =>
              /^Year \d/.test(item) ? (
                <h3
                  key={item}
                  className="pt-2 font-display text-lg font-semibold tracking-tight text-mm-graphite md:text-xl"
                >
                  {item}
                </h3>
              ) : (
                <p key={item}>{item}</p>
              ),
            )}
          </CaseStudySection>
        ) : null}

        <CaseStudySection id="results" title="Results">
          <ul className="list-none space-y-4">
            {study.results.map((item) => (
              <li key={item} className="relative pl-5 before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-mm-gold">
                {item}
              </li>
            ))}
          </ul>
          <CaseStudyOutcomeCounters stats={study.resultsHighlights} />
        </CaseStudySection>

        {related.length > 0 ? (
          <section className="mt-20 border-t border-mm-graphite/15 pt-16 md:mt-24" aria-labelledby="more-work-heading">
            <h2 id="more-work-heading" className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-graphite/45">
              More case studies
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {related.map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-mm-graphite/[0.06]">
                    <Image
                      src={c.heroImage}
                      alt=""
                      fill
                      className="object-cover transition duration-700 [@media(hover:hover)]:group-hover:scale-[1.03]"
                      sizes="(max-width:640px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.05em]">{c.title}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </main>
  );
}
