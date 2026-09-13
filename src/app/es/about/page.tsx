import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MeetDoctor from "@/components/home/MeetDoctor";
import ProviderBio from "@/components/ProviderBio";
import Highlights from "@/components/home/Highlights";
import ConsultCTA from "@/components/home/ConsultCTA";
import { getSite, getUI } from "@/content/i18n";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Sobre JIYA, el Jindal Institute for Youthful Aging. Una práctica de cirugía estética facial en Raleigh que combina arte quirúrgico con cuidado regenerativo.",
};

const locale = "es" as const;

export default function AboutEs() {
  const { about, drPrabakaran, katiePA } = getSite(locale);
  const ui = getUI(locale);
  return (
    <>
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site pb-16 lg:pb-20">
          <Reveal>
            <span className="eyebrow text-gold">{ui.brandLine}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
              {ui.aboutJiya}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl font-sans text-base font-light leading-relaxed text-cream/70">
              {about.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-gold">{ui.ourStory}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                {about.story.heading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            {about.story.body.map((para, i) => (
              <Reveal key={i} delay={0.16 + i * 0.06}>
                <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70 first:mt-0">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noir py-20 lg:py-28">
        <div className="container-site">
          <div className="relative max-w-3xl">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-16 -left-2 font-display text-[9rem] leading-none text-gold/20 lg:-top-20"
            >
              &ldquo;
            </span>
            <Reveal>
              <span className="eyebrow text-gold">{ui.ourPhilosophy}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                {about.philosophy.heading}
              </h2>
            </Reveal>
            {about.philosophy.body.map((para, i) => (
              <Reveal key={i} delay={0.16 + i * 0.06}>
                <p className="mt-6 font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MeetDoctor locale={locale} />
      <ProviderBio provider={drPrabakaran} imageKey="provider.prabakaran" reverse bg="bg-noir" id="dr-prabakaran" />
      <ProviderBio provider={katiePA} imageKey="provider.katie" bg="bg-noir-deep" id="katie-gambino" />

      <Highlights locale={locale} />

      <ConsultCTA locale={locale} />
    </>
  );
}
