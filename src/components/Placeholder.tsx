/**
 * Consistent brand placeholder, the gold JIYA flower icon + "PLACEHOLDER".
 * Used everywhere an asset is awaiting real content so the preview stays clean
 * and professional. Fills its (relative) parent.
 */
export default function Placeholder({ fill = true }: { fill?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-noir-2 text-center ${
        fill ? "absolute inset-0" : "h-full w-full"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/JIYA_icon.svg"
        alt=""
        aria-hidden
        className="h-10 w-auto opacity-50 md:h-12"
      />
      <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-cream/40">
        Placeholder
      </span>
    </div>
  );
}
