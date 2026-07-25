import SiteImage from "@/components/SiteImage";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import type { ImageKey } from "@/lib/images";

type Provider = {
  eyebrow: string;
  name: string;
  bio: string[];
  cta: { label: string; href: string };
};

/**
 * Generic provider/surgeon bio section (image + bio + Book CTA).
 * `reverse` puts the image on the right and `bg` alternates the background.
 */
export default function ProviderBio({
  provider,
  imageKey,
  reverse = false,
  bg = "bg-noir",
  id,
}: {
  provider: Provider;
  imageKey: ImageKey;
  reverse?: boolean;
  bg?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 ${bg} py-24 lg:py-32`}>
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <SiteImage
              imageKey={imageKey}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[center_20%]"
            />
          </div>
        </Reveal>

        <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
          <Reveal>
            <span className="eyebrow text-gold">{provider.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
              {provider.name}
            </h2>
          </Reveal>
          {provider.bio.map((para, i) => (
            <Reveal key={i} delay={0.14 + i * 0.06}>
              <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                {para}
              </p>
            </Reveal>
          ))}
          <Reveal delay={0.34}>
            <div className="mt-10">
              <BookButton label={provider.cta.label} className="btn-primary" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
