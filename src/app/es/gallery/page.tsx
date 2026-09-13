import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import ConsultCTA from "@/components/home/ConsultCTA";
import { getUI } from "@/content/i18n";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Resultados antes y después del Dr. Sumeet Jindal en JIYA, Raleigh, NC: cirugía de párpados, rejuvenecimiento facial y más.",
};

const locale = "es" as const;

export default function GalleryEs() {
  const ui = getUI(locale);
  return (
    <>
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site pb-14 lg:pb-16">
          <Reveal>
            <span className="eyebrow text-gold">{ui.brandLine}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
              {ui.galleryTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-cream/70">
              {ui.galleryIntro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-deep py-16 lg:py-24">
        <div className="container-site">
          <Gallery locale={locale} />
        </div>
      </section>

      <ConsultCTA locale={locale} />
    </>
  );
}
