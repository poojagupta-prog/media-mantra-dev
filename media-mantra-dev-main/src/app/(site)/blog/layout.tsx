import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  pathname: "/blog",
  description: "Strategy essays, editorial POVs, and global communications perspectives from Media Mantra Global.",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
