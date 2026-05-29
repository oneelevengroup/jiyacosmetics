"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SiteImage from "@/components/SiteImage";
import Reveal from "@/components/Reveal";
import { serviceCategories } from "@/content/site";
import type { ImageKey } from "@/lib/images";

const categoryImage: Record<string, ImageKey> = {
  eyelid: "service.eyelid",
  face: "service.face",
  nonsurgical: "service.nonsurgical",
  hair: "service.hair",
};

/**
 * Editorial service index — large numbered rows that reveal an image on hover,
 * echoing the /service/face layout on the inspiration site.
 */
export default function ServicesOverview() {
  return (
    <section className="bg-sand py-24 lg:py-36">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">What We Do</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-2xl font-display text-display-md font-light text-ink">
                Surgical artistry & regenerative care.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/services" className="btn-ghost shrink-0">
              All Services
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-stone">
          {serviceCategories.map((cat, i) => (
            <Reveal as="div" key={cat.id} delay={i * 0.05}>
              <Link
                href={`/services#${cat.id}`}
                className="group relative grid grid-cols-12 items-center gap-4 border-b border-stone py-8 transition-colors duration-500 hover:bg-ivory/50 lg:py-10"
              >
                <span className="col-span-2 font-display text-2xl text-taupe lg:col-span-1">
                  0{i + 1}
                </span>

                <div className="col-span-10 lg:col-span-5">
                  <h3 className="font-display text-3xl font-light text-ink transition-transform duration-500 ease-lux group-hover:translate-x-2 lg:text-4xl">
                    {cat.title}
                  </h3>
                </div>

                <p className="col-span-12 max-w-md font-sans text-sm font-light leading-relaxed text-clay lg:col-span-5 lg:col-start-7">
                  {cat.blurb}
                </p>

                {/* Hover-reveal preview image (desktop) */}
                <motion.div
                  initial={false}
                  className="pointer-events-none absolute right-6 top-1/2 z-10 hidden h-40 w-56 -translate-y-1/2 overflow-hidden rounded-[2px] opacity-0 transition-all duration-500 ease-lux group-hover:opacity-100 lg:block"
                >
                  <SiteImage
                    imageKey={categoryImage[cat.id]}
                    fill
                    sizes="224px"
                    className="object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                  />
                </motion.div>

                {/* Arrow */}
                <span className="absolute right-6 top-1/2 hidden -translate-y-1/2 font-sans text-2xl text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-0">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
