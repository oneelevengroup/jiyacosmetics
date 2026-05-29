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

  useMotionValueEvent(scrollYProgress, "change", (v) => setRevealed(v > 0.12));

  // Image
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);

  // Phase 1 — centered logo + scroll hint
  const logoOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0]);
  const logoY = useTransform(scrollYProgress, [0, 0.14], [0, reduce ? 0 : -24]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Phase 2 — headline block
  const contentOpacity = useTransform(scrollYProgress, [0.12, 0.42], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.12, 0.42], [reduce ? 0 : 40, 0]);

  const logo = getImage("brand.logoHorizontal");

  return (
    <section ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir">
        {/* Brand portrait */}
        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
          <SiteImage
            imageKey="home.hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-left"
          />
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
          <div className="absolute left-1/2 top-1/2 h-[34vh] w-[70vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-noir/45 blur-3xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} className="relative h-20 w-auto md:h-28 lg:h-32" />
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
              <Link href="/contact" className="btn-primary">
                Book an Appointment
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Phase 1 — scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-cream/60">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="block h-10 w-px bg-cream/40"
          />
        </motion.div>
      </div>
    </section>
  );
}
