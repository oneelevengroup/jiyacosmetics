/**
 * Central content source for the JIYA site.
 *
 * All copy is sourced from the current jiyacosmetic.com site. Edit text here -
 * components read from this file so content stays separate from layout.
 * Obvious typos may be corrected, but messaging is preserved.
 */

export const business = {
  name: "JIYA",
  fullName: "JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration",
  tagline: "Look better. See better. Feel better.",
  founderTitle: "Jindal Institute for Youthful Aging",
  phone: "(919) 929-6006",
  phoneHref: "tel:+19199296006",
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
    youtube: "https://www.youtube.com/@drjindalraleigh",
  },
};

/**
 * Social feed + YouTube config.
 *
 * INSTAGRAM LIVE FEED: paste the embed URL from a feed widget provider
 * (Behold / LightWidget / SnapWidget) into `instagramEmbedUrl`. Until then a
 * tasteful placeholder + follow links are shown.
 *
 * YOUTUBE: set `youtube.channelUrl` (Subscribe link) and `youtube.featuredVideoId`
 * (the id from a youtube.com/watch?v=ID link) to activate the homepage section.
 */
export const socialFeed = {
  instagramHandle: "@jiyaraleigh",
  instagramEmbedUrl: "", // e.g. https://cdn.lightwidget.com/widgets/<id>.html
  youtube: {
    channelUrl: "https://www.youtube.com/@drjindalraleigh",
    featuredVideoId: "", // e.g. "dQw4w9WgXcQ", add a featured video id to embed

    blurb:
      "Dr. Jindal shares procedure walk-throughs, before-and-afters, and eyelid & facial rejuvenation insights on YouTube.",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  // "Specials" is intentionally omitted while there are no active offers.
  // Re-add { label: "Specials", href: "/specials" } when a promotion is live.
];

/**
 * Service categories and procedures, sourced from jiyacosmetic.com/services.
 * `slug` values map to /services/[slug] detail pages. A procedure may set an
 * `href` override to link elsewhere (e.g. Ziplyft -> its standalone landing page);
 * href entries do not generate a /services/[slug] page.
 */
export type Procedure = { name: string; slug: string; href?: string };
export type ServiceCategory = {
  id: string;
  title: string;
  blurb: string;
  procedures: Procedure[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "eyelid",
    title: "Eye",
    // Oculofacial is the priority per client (upper bleph, ptosis, lower bleph).
    blurb:
      "Refined oculofacial surgery to brighten tired eyes, restore the eyelid, and open the field of vision.",
    procedures: [
      { name: "Upper Blepharoplasty", slug: "upper-blepharoplasty" },
      { name: "Ptosis Repair", slug: "eyelid-ptosis" },
      { name: "Lower Blepharoplasty", slug: "lower-blepharoplasty" },
      { name: "Ziplift", slug: "ziplyft", href: "/services/ziplyft" },
      { name: "Eyelid Retraction Repair", slug: "eyelid-retraction-repair" },
      { name: "Canthoplasty / Canthopexy", slug: "canthoplasty-canthopexy" },
      { name: "Mid Facelift", slug: "midface-lift" },
      { name: "Brow Lift", slug: "brow-lift" },
      { name: "Endoscopic Brow / Midface Lift", slug: "endoscopic-brow-midface" },
      // NCO LINK PENDING (#10): once New Century Ophthalmology page URLs are
      // confirmed, add `href: "<NCO url>"` to the three vision items below so
      // they link out (href entries are excluded from /services/[slug]).
      { name: "Refractive Lens Exchange", slug: "refractive-lens-exchange" },
      { name: "Premium Cataract Surgery", slug: "premium-cataract-surgery" },
      { name: "Laser Vision Correction", slug: "laser-vision-correction" },
      { name: "Dry Eye Treatment", slug: "dry-eye" },
    ],
  },
  {
    id: "face",
    title: "Face",
    blurb:
      "Natural, long-lasting facial rejuvenation, from deep plane facelift to neck, lip, and fat grafting.",
    procedures: [
      { name: "Deep Plane Facelift", slug: "deep-plane-facelift" },
      { name: "Deep Neck Lift", slug: "deep-neck-lift" },
      { name: "Lip Lift", slug: "lip-lift" },
      { name: "Revision Facelift", slug: "revision-facelift" },
      { name: "Fat Grafting", slug: "fat-grafting" },
    ],
  },
  {
    id: "hair",
    title: "Hair",
    blurb:
      "From robotic transplantation to regenerative therapies, restore a fuller, natural hairline.",
    // AD-POLICY FLAG (#14): the regenerative hair labels below are placeholders.
    // Client asked us to review Google/ad-policy language before publishing the
    // exact wording for PRP / stem cell / exosome hair claims. Do not run these
    // in paid ads until wording is confirmed.
    procedures: [
      { name: "ARTAS Robotic Hair Restoration", slug: "artas-robotic" },
      { name: "NeoGraft", slug: "neograft" },
      { name: "Scalp Micropigmentation", slug: "scalp-micropigmentation" },
      { name: "PRP Hair Therapy", slug: "prp-hair-therapy" },
      { name: "Stem Cell Hair Therapy", slug: "nanofat-stem-cell" },
      { name: "Exosome Hair Therapy", slug: "exosome-hair-therapy" },
    ],
  },
  {
    id: "nonsurgical",
    title: "Non-Surgical",
    blurb:
      "Regenerative, minimally invasive treatments that refresh and restore with little to no downtime.",
    procedures: [
      { name: "IPL Photofacial", slug: "ipl" },
      { name: "Fillers", slug: "fillers" },
      { name: "Biosimilars", slug: "biosimilars" },
      { name: "Neurotoxins", slug: "neurotoxins" },
      { name: "Microneedling", slug: "microneedling" },
      { name: "Regenerative Aesthetics", slug: "regenerative-aesthetics" },
      { name: "Facials", slug: "facials" },
      { name: "Laser Resurfacing", slug: "laser-resurfacing" },
    ],
  },
];

/** Homepage philosophy / about teaser copy (from About Us + Home). */
export const philosophy = {
  eyebrow: "The JIYA Philosophy",
  heading: "Aging gracefully, on your terms.",
  body: [
    "JIYA is a homegrown facial cosmetic surgery practice that blends traditional anti-aging treatments with regenerative medicine. Founded by accomplished oculofacial cosmetic surgeon Dr. Sumeet Jindal, a Raleigh native, the Jindal Institute for Youthful Aging was built to bring the best treatments in the world back home.",
    "Aging should not be something that causes stress, but rather something you can do gracefully, with or without facial cosmetic enhancements. Our goal is to make your outside look more like your inside, with luxury, high-quality surgical and non-surgical procedures performed on your terms.",
  ],
};

/** About page content (from jiyacosmetic.com). */
export const about = {
  intro:
    "JIYA is a homegrown facial cosmetic surgery practice that blends traditional anti-aging treatments with regenerative medicine, built to bring the best treatments in the world home to Raleigh.",
  story: {
    heading: "A homegrown practice, world-class care",
    body: [
      "The Jindal Institute for Youthful Aging was founded by accomplished oculofacial cosmetic surgeon Dr. Sumeet Jindal, a Raleigh-area native who built JIYA specifically to bring the best treatments in the world back to his hometown. The practice is located in the bustling Brier Creek neighborhood of Raleigh.",
      "From your first visit, you can expect top-quality customer service, compassionate and personalized care, and some of the best expertise in anti-aging procedures from a premier Raleigh oculoplastic surgeon.",
    ],
  },
  philosophy: {
    heading: "Aging gracefully, on your terms",
    body: [
      "Aging should not be something that causes stress, but rather something you can do gracefully, with or without facial cosmetic enhancements. Our goal is to make your outside look more like your inside, with luxury, high-quality surgical and non-surgical procedures performed on your terms.",
      "Our philosophy is holistic: nutrition, skin science, and regenerative medicine complement every surgical plan. Dr. Jindal provides each patient with customized pre- and post-operative nutrition and healing protocols to achieve the best results possible.",
      "As one of the leading PRP specialists in Raleigh, Dr. Jindal prefers regenerative techniques like PRP and nanofat whenever they can deliver the ideal result, turning to surgery only when it is truly the best path.",
    ],
  },
};

/** Two-up surgeons intro (homepage). Full bios live on the About page. */
export const surgeons = [
  {
    name: "Dr. Sumeet Jindal",
    role: "Founder · Oculofacial Surgeon",
    blurb:
      "Board-certified ophthalmologist and JIYA's founder, specializing in refined eyelid and facial rejuvenation with a regenerative approach.",
    imageKey: "home.doctor",
    meetHref: "/about#dr-jindal",
    bookLabel: "Book with Dr. Jindal",
  },
  {
    name: "Dr. Samantha Prabakaran",
    role: "Oculofacial Surgeon",
    blurb:
      "Board-certified ophthalmologist with oculofacial fellowship training, focused on natural eyelid and brow rejuvenation.",
    imageKey: "provider.prabakaran",
    meetHref: "/about#dr-prabakaran",
    bookLabel: "Book with Dr. Prabakaran",
  },
];

/** Dr. Samantha Prabakaran bio (second surgeon). */
export const drPrabakaran = {
  eyebrow: "Oculofacial Surgeon",
  name: "Dr. Samantha Prabakaran",
  bio: [
    "Samantha Prabakaran, MD is a board-certified ophthalmologist with specialized training in oculofacial cosmetic surgery. She completed her ophthalmology residency at Virginia Commonwealth University, a high-volume surgical program, building a strong foundation in complex eyelid and ophthalmic procedures.",
    "Her practice focuses on advanced techniques for upper blepharoplasty, ptosis repair, cosmetic lower blepharoplasty, eye-bag removal, brow lifting, and reconstructive eyelid surgery.",
    "Dr. Prabakaran trained in the same surgical program as JIYA founder Dr. Sumeet Jindal and continues to refine her craft alongside him, delivering the same refined, natural results JIYA is known for.",
  ],
  cta: { label: "Book with Dr. Prabakaran", href: "/contact" },
};

/** Dr. Jindal bio + credentials (from jiyacosmetic.com). */
export const doctor = {
  eyebrow: "Meet Your Surgeon",
  name: "Dr. Sumeet Jindal",
  bio: [
    "Sumeet Jindal, MD, MBA is a board-certified ophthalmologist with advanced fellowship training in oculofacial cosmetic surgery. His expertise in eye microsurgery and cosmetic and reconstructive eyelid and facial procedures allows him to perform some of the most advanced and refined techniques in modern eyelid and facial plastic surgery.",
    "Dr. Jindal specializes in endoscopic facial and brow lifting using tiny, well-hidden incisions, enabling natural rejuvenation of the upper and midface with minimal scarring and downtime. He is also highly sought after for complex revision cases, including eyelid retraction and correction of prior unsuccessful or “botched” surgeries.",
    "Dr. Jindal was accepted into medical school directly out of high school through the Early Assurance Program at East Carolina University. He completed his ophthalmology residency in Richmond, Virginia, where he performed a record number of surgical cases, gaining extensive operative experience early in his career. He then further refined his skills through advanced fellowship training at a large, multi-location private practice in Florida before returning to Raleigh, North Carolina, where he now practices.",
  ],
  cta: { label: "Book a Consultation", href: "/contact" },
};

/**
 * Professional memberships shown as a credentials row.
 * `logo` is an optional path to a white/transparent logo in
 * /public/images/credentials/. When set, the row shows the logo instead of the
 * name. Until then, the name renders as elegant text. (See PLACEHOLDERS.md.)
 */
export const credentials: { name: string; slug: string; logo?: string }[] = [
  { name: "American Board of Facial Cosmetic Surgery", slug: "abfcs", logo: "/logo-abfcs.png" },
  { name: "The American Board of Laser Surgery", slug: "abls", logo: "/american-board-of-laser-surgery.jpg" },
  { name: "American Academy of Cosmetic Surgery", slug: "aacs", logo: "/amer_-reii2p6ah801cll4s4sv2u5oq704rvy07hzf2few1w.jpg" },
  { name: "Koniver Wellness", slug: "koniver", logo: "/koniver_logo_white-reii2r1z81pdc8r8i09qail440h3f1itv90l9iirqo.png" },
  { name: "American Board of Ophthalmology", slug: "abo", logo: "/Media-2-1.png" },
];

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
    body: "A leader in PRP, stem cells, and nanofat, preferring regenerative techniques and reserving surgery for when it delivers the ideal result.",
  },
  {
    title: "Holistic Healing",
    body: "Nutrition, skin science, and customized pre- and post-operative protocols complement every surgical plan.",
  },
  {
    title: "Personalized Care",
    body: "Compassionate, customized treatment at every stage, the same hospitality whether you choose injections or a facelift.",
  },
];

