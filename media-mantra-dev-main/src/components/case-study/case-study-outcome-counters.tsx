type Stat = {
  value: string;
  label: string;
};

/** Edelman-style outcome counters — large figures below full outcome copy. */
export function CaseStudyOutcomeCounters({ stats }: { stats: readonly Stat[] }) {
  if (!stats.length) return null;

  return (
    <div
      className={`mt-14 grid gap-10 border-t border-mm-graphite/10 pt-14 ${
        stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center lg:text-left">
          <p className="font-display text-[clamp(2.35rem,5.5vw,3.65rem)] font-semibold leading-none tracking-tight mm-headline-brand-blue">
            {stat.value}
          </p>
          <p className="mx-auto mt-3 max-w-[16ch] font-display text-sm font-semibold uppercase leading-snug tracking-[0.04em] text-mm-graphite lg:mx-0">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
