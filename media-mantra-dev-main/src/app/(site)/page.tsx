import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeIntroExpertiseSection } from "@/components/home/home-intro-expertise-section";
import { HomeHopNetworkSplit } from "@/components/home/home-hop-network-split";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { AnimatedMetricsSection } from "@/components/home/animated-metrics-section";
import { AwardsSection } from "@/components/home/awards-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { HomeContactStrip } from "@/components/home/home-contact-strip";

/** Homepage — deck flow: video → intro → location → clients → metrics → awards → work → contact strip. */
export default function HomePage() {
  return (
    <main id="main-content" className="flex min-h-[100svh] flex-1 flex-col overflow-x-clip bg-mm-graphite">
      <HomeHeroSection />
      <HomeIntroExpertiseSection />
      <HomeHopNetworkSplit />
      <ClientsMarqueeSection />
      <AnimatedMetricsSection />
      <AwardsSection />
      <CaseStudiesPreviewSection layout="hopscotch" featuredCount={4} />
      <HomeContactStrip />
    </main>
  );
}
