import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Communications Advisory in the United States — Media Mantra Global",
  pathname: "/us",
  description:
    "Integrated PR, reputation, and market-entry counsel for brands scaling across the United States — Texas nucleus, national media and stakeholder choreography.",
});

export default function USRegionalPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel className="text-mm-gold">United States</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">
          Texas-based counsel for brands building authority across American markets.
        </h1>
        <p className="mt-8 max-w-2xl text-mm-light">
          From enterprise launches to founder-led growth stories — we engineer narrative systems tuned to US business
          media, investor audiences, and the pace of American expansion corridors.
        </p>
      </Container>
      <Container className="mt-14 grid gap-8 rounded-[2rem] border border-mm-white/10 bg-mm-white/[0.02] p-10 lg:grid-cols-3">
        {[
          { t: "Hub", d: "Texas — Americas strategy, media relations, and stakeholder counsel." },
          { t: "Capabilities", d: "Corporate PR, founder branding, crisis, digital, and content at scale." },
          { t: "Verticals", d: "Technology, energy, healthcare, consumer — sector-native teams." },
        ].map((x) => (
          <div key={x.t}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mm-gold">{x.t}</p>
            <p className="mt-3 text-mm-light">{x.d}</p>
          </div>
        ))}
      </Container>
      <Container className="mt-14">
        <Button asChild size="lg">
          <Link href="/contact">Connect with US leadership</Link>
        </Button>
      </Container>
    </main>
  );
}
