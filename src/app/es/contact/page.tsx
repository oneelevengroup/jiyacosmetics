import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ConsultForm from "@/components/ConsultForm";
import InquiryForm from "@/components/InquiryForm";
import { getSite, getUI } from "@/content/i18n";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a JIYA Eyelid & Facial Cosmetic Surgery en Brier Creek, Raleigh, NC. Reserva una consulta con el Dr. Sumeet Jindal, llama al (919) 929-6006 o visítanos.",
};

const mapSrc =
  "https://www.google.com/maps?q=7901+ACC+Blvd+Suite+201+Raleigh+NC+27617&output=embed";
const locale = "es" as const;

export default function ContactEs() {
  const { business } = getSite(locale);
  const ui = getUI(locale);
  const { address } = business;
  return (
    <>
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site pb-14 lg:pb-16">
          <Reveal>
            <span className="eyebrow text-gold">{ui.brandLine}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
              {ui.bookConsultation}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-cream/70">
              {ui.contactHeroBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-deep py-16 lg:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div>
                <h2 className="eyebrow text-gold">{ui.visit}</h2>
                <address className="mt-5 not-italic font-sans text-[0.95rem] font-light leading-relaxed text-cream/80">
                  {address.line1}
                  <br />
                  {address.city}, {address.state} {address.zip}
                  <br />
                  <span className="text-cream/50">{address.neighborhood}</span>
                </address>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10">
                <h2 className="eyebrow text-gold">{ui.contactLabel}</h2>
                <div className="mt-5 space-y-2 font-sans text-[0.95rem] font-light text-cream/80">
                  <p>
                    <a href={business.phoneHref} className="link-underline">
                      {business.phone}
                    </a>
                  </p>
                  <p>
                    <a href={business.emailHref} className="link-underline">
                      {business.email}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10">
                <h2 className="eyebrow text-gold">{ui.hoursLabel}</h2>
                <p className="mt-5 font-sans text-[0.95rem] font-light leading-relaxed text-cream/80">
                  {business.hours}
                  <br />
                  <span className="text-cream/50">{business.hoursNote}</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex gap-6">
                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="link-underline label text-cream/60">
                  Instagram
                </a>
                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="link-underline label text-cream/60">
                  Facebook
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-8">
            <div className="h-[620px] w-full overflow-hidden border border-cream/15 bg-noir">
              <ConsultForm className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* General inquiry */}
      <section className="bg-noir py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-gold">{ui.quickQuestion}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                {ui.askAnything}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-sm font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                {ui.inquiryBody}
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-8">
            <div className="h-[560px] w-full overflow-hidden border border-cream/15 bg-noir">
              <InquiryForm className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social */}
      <section className="bg-noir-2 py-16 lg:py-20">
        <div className="container-site text-center">
          <Reveal>
            <span className="eyebrow text-gold">{ui.followAlong}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-display-md font-light uppercase text-cream">
              {ui.seeResults}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
              {ui.socialBody}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Instagram
              </a>
              <a href={business.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                YouTube
              </a>
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-deep pb-20 lg:pb-28">
        <div className="container-site">
          <div className="relative aspect-[21/9] w-full overflow-hidden border border-cream/15">
            <iframe
              title="Ubicación de JIYA"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
