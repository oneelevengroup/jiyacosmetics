"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import SiteImage from "@/components/SiteImage";
import { business } from "@/content/site";

/**
 * Full-bleed editorial hero with a slow image zoom and gentle scroll parallax —
 * the "light 3D motion" cue from the inspiration site. The headline and image
 * drift at different rates to create depth without heavy 3D.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.7]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <SiteImage
          imageKey="home.hero"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
      </motion.div>

      {/* Tonal overlay for legibility */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/30 to-ink/70"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="container-site relative flex h-full flex-col justify-end pb-24 lg:pb-32"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-ivory/80"
        >
          {business.founderTitle} · Raleigh, NC
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-5xl font-display text-display-xl font-light text-ivory"
        >
          Look better.
          <br />
          See better. Feel better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-ivory/85"
        >
          Luxury facial cosmetic surgery and regenerative care from oculofacial
          surgeon Dr. Sumeet Jindal — so you can live your best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/contact" className="btn-primary bg-ivory text-ink hover:bg-gold hover:text-ivory">
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="btn-ghost border-ivory/40 text-ivory hover:border-ivory hover:text-ivory"
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-ivory/60">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block h-10 w-px bg-ivory/40"
        />
      </motion.div>
    </section>
  );
}
