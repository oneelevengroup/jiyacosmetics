import Reveal from "@/components/Reveal";
import { highlights } from "@/content/site";

export default function Highlights() {
  return (
    <section className="bg-noir py-24 lg:py-36">
      <div className="container-site">
        <Reveal>
          <span className="eyebrow">Why JIYA</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-3xl font-display text-display-md font-light uppercase text-cream">
            The same hospitality &amp; customized care, at every stage
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal as="div" key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-noir p-8 lg:p-10">
                <span className="font-display text-3xl text-blush">0{i + 1}</span>
                <h3 className="mt-6 font-sans text-sm uppercase tracking-label text-cream">
                  {item.title}
                </h3>
                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream/60">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
