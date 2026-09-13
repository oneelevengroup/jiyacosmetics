import Reveal from "@/components/Reveal";
import { getSite, getUI, type Locale } from "@/content/i18n";

/** A row of gold five-star rating graphics. */
function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-gold"
          aria-hidden
        >
          <path d="M12 2l2.9 6.26 6.1.53-4.6 4.02 1.36 6.19L12 15.9 6.24 19l1.36-6.19L3 8.79l6.1-.53L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const { testimonials } = getSite(locale);
  const ui = getUI(locale);
  return (
    <section className="bg-noir-deep py-24 lg:py-32">
      <div className="container-site">
        <Reveal>
          <span className="eyebrow text-gold">{ui.patientStories}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <h2 className="max-w-2xl font-display text-display-md font-light uppercase text-cream">
              {ui.inTheirWords}
            </h2>
            <Stars />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="div" key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col bg-noir-deep p-8 lg:p-10">
                <Stars className="mb-5" />
                <span aria-hidden className="font-display text-5xl leading-none text-gold/40">
                  &ldquo;
                </span>
                <blockquote className="mt-4 flex-1 font-display text-xl font-light leading-snug text-cream/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-cream/10 pt-5">
                  <span className="block font-sans text-xs uppercase tracking-label text-cream">
                    {t.name}
                  </span>
                  <span className="mt-1 block font-sans text-[0.7rem] uppercase tracking-[0.18em] text-gold/80">
                    {t.detail}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
