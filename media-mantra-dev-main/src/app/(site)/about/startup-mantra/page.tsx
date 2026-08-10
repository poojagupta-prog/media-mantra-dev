import { MantraSubpageLayout } from "@/components/about/mantra-subpage-layout";
import { startupMantraPage } from "@/data/mantra-pages-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: startupMantraPage.title,
  description: startupMantraPage.metaDescription,
  pathname: startupMantraPage.pathname,
});

export default function StartupMantraPage() {
  return <MantraSubpageLayout page={startupMantraPage} />;
}
