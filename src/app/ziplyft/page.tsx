import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import Placeholder from "@/components/Placeholder";
import BookButton from "@/components/BookButton";
import { getImage } from "@/lib/images";
import { business } from "@/content/site";

const HERO_STATS = [
  "~10 Minutes Per Eye",
  "Local Anesthesia",
  "No Scalpel or Sutures",
  "Days of Downtime",
];

const steps = [
  {
    title: "Prep & Marking",
    body: "Dr. Jindal precisely marks the amount of excess upper-eyelid skin to be removed, the foundation of a natural, symmetric result.",
  },
  {
    title: "Compression & Excision",
    body: "The Ziplyft device gently compresses the tissue to seal off blood flow, and a guarded blade glides across to neatly remove the excess skin, no cautery.",
  },
  {
    title: "Sutureless Closure",
    body: "Because the compression seals the tissue edges, no stitches are needed. A skin adhesive closes the incision cleanly.",
  },
];

const benefits = [
  {
    title: "Fast Recovery",
    body: "Most patients look event-ready within days and return to normal activities in under a week.",
  },
  {
    title: "Minimal Downtime",
    body: "The compression technique significantly reduces bruising and swelling compared to traditional blepharoplasty.",
  },
  {
    title: "Natural Results",
    body: "A refreshed, more youthful upper eye, and potentially improved peripheral vision from lifted, less-heavy lids.",
  },
];

const faqs = [
  {
    q: "What is Ziplyft?",
    a: "Ziplyft is a minimally invasive upper eyelid lift performed in-office under local anesthesia. It uses a specialized compression device with a built-in blade to remove excess upper-eyelid skin, without a scalpel, sutures, or cautery.",
  },
  {
    q: "How long does it take?",
    a: "About 10 minutes per eye, in-office, under local anesthesia, you're awake and comfortable the whole time.",
  },
  {
    q: "Is there any cutting or stitches?",
    a: "No scalpel and no sutures. The device compresses and removes the excess skin, and the incision is closed with a skin adhesive rather than stitches.",
  },
  {
    q: "What is recovery like?",
    a: "Minimal. The compression approach reduces bruising and swelling versus traditional blepharoplasty, so most people return to normal activities within a week, often looking event-ready in just days.",
  },
  {
    q: "Ziplyft or traditional blepharoplasty?",
    a: "Ziplyft is a faster, minimally invasive option focused on excess upper-eyelid skin. At your consultation, Dr. Jindal will help determine which approach best fits your anatomy and goals.",
  },
  {
    q: "Am I a candidate?",
    a: "Ziplyft is ideal for those bothered by excess or drooping upper-eyelid skin. A quick consultation with Dr. Jindal will confirm whether it's right for you.",
  },
];

export const metadata: Metadata = {
  title: "Ziplyft, The 10-Minute Upper Eyelid Lift | JIYA Raleigh",
  description:
    "Ziplyft at JIYA in Raleigh, NC, a minimally invasive, in-office upper eyelid lift in about 10 minutes per eye. No scalpel, no sutures, minimal downtime. Book your consultation with Dr. Sumeet Jindal.",
  robots: { index: false, follow: false },
};

