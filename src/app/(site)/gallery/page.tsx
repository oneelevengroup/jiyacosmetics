import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import ConsultCTA from "@/components/home/ConsultCTA";
import { brandLine } from "@/content/services";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before & after results from Dr. Sumeet Jindal at JIYA in Raleigh, NC, eyelid surgery, facial rejuvenation, skin treatments, and hair restoration.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site pb-14 lg:pb-16">
          <Reveal>
            <span className="eyebrow text-gold">{brandLine}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
              Before &amp; After
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-cream/70">
              Real results from Dr. Jindal&apos;s most requested procedures.
              Individual results vary; your consultation will cover what&apos;s
              realistic for you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-deep py-16 lg:py-24">
        <div className="container-site">
          <Gallery />
        </div>
      </section>

      <ConsultCTA />
    </>
  );
}
