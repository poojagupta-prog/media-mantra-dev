import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getSiteLinkGroups } from "@/data/site-links";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Site Links",
  pathname: "/links",
  description: "All public pages — internal review index.",
  noIndex: true,
});

export default function LinksPage() {
  const groups = getSiteLinkGroups();
  const totalLinks = groups.reduce((n, g) => n + g.links.length, 0);

  return (
    <main id="main-content" className="flex-1 bg-mm-white py-16 text-mm-graphite lg:py-24">
      <Container className="max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-graphite/50">
          Internal · Build index
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.03em] text-mm-graphite sm:text-4xl">
          All site links
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mm-graphite/70">
          {totalLinks} routes in this build — use this page to QA every page before deploy.
        </p>

        <div className="mt-14 space-y-12">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="border-b border-mm-graphite/10 pb-3 font-display text-sm font-semibold uppercase tracking-[0.22em] text-mm-royal">
                {group.title}
                <span className="ml-2 font-sans text-[10px] font-normal tracking-[0.18em] text-mm-graphite/45">
                  ({group.links.length})
                </span>
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex flex-col rounded-lg border border-mm-graphite/[0.08] bg-mm-graphite/[0.02] px-4 py-3 transition hover:border-mm-royal/30 hover:bg-mm-royal/[0.04]"
                    >
                      <span className="text-sm font-medium leading-snug text-mm-graphite group-hover:text-mm-royal">
                        {link.label}
                      </span>
                      <span className="mt-1 font-mono text-[11px] text-mm-graphite/45">{link.href}/</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
