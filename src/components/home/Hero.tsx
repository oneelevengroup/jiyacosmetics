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
 * Full-bleed, dark cinematic hero — modeled on grigoriak.doctor: a moody
 * full-bleed portrait, a giant airy serif headline (blush), and a small
 * cream uppercase subtitle, with gentle scroll parallax for depth.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir">
      {/* Background portrait */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <SiteImage
          imageKey="home.hero"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
      </motion.div>

      {/* Cinematic vignette for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/35 to-noir/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(20,16,13,0.7)_100%)]" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-site relative flex h-full flex-col items-center justify-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          {business.founderTitle} · Raleigh, NC
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-display-xl font-light uppercase text-blush"
        >
          Look Better.
          <br />
          See Better. Feel Better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-md font-sans text-sm font-light uppercase leading-relaxed tracking-[0.14em] text-cream/80"
        >
          Luxury facial cosmetic surgery & regenerative care from oculofacial
          surgeon Dr. Sumeet Jindal
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Book an Appointment
          </Link>
          <Link href="/services" className="btn-ghost">
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
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-cream/50">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block h-10 w-px bg-cream/30"
        />
      </motion.div>
    </section>
  );
}
