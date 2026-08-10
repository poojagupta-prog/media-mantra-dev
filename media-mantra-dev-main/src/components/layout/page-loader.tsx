"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.matchMedia("(max-width: 1023px)").matches;
    if (coarse || narrow) return;
    setVisible(true);
    const id = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(id);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-mm-black"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              className="h-px w-40 bg-gradient-to-r from-transparent via-mm-gold to-transparent"
              initial={{ scaleX: 0.2, opacity: 0.3 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.p
              className="font-display text-xs font-semibold uppercase tracking-[0.6em] text-mm-cream"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
            >
              Media Mantra
            </motion.p>
            <motion.div
              className="text-[10px] uppercase tracking-[0.4em] text-mm-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Global Communications
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
