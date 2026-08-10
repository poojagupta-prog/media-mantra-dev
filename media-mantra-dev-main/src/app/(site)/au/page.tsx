import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Communications Firm in Australia — Media Mantra Global",
  pathname: "/au",
  description:
    "Sydney-based PR and reputation counsel for brands across Australia and New Zealand — board-grade storytelling, media relations, and regional amplification.",
});

export default function AustraliaRegionalPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel className="text-mm-gold">Australia</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">
          Sydney nucleus for ANZ mandates, reputation stewardship, and regional launch choreography.
        </h1>
        <p className="mt-8 max-w-2xl text-mm-light">
          Disciplined narrative systems for market entry, executive visibility, ESG arcs, and cross-border reputational
          coherence — synced with our India, US, Singapore, and UAE command layers.
        </p>
      </Container>
      <Container className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-mm-white/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mm-gold">Specializations</p>
          <ul className="mt-6 space-y-3 text-mm-light">
            <li>Corporate and executive communications</li>
            <li>Technology and consumer platform expansion</li>
            <li>Regional crisis and reputation management</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-mm-white/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mm-gold">Experience</p>
          <p className="mt-6 text-mm-light">
            Deep bench across Sydney-based newsrooms and pan-ANZ amplification partners — integrated with our global
            network across five markets.
          </p>
        </div>
      </Container>
      <Container className="mt-14">
        <Button asChild size="lg">
          <Link href="/contact">Talk to Australia partners</Link>
        </Button>
      </Container>
    </main>
  );
}
