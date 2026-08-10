"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { Button } from "@/components/ui/button";

type ContactLeadContextValue = {
  openContact: () => void;
  closeContact: () => void;
};

const ContactLeadContext = createContext<ContactLeadContextValue | null>(null);

export function useContactLead() {
  const ctx = useContext(ContactLeadContext);
  if (!ctx) throw new Error("useContactLead must be used within ContactLeadProvider");
  return ctx;
}

/** Header + marketing CTAs: opens the lightweight lead popup (aligned with briefing). */
export function ContactLeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const openContact = useCallback(() => {
    setSent(false);
    setOpen(true);
  }, []);

  const closeContact = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openContact, closeContact }),
    [openContact, closeContact],
  );

  return (
    <ContactLeadContext.Provider value={value}>
      {children}
      {open ? (
        <div className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-mm-ink/70 backdrop-blur-sm"
            aria-label="Close dialog backdrop"
            onClick={closeContact}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-lead-title"
            className="relative z-[201] w-full max-w-lg rounded-2xl border border-mm-white/12 bg-mm-midnight/95 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">Get in touch</p>
                <h2 id="contact-lead-title" className="mt-3 font-display text-2xl font-semibold text-mm-cream">
                  Start a conversation
                </h2>
                <p className="mt-2 text-sm text-mm-light">
                  Share a short brief — the strategy desk will route it to the right market lead.
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border border-mm-white/15 p-2 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
                aria-label="Close"
                onClick={closeContact}
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Name
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-mm-white/12 bg-mm-black/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
                />
              </label>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Work email
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-mm-white/12 bg-mm-black/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
                />
              </label>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Brief summary
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-mm-white/12 bg-mm-black/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
                />
              </label>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" className="flex-1 min-w-[8rem]">
                  Send note
                </Button>
                <Button asChild variant="outline" className="border-mm-white/12">
                  <Link href="/contact" onClick={closeContact}>
                    Full contact page
                  </Link>
                </Button>
              </div>
              {sent ? (
                <p className="text-center text-xs text-mm-gold">Thanks — we&apos;ll reply shortly.</p>
              ) : null}
            </form>
          </div>
        </div>
      ) : null}
    </ContactLeadContext.Provider>
  );
}
