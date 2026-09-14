"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookButton from "./BookButton";
import AskButton from "./AskButton";
import { getUI, type Locale } from "@/content/i18n";

/**
 * Sitewide sticky CTA, bottom-right, both locales.
 *
 * Default: one gold "Book a Consult" pill with a small "Ask a question" text
 * link beneath. Flip TWO_EQUAL_PILLS to render two equal-weight pills instead
 * (the one-line change the brief asked for).
 *
 * - Docks (fades out) when the footer enters the viewport.
 * - Hides while a Typeform popup is open.
 * - Entrance animation is a CSS transition, so it's neutralized automatically
 *   under prefers-reduced-motion (see globals.css).
 * - Sits clear of the mobile safe-area inset.
 */
const TWO_EQUAL_PILLS = false;

const PILL =
  "inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 font-sans text-[0.7rem] uppercase tracking-label text-noir shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-colors duration-300 hover:bg-gold-soft";

export default function StickyCTA() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";
  const ui = getUI(locale);

  const [mounted, setMounted] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const io = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px 8% 0px" }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, [pathname]);

  // Dock only when the footer is in view. The Typeform popup is a full-screen
  // overlay, so the sticky never needs to hide itself when a form opens (and
  // doing so previously destroyed the popup mid-open, the "dead buttons" bug).
  const hidden = footerVisible || !mounted;

  return (
    <div
      className={`fixed bottom-0 right-0 z-40 flex flex-col items-end gap-2 p-4 pr-5 transition-all duration-500 ease-lux sm:p-6 ${
        hidden
          ? "pointer-events-none translate-y-6 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      {TWO_EQUAL_PILLS ? (
        <div className="flex flex-wrap items-center justify-end gap-2">
          <BookButton label={ui.bookConsult} className={PILL} />
          <AskButton label={ui.askQuestion} className={PILL} />
        </div>
      ) : (
        <>
          <BookButton label={ui.bookConsult} className={PILL} />
          <AskButton
            label={ui.askQuestion}
            className="rounded-full bg-noir/70 px-3 py-1 font-sans text-[0.65rem] uppercase tracking-label text-cream/80 backdrop-blur-sm transition-colors duration-300 hover:text-cream"
          />
        </>
      )}
    </div>
  );
}
