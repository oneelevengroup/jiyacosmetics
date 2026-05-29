import Reveal from "@/components/Reveal";
import { highlights } from "@/content/site";

export default function Highlights() {
  return (
    <section className="bg-ivory py-24 lg:py-36">
      <div className="container-site">
        <Reveal>
          <span className="eyebrow">Why JIYA</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-3xl font-display text-display-md font-light text-ink">
            The same hospitality and customized care, at every stage.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal as="div" key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-ivory p-8 lg:p-10">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-light text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-clay">
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
