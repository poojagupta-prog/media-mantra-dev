import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Communications Firm in Singapore — Media Mantra Global",
  pathname: "/sg",
  description:
    "APAC financial + technology hub communications — disciplined narrative systems for IPO, expansion, and board-grade reputation.",
});

export default function SingaporeRegionalPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel className="text-mm-gold">Singapore</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">
          Financial rigor intersecting cultural intelligence for APAC mandates.
        </h1>
        <p className="mt-8 max-w-2xl text-mm-light">
          Stewardship models designed for IPO readiness, multinational regional HQ storytelling, ESG arcs, and
          cross-border reputational coherence.
        </p>
      </Container>
      <Container className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-mm-white/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mm-gold">Specializations</p>
          <ul className="mt-6 space-y-3 text-mm-light">
            <li>Capital markets + investor narration</li>
            <li>Technology platform expansion arcs</li>
            <li>Regional crisis failover systems</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-mm-white/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-mm-gold">Experience</p>
          <p className="mt-6 text-mm-light">
            Deep bench across Singapore-based newsrooms and pan-ASEAN amplification partners — synced with our global
            command layers across five markets.
          </p>
        </div>
      </Container>
      <Container className="mt-14">
        <Button asChild size="lg">
          <Link href="/contact">Talk to Singapore partners</Link>
        </Button>
      </Container>
    </main>
  );
}
