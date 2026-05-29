"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, business } from "@/content/site";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-stone/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between py-5">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline font-sans text-xs uppercase tracking-[0.18em] text-ink/80 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={business.phoneHref}
            className="link-underline font-sans text-xs uppercase tracking-[0.18em] text-ink/70"
          >
            {business.phone}
          </a>
          <Link href="/contact" className="btn-primary !px-6 !py-3">
            Book a Consult
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-7 bg-ink transition-all duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-7 bg-ink transition-all duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-ivory px-8 lg:hidden"
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-4xl font-light text-ink py-2"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-10 flex flex-col gap-4">
              <a href={business.phoneHref} className="font-sans text-sm tracking-[0.18em] text-taupe">
                {business.phone}
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary self-start">
                Book a Consult
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
