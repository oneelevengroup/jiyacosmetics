import Link from "next/link";

/**
 * JIYA wordmark — elegant spaced serif caps, echoing the inspiration's
 * centered logotype. Rendered as styled type until the real logo file is
 * supplied (see PLACEHOLDERS.md → brand assets); swap for an <Image> then.
 */
export default function Logo({
  variant = "light",
  centered = false,
}: {
  /** "light" = cream (for dark backgrounds). */
  variant?: "light" | "dark";
  centered?: boolean;
}) {
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
