import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { business } from "@/content/site";

export default function ConsultCTA() {
  return (
    <section className="bg-noir py-28 lg:py-40">
      <div className="container-site text-center">
        <Reveal>
          <span className="eyebrow">Begin Your Journey</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
            Refined, natural, undeniably you
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-lg font-sans text-sm font-light uppercase leading-relaxed tracking-[0.14em] text-cream/70">
            Schedule a consultation with Dr. Jindal to design your personalized
            plan
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BookButton label="Book a Consultation" className="btn-primary" />
            <a href={business.phoneHref} className="btn-primary">
              Call {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
