import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Communications Advisory in UAE — Media Mantra Global",
  pathname: "/ae",
  description:
    "Reputation, policy-adjacent PR, and launch choreography for UAE-based brands bridging EMEA corridors.",
});

export default function UAEPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel className="text-mm-gold">United Arab Emirates</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">
          Dubai nucleus for capital markets, sovereign-adjacent builds, and global consumer unveilings.
        </h1>
        <p className="mt-8 max-w-2xl text-mm-light">
          Calibrated multilingual campaigns, concierge press tours, and investor-grade storytelling — resonant across Gulf
          business media, luxury verticals, and digital-native audiences.
        </p>
      </Container>
      <Container className="mt-14 rounded-[2rem] border border-mm-white/10 bg-gradient-to-br from-mm-royal/14 to-transparent p-12">
        <p className="max-w-2xl text-mm-light">
          Regional SEO structuring ensures discoverability across English and Arabic-interest queries paired with culturally
          intelligent creative — never literal translation pipelines.
        </p>
      </Container>
      <Container className="mt-14">
        <Button asChild size="lg">
          <Link href="/contact">Book UAE counsel</Link>
        </Button>
      </Container>
    </main>
  );
}
