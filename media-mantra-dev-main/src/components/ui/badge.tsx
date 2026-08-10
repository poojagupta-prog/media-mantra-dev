import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-mm-white/10 bg-mm-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-mm-light backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}
