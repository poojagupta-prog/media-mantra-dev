import { MantraSubpageLayout } from "@/components/about/mantra-subpage-layout";
import { gamingMantraPage } from "@/data/mantra-pages-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: gamingMantraPage.title,
  description: gamingMantraPage.metaDescription,
  pathname: gamingMantraPage.pathname,
});

export default function GamingMantraPage() {
  return <MantraSubpageLayout page={gamingMantraPage} />;
}
