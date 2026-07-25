import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ConsultForm from "@/components/ConsultForm";
import { business } from "@/content/site";
import { brandLine } from "@/content/services";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact JIYA Eyelid & Facial Cosmetic Surgery in Brier Creek, Raleigh, NC. Book a consultation with Dr. Sumeet Jindal, call (984) 275-3818, or visit us.",
};

const mapSrc =
  "https://www.google.com/maps?q=7901+ACC+Blvd+Suite+201+Raleigh+NC+27617&output=embed";

export default function ContactPage() {
  const { address } = business;
  return (
    <>
      {/* Hero */}
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site pb-14 lg:pb-16">
          <Reveal>
            <span className="eyebrow text-gold">{brandLine}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
              Book a Consultation
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-cream/70">
              Begin your journey with Dr. Jindal. Complete the form below and our
              team will reach out to schedule your private consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Details + inline form */}
      <section className="bg-noir-deep py-16 lg:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-4">
            <Reveal>
              <div>
                <h2 className="eyebrow text-gold">Visit</h2>
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
                <h2 className="eyebrow text-gold">Contact</h2>
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
                <h2 className="eyebrow text-gold">Hours</h2>
                <p className="mt-5 font-sans text-[0.95rem] font-light leading-relaxed text-cream/80">
                  {business.hours}
                  <br />
                  <span className="text-cream/50">{business.hoursNote}</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex gap-6">
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline label text-cream/60"
                >
                  Instagram
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline label text-cream/60"
                >
                  Facebook
                </a>
              </div>
            </Reveal>
          </div>

          {/* Inline Typeform */}
          <Reveal className="lg:col-span-8">
            <div className="h-[620px] w-full overflow-hidden border border-cream/15 bg-noir">
              <ConsultForm className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-noir-deep pb-20 lg:pb-28">
        <div className="container-site">
          <div className="relative aspect-[21/9] w-full overflow-hidden border border-cream/15">
            <iframe
              title="JIYA location map"
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
