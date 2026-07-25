import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

/**
 * Before & After section with placeholder slots until real patient photos are
 * supplied. Drop images into /public/images/gallery/<slug>-1.jpg etc. and wire
 * them in later (see PLACEHOLDERS.md).
 */
export default function BeforeAfter({ name }: { name: string }) {
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
          {[0, 1, 2].map((i) => (
            <Reveal as="div" key={i} delay={i * 0.08}>
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-cream/15">
                <Placeholder />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl font-sans text-sm font-light leading-relaxed text-cream/50">
            {name} results from Dr. Jindal will be featured here. Individual results
            vary; your consultation will cover what's realistic for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
