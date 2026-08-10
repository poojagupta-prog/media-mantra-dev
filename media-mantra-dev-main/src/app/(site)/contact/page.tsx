import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactPageForm } from "@/components/contact/contact-page-form";
import { Container } from "@/components/ui/container";
import { contactPageContent } from "@/data/contact-content";

/** Contact — doc copy + inquiry form to info@mediamantraglobal.com */
export default function ContactPage() {
  const c = contactPageContent;

  return (
    <main id="main-content" className="flex-1">
      <section className="relative h-[min(44vh,400px)] w-full overflow-hidden border-b border-mm-graphite/15">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mm-graphite/95 via-mm-graphite/5 to-mm-graphite/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-14">
          <Container className="max-w-[1400px]">
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.35rem)] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-mm-white">
              {c.headline}
            </h1>
            <p className="mt-5 max-w-2xl font-editorial text-base leading-relaxed text-mm-cream/88">{c.intro}</p>
          </Container>
        </div>
      </section>

      <section className="bg-mm-white py-14 text-mm-graphite lg:py-[4.25rem]">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)] lg:gap-16 xl:gap-20">
          <div className="space-y-10 lg:pr-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/45">{c.emailLabel}</p>
              <a
                href={`mailto:${c.email}`}
                className="mt-3 inline-flex font-editorial text-lg text-mm-brand-navy underline-offset-4 hover:underline"
              >
                {c.email}
              </a>
            </div>

            <div className="space-y-8">
              <h2 className="font-display text-xl font-semibold tracking-tight text-mm-graphite md:text-2xl">
                {c.officesTitle}
              </h2>
              <ul className="space-y-10 font-editorial text-mm-graphite/82">
                {c.offices.map((office) => (
                  <li
                    key={office.region}
                    className="space-y-3 border-b border-mm-graphite/10 pb-10 last:border-b-0 last:pb-0"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mm-graphite">
                      {office.region}
                    </p>
                    {office.city ? (
                      <p className="font-display text-sm font-semibold text-mm-graphite">{office.city}</p>
                    ) : null}
                    {office.addressLines.map((line) => (
                      <p key={line} className="flex gap-3 leading-relaxed">
                        <FaMapMarkerAlt className="mt-1 shrink-0 text-mm-brand-navy" aria-hidden />
                        <span>{line}</span>
                      </p>
                    ))}
                    {office.phone ? (
                      <p className="flex gap-3">
                        <FaPhone className="mt-0.5 shrink-0 text-mm-brand-navy" aria-hidden />
                        <a href={`tel:${office.phone.replace(/[\s-]/g, "")}`} className="hover:underline">
                          {office.phone}
                        </a>
                      </p>
                    ) : null}
                    <p className="flex gap-3">
                      <FaEnvelope className="mt-0.5 shrink-0 text-mm-brand-navy" aria-hidden />
                      <a href={`mailto:${office.email}`} className="break-all text-mm-brand-navy hover:underline">
                        {office.email}
                      </a>
                    </p>
                    {office.timings ? <p className="text-sm text-mm-graphite/70">{office.timings}</p> : null}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={c.careersHref}
              className="inline-flex text-sm font-semibold text-mm-brand-navy underline-offset-4 hover:underline"
            >
              {c.careersLabel}
            </Link>
          </div>

          <ContactPageForm />
        </Container>
      </section>
    </main>
  );
}