export const homeSpecial = {
  eyebrow: "Current Special",
  title: "Mini Facelift",
  detail: "Starting at $4,900, now 20% off.",
  cta: { label: "View all specials", href: "/specials" },
};

/** Short positioning band shown right after the hero. */
export const homeIntro = {
  heading: "The art of aging gracefully",
  body: "JIYA blends refined oculofacial surgery with regenerative medicine, nutrition, skin science, PRP and nanofat, for results that look natural and feel entirely like you.",
  cta: { label: "Our Philosophy", href: "/about" },
};

/** Slim credibility / trust signals. */
export const credibility = [
  "Board-Certified Ophthalmologist",
  "Oculofacial Fellowship-Trained",
  "Regenerative Medicine",
  "Raleigh · Brier Creek",
];

/**
 * Patient testimonials. PLACEHOLDER quotes, replace with real, approved
 * reviews (Google / RealSelf, etc.). Keep attribution privacy-appropriate.
 */
export const testimonials = [
  {
    quote:
      "From my first visit I felt genuinely cared for. Dr. Jindal listened, and my results look completely natural, like a refreshed version of me.",
    name: "JIYA Patient",
    detail: "Upper Blepharoplasty",
  },
  {
    quote:
      "The expertise and attention to detail are unmatched. I finally look as vibrant as I feel.",
    name: "JIYA Patient",
    detail: "Deep Plane Facelift",
  },
  {
    quote:
      "A true luxury experience from consultation to recovery. I couldn't be happier with my results.",
    name: "JIYA Patient",
    detail: "Morpheus8",
  },
];
