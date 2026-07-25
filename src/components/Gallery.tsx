"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryCategories, galleryItems } from "@/content/gallery";

/**
 * Filterable Before & After gallery. Real cases show their before/after images;
 * placeholder cases show a tasteful "coming soon" state so the page reads well
 * before all photos are supplied.
 */
export default function Gallery() {
  const [active, setActive] = useState("all");
  const items =
    active === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-cream/15 pb-6">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`label transition-colors duration-300 ${
              active === cat.id ? "text-gold" : "text-cream/55 hover:text-cream"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.figure
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-cream/15 bg-noir">
                {!item.placeholder && item.before && item.after ? (
                  <div className="grid h-full grid-cols-2">
                    <div className="relative">
                      <Image src={item.before} alt={`${item.procedure} before`} fill sizes="20vw" className="object-cover" />
                      <span className="absolute bottom-2 left-2 label text-[0.6rem] text-cream/80">Before</span>
                    </div>
                    <div className="relative">
                      <Image src={item.after} alt={`${item.procedure} after`} fill sizes="20vw" className="object-cover" />
                      <span className="absolute bottom-2 left-2 label text-[0.6rem] text-gold">After</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center text-center">
                    <div>
                      <span className="label text-cream/40">Before / After</span>
                      <p className="mt-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-cream/25">
                        Coming soon
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <figcaption className="mt-3 font-sans text-xs uppercase tracking-label text-cream/60">
                {item.procedure}
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
