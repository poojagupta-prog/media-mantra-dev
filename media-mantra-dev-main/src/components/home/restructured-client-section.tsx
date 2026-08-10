"use client";

import Image from "next/image";
import { clientLogos, getClientLogoSrc } from "@/data/clients";
import { Container } from "@/components/ui/container";
import { SectionThemeWrapper } from "@/components/theme/section-theme-wrapper";
import { useDocumentContent } from "@/hooks/use-content";

/**
 * Restructured Client Logo Section
 * Updates section title to "CLIENT LOGO" with right-aligned headline
 */
export function RestructuredClientSection() {
  const { content, loading, error } = useDocumentContent(
    'clients',
    'clients-content',
    {
      fallback: `
        <h2>Brands That Trust Us</h2>
        <p>We work with leading brands across industries, delivering strategic communications that drive results and build lasting relationships.</p>
      `,
    }
  );

  // Default content structure
  const defaultContent = {
    sectionLabel: "CLIENT LOGO",
    headline: "Brands That Trust Us",
    description: "We work with leading brands across industries, delivering strategic communications that drive results and build lasting relationships.",
    subtext: "From Fortune 500s to challengers — influence where it counts.",
  };

  const row = [...clientLogos, ...clientLogos];

  return (
    <SectionThemeWrapper
      sectionId="clients"
      customTheme={{
        background: 'white',
        headlineColor: 'blue',
        textColor: 'graphite',
      }}
      className="relative scroll-mt-28 overflow-hidden py-20 lg:scroll-mt-32 lg:py-[clamp(5rem,12vw,7.5rem)]"
      as="section"
    >
      {/* Subtle background gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(210,180,80,0.08),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mm-graphite/12 to-transparent"
        aria-hidden
      />

      <Container className="relative z-[1] mb-12 lg:mb-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          {/* Left side - Description */}
          <div className="max-w-md lg:max-w-[28rem]">
            <p className="font-editorial text-[0.9375rem] leading-relaxed opacity-75 lg:text-[1.0625rem] lg:leading-[1.65]">
              {defaultContent.description}
            </p>
            <p className="mt-4 text-sm opacity-60">
              {defaultContent.subtext}
            </p>
          </div>

          {/* Right side - Headline (right-aligned as per requirements) */}
          <div className="max-w-xl lg:text-right">
            <div className="flex items-center justify-start gap-3 lg:ml-auto lg:justify-end">
              <span className="h-px w-12 bg-gradient-to-r from-mm-gold to-mm-gold/30 lg:order-2" aria-hidden />
              <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">
                {defaultContent.sectionLabel}
              </p>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,2.85rem)] font-semibold uppercase leading-[1.05] tracking-[0.02em]">
              {defaultContent.headline}
            </h2>
          </div>
        </div>
      </Container>

      {/* Client Logos Marquee */}
      <div className="relative z-[1] mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <div className="relative rounded-[28px] border border-mm-graphite/[0.09] bg-mm-white/65 shadow-[0_28px_90px_-48px_rgba(26,22,18,0.35)] backdrop-blur-md ring-1 ring-mm-graphite/[0.04]">
          <div className="relative overflow-hidden rounded-[28px] py-10 lg:py-12">
            {/* Fade gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-mm-white via-mm-white/95 to-transparent sm:w-24 lg:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-mm-white via-mm-white/95 to-transparent sm:w-24 lg:w-28" />

            {/* Marquee track */}
            <div className="mm-marquee-track-clients flex w-max items-center gap-x-6 px-8 sm:gap-x-8 sm:px-10 lg:gap-x-12 lg:px-12">
              {row.map((name, i) => {
                const logoSrc = getClientLogoSrc(name);
                return (
                  <div
                    key={`${name}-${i}`}
                    className="flex h-[58px] shrink-0 items-center justify-center sm:h-[68px] lg:h-[76px] [width:min(340px,calc((100vw-3rem)/2))] sm:[width:min(340px,calc((100vw-4rem)/3))]"
                  >
                    <div className="group/logo flex h-full w-full items-center justify-center rounded-2xl border border-mm-graphite/[0.08] bg-gradient-to-b from-mm-white to-mm-white/85 px-5 py-2.5 shadow-[0_8px_28px_-18px_rgba(0,0,0,0.22)] ring-1 ring-mm-graphite/[0.03] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-mm-gold/40 hover:shadow-[0_14px_36px_-20px_rgba(0,0,0,0.28)] sm:px-6">
                      {logoSrc ? (
                        <div className="relative h-10 w-full max-h-[52px] opacity-90 transition duration-300 group-hover/logo:opacity-100 sm:h-12 lg:h-14">
                          <Image
                            src={logoSrc}
                            alt={name}
                            fill
                            className="object-contain object-center"
                            sizes="(max-width: 768px) 30vw, 340px"
                          />
                        </div>
                      ) : (
                        <span className="line-clamp-2 text-center text-[9px] font-semibold uppercase leading-snug tracking-[0.18em] text-mm-graphite/55 transition hover:text-mm-graphite sm:text-[10px] sm:tracking-[0.2em]">
                          {name}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Client Stats */}
      <Container className="relative z-[1] mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-display font-bold text-mm-gold">600+</div>
            <div className="text-xs uppercase tracking-wider opacity-60">Brands Served</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-display font-bold text-mm-gold">25+</div>
            <div className="text-xs uppercase tracking-wider opacity-60">Industries</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-display font-bold text-mm-gold">13</div>
            <div className="text-xs uppercase tracking-wider opacity-60">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-display font-bold text-mm-gold">3X</div>
            <div className="text-xs uppercase tracking-wider opacity-60">Avg. Visibility Lift</div>
          </div>
        </div>
      </Container>
    </SectionThemeWrapper>
  );
}

// Alternative grid-based layout for client logos
export function GridClientSection() {
  const featuredLogos = clientLogos.slice(0, 12); // Show first 12 logos in grid

  return (
    <SectionThemeWrapper
      sectionId="clients"
      customTheme={{
        background: 'white',
        headlineColor: 'blue',
        textColor: 'graphite',
      }}
      className="relative scroll-mt-28 py-20 lg:scroll-mt-32 lg:py-24"
      as="section"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14 mb-16">
          <div className="max-w-md lg:max-w-[28rem]">
            <p className="font-editorial text-[0.9375rem] leading-relaxed opacity-75 lg:text-[1.0625rem] lg:leading-[1.65]">
              We work with leading brands across industries, delivering strategic communications that drive results and build lasting relationships.
            </p>
          </div>

          <div className="max-w-xl lg:text-right">
            <div className="flex items-center justify-start gap-3 lg:ml-auto lg:justify-end">
              <span className="h-px w-12 bg-gradient-to-r from-mm-gold to-mm-gold/30 lg:order-2" aria-hidden />
              <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">
                CLIENT LOGO
              </p>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,2.85rem)] font-semibold uppercase leading-[1.05] tracking-[0.02em]">
              Brands That Trust Us
            </h2>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {featuredLogos.map((name, i) => {
            const logoSrc = getClientLogoSrc(name);
            return (
              <div
                key={`${name}-${i}`}
                className="group flex h-20 items-center justify-center rounded-xl border border-mm-graphite/[0.08] bg-gradient-to-b from-mm-white to-mm-white/85 p-4 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-mm-gold/40 hover:shadow-lg"
              >
                {logoSrc ? (
                  <div className="relative h-full w-full opacity-75 transition duration-300 group-hover:opacity-100">
                    <Image
                      src={logoSrc}
                      alt={name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                  </div>
                ) : (
                  <span className="text-center text-[8px] font-semibold uppercase leading-tight tracking-wider text-mm-graphite/55 transition group-hover:text-mm-graphite">
                    {name}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 border-b border-mm-graphite/35 pb-1 text-[11px] font-semibold uppercase tracking-[0.28em] transition hover:border-mm-gold hover:text-mm-graphite">
            View All Clients
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </Container>
    </SectionThemeWrapper>
  );
}