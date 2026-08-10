"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Deck flow: Brief → The idea → Execution → Results (no separate Strategy nav). */
const links = [
  { id: "brief", label: "Brief" },
  { id: "idea", label: "The idea" },
  { id: "execution", label: "Execution" },
  { id: "results", label: "Results" },
];

export function CaseStudyProgressNav({ className }: { className?: string }) {
  const [active, setActive] = useState("brief");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav aria-label="Case sections" className={cn("text-[11px]", className)}>
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l.id}>
            <Link
              href={`#${l.id}`}
              scroll
              className={cn(
                "flex items-center gap-3 font-semibold uppercase tracking-[0.22em]",
                active === l.id ? "text-mm-graphite" : "text-mm-graphite/45 hover:text-mm-graphite/70",
              )}
              onClick={() => setActive(l.id)}
            >
              <span
                className={cn(
                  "h-px w-6 transition-colors",
                  active === l.id ? "bg-mm-gold" : "bg-mm-graphite/20",
                )}
              />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
