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
    <section className="flex min-h-[80svh] items-center bg-noir pt-32">
      <div className="container-site">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 max-w-4xl font-display text-display-lg font-light uppercase text-gold">
          {title}
        </h1>
        <p className="mt-7 max-w-xl font-sans text-sm font-light uppercase leading-relaxed tracking-[0.12em] text-cream/70">
          {blurb}
        </p>
        <p className="mt-5 label text-cream/45">This page is being designed next.</p>
        <Link href="/" className="btn-ghost mt-10">
          Back home
        </Link>
      </div>
    </section>
  );
}
