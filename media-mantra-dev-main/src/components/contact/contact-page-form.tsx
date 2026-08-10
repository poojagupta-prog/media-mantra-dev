"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { contactPageContent } from "@/data/contact-content";

export function ContactPageForm() {
  const { form } = contactPageContent;
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || "Website contact form";
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company / Organization: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${form.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="rounded-[1.85rem] border border-mm-white/12 bg-mm-graphite px-6 py-9 text-mm-cream shadow-[0_32px_100px_-48px_rgba(0,0,0,0.45)] sm:px-9 sm:py-11">
      <h2 className="font-display text-xl font-semibold text-mm-cream">{form.title}</h2>
      <p className="mt-2 font-editorial text-sm text-mm-light">
        Messages are sent to{" "}
        <a href={`mailto:${form.recipient}`} className="text-mm-gold underline-offset-2 hover:underline">
          {form.recipient}
        </a>
        .
      </p>
      <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
        <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
          Your name
          <input
            name="name"
            required
            className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-graphite/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
          />
        </label>
        <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
          Your email
          <input
            name="email"
            type="email"
            required
            className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-graphite/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
          />
        </label>
        <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
          Phone number
          <input
            name="phone"
            type="tel"
            className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-graphite/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
          />
        </label>
        <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
          Company / Organization
          <input
            name="company"
            className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-graphite/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
          />
        </label>
        <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
          Subject
          <input
            name="subject"
            className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-graphite/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
          />
        </label>
        <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
          Your message
          <textarea
            name="message"
            required
            rows={5}
            className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-graphite/40 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
          />
        </label>
        <label className="flex gap-3 text-xs leading-snug text-mm-light/95">
          <input type="checkbox" required className="mt-0.5" />
          <span>I agree to the Privacy Policy and Terms regarding this inquiry.</span>
        </label>
        <Button type="submit" className="w-full">
          Send message
        </Button>
        {sent ? <p className="text-center text-xs text-mm-gold">{form.successMessage}</p> : null}
      </form>
    </div>
  );
}
