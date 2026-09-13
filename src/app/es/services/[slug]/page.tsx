import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import BeforeAfter from "@/components/BeforeAfter";
import ConsultCTA from "@/components/home/ConsultCTA";
import { getAllProcedures } from "@/content/services";
import { getSite, getUI, localePath } from "@/content/i18n";

const locale = "es" as const;

const BLEPH_RESULTS = [
  "/images/IMG_0117.JPG",
  "/images/IMG_1581.JPG",
  "/images/IMG_2928.JPG",
  "/images/IMG_3618.JPG",
  "/images/IMG_4691.JPG",
  "/images/IMG_9655.JPG",
];

export function generateStaticParams() {
  return getAllProcedures().map((p) => ({ slug: p.slug }));
}

/** Resolve a Spanish procedure (name + category) by slug from the ES taxonomy. */
function resolveEs(slug: string) {
  const { serviceCategories } = getSite(locale);
  for (const cat of serviceCategories) {
    const p = cat.procedures.find((pr) => pr.slug === slug && !pr.href);
    if (p) {
      const related = cat.procedures
        .filter((pr) => pr.slug !== slug && !pr.href)
        .slice(0, 4);
      return { name: p.name, categoryTitle: cat.title, related };
    }
  }
  return null;
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = resolveEs(params.slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.name} en JIYA: arte quirúrgico y cuidado regenerativo del Dr. Sumeet Jindal en Raleigh, NC.`,
  };
}

export default function ProcedureEs({ params }: { params: { slug: string } }) {
  const proc = resolveEs(params.slug);
  if (!proc) notFound();
  const ui = getUI(locale);
  const { name, categoryTitle, related } = proc;

  const summary = `${name} en JIYA: arte quirúrgico y cuidado regenerativo del Dr. Sumeet Jindal en Raleigh, NC.`;
  const body = [
    `${name} se ofrece en JIYA Eyelid & Facial Cosmetic Surgery. Reserva una consulta con el Dr. Jindal para saber si este procedimiento es adecuado para ti y diseñar un plan a tu medida.`,
  ];
  const benefits = [
    "Consulta personalizada",
    "Realizado por el Dr. Sumeet Jindal",
    "Enfoque holístico y regenerativo",
  ];
  const faqs = [
    {
      q: `¿Soy buena candidata para ${name}?`,
      a: `La mejor manera de saberlo es una consulta. El Dr. Jindal revisará tu anatomía, tus objetivos y tu salud para recomendarte si ${name} es adecuado para ti.`,
    },
    {
      q: `¿Qué implica ${name}?`,
      a: "El Dr. Jindal te explicará todo el proceso, qué esperar antes, durante y después, y adaptará el plan a tus rasgos y objetivos.",
    },
    {
      q: "¿Cómo es la recuperación?",
      a: "La recuperación varía según la persona y el procedimiento. El Dr. Jindal ofrece instrucciones personalizadas de cuidado previo y posterior, incluidos los protocolos de recuperación holística de JIYA.",
    },
    {
      q: "¿Los resultados se verán naturales?",
      a: "Sí. Los resultados naturales y refinados son siempre la prioridad. Cada tratamiento se personaliza para complementar tus rasgos, nunca para verse exagerado.",
    },
    {
      q: "¿Cuánto cuesta y cómo empiezo?",
      a: "El precio se personaliza según tu plan. Reserva una consulta y nuestro equipo te dará un presupuesto claro y los siguientes pasos.",
    },
  ];

  const showZiplyft = params.slug === "upper-blepharoplasty";
  const baImages =
    params.slug === "upper-blepharoplasty" || params.slug === "lower-blepharoplasty"
      ? BLEPH_RESULTS
      : [];

  return (
    <>
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site max-w-3xl pb-16 lg:pb-24">
          <Reveal>
            <span className="eyebrow text-gold">{ui.brandLine}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-5 label text-cream/50">{categoryTitle}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-3 font-display text-display-lg font-light uppercase text-gold">
              {name}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-cream/75">
              {summary}
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <BookButton label={ui.bookConsult} className="btn-primary" />
              <Link href={localePath(locale, "/services")} className="btn-ghost">
                {ui.allServices}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold">{ui.theProcedure}</span>
            </Reveal>
            {body.map((para, i) => (
              <Reveal key={i} delay={0.08 + i * 0.06}>
                <p className="mt-6 max-w-2xl font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-gold">Destacados</span>
            </Reveal>
            <ul className="mt-6 space-y-4">
              {benefits.map((b, i) => (
                <Reveal as="li" key={i} delay={0.08 + i * 0.06}>
                  <div className="flex gap-4 border-b border-cream/10 pb-4">
                    <span className="font-display text-lg leading-none text-gold">0{i + 1}</span>
                    <span className="font-sans text-sm font-light leading-relaxed text-cream/75">{b}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BeforeAfter name={name} images={baImages} />

      <section className="bg-noir-deep py-20 lg:py-28">
        <div className="container-site max-w-3xl">
          <Reveal>
            <span className="eyebrow text-gold">{ui.commonQuestions}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-display-md font-light uppercase text-cream">
              Bueno saber
            </h2>
          </Reveal>
          <div className="mt-10 border-t border-cream/15">
            {faqs.map((f, i) => (
              <Reveal as="div" key={i} delay={i * 0.04}>
                <div className="border-b border-cream/15 py-7">
                  <h3 className="font-sans text-sm uppercase tracking-label text-cream">{f.q}</h3>
                  <p className="mt-3 font-sans text-[0.9rem] font-light leading-relaxed text-cream/65">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {showZiplyft && (
        <section className="border-y border-cream/10 bg-noir-2 py-16 lg:py-20">
          <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <Reveal>
                <span className="eyebrow text-gold">Otra Opción</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 font-display text-3xl font-light uppercase text-cream lg:text-4xl">
                  ¿Prefieres mínima recuperación? Conoce Ziplyft.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-3 max-w-xl font-sans text-sm font-light leading-relaxed text-cream/65">
                  Un lifting de párpado superior de 10 minutos en el consultorio, sin bisturí y sin suturas. Pregúntanos si Ziplyft es adecuado para ti.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <Link href={localePath(locale, "/services/ziplyft")} className="btn-ghost shrink-0">
                Conoce Ziplyft
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-noir py-20 lg:py-24">
          <div className="container-site">
            <Reveal>
              <span className="eyebrow text-gold">{categoryTitle}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-light uppercase text-cream lg:text-4xl">
                {ui.relatedTitle}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r, i) => (
                <Reveal as="div" key={r.slug} delay={i * 0.06}>
                  <Link
                    href={localePath(locale, `/services/${r.slug}`)}
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

      <ConsultCTA locale={locale} />
    </>
  );
}
