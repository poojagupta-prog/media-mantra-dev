"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });
  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setMounted(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setHide(reduced);
  }, []);

  if (!mounted || hide) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[180] h-[2px] origin-left bg-gradient-to-r from-mm-gold via-mm-cream to-mm-graphite"
      style={{ scaleX }}
    />
  );
}
