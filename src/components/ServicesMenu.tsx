"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCategories } from "@/content/site";

/**
 * Desktop hover dropdown for "Services": a left column of the four categories;
 * hovering a category reveals its procedures (right column) so visitors can jump
 * directly to any procedure page. The trigger still links to the /services hub.
 */
export default function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(serviceCategories[0]?.id ?? "");

  const activeCat = serviceCategories.find((c) => c.id === active);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/services"
        className={`link-underline label transition-colors ${
          open ? "text-cream" : "text-cream/75 hover:text-cream"
        }`}
      >
        Services
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            // pt-5 keeps a hover "bridge" between the trigger and the panel
            className="absolute left-0 top-full z-50 pt-5"
          >
            <div className="flex overflow-hidden border border-cream/15 bg-noir/95 shadow-2xl backdrop-blur-md">
              {/* Categories */}
              <ul className="w-64 border-r border-cream/10 py-3">
                {serviceCategories.map((cat) => (
                  <li key={cat.id} onMouseEnter={() => setActive(cat.id)}>
                    <Link
                      href={`/services#${cat.id}`}
                      className={`flex items-center justify-between gap-4 px-6 py-3 label transition-colors duration-300 ${
                        active === cat.id
                          ? "bg-noir-2 text-gold"
                          : "text-cream/70 hover:text-cream"
                      }`}
                    >
                      {cat.title}
                      <span className="text-xs">→</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Procedures of the active category */}
              <div className="w-[28rem] p-7">
                {activeCat && (
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {activeCat.procedures.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={p.href ?? `/services/${p.slug}`}
                          className="link-underline font-sans text-[0.8rem] text-cream/75 hover:text-cream"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
