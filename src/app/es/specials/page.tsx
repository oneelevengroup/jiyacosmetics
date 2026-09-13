import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { getUI } from "@/content/i18n";

export const metadata: Metadata = {
  title: "Promociones",
  description: "Promociones y ofertas actuales en JIYA Eyelid & Facial Cosmetic Surgery en Raleigh, NC.",
};

const locale = "es" as const;

export default function SpecialsEs() {
  const ui = getUI(locale);
  return (
    <section className="flex min-h-[80svh] items-center bg-noir pt-32">
      <div className="container-site max-w-2xl text-center">
        <Reveal>
          <span className="eyebrow text-gold">{ui.brandLine}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-display-lg font-light uppercase text-gold">
            Promociones
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-lg font-sans text-base font-light leading-relaxed text-cream/70">
            En este momento no tenemos promociones activas. Sé la primera en enterarte cuando lancemos una nueva oferta: reserva una consulta y nuestro equipo te mantendrá informada.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10">
            <BookButton label={ui.bookConsult} className="btn-primary" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
