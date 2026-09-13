import Image from "next/image";
import Reveal from "@/components/Reveal";
import { getImage } from "@/lib/images";
import { getUI, type Locale } from "@/content/i18n";

const NCO_URL = "https://www.ncophth.com/";

/**
 * Sister-brand band (NCO Eye Center), the last content band before the footer.
 * Full-bleed macro-iris background pushed dark and warm toward the JIYA gold,
 * so it reads as texture behind the copy. Until the client supplies the iris
 * asset (images.ts "home.iris"), the band renders on the same dark warm
 * gradient alone, so contrast and layout are correct either way.
 */
export default function NcoBand({ locale = "en" }: { locale?: Locale }) {
  const ui = getUI(locale);
  const iris = getImage("home.iris");

  return (
    <section className="relative isolate overflow-hidden bg-noir-deep">
      {/* Background image (only once the real asset is in) */}
      {!iris.placeholder && (
        <Image
          src={iris.src}
          alt=""
          aria-hidden
          fill
          priority={false}
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-center"
        />
      )}

      {/* Dark + warm-gold treatment so text clears AA over any crop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,11,9,0.92) 0%, rgba(20,15,11,0.86) 55%, rgba(28,20,10,0.80) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(60% 120% at 20% 50%, rgba(201,169,97,0.35) 0%, transparent 60%)",
        }}
      />

      <div className="container-site py-20 lg:py-24">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-gold">{ui.ncoEyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
              {ui.ncoHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/85">
              {ui.ncoBody}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href={NCO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-9"
            >
              {ui.ncoCta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
