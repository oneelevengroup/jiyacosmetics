import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { brandLine } from "@/content/services";

export const metadata: Metadata = {
  title: "Specials",
  description:
    "Current specials and offers at JIYA Eyelid & Facial Cosmetic Surgery in Raleigh, NC.",
};

export default function SpecialsPage() {
  return (
    <section className="flex min-h-[80svh] items-center bg-noir pt-32">
      <div className="container-site max-w-2xl text-center">
        <Reveal>
          <span className="eyebrow text-gold">{brandLine}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-display-lg font-light uppercase text-gold">
            Specials
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-lg font-sans text-base font-light leading-relaxed text-cream/70">
            We don&apos;t have any active specials at the moment. Be the first to
            know when a new offer launches — schedule a consultation and our team
            will keep you informed.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10">
            <BookButton label="Book a Consultation" className="btn-primary" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
