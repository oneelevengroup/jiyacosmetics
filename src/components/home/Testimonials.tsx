import Reveal from "@/components/Reveal";
import { testimonials } from "@/content/site";

export default function Testimonials() {
  return (
    <section className="bg-noir-deep py-24 lg:py-32">
      <div className="container-site">
        <Reveal>
          <span className="eyebrow text-gold">Patient Stories</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl font-display text-display-md font-light uppercase text-cream">
            In their words
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="div" key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col bg-noir-deep p-8 lg:p-10">
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
