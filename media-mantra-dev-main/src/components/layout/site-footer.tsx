import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  footerCompanyLinks,
  footerOfficeContacts,
  footerOfficesLine,
  footerSeoParagraph,
  footerServiceLinks,
  footerSignOff,
  footerUtilityLinks,
} from "@/data/footer-content";
import { socialLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { MediaMantraLogo } from "@/components/brand/media-mantra-logo";

const SOCIAL = [
  { key: "linkedin" as const, label: "LinkedIn", Icon: FaLinkedinIn },
  { key: "instagram" as const, label: "Instagram", Icon: FaInstagram },
  { key: "x" as const, label: "X", Icon: FaXTwitter },
  { key: "youtube" as const, label: "YouTube", Icon: FaYoutube },
];

/** Graphite footer — offices, company, links, services, SEO paragraph. */
export function SiteFooter() {
  return (
    <footer className="relative border-t border-mm-white/[0.06] bg-mm-graphite-deep text-mm-cream">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex max-w-fit" aria-label="Media Mantra Global — Home">
              <MediaMantraLogo variant="onDark" density="full" />
            </Link>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL.map(({ key, label, Icon }) => (
                <a
                  key={key}
                  href={socialLinks[key]}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-mm-white/15 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-gold">Offices</p>
            <p className="mt-3 font-editorial text-sm text-mm-cream/90">{footerOfficesLine}</p>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-gold/80">Our offices</p>
            <ul className="mt-4 space-y-5">
              {footerOfficeContacts.map((office) => (
                <li key={office.region}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mm-cream">{office.region}</p>
                  {"phone" in office && office.phone ? (
                    <a
                      href={`tel:${office.phone.replace(/[\s-]/g, "")}`}
                      className="mt-1.5 block text-sm text-mm-light/85 transition hover:text-mm-cream"
                    >
                      {office.phone}
                    </a>
                  ) : null}
                  {"address" in office && office.address ? (
                    <p className="mt-1 block text-sm leading-relaxed text-mm-light/85">{office.address}</p>
                  ) : null}
                  <a
                    href={`mailto:${office.email}`}
                    className={`${"phone" in office && office.phone ? "mt-0.5" : "address" in office && office.address ? "mt-1" : "mt-1.5"} block text-sm text-mm-light/85 transition hover:text-mm-cream`}
                  >
                    {office.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-gold">Company</p>
            <ul className="mt-5 space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-mm-light/85 transition hover:text-mm-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-gold">Links</p>
            <ul className="mt-5 space-y-2.5">
              {footerUtilityLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-mm-light/85 transition hover:text-mm-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-gold">Services</p>
            <ul className="mt-5 space-y-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-mm-light/85 transition hover:text-mm-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 max-w-4xl border-t border-mm-white/[0.08] pt-10 font-editorial text-sm leading-relaxed text-mm-light/82 md:text-[15px]">
          {footerSeoParagraph}
        </p>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mm-light/70">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold/80">
            {footerSignOff}
          </p>
        </div>
      </Container>
    </footer>
  );
}
