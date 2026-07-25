import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import MeetDoctor from "@/components/home/MeetDoctor";
import ProviderBio from "@/components/ProviderBio";
import Highlights from "@/components/home/Highlights";
import ConsultCTA from "@/components/home/ConsultCTA";
import { about, drPrabakaran } from "@/content/site";
import { brandLine } from "@/content/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "About JIYA — the Jindal Institute for Youthful Aging. A homegrown Raleigh facial cosmetic surgery practice blending surgical artistry with regenerative care.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site pb-16 lg:pb-20">
          <Reveal>
            <span className="eyebrow text-gold">{brandLine}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
              About JIYA
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl font-sans text-base font-light leading-relaxed text-cream/70">
              {about.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story — image + copy */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <SiteImage
                imageKey="home.philosophy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow text-gold">Our Story</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                {about.story.heading}
              </h2>
            </Reveal>
            {about.story.body.map((para, i) => (
              <Reveal key={i} delay={0.16 + i * 0.06}>
                <p className="mt-6 max-w-xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
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
              <span className="eyebrow text-gold">Our Philosophy</span>
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

      {/* Our surgeons */}
      <MeetDoctor />
      <ProviderBio
        provider={drPrabakaran}
        imageKey="provider.prabakaran"
        reverse
        bg="bg-noir"
      />

      <Highlights />

      <ConsultCTA />
    </>
  );
}
