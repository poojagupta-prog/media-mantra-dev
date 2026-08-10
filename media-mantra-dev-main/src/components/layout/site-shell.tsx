"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AutoBreadcrumbs } from "@/components/layout/auto-breadcrumbs";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <SiteHeader />
      {!isHome ? (
        <div className="border-b border-mm-white/[0.06] bg-mm-midnight/40 px-5 pb-3 pt-[5.35rem] backdrop-blur-xl sm:px-8 lg:px-12">
          <AutoBreadcrumbs />
        </div>
      ) : null}
      <div className="flex min-h-[100svh] flex-col">{children}</div>
      <SiteFooter />
    </>
  );
}
