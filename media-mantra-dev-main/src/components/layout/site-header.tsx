"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt2, HiChevronDown, HiX } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { MediaMantraLogo } from "@/components/brand/media-mantra-logo";
import { useContactLead } from "@/components/contact/contact-lead-context";

export function SiteHeader() {
  const pathname = usePathname();
  const { openContact } = useContactLead();
  const headerRef = useRef<HTMLElement>(null);
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drawerMegaOpen, setDrawerMegaOpen] = useState<string | null>(null);
  const navOverlay = isHome && !scrolled && !open;

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeaderHeight = () => {
      const height = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--mm-site-header", `${height}px`);
      document.documentElement.style.setProperty("--mm-hero-band", `calc(100svh - ${height}px)`);
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    window.addEventListener("resize", syncHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDrawerMegaOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        id="site-header"
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-[120] pt-[env(safe-area-inset-top,0px)] transition-all duration-300",
          navOverlay
            ? "border-b border-transparent bg-transparent"
            : "border-b border-mm-cream/[0.06] bg-mm-graphite/95 backdrop-blur-md",
          scrolled && "shadow-[0_12px_40px_rgba(0,0,0,0.18)]",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="group flex min-w-0 max-w-[calc(100%-7.5rem)] shrink items-center sm:max-w-[calc(100%-10rem)]"
            aria-label="Media Mantra Global — Home"
          >
            <MediaMantraLogo variant="onDark" density="compact" onVideo={navOverlay} />
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              type="button"
              className={cn(
                "hidden sm:inline-flex",
                navOverlay
                  ? "border-mm-white/40 bg-mm-graphite/45 text-mm-cream backdrop-blur-sm hover:bg-mm-graphite/60"
                  : "border-mm-white/10",
              )}
              onClick={openContact}
            >
              Get in touch
            </Button>
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-full border p-3 transition",
                open
                  ? "border-mm-gold bg-mm-gold/10 text-mm-gold"
                  : navOverlay
                    ? "border-mm-white/40 bg-mm-graphite/45 text-mm-cream backdrop-blur-sm hover:border-mm-gold hover:text-mm-gold"
                    : "border-mm-white/15 text-mm-cream hover:border-mm-gold hover:text-mm-gold",
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiX className="h-5 w-5" /> : <HiOutlineMenuAlt2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              key="nav-backdrop"
              className="fixed inset-0 z-[110] bg-mm-graphite/55 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="site-nav-drawer"
              className="fixed bottom-0 right-0 top-[var(--mm-site-header)] z-[118] flex w-full max-w-[min(100vw,26rem)] flex-col border-l border-mm-white/10 bg-mm-graphite/98 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl sm:max-w-[22rem] lg:max-w-[24rem]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Site menu"
            >
              <div className="flex items-center justify-between border-b border-mm-white/10 px-6 py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">Menu</p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-mm-white/15 p-2.5 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <HiX className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 pb-8 pt-6" aria-label="Primary">
                {mainNav.map((item, index) =>
                  item.kind === "link" ? (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "font-display text-2xl uppercase tracking-[0.08em] transition hover:text-mm-gold sm:text-[1.65rem]",
                          (item.href === "/blog" ? pathname.startsWith("/blog") : pathname === item.href)
                            ? "text-mm-gold"
                            : "text-mm-cream",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="border-b border-mm-white/10 pb-6"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 text-left font-display text-2xl uppercase tracking-[0.08em] text-mm-cream sm:text-[1.65rem]"
                        aria-expanded={drawerMegaOpen === item.label}
                        onClick={() =>
                          setDrawerMegaOpen((current) => (current === item.label ? null : item.label))
                        }
                      >
                        {item.label}
                        <HiChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 text-mm-gold transition",
                            drawerMegaOpen === item.label && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {drawerMegaOpen === item.label ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-5 space-y-3 pl-1">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="flex items-baseline gap-3 text-mm-light transition hover:text-mm-gold"
                                    onClick={() => setOpen(false)}
                                  >
                                    <span className="font-display text-xs tabular-nums text-mm-gold">
                                      {String(child.index).padStart(2, "0")}
                                    </span>
                                    <span className="font-editorial text-sm text-mm-cream sm:text-[15px]">
                                      {child.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                              {item.overview ? (
                                <li>
                                  <Link
                                    href={item.overview.href}
                                    className="inline-flex items-center gap-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-gold"
                                    onClick={() => setOpen(false)}
                                  >
                                    {item.overview.label}
                                    <HiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                                  </Link>
                                </li>
                              ) : null}
                            </ul>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>
                  ),
                )}
              </nav>

              <div className="border-t border-mm-white/10 px-6 py-5 sm:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  className="w-full border-mm-white/10"
                  onClick={() => {
                    setOpen(false);
                    openContact();
                  }}
                >
                  Get in touch
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
