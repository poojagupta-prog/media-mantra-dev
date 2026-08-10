"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { footerSeoParagraph, footerServicesLine, homeHopFooterLead, homePageFooter } from "@/data/home-content";
import { socialLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";
import { useContactLead } from "@/components/contact/contact-lead-context";

/** Hopscotch-style closing strip — white discover bar + black contact bar (no raster lockup). */
export function HomeHopFooterBand() {
  const { openContact } = useContactLead();

  return (
    <div className="border-t border-mm-graphite/10">
      <div className="bg-mm-white px-6 py-10 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-mm-graphite underline-offset-[10px] transition hover:text-mm-graphite/70"
          >
            <span className="border-b border-mm-graphite pb-0.5 group-hover:border-mm-graphite/40">
              {homeHopFooterLead.discoverLabel}
            </span>
            <HiArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="max-w-md font-editorial text-sm text-mm-graphite/60">{siteConfig.description}</p>
        </div>
      </div>

      <div className="bg-black px-6 py-14 text-mm-cream sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px] space-y-14">
          <div className="grid gap-12 border-b border-mm-cream/[0.08] pb-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-cream/55">{homePageFooter.officesHeading}</p>
              <p className="mt-4 font-editorial text-base text-mm-cream/90">{homePageFooter.officesLine}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-cream/55">{homePageFooter.servicesHeading}</p>
              <p className="mt-4 font-editorial text-sm leading-relaxed text-mm-cream/75">{footerServicesLine}</p>
            </div>
          </div>

          <p className="max-w-4xl font-editorial text-sm leading-relaxed text-mm-cream/72 md:text-[15px]">{footerSeoParagraph}</p>

          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={openContact}
              className="inline-flex w-fit items-center gap-3 border border-mm-cream/40 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            >
              <HiEnvelope className="h-4 w-4" aria-hidden />
              Contact us
            </button>

            <div className="flex items-center gap-4 sm:justify-end">
              <a
                href={socialLinks.linkedin}
                className="text-mm-cream transition hover:text-mm-gold"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href={socialLinks.instagram}
                className="text-mm-cream transition hover:text-mm-gold"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a href={socialLinks.x} className="text-mm-cream transition hover:text-mm-gold" aria-label="X">
                <FaXTwitter className="text-lg" />
              </a>
            </div>
          </div>

        <div className="mx-auto mt-6 max-w-[1400px] space-y-3 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mm-cream/45">
            © {new Date().getFullYear()} {siteConfig.legalName ?? siteConfig.name}
          </p>
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-cream/50">{homePageFooter.tagline}</p>
        </div>
        </div>
      </div>
    </div>
  );
}
