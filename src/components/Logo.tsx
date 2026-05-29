import Link from "next/link";
import { getImage } from "@/lib/images";

/**
 * JIYA logo.
 *
 * Renders the real logo image when one has been added (set `placeholder: false`
 * on the "brand.logo" entry in src/lib/images.ts after dropping the file at
 * /public/images/brand/logo.svg). Until then it falls back to an elegant Forum
 * text wordmark, which suits the dark editorial aesthetic.
 */
export default function Logo({
  variant = "light",
  centered = false,
}: {
  /** "light" = cream (for dark backgrounds). */
  variant?: "light" | "dark";
  centered?: boolean;
}) {
  const logo = getImage("brand.logo");

  if (!logo.placeholder) {
    return (
      <Link href="/" aria-label="JIYA — home" className={centered ? "block text-center" : "block"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt="JIYA" className="h-10 w-auto md:h-11" />
      </Link>
    );
  }

  const color = variant === "dark" ? "text-noir" : "text-cream";
  return (
    <Link
      href="/"
      aria-label="JIYA — home"
      className={`group block ${color} ${centered ? "text-center" : ""}`}
    >
      <span className="block font-display text-2xl font-normal tracking-[0.5em] pl-[0.5em] leading-none">
        JIYA
      </span>
      <span className="mt-1 block font-sans text-[0.5rem] uppercase tracking-[0.34em] text-cream/50">
        Facial Cosmetic Surgery
      </span>
    </Link>
  );
}
