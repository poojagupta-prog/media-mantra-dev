"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionThemeWrapper } from "@/components/theme/section-theme-wrapper";
import { RevolvingGlobe, SVGRevolvingGlobe } from "@/components/animations/revolving-globe";
import { useDocumentContent } from "@/hooks/use-content";
import { MARKETS_DOT, MARKET_COUNT, markets } from "@/data/markets";

/**
 * Enhanced Location Section with Revolving Globe
 * Updates section title to "LOCATION" and integrates globe animation
 */
export function EnhancedLocationSection() {
  const { content, loading, error } = useDocumentContent(
    'location',
    'location-content',
    {
      fallback: `
        <h2>Our Integrated International Network</h2>
        <p>Thanks to our integrated international network of 40 agencies, we combine a global vision of communications with a local understanding of our markets, with the same high standards of excellence and creativity.</p>
      `,
    }
  );

  // Default content structure
  const defaultContent = {
    title: "LOCATION",
    headline: "Our Integrated International Network",
    description: "Thanks to our integrated international network of 40 agencies, we combine a global vision of communications with a local understanding of our markets, with the same high standards of excellence and creativity.",
    locations: markets.map((m) => ({
      city: m.hub,
      country: m.label,
      description: m.tagline,
    })),
    cta: { label: "Our offices", href: "/contact" },
  };

  return (
    <SectionThemeWrapper
      sectionId="location"
      customTheme={{
        background: 'white',
        headlineColor: 'blue',
        textColor: 'graphite',
      }}
      className="scroll-mt-28 py-16 lg:scroll-mt-32 lg:py-24"
      as="section"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-mm-gold mb-4">
                {defaultContent.title}
              </div>
              <h2 className="font-display text-[clamp(1.85rem,3.6vw,3rem)] font-semibold leading-[1.08] tracking-[0.06em] mb-6">
                {defaultContent.headline}
              </h2>
              <p className="text-base leading-relaxed opacity-85 md:text-[17px]">
                {defaultContent.description}
              </p>
            </div>

            {/* Location List */}
            <div className="space-y-6">
              {defaultContent.locations.map((location, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-mm-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">
                      {location.city}, {location.country}
                    </h3>
                    <p className="text-sm opacity-75 mt-1">
                      {location.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={defaultContent.cta.href}
              className="group inline-flex items-center gap-2 border-b border-mm-graphite/35 pb-1 text-[11px] font-semibold uppercase tracking-[0.28em] transition hover:border-mm-gold hover:text-mm-graphite"
            >
              {defaultContent.cta.label}
              <svg className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Globe Side */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Main Globe */}
              <div className="flex items-center justify-center">
                <SVGRevolvingGlobe
                  size="xl"
                  config={{
                    rotationSpeed: 5, // 72 seconds for full rotation like hopscotch.one
                    pauseOnHover: true,
                    autoStart: true,
                  }}
                  className="drop-shadow-2xl"
                />
              </div>

              {/* Location Markers */}
              <div className="absolute inset-0 pointer-events-none">
                {/* India Marker */}
                <div 
                  className="absolute w-3 h-3 bg-mm-gold rounded-full shadow-lg animate-pulse"
                  style={{ 
                    top: '45%', 
                    left: '65%',
                    animationDelay: '0s',
                    animationDuration: '2s'
                  }}
                >
                  <div className="absolute inset-0 bg-mm-gold rounded-full animate-ping opacity-75"></div>
                </div>

                {/* UAE Marker */}
                <div 
                  className="absolute w-3 h-3 bg-mm-gold rounded-full shadow-lg animate-pulse"
                  style={{ 
                    top: '40%', 
                    left: '58%',
                    animationDelay: '0.7s',
                    animationDuration: '2s'
                  }}
                >
                  <div className="absolute inset-0 bg-mm-gold rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Singapore Marker */}
                <div 
                  className="absolute w-3 h-3 bg-mm-gold rounded-full shadow-lg animate-pulse"
                  style={{ 
                    top: '60%', 
                    left: '70%',
                    animationDelay: '1.4s',
                    animationDuration: '2s'
                  }}
                >
                  <div className="absolute inset-0 bg-mm-gold rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              {/* Orbital Rings */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-4 border border-mm-gold border-opacity-20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-8 border border-mm-gold border-opacity-10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Stats */}
        <div className="mt-16 pt-12 border-t border-mm-graphite border-opacity-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-display font-bold text-mm-gold mb-2">{MARKET_COUNT}</div>
              <div className="text-sm uppercase tracking-wider opacity-75">Markets</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-mm-gold mb-2">40+</div>
              <div className="text-sm uppercase tracking-wider opacity-75">Agency Partners</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-mm-gold mb-2">13</div>
              <div className="text-sm uppercase tracking-wider opacity-75">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-mm-gold mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider opacity-75">Global Coverage</div>
            </div>
          </div>
        </div>
      </Container>
    </SectionThemeWrapper>
  );
}

// Alternative version with CSS-based globe for better performance
export function CSSLocationSection() {
  return (
    <SectionThemeWrapper
      sectionId="location"
      customTheme={{
        background: 'white',
        headlineColor: 'blue',
        textColor: 'graphite',
      }}
      className="scroll-mt-28 py-16 lg:scroll-mt-32 lg:py-24"
      as="section"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-mm-gold mb-4">
                LOCATION
              </div>
              <h2 className="font-display text-[clamp(1.85rem,3.6vw,3rem)] font-semibold leading-[1.08] tracking-[0.06em] mb-6">
                Our Integrated International Network
              </h2>
              <p className="text-base leading-relaxed opacity-85 md:text-[17px]">
                Thanks to our integrated international network of 40 agencies, we combine a global vision of communications with a local understanding of our markets, with the same high standards of excellence and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-mm-cream bg-opacity-30 rounded-lg">
                <div className="w-3 h-3 bg-mm-gold rounded-full"></div>
                <span className="font-display font-semibold">{MARKETS_DOT}</span>
              </div>
              <div className="text-sm opacity-75 pl-6">
                One integrated network, local fluency, one standard of craft.
              </div>
            </div>
          </div>

          {/* CSS Globe Side */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* CSS Globe using existing mm-globe-spin class */}
              <div className="mm-globe-spin w-full h-full border-2 border-mm-gold rounded-full relative overflow-hidden bg-gradient-to-br from-mm-gold/20 to-transparent">
                {/* Meridian lines */}
                <div className="absolute inset-0 border-l-2 border-r-2 border-mm-gold opacity-30 rounded-full"></div>
                <div className="absolute inset-0 border-l-2 border-r-2 border-mm-gold opacity-20 rounded-full transform rotate-45"></div>
                <div className="absolute inset-0 border-l-2 border-r-2 border-mm-gold opacity-20 rounded-full transform rotate-90"></div>
                
                {/* Latitude lines */}
                <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-mm-gold opacity-20"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-mm-gold opacity-30"></div>
                <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-mm-gold opacity-20"></div>
                
                {/* Highlight */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-mm-cream rounded-full opacity-60 blur-sm"></div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-mm-gold opacity-10 blur-xl rounded-full scale-110 animate-pulse"></div>
            </div>
          </div>
        </div>
      </Container>
    </SectionThemeWrapper>
  );
}