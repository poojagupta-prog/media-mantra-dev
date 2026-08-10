import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers",
  pathname: "/careers",
  description: "Join Media Mantra Global — narrative strategists, editors, producers, and intelligence analysts.",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
