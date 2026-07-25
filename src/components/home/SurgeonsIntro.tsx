import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { surgeons } from "@/content/site";
import type { ImageKey } from "@/lib/images";

/**
 * Homepage "Our Surgeons", Dr. Jindal and Dr. Prabakaran side by side, each
 * with a "Meet" link (to their full bio on About) and a Book CTA.
 */
export default function SurgeonsIntro() {
  return (
    <section className="bg-noir-deep py-24 lg:py-32">
      <div className="container-site">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow text-gold">Our Surgeons</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-display-md font-light uppercase text-cream">
              Meet the surgeons behind JIYA
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-14">
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
                    <BookButton label={s.bookLabel} className="btn-primary" />
                    <Link href={s.meetHref} className="btn-ghost">
                      Meet {s.name.replace("Dr. Sumeet Jindal", "Dr. J").replace("Dr. Samantha Prabakaran", "Dr. P")}
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
