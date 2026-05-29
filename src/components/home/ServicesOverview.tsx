"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { serviceCategories } from "@/content/site";

/**
 * Procedure index as an elegant accordion — uppercase tracked labels, hairline
 * dividers, and a circular "+" that expands to reveal procedures. Directly
 * echoes the service list on the inspiration site.
 */
export default function ServicesOverview() {
  const [openId, setOpenId] = useState<string | null>(serviceCategories[0]?.id ?? null);

  return (
    <section className="bg-noir py-24 lg:py-36">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">What We Do</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-2xl font-display text-display-md font-light uppercase text-cream">
                Surgical artistry &amp; regenerative care
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/services" className="btn-ghost shrink-0">
              All Services
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-cream/15">
          {serviceCategories.map((cat, i) => {
            const open = openId === cat.id;
            return (
              <Reveal as="div" key={cat.id} delay={i * 0.04}>
                <div className="border-b border-cream/15">
                  <button
                    onClick={() => setOpenId(open ? null : cat.id)}
                    aria-expanded={open}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left lg:py-9"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-display text-xl text-blush/70">0{i + 1}</span>
                      <span
                        className={`font-sans text-lg uppercase tracking-label transition-colors duration-500 lg:text-2xl ${
                          open ? "text-cream" : "text-cream/65 group-hover:text-cream"
                        }`}
                      >
                        {cat.title}
                      </span>
                    </span>

                    {/* Circular +/- toggle */}
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/30 transition-colors duration-500 group-hover:border-blush">
                      <span className="absolute h-px w-3.5 bg-cream/70" />
                      <span
                        className={`absolute h-3.5 w-px bg-cream/70 transition-transform duration-500 ease-lux ${
                          open ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-9 lg:grid-cols-12 lg:gap-12">
                          <p className="font-sans text-sm font-light leading-relaxed text-cream/60 lg:col-span-5">
                            {cat.blurb}
                          </p>
                          <ul className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:col-span-7">
                            {cat.procedures.map((p) => (
                              <li key={p.slug}>
                                <Link
                                  href={`/services#${cat.id}`}
                                  className="link-underline font-sans text-sm text-cream/85 hover:text-cream"
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
