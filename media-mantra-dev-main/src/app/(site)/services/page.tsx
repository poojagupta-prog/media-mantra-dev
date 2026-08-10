import { MARKETS_PRESENCE } from "@/data/markets";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { ServicesListingCard } from "@/components/services/services-listing-card";
import { serviceListingCards, servicesPageIntro } from "@/data/services-page-content";

export const metadata = createMetadata({
  title: "Services",
  pathname: "/services",
  description:
    `Integrated PR, founder branding, digital, reputation, SEO, influencer, content, and events — engineered across ${MARKETS_PRESENCE}.`,
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-white text-mm-graphite">
      <section className="border-b border-mm-graphite/10 px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
        <Container className="max-w-[1400px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">{servicesPageIntro.label}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.25rem,4.8vw,3.5rem)] font-semibold uppercase leading-[1.04] tracking-[0.02em] mm-headline-brand-blue">
            {servicesPageIntro.headline}
          </h1>
          <p className="mt-6 max-w-3xl font-editorial text-base leading-[1.8] text-mm-graphite/78 md:text-lg">
            {servicesPageIntro.body}
          </p>
        </Container>
      </section>

      <section className="bg-mm-graphite-deep py-16 text-mm-cream lg:py-24">
        <Container className="max-w-[1400px]">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">
            {servicesPageIntro.sectionLabel}
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {serviceListingCards.map((card) => (
              <ServicesListingCard key={card.slug} card={card} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
