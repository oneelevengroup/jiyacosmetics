"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryCategories, galleryItems } from "@/content/gallery";
import Placeholder from "@/components/Placeholder";

/**
 * Filterable Before & After gallery. Combined before/after images (before on
 * top, after on bottom) render whole; separate pairs render side by side. Only
 * categories that actually have results are shown as filter tabs.
 */
export default function Gallery() {
  const [active, setActive] = useState("all");

  // Only show category tabs that have at least one item (plus "All").
  const populated = new Set(galleryItems.map((i) => i.category));
  const tabs = galleryCategories.filter(
    (c) => c.id === "all" || populated.has(c.id)
  );

  const items =
    active === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === active);

  return (
    <div>
      {/* Filter tabs */}
      {tabs.length > 2 && (
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-cream/15 pb-6">
          {tabs.map((cat) => (
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
      )}

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
              <div className="relative aspect-square w-full overflow-hidden border border-cream/15 bg-noir">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.procedure} before and after`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : !item.placeholder && item.before && item.after ? (
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
                  <Placeholder />
                )}
              </div>
              <figcaption className="mt-3 font-sans text-xs uppercase tracking-label text-cream/60">
                {item.procedure}
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-10 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-cream/45">
        Before (top) · After (bottom) · Individual results vary
      </p>
    </div>
  );
}
