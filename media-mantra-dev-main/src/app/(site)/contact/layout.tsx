import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  pathname: "/contact",
  description: "Reach Media Mantra Global for integrated PR, reputation, and communications counsel worldwide.",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
