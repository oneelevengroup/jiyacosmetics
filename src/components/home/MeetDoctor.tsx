import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import Reveal from "@/components/Reveal";
import { doctor, credentials } from "@/content/site";

/**
 * "Meet Dr. Jindal" — portrait left, bio right, with a "Member of" credentials
 * row beneath. Set on the deepest near-black for a refined, editorial feel.
 * Each credential renders its white/transparent logo when one is provided
 * (see PLACEHOLDERS.md), otherwise the name as elegant text.
 */
export default function MeetDoctor() {
  return (
    <section className="bg-noir-deep py-24 lg:py-36">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <SiteImage
              imageKey="home.doctor"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Bio */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow text-gold">{doctor.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
              {doctor.name}
            </h2>
          </Reveal>
          {doctor.bio.map((para, i) => (
            <Reveal key={i} delay={0.14 + i * 0.06}>
              <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                {para}
              </p>
            </Reveal>
          ))}
          <Reveal delay={0.34}>
            <Link href={doctor.cta.href} className="btn-primary mt-10">
              {doctor.cta.label}
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Credentials */}
      <Reveal>
        <div className="container-site mt-16 border-t border-cream/10 pt-10 lg:mt-24 lg:pt-12">
          <span className="eyebrow">Member of</span>
          <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-6 lg:gap-x-14">
            {credentials.map((c) =>
              c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={c.slug}
                  src={c.logo}
                  alt={c.name}
                  className="h-10 w-auto object-contain opacity-75 transition-opacity duration-500 hover:opacity-100 lg:h-12"
                />
              ) : (
                <span
                  key={c.slug}
                  className="max-w-[13rem] font-sans text-[0.7rem] uppercase leading-relaxed tracking-[0.18em] text-cream/55"
                >
                  {c.name}
                </span>
              )
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
