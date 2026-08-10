import Image from "next/image";
import { Container } from "@/components/ui/container";
import { careersPageContent } from "@/data/careers-content";

/** Careers — doc copy + current openings accordion */
export default function CareersPage() {
  const c = careersPageContent;

  return (
    <main id="main-content" className="flex-1 bg-mm-cream text-mm-graphite">
      <section className="relative h-[min(42vh,380px)] w-full overflow-hidden border-b border-mm-graphite/15">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mm-graphite via-mm-graphite/45 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-14">
          <Container>
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-light">{c.label}</p>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-tight text-mm-cream">
              {c.headline}
            </h1>
          </Container>
        </div>
      </section>

      <section className="border-b border-mm-graphite/10 bg-mm-cream py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-5 font-editorial text-[1.05rem] leading-[1.85] text-mm-graphite/82">
            {c.bodyParagraphs.map((p, i) => (
              <p key={`${i}-${p.slice(0, 32)}`}>
                {p.includes(c.careersEmail) ? (
                  <>
                    {p.split(c.careersEmail)[0]}
                    <a
                      href={`mailto:${c.careersEmail}`}
                      className="font-semibold text-mm-brand-navy underline-offset-4 hover:underline"
                    >
                      {c.careersEmail}
                    </a>
                    {p.split(c.careersEmail)[1]}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>

          <div id="open-roles" className="scroll-mt-32 pt-16 lg:pt-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-graphite/50">
              {c.openingsLabel}
            </p>
            <div className="mt-8 space-y-3">
              {c.openings.map((role) => (
                <details
                  key={role.title}
                  className="group overflow-hidden rounded-2xl border border-mm-graphite/15 bg-mm-white open:border-mm-gold/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-mm-graphite marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0">{role.title}</span>
                    <span className="shrink-0 text-[10px] font-semibold tracking-[0.28em] text-mm-gold">
                      {role.location}
                    </span>
                  </summary>
                  <div className="border-t border-mm-graphite/10 px-6 py-5 font-editorial text-sm leading-relaxed text-mm-graphite/75">
                    <p>
                      {c.openingsApplyNote.includes(c.careersEmail) ? (
                        <>
                          {c.openingsApplyNote.split(c.careersEmail)[0]}
                          <a
                            href={`mailto:${c.careersEmail}`}
                            className="font-semibold text-mm-brand-navy underline-offset-4 hover:underline"
                          >
                            {c.careersEmail}
                          </a>
                          {c.openingsApplyNote.split(c.careersEmail)[1]}
                        </>
                      ) : (
                        c.openingsApplyNote
                      )}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mm-graphite pb-24 pt-14 text-mm-cream lg:pt-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-mm-cream">{c.whyJoinUs.title}</h2>
          <ul className="mt-8 space-y-8">
            {c.whyJoinUs.points.map((point) => (
              <li key={point.title} className="space-y-2">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-mm-gold">
                  {point.title}
                </p>
                <p className="font-editorial text-base leading-relaxed text-mm-light">{point.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
