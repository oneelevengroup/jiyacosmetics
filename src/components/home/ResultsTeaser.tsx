import Link from "next/link";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

/**
 * Before/After teaser that links to the Gallery. Placeholder slots until real
 * patient photos are added (see PLACEHOLDERS.md / CLIENT-NEEDS.md).
 */
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
          {[0, 1, 2].map((i) => (
            <Reveal as="div" key={i} delay={i * 0.08}>
              <Link
                href="/gallery"
                className="group relative block aspect-[4/5] w-full overflow-hidden border border-cream/15 transition-colors duration-500 hover:border-gold/40"
              >
                <Placeholder />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
