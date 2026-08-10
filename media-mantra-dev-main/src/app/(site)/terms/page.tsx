import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  pathname: "/terms",
});

export default function TermsPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container className="max-w-3xl space-y-6 text-mm-light leading-relaxed">
        <h1 className="font-display text-4xl font-semibold text-mm-cream">Terms & Conditions</h1>
        <p>
          These terms govern your use of digitals surfaces operated by Media Mantra Global communications practices.
          Engagement letters executed with clients prevail where conflicts emerge.
        </p>
        <h2 className="pt-8 font-display text-2xl font-semibold text-mm-cream">Professional Services</h2>
        <p>
          Statements on this domain are illustrative. Retained mandates are evidenced through formal scopes, schedules,
          and governing law aligned to contracting entity.
        </p>
        <h2 className="pt-8 font-display text-2xl font-semibold text-mm-cream">Intellectual Property</h2>
        <p>
          All creative artefacts remain proprietary absent explicit assignment. Editorial references to logos or marks are
          for portfolio context unless otherwise annotated.
        </p>
      </Container>
    </main>
  );
}
