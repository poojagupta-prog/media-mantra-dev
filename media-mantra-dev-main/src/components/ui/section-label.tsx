import { cn } from "@/lib/cn";

export function SectionLabel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-mm-gold",
        className,
      )}
    >
      {children}
    </p>
  );
}
