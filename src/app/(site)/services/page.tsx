import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ConsultCTA from "@/components/home/ConsultCTA";
import { serviceCategories } from "@/content/site";
import { brandLine } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Surgical artistry & regenerative care, eyelid surgery, facial rejuvenation, skin and non-surgical treatments, and hair restoration with Dr. Sumeet Jindal in Raleigh, NC.",
};

export default function ServicesPage() {
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
              Our Services
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-cream/70">
              From refined oculofacial surgery to regenerative, non-surgical care -
              every treatment is tailored to you and performed on your terms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category sections */}
      {serviceCategories.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`scroll-mt-28 py-16 lg:py-24 ${ci % 2 === 0 ? "bg-noir-deep" : "bg-noir"}`}
        >
          <div className="container-site">
            <div className="flex flex-col gap-3 border-b border-cream/15 pb-8">
              <Reveal>
                <span className="font-display text-xl text-gold/70">
                  0{ci + 1}
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display text-display-md font-light uppercase text-cream">
                  {cat.title}
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="max-w-xl font-sans text-sm font-light leading-relaxed text-cream/60">
                  {cat.blurb}
                </p>
              </Reveal>
            </div>

            <div className="grid gap-px overflow-hidden border-x border-b border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-3">
              {cat.procedures.map((p, i) => (
                <Reveal as="div" key={p.slug} delay={(i % 3) * 0.05}>
                  <Link
                    href={p.href ?? `/services/${p.slug}`}
                    className="group flex items-center justify-between gap-4 bg-noir px-7 py-7 transition-colors duration-500 hover:bg-noir-2"
                  >
                    <span className="font-sans text-sm uppercase tracking-label text-cream/80 transition-colors duration-500 group-hover:text-cream">
                      {p.name}
                    </span>
                    <span className="font-sans text-base text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ConsultCTA />
    </>
  );
}
