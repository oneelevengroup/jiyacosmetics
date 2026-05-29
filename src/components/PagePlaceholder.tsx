import Link from "next/link";

/**
 * Temporary on-brand placeholder for routes not yet built out.
 * These pages will be designed one at a time, following the homepage.
 */
export default function PagePlaceholder({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
}) {
  return (
    <section className="flex min-h-[80svh] items-center bg-ivory pt-32">
      <div className="container-site">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl font-display text-display-lg font-light text-ink">
          {title}
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-clay">
          {blurb}
        </p>
        <p className="mt-4 font-sans text-xs uppercase tracking-[0.18em] text-taupe">
          This page is being designed next.
        </p>
        <Link href="/" className="btn-ghost mt-10">
          Back home
        </Link>
      </div>
    </section>
  );
}
