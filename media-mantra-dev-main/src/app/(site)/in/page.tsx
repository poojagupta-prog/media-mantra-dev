import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Communications Solutions in India — Media Mantra Global",
  pathname: "/in",
  description:
    "Integrated PR and reputation counsel for Fortune-grade brands headquartered or scaling across India — New Delhi nucleus, national newsroom choreography.",
});

export default function IndiaRegionalPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel className="text-mm-gold">India</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">
          Communications counsel grounded in parliamentary, consumer, and boardroom realism.
        </h1>
        <p className="mt-8 max-w-2xl text-mm-light">
          From legacy conglomerates to AI-native unicorns — we engineer narrative velocity tuned to multilingual media,
          influencer ecosystems, and regulatory scrutiny endemic to Indian expansion corridors.
        </p>
      </Container>
      <Container className="mt-14 grid gap-8 rounded-[2rem] border border-mm-white/10 bg-mm-white/[0.02] p-10 lg:grid-cols-3">
        {[
          { t: "Headquarters", d: "New Delhi — sovereign strategy & newsroom choreography." },
          { t: "Capabilities", d: "Crisis, reputation SEO, influencer at scale, content studios." },
          { t: "Verticals", d: "Retail, mobility, pharma, fin-tech — sector-native pods." },
        ].map((x) => (
          <div key={x.t}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mm-gold">{x.t}</p>
            <p className="mt-3 text-mm-light">{x.d}</p>
          </div>
        ))}
      </Container>
      <Container className="mt-14">
        <Button asChild size="lg">
          <Link href="/contact">Connect with India leadership</Link>
        </Button>
      </Container>
    </main>
  );
}
