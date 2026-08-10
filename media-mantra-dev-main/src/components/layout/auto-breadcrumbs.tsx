"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";

/** Human-readable crumbs for pathname segments — extend as routes grow */
const SEGMENT_LABELS: Record<string, string> = {
  about: "About",
  mantras: "Gaming and Startup Mantra",
  "founders-vision-global-leadership": "Founders Vision & Global Leadership",
  "gaming-mantra": "Gaming Mantra",
  "startup-mantra": "Startup Mantra",
  services: "Services",
  "case-studies": "Case Studies",
  government: "Government Work",
  industries: "Industries",
  blog: "Insights",
  awards: "Awards",
  careers: "Careers",
  contact: "Contact",
  campaigns: "Campaigns",
  privacy: "Privacy",
  terms: "Terms",
  in: "India",
  us: "United States",
  au: "Australia",
  sg: "Singapore",
  ae: "UAE",
};

for (const service of services) {
  SEGMENT_LABELS[service.slug] = service.title;
}

function titleCaseSegment(segment: string) {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function AutoBreadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();

  if (pathname === "/" || !pathname) return null;

  const raw = pathname.split("/").filter(Boolean);
  const items = raw.map((segment, index) => {
    const href = `/${raw.slice(0, index + 1).join("/")}`;
    return {
      label: titleCaseSegment(segment),
      href,
      last: index === raw.length - 1,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
        <li>
          <Link href="/" className="text-mm-light transition hover:text-mm-gold">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex flex-wrap items-center gap-x-2">
            <span className="text-mm-white/20" aria-hidden>
              /
            </span>
            {item.last ? (
              <span className="text-mm-cream/90">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-mm-light transition hover:text-mm-gold">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
