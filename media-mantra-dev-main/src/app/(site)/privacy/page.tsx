import { MARKETS_PRESENCE_SHORT } from "@/data/markets";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  pathname: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container className="max-w-3xl space-y-6 text-mm-light leading-relaxed">
        <h1 className="font-display text-4xl font-semibold text-mm-cream">Privacy Policy</h1>
        <p>
          Media Mantra Global (“we”) respects privacy and complies with recognized data-protection principles across
          {MARKETS_PRESENCE_SHORT}, GDPR-aligned jurisdictions where applicable, and client-specific regimes.
        </p>
        <h2 className="pt-8 font-display text-2xl font-semibold text-mm-cream">Data We Collect</h2>
        <p>
          Identification, organizational, correspondence, analytic, and voluntarily submitted briefing materials transmitted
          through secure channels.
        </p>
        <h2 className="pt-8 font-display text-2xl font-semibold text-mm-cream">Use of Data</h2>
        <p>
          Provision of professional services, client communications, legal compliance, and quality assurance — never
          resold as third-party audiences.
        </p>
        <h2 className="pt-8 font-display text-2xl font-semibold text-mm-cream">Contact</h2>
        <p>privacy@mediamantraglobal.com</p>
      </Container>
    </main>
  );
}
