import Image from "next/image";
import Reveal from "@/components/Reveal";

/**
 * Before & After section for a procedure page. Renders real results (each image
 * is before on top, after on bottom). If no images are supplied for this
 * procedure, the section is omitted entirely (no empty placeholders).
 */
export default function BeforeAfter({
  name,
  images = [],
}: {
  name: string;
  images?: string[];
}) {
  if (images.length === 0) return null;

  return (
    <section className="bg-noir-2 py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <span className="eyebrow text-gold">Real Results</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
            Before &amp; After
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <Reveal as="div" key={src} delay={(i % 3) * 0.08}>
              <div className="relative aspect-square w-full overflow-hidden border border-cream/15">
                <Image
                  src={src}
                  alt={`${name} before and after result`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-cream/45">
            Before (top) · After (bottom) · Individual results vary
          </p>
        </Reveal>
      </div>
    </section>
  );
}
