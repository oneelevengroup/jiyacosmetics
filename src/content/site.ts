/**
 * Central content source for the JIYA site.
 *
 * All copy is sourced from the current jiyacosmetic.com site. Edit text here —
 * components read from this file so content stays separate from layout.
 * Obvious typos may be corrected, but messaging is preserved.
 */

export const business = {
  name: "JIYA",
  fullName: "JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration",
  tagline: "Look better. See better. Feel better.",
  founderTitle: "Jindal Institute for Youthful Aging",
  phone: "(984) 275-3818",
  phoneHref: "tel:+19842753818",
  email: "info@jiyacosmetic.com",
  emailHref: "mailto:info@jiyacosmetic.com",
  address: {
    line1: "7901 ACC Blvd, Suite 201",
    city: "Raleigh",
    state: "NC",
    zip: "27617",
    neighborhood: "Brier Creek",
  },
  hours: "Monday – Friday, 8:00am – 5:00pm",
  hoursNote: "After hours and weekends by appointment.",
  social: {
    instagram: "https://www.instagram.com/jiyaraleigh/",
    facebook: "https://www.facebook.com/jiya.cosmeticraleigh/",
  },
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Specials", href: "/specials" },
  { label: "Contact", href: "/contact" },
];

/**
 * Service categories and procedures, sourced from jiyacosmetic.com/services.
 * `slug` values map to future /services/[slug] detail pages.
 */
export const serviceCategories = [
  {
    id: "eyelid",
    title: "Eyelid Surgery",
    blurb:
      "Refined oculoplastic techniques to brighten the eyes, restore function, and turn back the clock.",
    procedures: [
      { name: "Upper Blepharoplasty", slug: "upper-blepharoplasty" },
      { name: "Lower Blepharoplasty", slug: "lower-blepharoplasty" },
      { name: "Eyelid Ptosis Repair", slug: "eyelid-ptosis" },
      { name: "Canthoplasty", slug: "canthoplasty" },
      { name: "Canthopexy", slug: "canthopexy" },
      { name: "Ectropion Repair", slug: "ectropion-repair" },
    ],
  },
  {
    id: "face",
    title: "Facial Surgery",
    blurb:
      "Natural, long-lasting facial rejuvenation — from deep plane facelift to neck and midface.",
    procedures: [
      { name: "Facelift", slug: "facelift" },
      { name: "Deep Plane Facelift", slug: "deep-plane-facelift" },
      { name: "Mini Facelift", slug: "mini-facelift" },
      { name: "JIYA Vertical Rejuvenation", slug: "vertical-rejuvenation" },
      { name: "Necklift", slug: "necklift" },
      { name: "FaceTite", slug: "facetite" },
      { name: "Cheek / Midface Lift", slug: "midface-lift" },
      { name: "Facial Fat Transfer", slug: "facial-fat-transfer" },
      { name: "Facial Liposuction", slug: "facial-liposuction" },
      { name: "Brow Lift", slug: "brow-lift" },
      { name: "Forehead Reduction", slug: "forehead-reduction" },
      { name: "Bullhorn Lip Lift", slug: "lip-lift" },
    ],
  },
  {
    id: "nonsurgical",
    title: "Skin & Non-Surgical",
    blurb:
      "Regenerative, minimally invasive treatments that refresh and restore without downtime.",
    procedures: [
      { name: "Morpheus8", slug: "morpheus8" },
      { name: "Liquid Facelift", slug: "liquid-facelift" },
      { name: "Laser Treatments", slug: "laser-treatments" },
      { name: "UltraClear Scar Treatment", slug: "ultraclear-scar-treatment" },
      { name: "IV Treatments", slug: "iv-treatments" },
    ],
  },
  {
    id: "hair",
    title: "Hair Restoration",
    blurb:
      "From robotic transplantation to regenerative therapies, restore a fuller, natural hairline.",
    procedures: [
      { name: "ARTAS Robotic Hair Restoration", slug: "artas-robotic" },
      { name: "NeoGraft", slug: "neograft" },
      { name: "Nanofat Stem Cell Restoration", slug: "nanofat-stem-cell" },
      { name: "Platelet Rich Fibrin (PRF) Therapy", slug: "prf-therapy" },
      { name: "Scalp Micropigmentation", slug: "scalp-micropigmentation" },
    ],
  },
];

/** Homepage philosophy / about teaser copy (from About Us + Home). */
export const philosophy = {
  eyebrow: "The JIYA Philosophy",
  heading: "Aging gracefully, on your terms.",
  body: [
    "JIYA is a homegrown facial cosmetic surgery practice that blends traditional anti-aging treatments with regenerative medicine. Founded by accomplished oculofacial cosmetic surgeon Dr. Sumeet Jindal — a Raleigh native — the Jindal Institute for Youthful Aging was built to bring the best treatments in the world back home.",
    "Aging should not be something that causes stress, but rather something you can do gracefully, with or without facial cosmetic enhancements. Our goal is to make your outside look more like your inside, with luxury, high-quality surgical and non-surgical procedures performed on your terms.",
  ],
};

/** Featured services shown on the homepage. */
export const featuredServices = [
  "eyelid",
  "face",
  "nonsurgical",
  "hair",
] as const;

/** Practice highlights / why JIYA (from Home + About). */
export const highlights = [
  {
    title: "Oculofacial Expertise",
    body: "Board-certified ophthalmologist with advanced fellowship training in oculofacial cosmetic surgery and eye microsurgery.",
  },
  {
    title: "Regenerative Medicine",
    body: "A leader in PRP, stem cells, and nanofat — preferring regenerative techniques and reserving surgery for when it delivers the ideal result.",
  },
  {
    title: "Holistic Healing",
    body: "Nutrition, skin science, and customized pre- and post-operative protocols complement every surgical plan.",
  },
  {
    title: "Personalized Care",
    body: "Compassionate, customized treatment at every stage — the same hospitality whether you choose injections or a facelift.",
  },
];

export const homeSpecial = {
  eyebrow: "Current Special",
  title: "Mini Facelift",
  detail: "Starting at $4,900 — now 20% off.",
  cta: { label: "View all specials", href: "/specials" },
};