export default function ZiplyftLanding() {
  const logo = getImage("brand.logoHorizontal");

  return (
    <div className="bg-noir text-cream">
      {/* Minimal top bar */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="container-site flex items-center justify-between py-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} className="h-9 w-auto md:h-11" />
          <div className="flex items-center gap-6">
            <a
              href={business.phoneHref}
              className="hidden font-sans text-xs uppercase tracking-label text-cream/80 hover:text-cream sm:block"
            >
              {business.phone}
            </a>
            <BookButton label="Book Now" className="btn-primary !px-6 !py-3" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <SiteImage
          imageKey="home.heroFront"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/55 to-noir/70" />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(20,16,13,0.92) 0%, rgba(20,16,13,0.6) 45%, transparent 75%)",
          }}
        />

        <div className="container-site relative z-10 py-32">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow text-gold">Minimally Invasive Upper Eyelid Lift</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-display-xl font-light uppercase leading-[0.98] text-gold">
                Ziplyft
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-cream/85">
                A 10-minute, in-office eyelid lift, no scalpel, no sutures, and
                minimal downtime. Brighter, more youthful eyes on your schedule.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <BookButton label="Book a Consultation" className="btn-primary" />
                <a href={business.phoneHref} className="btn-primary">
                  Call {business.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-6 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-cream/50">
                Oculofacial surgeon Dr. Sumeet Jindal · Brier Creek, Raleigh
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-y border-cream/10 bg-noir-2">
        <div className="container-site grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s} className="text-center">
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.18em] text-cream/70">
                {s}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <span className="eyebrow text-gold">How It Works</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl font-display text-display-md font-light uppercase text-cream">
              Refreshed eyes in three simple steps
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="div" key={s.title} delay={i * 0.08}>
                <div className="flex h-full flex-col bg-noir-deep p-8 lg:p-10">
                  <span className="font-display text-4xl text-gold">0{i + 1}</span>
                  <h3 className="mt-6 font-sans text-sm uppercase tracking-label text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream/65">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-noir py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <span className="eyebrow text-gold">Why Ziplyft</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl font-display text-display-md font-light uppercase text-cream">
              The lift without the downtime
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal as="div" key={b.title} delay={i * 0.08}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="font-display text-2xl font-light uppercase text-cream">
                    {b.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream/65">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dr. Jindal */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <SiteImage
                imageKey="home.doctor"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold">Your Surgeon</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                An eye specialist you can trust
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                Dr. Sumeet Jindal is a board-certified ophthalmologist with advanced
                fellowship training in oculofacial cosmetic surgery. Few surgeons know
                the eyes like an oculofacial specialist, which is exactly what you
                want for a refined, natural upper-eyelid result.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <BookButton label="Book Your Consultation" className="btn-primary mt-9" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Before & After */}
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site max-w-3xl">
          <Reveal>
            <span className="eyebrow text-gold">Questions</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
              Good to know
            </h2>
          </Reveal>
          <div className="mt-10 border-t border-cream/15">
            {faqs.map((f, i) => (
              <Reveal as="div" key={i} delay={i * 0.04}>
                <div className="border-b border-cream/15 py-7">
                  <h3 className="font-sans text-sm uppercase tracking-label text-cream">
                    {f.q}
                  </h3>
                  <p className="mt-3 font-sans text-[0.9rem] font-light leading-relaxed text-cream/65">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-noir py-24 lg:py-32">
        <div className="container-site text-center">
          <Reveal>
            <span className="eyebrow text-gold">Minimally Invasive Upper Eyelid Lift</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-display-lg font-light uppercase text-gold">
              Brighter eyes, on your schedule
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-lg font-sans text-sm font-light uppercase leading-relaxed tracking-[0.14em] text-cream/70">
              Book your Ziplyft consultation with Dr. Jindal today
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <BookButton label="Book a Consultation" className="btn-primary" />
              <a href={business.phoneHref} className="btn-primary">
                Call {business.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-8 font-sans text-[0.7rem] leading-relaxed text-cream/40">
              {business.fullName} · {business.address.line1}, {business.address.city},{" "}
              {business.address.state} {business.address.zip} · Individual results vary.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream/15 bg-noir/95 backdrop-blur-md">
        <div className="container-site flex items-center justify-between gap-4 py-3.5">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl leading-none text-gold">Ziplyft</span>
            <span className="hidden font-sans text-[0.7rem] uppercase tracking-label text-cream/70 sm:block">
              The 10-Minute Eyelid Lift
            </span>
          </div>
          <BookButton label="Book Now" className="btn-primary !px-6 !py-3" />
        </div>
      </div>
    </div>
  );
}
