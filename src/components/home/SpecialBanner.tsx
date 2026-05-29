import Link from "next/link";
import Reveal from "@/components/Reveal";
import { homeSpecial } from "@/content/site";

export default function SpecialBanner() {
  return (
    <section className="bg-noir-3 py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="eyebrow text-gold">{homeSpecial.eyebrow}</span>
              <h2 className="mt-5 font-display text-4xl font-light uppercase text-cream lg:text-5xl">
                {homeSpecial.title}
              </h2>
              <p className="mt-4 font-sans text-sm font-light uppercase tracking-[0.12em] text-cream/65">
                {homeSpecial.detail}
              </p>
            </div>
            <Link href={homeSpecial.cta.href} className="btn-primary">
              {homeSpecial.cta.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
