"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { Container } from "@/components/ui/container";
import { SectionThemeWrapper } from "@/components/theme/section-theme-wrapper";
import { useDocumentContent } from "@/hooks/use-content";

/**
 * Updated Intro Section with new theming and content integration
 * Applies white background with blue headlines as per requirements
 */
export function UpdatedIntroSection() {
  const { content, loading, error } = useDocumentContent(
    'intro',
    'intro-content',
    {
      fallback: `
        <h2>Our Trades and Sectors</h2>
        <p>Hopscotch combines 360° expertise with a profound understanding of audiences to develop strategies that enhance the relational capital of brands and organizations.</p>
        <p>Because every company faces its own challenges — transformation, reputation, visibility, acquisition, retention, engagement, growth — our trade and sectoral expertise adapt to each of your challenges to build lasting relationships with all your audiences.</p>
      `,
    }
  );

  // Default content structure
  const defaultContent = {
    label: "Our Trades and Sectors",
    headline: "360° communications expertise calibrated for boards, scrutiny, and market velocity.",
    intro: "Hopscotch combines 360° expertise with a profound understanding of audiences to develop strategies that enhance the relational capital of brands and organizations.",
    follow: "Because every company faces its own challenges — transformation, reputation, visibility, acquisition, retention, engagement, growth — our trade and sectoral expertise adapt to each of your challenges to build lasting relationships with all your audiences.",
    cta: { label: "Our expertise", href: "/services" },
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Strategy and analytics on laptop — communications capability",
  };

  return (
    <SectionThemeWrapper
      sectionId="intro"
      customTheme={{
        background: 'white',
        headlineColor: 'blue',
        textColor: 'graphite',
      }}
      className="scroll-mt-28 py-16 lg:scroll-mt-32 lg:py-24"
      as="section"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="flex flex-col gap-10">
            <h2 
              id="home-intro-heading" 
              className="max-w-xl font-display text-[clamp(1.85rem,3.6vw,3rem)] font-semibold uppercase leading-[1.08] tracking-[0.06em]"
            >
              {defaultContent.label}
            </h2>
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-mm-graphite/10 bg-mm-graphite/[0.04] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]">
              <Image
                src={defaultContent.imageSrc}
                alt={defaultContent.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 44vw"
                priority={false}
              />
            </figure>
          </div>

          <div className="space-y-6 self-center font-editorial text-base leading-relaxed md:text-[17px]">
            {loading ? (
              <div className="space-y-4">
                <div className="h-4 bg-mm-graphite bg-opacity-20 rounded animate-pulse"></div>
                <div className="h-4 bg-mm-graphite bg-opacity-20 rounded animate-pulse"></div>
                <div className="h-4 bg-mm-graphite bg-opacity-20 rounded animate-pulse w-3/4"></div>
              </div>
            ) : error ? (
              <div className="text-red-600 text-sm">
                Failed to load content. Using default content.
              </div>
            ) : null}
            
            <p className="font-medium">{defaultContent.headline}</p>
            <p className="opacity-85">{defaultContent.intro}</p>
            <p className="opacity-85">{defaultContent.follow}</p>
            
            <Link
              href={defaultContent.cta.href}
              className="group mt-2 inline-flex items-center gap-2 border-b border-mm-graphite/35 pb-1 text-[11px] font-semibold uppercase tracking-[0.28em] transition hover:border-mm-gold hover:text-mm-graphite"
            >
              {defaultContent.cta.label}
              <HiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </SectionThemeWrapper>
  );
}

// Alternative version with dynamic content parsing
export function DynamicIntroSection() {
  const { content, loading, error } = useDocumentContent(
    'intro',
    'intro-content',
    {
      fallback: 'Our Trades and Sectors content will be loaded here.',
    }
  );

  const parseContent = (htmlContent: string) => {
    // Simple HTML parsing for demo - in production, use a proper HTML parser
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    const h2 = tempDiv.querySelector('h2');
    const paragraphs = tempDiv.querySelectorAll('p');
    
    return {
      title: h2?.textContent || 'Our Trades and Sectors',
      paragraphs: Array.from(paragraphs).map(p => p.textContent || ''),
    };
  };

  const parsedContent = content ? parseContent(content) : null;

  return (
    <SectionThemeWrapper
      sectionId="intro"
      customTheme={{
        background: 'white',
        headlineColor: 'blue',
        textColor: 'graphite',
      }}
      className="scroll-mt-28 py-16 lg:scroll-mt-32 lg:py-24"
      as="section"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="flex flex-col gap-10">
            <h2 
              id="home-intro-heading" 
              className="max-w-xl font-display text-[clamp(1.85rem,3.6vw,3rem)] font-semibold uppercase leading-[1.08] tracking-[0.06em]"
            >
              {parsedContent?.title || 'Our Trades and Sectors'}
            </h2>
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-mm-graphite/10 bg-mm-graphite/[0.04] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=82"
                alt="Strategy and analytics on laptop — communications capability"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 44vw"
                priority={false}
              />
            </figure>
          </div>

          <div className="space-y-6 self-center font-editorial text-base leading-relaxed md:text-[17px]">
            {loading && (
              <div className="space-y-4">
                <div className="h-4 bg-mm-graphite bg-opacity-20 rounded animate-pulse"></div>
                <div className="h-4 bg-mm-graphite bg-opacity-20 rounded animate-pulse"></div>
                <div className="h-4 bg-mm-graphite bg-opacity-20 rounded animate-pulse w-3/4"></div>
              </div>
            )}
            
            {error && (
              <div className="text-red-600 text-sm mb-4">
                Failed to load content: {error}
              </div>
            )}
            
            {parsedContent?.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'font-medium' : 'opacity-85'}>
                {paragraph}
              </p>
            ))}
            
            <Link
              href="/services"
              className="group mt-2 inline-flex items-center gap-2 border-b border-mm-graphite/35 pb-1 text-[11px] font-semibold uppercase tracking-[0.28em] transition hover:border-mm-gold hover:text-mm-graphite"
            >
              Our expertise
              <HiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </SectionThemeWrapper>
  );
}