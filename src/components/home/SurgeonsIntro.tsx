import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { getSite, getUI, localePath, type Locale } from "@/content/i18n";
import type { ImageKey } from "@/lib/images";

/**
 * Homepage "Our Team", Dr. Jindal, Dr. Prabakaran, and Katie Gambino, PA-C
 * side by side, each with a "Meet" link (to their full bio on About) and a
 * Book CTA.
 */
export default function SurgeonsIntro({ locale = "en" }: { locale?: Locale }) {
  const { surgeons } = getSite(locale);
  const ui = getUI(locale);
  return (
    <section className="bg-noir-deep py-24 lg:py-32">
      <div className="container-site">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow text-gold">{ui.ourTeam}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-6 font-display text-display-md font-light uppercase text-cream md:whitespace-nowrap">
              {ui.meetTeam}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {surgeons.map((s, i) => (
            <Reveal as="div" key={s.name} delay={i * 0.1}>
              <div className="flex h-full flex-col">
                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-cream/10 bg-gradient-to-b from-noir-2 to-noir">
                  <SiteImage
                    imageKey={s.imageKey as ImageKey}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="mt-7">
                  <h3 className="font-display text-3xl font-light uppercase text-cream">
                    {s.name}
                  </h3>
                  <p className="mt-2 label text-gold/80">{s.role}</p>
                  <p className="mt-4 max-w-md font-sans text-sm font-light leading-relaxed text-cream/65">
                    {s.blurb}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <BookButton label={s.bookLabel} provider={s.provider} className="btn-primary" />
                    <Link href={localePath(locale, s.meetHref)} className="btn-ghost">
                      {ui.meet} {s.meetLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
