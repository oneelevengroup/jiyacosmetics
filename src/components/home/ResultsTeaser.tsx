import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getUI, localePath, type Locale } from "@/content/i18n";

/** Three real before/after results (before on top, after on bottom) linking to the Gallery. */
const teaser = ["/images/IMG_0698.JPG", "/images/IMG_1549.JPG", "/images/IMG_0582.JPG"];

export default function ResultsTeaser({ locale = "en" }: { locale?: Locale }) {
  const ui = getUI(locale);
  const galleryHref = localePath(locale, "/gallery");
  return (
    <section className="bg-noir-2 py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">{ui.realResults}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-2xl font-display text-display-md font-light uppercase text-cream">
                {ui.beforeAfter}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href={galleryHref} className="btn-ghost shrink-0">
              {ui.viewGallery}
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teaser.map((src, i) => (
            <Reveal as="div" key={src} delay={i * 0.08}>
              <Link
                href={galleryHref}
                className="group relative block aspect-square w-full overflow-hidden border border-cream/15 transition-colors duration-500 hover:border-gold/40"
              >
                <Image
                  src={src}
                  alt="Blepharoplasty before and after result"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-cream/45">
            {ui.resultsVary}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
