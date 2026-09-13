import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

/** Three real before/after results (before on top, after on bottom) linking to the Gallery. */
const teaser = ["/images/IMG_0698.JPG", "/images/IMG_1549.JPG", "/images/IMG_0582.JPG"];

export default function ResultsTeaser() {
  return (
    <section className="bg-noir-2 py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">Real Results</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-2xl font-display text-display-md font-light uppercase text-cream">
                Before &amp; After
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/gallery" className="btn-ghost shrink-0">
              View the Gallery
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teaser.map((src, i) => (
            <Reveal as="div" key={src} delay={i * 0.08}>
              <Link
                href="/gallery"
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
            Before (top) · After (bottom) · Individual results vary
          </p>
        </Reveal>
      </div>
    </section>
  );
}
