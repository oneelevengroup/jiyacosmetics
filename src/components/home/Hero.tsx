"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import SiteImage from "@/components/SiteImage";
import BookButton from "@/components/BookButton";
import { getImage } from "@/lib/images";
import { business } from "@/content/site";

/**
 * Two-phase cinematic hero.
 *
 *  Phase 1 (page top): just the brand portrait with the horizontal logo
 *  centered over the dark space — no nav, no headline.
 *  Phase 2 (on scroll): the logo fades out while the headline, subtitle and
 *  CTAs reveal in the right-side negative space. The global Header reveals on
 *  scroll in tandem (see Header.tsx).
 *
 * Implemented as a tall section with a sticky inner stage so the reveal happens
 * while the hero stays pinned in view.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => setRevealed(v > 0.3));

  // Image + head-turn cross-dissolve (profile -> front), completing as the
  // logo fades so she "lands" looking at you before the headline reveals.
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const profileOpacity = useTransform(scrollYProgress, [0.05, 0.4], [1, 0]);
  const frontOpacity = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);
  const profileScale = useTransform(scrollYProgress, [0.05, 0.4], [1, reduce ? 1 : 1.04]);
  const frontScale = useTransform(scrollYProgress, [0.05, 0.4], [reduce ? 1 : 1.06, 1]);
  const hasFront = !getImage("home.heroFront").placeholder;

  // Phase 1 — centered logo fades out fast and early, fully gone before the
  // front-facing shot comes in. Scroll hint fades on the first nudge.
  const logoOpacity = useTransform(scrollYProgress, [0.02, 0.13], [1, 0]);
  const logoY = useTransform(scrollYProgress, [0.02, 0.13], [0, reduce ? 0 : -24]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Phase 2 — headline block
  const contentOpacity = useTransform(scrollYProgress, [0.32, 0.62], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.32, 0.62], [reduce ? 0 : 40, 0]);

  const logo = getImage("brand.logoHorizontal");
  const icon = getImage("brand.icon");

  return (
    <section ref={ref} className="relative h-[230vh]">
      <div className="sticky top-0 h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir">
        {/* Brand portrait — profile layer cross-dissolves into the front layer */}
        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
          <motion.div
            style={hasFront ? { opacity: profileOpacity, scale: profileScale } : undefined}
            className="absolute inset-0"
          >
            <SiteImage
              imageKey="home.hero"
              fill
              priority
              sizes="100vw"
              className="object-cover object-left"
            />
          </motion.div>

          {hasFront && (
            <motion.div style={{ opacity: frontOpacity, scale: frontScale }} className="absolute inset-0">
              <SiteImage
                imageKey="home.heroFront"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Legibility gradients for phase-2 text */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent lg:hidden" />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 36%, rgba(20,16,13,0.55) 52%, rgba(20,16,13,0.92) 70%, #14100D 100%)",
          }}
        />

        {/* Phase 1 — centered horizontal logo */}
        <motion.div
          style={{ opacity: logoOpacity, y: logoY }}
          aria-hidden={revealed}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        >
          {/* soft scrim so the gold reads over the face */}
          <div className="absolute left-1/2 top-1/2 h-[42vh] w-[80vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-noir/45 blur-3xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} className="relative h-28 w-auto md:h-40 lg:h-48" />
        </motion.div>

        {/* Phase 2 — headline in the right negative space */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className={`container-site relative z-20 flex h-full flex-col justify-end pb-24 lg:flex-row lg:items-center lg:justify-end lg:pb-0 ${
            revealed ? "" : "pointer-events-none"
          }`}
        >
          <div className="lg:w-[48%] lg:pl-10">
            <span className="eyebrow">{business.founderTitle} · Raleigh, NC</span>

            <h1 className="mt-6 font-display text-display-lg font-light uppercase leading-[1.02] text-gold">
              Look better.
              <br />
              See better.
              <br />
              Feel better.
            </h1>

            <p className="mt-7 max-w-md font-sans text-sm font-light uppercase leading-relaxed tracking-[0.14em] text-cream/80">
              Luxury facial cosmetic surgery & regenerative care from oculofacial
              surgeon Dr. Sumeet Jindal
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <BookButton label="Book an Appointment" className="btn-primary" />
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Phase 1 — scroll hint: gold JIYA icon gently bobbing downward */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4"
        >
          <span className="font-sans text-xs uppercase tracking-[0.45em] text-cream/75">
            Scroll
          </span>
          <motion.img
            src={icon.src}
            alt=""
            aria-hidden
            animate={{ y: reduce ? 0 : [0, 11, 0], opacity: [0.85, 1, 0.85] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="h-10 w-auto md:h-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
