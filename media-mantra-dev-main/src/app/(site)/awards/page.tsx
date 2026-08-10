import { createMetadata } from "@/lib/seo";
import { AwardsPageView } from "@/components/awards/awards-page-view";

export const metadata = createMetadata({
  title: "Awards & Accolades",
  description:
    "Founder honours and industry recognition for Media Mantra Global across Adgully IMAGEXX, SABRE, IPRCCA, BW Excel, PRPCL, and more.",
  pathname: "/awards",
});

export default function AwardsPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-cream text-mm-graphite">
      <AwardsPageView />
    </main>
  );
}
