import Link from "next/link";

/**
 * JIYA wordmark. Rendered as styled type until the real logo file is supplied
 * (see PLACEHOLDERS.md → brand assets). Swap this for an <Image> of the SVG logo.
 */
export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const color = variant === "light" ? "text-ivory" : "text-ink";
  return (
    <Link
      href="/"
      aria-label="JIYA — home"
      className={`font-display ${color} leading-none`}
    >
      <span className="block text-2xl font-medium tracking-[0.42em] pl-[0.42em]">
        JIYA
      </span>
      <span
        className={`mt-0.5 block font-sans text-[0.55rem] uppercase tracking-[0.34em] ${
          variant === "light" ? "text-ivory/60" : "text-taupe"
        }`}
      >
        Facial Cosmetic Surgery
      </span>
    </Link>
  );
}
