import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import Reveal from "@/components/Reveal";
import { philosophy } from "@/content/site";

export default function Philosophy() {
  return (
    <section className="bg-ivory py-24 lg:py-36">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Image */}
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px]">
            <SiteImage
              imageKey="home.philosophy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-6 lg:pl-6">
          <Reveal>
            <span className="eyebrow">{philosophy.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light text-ink">
              {philosophy.heading}
            </h2>
          </Reveal>
          {philosophy.body.map((para, i) => (
            <Reveal key={i} delay={0.16 + i * 0.08}>
              <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-clay">
                {para}
              </p>
            </Reveal>
          ))}
          <Reveal delay={0.32}>
            <Link href="/about" className="btn-ghost mt-10">
              Meet Dr. Jindal
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
