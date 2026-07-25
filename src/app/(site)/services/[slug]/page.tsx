import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import Placeholder from "@/components/Placeholder";
import BookButton from "@/components/BookButton";
import BeforeAfter from "@/components/BeforeAfter";
import ConsultCTA from "@/components/home/ConsultCTA";
import type { ImageKey } from "@/lib/images";
import {
  getAllProcedures,
  getProcedure,
  relatedProcedures,
  procedureFaqs,
  categoryImageKey,
  brandLine,
} from "@/content/services";

export function generateStaticParams() {
  return getAllProcedures().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const proc = getProcedure(params.slug);
  if (!proc) return {};
  return { title: proc.name, description: proc.content.summary };
}

export default function ProcedurePage({ params }: { params: { slug: string } }) {
  const proc = getProcedure(params.slug);
  if (!proc) notFound();

  const imageKey = categoryImageKey[proc.categoryId] as ImageKey;
  const related = relatedProcedures(proc.slug, proc.categoryId);
  const faqs = procedureFaqs(proc);
  const videoId = proc.content.videoId;

  return (
    <>
      {/* Hero */}
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold">{brandLine}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 label text-cream/50">{proc.categoryTitle}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="mt-3 font-display text-display-lg font-light uppercase text-gold">
                {proc.name}
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-cream/75">
                {proc.content.summary}
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <BookButton label="Book a Consultation" className="btn-primary" />
                <Link href="/services" className="btn-ghost">
                  All Services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <SiteImage
                imageKey={imageKey}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview + benefits */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold">The Procedure</span>
            </Reveal>
            {proc.content.body.map((para, i) => (
              <Reveal key={i} delay={0.08 + i * 0.06}>
                <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-gold">Highlights</span>
            </Reveal>
            <ul className="mt-6 space-y-4">
              {proc.content.benefits.map((b, i) => (
                <Reveal as="li" key={i} delay={0.08 + i * 0.06}>
                  <div className="flex gap-4 border-b border-cream/10 pb-4">
                    <span className="font-display text-lg leading-none text-gold">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-sm font-light leading-relaxed text-cream/75">
                      {b}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Procedure explained, video */}
      <section className="bg-noir py-20 lg:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow text-gold">Watch</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
                {proc.name}, explained
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl font-sans text-sm font-light leading-relaxed text-cream/65">
                {videoId
                  ? `Dr. Jindal walks through ${proc.name}, what it is, who it helps, and what to expect.`
                  : `A short video with Dr. Jindal explaining ${proc.name} is coming soon.`}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative mx-auto mt-10 aspect-video w-full max-w-4xl overflow-hidden border border-cream/15">
              {videoId ? (
                <iframe
                  title={`${proc.name} explained`}
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              ) : (
                <Placeholder />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Before & After */}
      <BeforeAfter name={proc.name} />

      {/* FAQ */}
      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site max-w-3xl">
          <Reveal>
            <span className="eyebrow text-gold">Common Questions</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
              Good to know
            </h2>
          </Reveal>
          <div className="mt-10 border-t border-cream/15">
            {faqs.map((f, i) => (
              <Reveal as="div" key={i} delay={i * 0.04}>
                <div className="border-b border-cream/15 py-7">
                  <h3 className="font-sans text-sm uppercase tracking-label text-cream">
                    {f.q}
                  </h3>
                  <p className="mt-3 font-sans text-[0.9rem] font-light leading-relaxed text-cream/65">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related procedures */}
      {related.length > 0 && (
        <section className="bg-noir py-20 lg:py-24">
          <div className="container-site">
            <Reveal>
              <span className="eyebrow text-gold">{proc.categoryTitle}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-light uppercase text-cream lg:text-4xl">
                Related Procedures
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r, i) => (
                <Reveal as="div" key={r.slug} delay={i * 0.06}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group flex h-full flex-col justify-between gap-8 bg-noir p-7 transition-colors duration-500 hover:bg-noir-2"
                  >
                    <span className="font-display text-xl text-gold/70">0{i + 1}</span>
                    <span className="font-sans text-sm uppercase tracking-label text-cream/80 transition-colors duration-500 group-hover:text-cream">
                      {r.name}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultCTA />
    </>
  );
}
