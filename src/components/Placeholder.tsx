/**
 * Branded image panel used where a real photo isn't in place yet: a subtle
 * gold JIYA emblem centered on a soft dark gradient. Reads as an intentional
 * brand motif (not a "placeholder"), so the site is launch-ready with or
 * without the final photography. Swap in a real image via src/lib/images.ts.
 */
export default function Placeholder({ fill = true }: { fill?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-noir-2 to-noir-deep text-center ${
        fill ? "absolute inset-0" : "h-full w-full"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/JIYA_icon.svg"
        alt=""
        aria-hidden
        className="h-14 w-auto opacity-25 md:h-16"
      />
    </div>
  );
}
