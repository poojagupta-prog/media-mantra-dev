"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

export function MagneticWrap({
  className,
  children,
  strength = 0.18,
}: {
  className?: string;
  children: React.ReactNode;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  return (
    <motion.div
      className={cn("inline-block", className)}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        x.set(relX * strength);
        y.set(relY * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
    >
      {children}
    </motion.div>
  );
}
