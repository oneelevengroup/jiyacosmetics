import Link from "next/link";
import { getImage } from "@/lib/images";

/**
 * JIYA logo — the real transparent gold lockup (src/lib/images.ts → "brand.logo").
 * Falls back to a Forum text wordmark only if the logo entry is ever marked as a
 * placeholder. `size` controls height for the header vs. the larger footer mark.
 */
export default function Logo({
  size = "header",
  centered = false,
}: {
  size?: "header" | "footer";
  centered?: boolean;
}) {
  // Header uses the horizontal lockup; footer uses the taller vertical lockup.
  const logo = getImage(size === "footer" ? "brand.logo" : "brand.logoHorizontal");
  const height = size === "footer" ? "h-16 lg:h-20" : "h-10 md:h-12";

  if (!logo.placeholder) {
    return (
      <Link href="/" aria-label="JIYA — home" className={centered ? "block text-center" : "block"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt={logo.alt} className={`${height} w-auto`} />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="JIYA — home"
      className={`group block text-cream ${centered ? "text-center" : ""}`}
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
