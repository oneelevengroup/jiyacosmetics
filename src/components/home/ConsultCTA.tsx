import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import AskButton from "@/components/AskButton";
import { getSite, getUI, type Locale } from "@/content/i18n";

export default function ConsultCTA({ locale = "en" }: { locale?: Locale }) {
  const { business } = getSite(locale);
  const ui = getUI(locale);
  return (
    <section className="bg-noir py-28 lg:py-40">
      <div className="container-site text-center">
        <Reveal>
          <span className="eyebrow">{ui.beginJourney}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
            {ui.consultHeading}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-lg font-sans text-sm font-light uppercase leading-relaxed tracking-[0.14em] text-cream/70">
            {ui.consultSubtitle}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BookButton label={ui.bookConsult} className="btn-primary" />
            <AskButton label={ui.askQuestion} className="btn-ghost" />
            <a href={business.phoneHref} className="btn-primary">
              {ui.call} {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
