import Link from "next/link";
import Reveal from "@/components/Reveal";
import { business } from "@/content/site";

export default function ConsultCTA() {
  return (
    <section className="bg-ivory py-28 lg:py-40">
      <div className="container-site text-center">
        <Reveal>
          <span className="eyebrow">Begin Your Journey</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-display-lg font-light text-ink">
            Your outside, looking more like your inside.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-clay">
            Schedule a personalized consultation with Dr. Jindal and build a plan
            on your terms.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <a href={business.phoneHref} className="btn-ghost">
              Call {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
