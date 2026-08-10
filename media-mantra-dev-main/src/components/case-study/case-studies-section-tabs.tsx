"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const tabs = [
  { href: "/case-studies", label: "Commercial Work", match: (path: string) => path === "/case-studies" || path === "/case-studies/" || (path.startsWith("/case-studies/") && !path.startsWith("/case-studies/government")) },
  {
    href: "/case-studies/government",
    label: "Government Work",
    match: (path: string) => path.startsWith("/case-studies/government"),
  },
] as const;

export function CaseStudiesSectionTabs() {
  const pathname = usePathname();

  return (
    <nav aria-label="Case study categories" className="mt-8 flex flex-wrap gap-3 sm:mt-10">
      {tabs.map((tab) => {
        const active = tab.match(pathname);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "inline-flex items-center rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] transition sm:px-5 sm:text-[11px]",
              active
                ? "border-mm-graphite bg-mm-graphite text-mm-cream"
                : "border-mm-graphite/20 bg-mm-white text-mm-graphite/70 hover:border-mm-graphite/40 hover:text-mm-graphite",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
