import type { Metadata } from "next";
import BookButton from "@/components/BookButton";
import ZiplyftSections from "@/components/ZiplyftSections";
import { getImage } from "@/lib/images";
import { business } from "@/content/site";

export const metadata: Metadata = {
  title: "Ziplyft, The 10-Minute Upper Eyelid Lift | JIYA Raleigh",
  description:
    "Ziplyft at JIYA in Raleigh, NC, a minimally invasive, in-office upper eyelid lift in about 10 minutes per eye. No scalpel, no sutures, minimal downtime. Book your consultation with Dr. Sumeet Jindal.",
  // Standalone ad landing page (no site nav) — keep out of the main index.
  robots: { index: false, follow: false },
};

export default function ZiplyftLanding() {
  const logo = getImage("brand.logoHorizontal");

  return (
    <div className="bg-noir pb-16 text-cream">
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

      <ZiplyftSections />

      {/* Sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream/15 bg-noir/95 backdrop-blur-md">
        <div className="container-site flex items-center justify-between gap-4 py-3.5">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl leading-none text-gold">Ziplyft</span>
            <span className="hidden font-sans text-[0.7rem] uppercase tracking-label text-cream/70 sm:block">
              The 10-Minute Eyelid Lift
            </span>
          </div>
          <BookButton label="Book Now" className="btn-primary !px-6 !py-3" />
        </div>
      </div>
    </div>
  );
}
