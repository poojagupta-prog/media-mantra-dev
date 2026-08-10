import { SiteShell } from "@/components/layout/site-shell";
import { ContactLeadProvider } from "@/components/contact/contact-lead-context";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContactLeadProvider>
      <SiteShell>{children}</SiteShell>
    </ContactLeadProvider>
  );
}
