import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import BookButton from "@/components/BookButton";
import { getImage } from "@/lib/images";
import { business } from "@/content/site";
import { procedureContent } from "@/content/services";

const OFFER = {
  price: "$4,000",
  eyebrow: "Limited-Time Special",
  procedure: "Upper Blepharoplasty",
  tagline: "Brighter, more youthful eyes — for a refreshed, well-rested look.",
};

const content = procedureContent["upper-blepharoplasty"];

const faqs = [
  {
    q: "Am I a good candidate?",
    a: "Most healthy adults bothered by excess or drooping upper-eyelid skin are candidates. Your consultation with Dr. Jindal will confirm what's right for you.",
  },
  {
    q: "Is it surgical, and what is recovery like?",
    a: "Upper blepharoplasty is a short procedure typically performed under local anesthesia. Most patients return to normal activities within about a week, with incisions hidden in the natural eyelid crease.",
  },
  {
    q: "Will my results look natural?",
    a: "Yes. As a fellowship-trained oculofacial surgeon, Dr. Jindal focuses on refreshed, natural results — never an operated look.",
  },
  {
    q: "Can it improve my vision?",
    a: "In some cases, removing heavy upper-eyelid skin can improve obstructed peripheral vision. Dr. Jindal will assess this at your visit.",
  },
  {
    q: "What's included in the special?",
    a: `Reach out and we'll walk you through everything the current ${OFFER.price} upper blepharoplasty special includes.`,
  },
];

export const metadata: Metadata = {
  title: `${OFFER.procedure} Special — ${OFFER.price} | JIYA Raleigh`,
  description: `${OFFER.procedure} in Raleigh, NC — now ${OFFER.price} for a limited time with oculofacial surgeon Dr. Sumeet Jindal. Book your consultation.`,
  // Campaign landing page — keep out of the main site's search index.
  robots: { index: false, follow: false },
};

export default function BlepharoplastyLanding() {
  const logo = getImage("brand.logoHorizontal");

  return (
    <div className="bg-noir text-cream">
      {/* Minimal top bar (no site nav) */}
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
          className="object-cover object-[center_22%]"
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
              <span className="eyebrow text-gold">{OFFER.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-display-lg font-light uppercase leading-[1.02] text-gold">
                Upper Eyelid Lift
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-cream/85">
                {OFFER.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 inline-flex items-baseline gap-3 border border-gold/40 px-6 py-4">
                <span className="font-display text-5xl leading-none text-gold">
                  {OFFER.price}
                </span>
                <span className="font-sans text-xs uppercase tracking-label text-cream/70">
                  {OFFER.procedure}
                  <br />
                  Special
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <BookButton label="Claim This Offer" className="btn-primary" />
                <a href={business.phoneHref} className="btn-ghost">
                  Call {business.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-cream/50">
                Oculofacial surgeon Dr. Sumeet Jindal · Brier Creek, Raleigh
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview + benefits */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold">The Procedure</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                A refreshed, more open gaze
              </h2>
            </Reveal>
            {content.body.map((para, i) => (
              <Reveal key={i} delay={0.12 + i * 0.06}>
                <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-gold">Highlights</span>
            </Reveal>
            <ul className="mt-6 space-y-4">
              {content.benefits.map((b, i) => (
                <Reveal as="li" key={i} delay={0.08 + i * 0.06}>
                  <div className="flex gap-4 border-b border-cream/10 pb-4">
                    <span className="font-display text-lg leading-none text-gold">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-sm font-light leading-relaxed text-cream/75">
                      {b}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Dr. Jindal */}
      <section className="bg-noir py-20 lg:py-28">
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
                Dr. Sumeet Jindal
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                A board-certified ophthalmologist with advanced fellowship training
                in oculofacial cosmetic surgery, Dr. Jindal specializes in the eyes —
                performing some of the most advanced, refined eyelid techniques in
                modern facial plastic surgery, with incisions hidden in the natural
                eyelid crease.
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
                <div className="relative flex aspect-[4/5] w-full items-center justify-center border border-cream/15 bg-noir">
                  <div className="text-center">
                    <span className="label text-cream/40">Before / After</span>
                    <p className="mt-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-cream/25">
                      Photos coming soon
                    </p>
                  </div>
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

      {/* Another option — Ziplyft */}
      <section className="border-y border-cream/10 bg-noir-2 py-16 lg:py-20">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Reveal>
              <span className="eyebrow text-gold">Another Option</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-3xl font-light uppercase text-cream lg:text-4xl">
                Prefer minimal downtime? Meet Ziplyft.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-3 max-w-xl font-sans text-sm font-light leading-relaxed text-cream/65">
                A 10-minute, in-office upper eyelid lift — no scalpel, no sutures.
                At your consultation, Dr. Jindal will help you choose the approach
                that best fits your eyes and goals.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/ziplyft" className="btn-ghost shrink-0">
              Explore Ziplyft
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-noir py-24 lg:py-32">
        <div className="container-site text-center">
          <Reveal>
            <span className="eyebrow text-gold">{OFFER.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-6 font-display text-display-lg font-light uppercase text-gold md:whitespace-nowrap">
              {OFFER.price} Upper Eyelid Lift
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-lg font-sans text-sm font-light uppercase leading-relaxed tracking-[0.14em] text-cream/70">
              Book your consultation with Dr. Jindal while this special lasts
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <BookButton label="Claim This Offer" className="btn-primary" />
              <a href={business.phoneHref} className="btn-ghost">
                Call {business.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-8 font-sans text-[0.7rem] leading-relaxed text-cream/40">
              {business.fullName} · {business.address.line1}, {business.address.city},{" "}
              {business.address.state} {business.address.zip}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky offer bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream/15 bg-noir/95 backdrop-blur-md">
        <div className="container-site flex items-center justify-between gap-4 py-3.5">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl leading-none text-gold">
              {OFFER.price}
            </span>
            <span className="hidden font-sans text-[0.7rem] uppercase tracking-label text-cream/70 sm:block">
              Upper Blepharoplasty Special
            </span>
          </div>
          <BookButton label="Book Now" className="btn-primary !px-6 !py-3" />
        </div>
      </div>
    </div>
  );
}
