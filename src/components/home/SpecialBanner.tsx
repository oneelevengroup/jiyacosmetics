import Link from "next/link";
import Reveal from "@/components/Reveal";
import { homeSpecial } from "@/content/site";

export default function SpecialBanner() {
  return (
    <section className="bg-espresso py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="eyebrow text-gold-soft">{homeSpecial.eyebrow}</span>
              <h2 className="mt-4 font-display text-4xl font-light text-ivory lg:text-5xl">
                {homeSpecial.title}
              </h2>
              <p className="mt-3 font-sans text-base font-light text-ivory/70">
                {homeSpecial.detail}
              </p>
            </div>
            <Link
              href={homeSpecial.cta.href}
              className="btn-primary bg-ivory text-ink hover:bg-gold hover:text-ivory"
            >
              {homeSpecial.cta.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
