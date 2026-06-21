"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, business } from "@/content/site";
import Logo from "./Logo";
import BookButton from "./BookButton";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // On home, reveal the header deeper into the pinned intro (matches the
    // longer hold before the hero headline appears). Elsewhere, near the top.
    const onScroll = () => {
      const threshold = isHome ? window.innerHeight * 0.34 : 40;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // On the homepage the header stays hidden over the intro and reveals on
  // scroll, in tandem with the hero headline. Elsewhere it is always shown.
  const show = !isHome || scrolled || open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ease-lux ${
        show
          ? "translate-y-0 border-cream/10 bg-noir/85 opacity-100 backdrop-blur-md"
          : "pointer-events-none -translate-y-full border-transparent opacity-0"
      }`}
    >
      <div className="container-site grid grid-cols-2 items-center py-5 lg:grid-cols-3">
        {/* Left: nav (desktop) */}
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline label text-cream/75 hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center: logo */}
        <div className="flex justify-start lg:justify-center">
          <Logo centered />
        </div>

        {/* Right: remaining nav + CTA */}
        <div className="hidden items-center justify-end gap-8 lg:flex">
          {nav.slice(3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline label text-cream/75 hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
          <BookButton
            label="Book an Appointment"
            className="label text-cream transition-colors duration-500 hover:text-gold"
          />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-7 bg-cream transition-all duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-7 bg-cream transition-all duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-noir px-8 lg:hidden"
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 * i + 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-4xl font-light uppercase tracking-wide text-cream"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-10 flex flex-col gap-4">
              <a href={business.phoneHref} className="label text-cream/60">
                {business.phone}
              </a>
              <BookButton
                label="Book an Appointment"
                className="btn-primary self-start"
                onOpen={() => setOpen(false)}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
