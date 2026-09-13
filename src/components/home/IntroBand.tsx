import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getSite, getUI, localePath, type Locale } from "@/content/i18n";

export default function IntroBand({ locale = "en" }: { locale?: Locale }) {
  const { homeIntro } = getSite(locale);
  const ui = getUI(locale);
  return (
    <section className="bg-noir py-24 lg:py-32">
      <div className="container-site max-w-4xl text-center">
        <Reveal>
          <span className="eyebrow text-gold">{ui.brandLine}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-display-md font-light uppercase text-cream">
            {homeIntro.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-2xl font-sans text-base font-light leading-relaxed text-cream/70">
            {homeIntro.body}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link href={localePath(locale, homeIntro.cta.href)} className="btn-ghost mt-9">
            {homeIntro.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
