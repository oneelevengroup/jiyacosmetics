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
 * Full-bleed dark cinematic hero. The brand portrait sits on the left with a
 * black negative-space expanse on the right, so the headline is placed in that
 * right-side space (desktop) / lower third (mobile) to keep the face clear.
 * Gentle slow-zoom + scroll parallax add depth.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-noir">
      {/* Brand portrait — anchored left so the face stays in frame on all sizes */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <SiteImage
          imageKey="home.hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left animate-slow-zoom"
        />
      </motion.div>

      {/* Legibility gradients: bottom on mobile, right-side on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent lg:hidden" />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 36%, rgba(20,16,13,0.55) 52%, rgba(20,16,13,0.92) 70%, #14100D 100%)",
        }}
      />

      {/* Content — bottom on mobile, right negative space on desktop */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-site relative flex h-full flex-col justify-end pb-24 lg:flex-row lg:items-center lg:justify-end lg:pb-0"
      >
        <div className="lg:w-[48%] lg:pl-10">
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
            className="mt-6 font-display text-display-lg font-light uppercase leading-[1.02] text-gold"
          >
            Look better.
            <br />
            See better.
            <br />
            Feel better.
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
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link href="/contact" className="btn-primary">
              Book an Appointment
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore Services
            </Link>
          </motion.div>
        </div>
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
