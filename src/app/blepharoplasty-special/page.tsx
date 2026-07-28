import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import BookButton from "@/components/BookButton";
import { getImage } from "@/lib/images";
import { business, drPrabakaran } from "@/content/site";
import { procedureContent } from "@/content/services";

const OFFER = {
  eyebrow: "Limited-Time Special",
  priceFrom: "$4,000",
  surgeon: "Dr. Samantha Prabakaran, MD",
};

const content = procedureContent["upper-blepharoplasty"];

// The special, performed by Dr. Prabakaran
const specialPricing = [
  { name: "Upper Blepharoplasty", price: "$4,000" },
  { name: "Lower Blepharoplasty", price: "$4,000" },
];

// Before & after results (each image is before on top, after on bottom)
const beforeAfters = [
  "/images/IMG_0117.JPG",
  "/images/IMG_0582.JPG",
  "/images/IMG_0698.JPG",
  "/images/IMG_1549.JPG",
  "/images/IMG_1581.JPG",
  "/images/IMG_2928.JPG",
  "/images/IMG_3618.JPG",
  "/images/IMG_4580.JPG",
  "/images/IMG_4691.JPG",
  "/images/IMG_4726.JPG",
  "/images/IMG_6652.JPG",
  "/images/IMG_7594.JPG",
];

// Premium option with Dr. Jindal
const jindalPricing = [
  { name: "Upper Blepharoplasty", price: "$6,000" },
  { name: "Lower Blepharoplasty", price: "$8,000" },
];

const faqs = [
  {
    q: "Am I a good candidate?",
    a: "Most healthy adults bothered by excess or heavy eyelid skin, or under-eye bags, are candidates. Your consultation with Dr. Prabakaran will confirm what's right for you.",
  },
  {
    q: "Is it surgical, and what is recovery like?",
    a: "Blepharoplasty is a short procedure. Most patients return to normal activities within about a week, with incisions hidden in the natural eyelid creases.",
  },
  {
    q: "Will my results look natural?",
    a: "Yes. As a fellowship-trained oculofacial surgeon, Dr. Prabakaran focuses on refreshed, natural results, never an operated look.",
  },
  {
    q: "What's the difference between upper and lower?",
    a: "Upper blepharoplasty removes excess upper-eyelid skin for a more open, rested look. Lower blepharoplasty addresses under-eye bags and puffiness. Some patients benefit from both.",
  },
  {
    q: "Is there an anesthesia fee?",
    a: "An anesthesia fee may apply depending on the procedure. We'll review the full cost, including any anesthesia fee, with you at your consultation.",
  },
];

export const metadata: Metadata = {
  title: "Blepharoplasty Special from $4,000 | JIYA Raleigh",
  description:
    "Upper & lower blepharoplasty from $4,000 with oculofacial surgeon Dr. Samantha Prabakaran, MD at JIYA in Raleigh, NC. Book your consultation.",
  robots: { index: false, follow: false },
};

export default function BlepharoplastyLanding() {
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
                Eyelid Lift
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-cream/85">
                Brighter, more youthful eyes with oculofacial surgeon{" "}
                <span className="text-cream">{OFFER.surgeon}</span>.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 inline-flex items-baseline gap-3 border border-gold/40 px-6 py-4">
                <span className="font-display text-5xl leading-none text-gold">
                  {OFFER.priceFrom}
                </span>
                <span className="font-sans text-xs uppercase tracking-label text-cream/70">
                  Blepharoplasty
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
                {OFFER.surgeon} · Brier Creek, Raleigh
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The special — pricing options */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site">
          <div className="text-center">
            <Reveal>
              <span className="eyebrow text-gold">The Special</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mx-auto mt-5 font-display text-display-md font-light uppercase text-cream md:whitespace-nowrap">
                Blepharoplasty, from $4,000
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mx-auto mt-5 max-w-xl font-sans text-sm font-light leading-relaxed text-cream/60">
                Performed by oculofacial surgeon {OFFER.surgeon}.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-3 font-sans text-[0.7rem] uppercase tracking-label text-cream/45">
                Anesthesia fee may apply
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
            {specialPricing.map((p, i) => (
              <Reveal as="div" key={p.name} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center border border-cream/15 bg-noir p-8 text-center">
                  <span className="label text-cream/70">{p.name}</span>
                  <span className="mt-5 font-display text-6xl leading-none text-gold">
                    {p.price}
                  </span>
                  <div className="mt-7">
                    <BookButton label="Book This" className="btn-primary" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + highlights */}
      <section className="bg-noir py-20 lg:py-28">
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

      {/* Meet Dr. Prabakaran */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <SiteImage
                imageKey="provider.prabakaran"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold">Your Surgeon</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                {drPrabakaran.name}
              </h2>
            </Reveal>
            {drPrabakaran.bio.slice(0, 2).map((para, i) => (
              <Reveal key={i} delay={0.14 + i * 0.06}>
                <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                  {para}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.28}>
              <BookButton label="Book with Dr. Prabakaran" className="btn-primary mt-9" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-noir py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <span className="eyebrow text-gold">Real Results</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
              Before &amp; After
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-cream/45">
              Before (top) · After (bottom) · Individual results vary
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfters.map((src, i) => (
              <Reveal as="div" key={src} delay={(i % 3) * 0.08}>
                <div className="relative aspect-square w-full overflow-hidden border border-cream/15">
                  <Image
                    src={src}
                    alt="Blepharoplasty before and after result"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
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
        <div className="container-site text-center">
          <Reveal>
            <span className="eyebrow text-gold">Another Option</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-light uppercase text-cream lg:text-4xl">
              Ask us about Ziplyft
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm font-light leading-relaxed text-cream/65">
              A 10-minute, in-office upper eyelid lift, no scalpel, no sutures. At
              your consultation, our surgeons will help you choose the approach
              that best fits your eyes and goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Book with Dr. Jindal (premium option) */}
      <section className="bg-noir py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-noir-2 to-noir">
              <SiteImage
                imageKey="home.doctor"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold">Prefer Dr. Jindal?</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                Book with Dr. Jindal
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                JIYA founder and oculofacial surgeon Dr. Sumeet Jindal also performs
                blepharoplasty. Book directly with Dr. Jindal at the following rates:
              </p>
            </Reveal>
            <div className="mt-8 max-w-md border-t border-cream/15">
              {jindalPricing.map((p, i) => (
                <Reveal as="div" key={p.name} delay={0.2 + i * 0.06}>
                  <div className="flex items-center justify-between border-b border-cream/15 py-4">
                    <span className="font-sans text-sm uppercase tracking-label text-cream/80">
                      {p.name}
                    </span>
                    <span className="font-display text-2xl text-gold">{p.price}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.36}>
              <BookButton label="Book with Dr. Jindal" className="btn-primary mt-9" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-noir-deep py-24 lg:py-32">
        <div className="container-site text-center">
          <Reveal>
            <span className="eyebrow text-gold">{OFFER.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-6 font-display text-display-lg font-light uppercase text-gold">
              Blepharoplasty,{" "}
              <span className="whitespace-nowrap">from $4,000</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-lg font-sans text-sm font-light uppercase leading-relaxed tracking-[0.14em] text-cream/70">
              Book your consultation with {OFFER.surgeon} while this special lasts
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
              From {OFFER.priceFrom}
            </span>
            <span className="hidden font-sans text-[0.7rem] uppercase tracking-label text-cream/70 sm:block">
              Blepharoplasty Special
            </span>
          </div>
          <BookButton label="Book Now" className="btn-primary !px-6 !py-3" />
        </div>
      </div>
    </div>
  );
}
