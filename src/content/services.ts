import { serviceCategories } from "./site";

/**
 * Per-procedure content for the /services/[slug] detail pages.
 *
 * The procedure list + slugs live in site.ts (serviceCategories); this file adds
 * the long-form content for each. Descriptions are written to be accurate and
 * modest — PLEASE have the practice review/refine the medical copy before launch.
 * Any procedure without an entry here falls back to a sensible generic template.
 */

/** Recurring brand line — weave anywhere. */
export const brandLine = "Surgical Artistry · Regenerative Care";

export type ProcedureContent = {
  /** One-line summary used in the hero + cards. */
  summary: string;
  /** Body paragraphs for the overview. */
  body: string[];
  /** Short bullet points (benefits / highlights). */
  benefits: string[];
};

export const procedureContent: Record<string, ProcedureContent> = {
  // ---- Eyelid ----
  "upper-blepharoplasty": {
    summary:
      "Removes excess skin and tissue from the upper eyelids for a refreshed, more open and youthful gaze.",
    body: [
      "Upper blepharoplasty removes the extra skin and tissue that can collect on the upper eyelids with age, restoring a brighter, well-rested appearance. In certain cases it can also improve peripheral vision and the overall function of the eyes.",
      "As a fellowship-trained oculofacial surgeon, Dr. Jindal performs the procedure through the natural eyelid crease, keeping incisions hidden and results natural.",
    ],
    benefits: [
      "Hidden incisions within the natural eyelid crease",
      "Brighter, more rested appearance",
      "Can improve obstructed peripheral vision",
      "Performed by a fellowship-trained oculofacial surgeon",
    ],
  },
  "lower-blepharoplasty": {
    summary:
      "Addresses under-eye bags, puffiness and excess skin for a smoother, rejuvenated lower lid.",
    body: [
      "Lower blepharoplasty refreshes tired-looking eyes by removing or repositioning the fat that causes under-eye bags and smoothing excess lower-lid skin.",
      "Dr. Jindal favors techniques that preserve a natural lid contour and avoid the hollowed or pulled-down look that can follow less refined approaches.",
    ],
    benefits: [
      "Reduces under-eye bags and puffiness",
      "Smooths excess lower-lid skin",
      "Natural, refreshed contour",
      "Refined oculoplastic technique",
    ],
  },
  "eyelid-ptosis": {
    summary:
      "Tightens or repositions the muscle that lifts the eyelid to correct droop and restore an open gaze.",
    body: [
      "Eyelid ptosis repair tightens or repositions the small muscle (the levator) that lifts the upper lid, correcting drooping that can affect both appearance and vision.",
      "Dr. Jindal's microsurgical training allows precise adjustment for symmetric, natural-looking results.",
    ],
    benefits: [
      "Corrects a drooping upper eyelid",
      "Can restore an obstructed field of vision",
      "Precise, symmetric results",
      "Microsurgical expertise",
    ],
  },
  canthoplasty: {
    summary:
      "Reshapes and repositions the outer corner of the eye for a lifted, more youthful 'fox-eye' shape.",
    body: [
      "Canthoplasty alters the shape and position of the outer corner of the eye to achieve a more lifted, almond-shaped look, and is also used reconstructively to support a lower lid that has lost tone.",
      "The procedure is tailored to your anatomy and aesthetic goals for a balanced, natural result.",
    ],
    benefits: [
      "Lifted, almond-shaped eye contour",
      "Restores lower-lid support",
      "Both aesthetic and reconstructive uses",
      "Customized to your anatomy",
    ],
  },
  canthopexy: {
    summary:
      "A tightening of the outer eye corner that reinforces and subtly elevates the lower lid.",
    body: [
      "Canthopexy is a more conservative tightening of the outer corner of the eye, often performed alongside lower blepharoplasty to reinforce and gently elevate the lower lid.",
      "It supports lid position and helps maintain a youthful, rested eye shape.",
    ],
    benefits: [
      "Reinforces lower-lid position",
      "Subtle, natural elevation",
      "Often paired with blepharoplasty",
      "Conservative, supportive technique",
    ],
  },
  "ectropion-repair": {
    summary:
      "Corrects an outward-turning lower eyelid to restore comfort, protection and a natural lid position.",
    body: [
      "Ectropion is an outward turning of the lower eyelid that can cause irritation, tearing and exposure of the eye. Repair restores the lid to its proper position against the eye.",
      "Dr. Jindal's oculoplastic background makes him especially well suited to functional eyelid reconstruction.",
    ],
    benefits: [
      "Restores proper lower-lid position",
      "Relieves irritation and tearing",
      "Protects the surface of the eye",
      "Reconstructive oculoplastic expertise",
    ],
  },

  // ---- Facial ----
  facelift: {
    summary:
      "Lifts and re-drapes the deeper facial tissues to restore a natural, youthful contour to the face and neck.",
    body: [
      "A facelift addresses sagging and laxity in the lower face and neck by repositioning the deeper tissues — not just the skin — for a result that looks natural and lasts.",
      "Dr. Jindal combines surgical artistry with regenerative techniques to support healing and the most natural-looking outcome.",
    ],
    benefits: [
      "Lifts the lower face and jawline",
      "Repositions deeper tissue, not just skin",
      "Natural, long-lasting result",
      "Supported by regenerative healing protocols",
    ],
  },
  "deep-plane-facelift": {
    summary:
      "An advanced facelift that releases and lifts the deeper facial layer for the most natural, durable result.",
    body: [
      "The deep plane facelift works beneath the SMAS layer to release and reposition the deeper structures of the face, restoring midface volume and a defined jawline without a pulled appearance.",
      "It is among the most advanced facial rejuvenation techniques and a signature of Dr. Jindal's refined approach.",
    ],
    benefits: [
      "Restores midface volume naturally",
      "Defines the jawline and neck",
      "Avoids a tight, 'pulled' look",
      "Long-lasting, advanced technique",
    ],
  },
  "mini-facelift": {
    summary:
      "A shorter-incision lift that refreshes the lower face and jawline with less downtime.",
    body: [
      "The mini facelift targets early jowling and laxity in the lower face through shorter incisions, offering a refreshed contour with a quicker recovery than a full facelift.",
      "It's an excellent option for patients seeking a subtle, natural lift earlier in the aging process.",
    ],
    benefits: [
      "Refreshes the lower face and jawline",
      "Shorter incisions, less downtime",
      "Subtle, natural result",
      "Ideal for early signs of aging",
    ],
  },
  "vertical-rejuvenation": {
    summary:
      "JIYA Vertical Rejuvenation — a comprehensive, naturally vertical lift of the full face.",
    body: [
      "JIYA Vertical Rejuvenation is Dr. Jindal's comprehensive approach to full facial rejuvenation, lifting the tissues in a natural, vertical direction to recreate youthful proportions.",
      "It blends surgical precision with regenerative medicine for a refreshed yet unmistakably natural result.",
    ],
    benefits: [
      "Comprehensive full-face rejuvenation",
      "Natural vertical lift vector",
      "Youthful facial proportions",
      "Surgical artistry + regenerative care",
    ],
  },
  necklift: {
    summary:
      "Tightens loose neck skin and muscle to restore a smooth, defined jawline and neck.",
    body: [
      "A necklift addresses banding, fullness and loose skin in the neck, restoring a smooth, defined contour from jawline to collarbone.",
      "It is frequently performed with a facelift for a balanced, harmonious result.",
    ],
    benefits: [
      "Smooths and defines the neck",
      "Reduces banding and fullness",
      "Sharper jawline contour",
      "Pairs naturally with a facelift",
    ],
  },
  facetite: {
    summary:
      "Minimally invasive radiofrequency contouring that tightens skin and melts fat without major surgery.",
    body: [
      "FaceTite uses radiofrequency energy delivered beneath the skin to contour and tighten the lower face and neck with only a tiny incision.",
      "It bridges the gap between non-surgical treatments and a surgical lift, with meaningful tightening and minimal downtime.",
    ],
    benefits: [
      "Tightens skin with minimal incisions",
      "Contours the lower face and neck",
      "Less downtime than surgery",
      "Great between non-surgical and surgical options",
    ],
  },
  "midface-lift": {
    summary:
      "Repositions the cheek fat pads upward to restore midface volume and a lifted, youthful contour.",
    body: [
      "The cheek (midface) lift repositions the fat pads of the cheeks into a more youthful position and removes any excess skin, restoring fullness beneath the eyes and over the cheekbones.",
      "It addresses the flattening and hollowing that often accompany aging in the midface.",
    ],
    benefits: [
      "Restores cheek and midface volume",
      "Softens under-eye hollows",
      "Lifted, youthful contour",
      "Customized repositioning",
    ],
  },
  "facial-fat-transfer": {
    summary:
      "Uses your own purified fat to restore volume and refresh areas that have hollowed with age.",
    body: [
      "Facial fat transfer (grafting) harvests your own fat, purifies it, and re-injects it to restore lost volume in the cheeks, temples, under-eyes and more.",
      "Because it uses your own tissue — rich in regenerative cells — results look and feel natural and can improve skin quality over time.",
    ],
    benefits: [
      "Natural volume using your own fat",
      "Refreshes hollow areas",
      "Regenerative benefits for skin quality",
      "Long-lasting results",
    ],
  },
  "facial-liposuction": {
    summary:
      "Refines the jawline and neck by removing small, stubborn pockets of facial fat.",
    body: [
      "Facial liposuction removes localized fat beneath the chin and along the jawline to sculpt a sharper, more defined profile.",
      "It's often combined with skin-tightening for a comprehensive contouring result.",
    ],
    benefits: [
      "Sharper jawline and profile",
      "Targets stubborn submental fat",
      "Often paired with skin tightening",
      "Refined, sculpted result",
    ],
  },
  "brow-lift": {
    summary:
      "Elevates the brow using tiny, well-hidden incisions for a refreshed, more expressive upper face.",
    body: [
      "A brow lift raises a heavy or sagging brow to open the eyes and soften forehead lines. Dr. Jindal specializes in endoscopic brow and forehead lifting using tiny, well-hidden incisions.",
      "The result is natural rejuvenation of the upper face with minimal scarring and downtime.",
    ],
    benefits: [
      "Lifts heavy or sagging brows",
      "Tiny, well-hidden incisions",
      "Opens and refreshes the eyes",
      "Minimal scarring and downtime",
    ],
  },
  "forehead-reduction": {
    summary:
      "Reduces the height of the forehead to bring the hairline and facial proportions into balance.",
    body: [
      "Forehead reduction (hairline lowering) shortens an elevated forehead to create more balanced facial proportions, often in a single procedure.",
      "It can be combined with a brow lift for harmonious upper-face rejuvenation.",
    ],
    benefits: [
      "Balances facial proportions",
      "Lowers a high hairline",
      "Can combine with a brow lift",
      "Natural-looking hairline",
    ],
  },
  "lip-lift": {
    summary:
      "A bullhorn lip lift shortens the space between nose and lip to reveal a fuller, more youthful smile.",
    body: [
      "The bullhorn lip lift shortens an elongated philtrum (the space between the nose and upper lip), revealing more of the upper lip and a softer, more youthful smile — without fillers.",
      "Incisions are hidden at the base of the nose for a discreet result.",
    ],
    benefits: [
      "Reveals more of the upper lip",
      "Youthful, natural fullness",
      "Hidden incision at the nose base",
      "A permanent alternative to filler",
    ],
  },

  // ---- Skin & Non-Surgical ----
  morpheus8: {
    summary:
      "Radiofrequency microneedling that tightens skin, builds collagen and refines texture with no surgery.",
    body: [
      "Morpheus8 is a non-surgical, non-invasive radiofrequency microneedling treatment that encourages skin tightening, collagen production and cellular regeneration.",
      "It improves skin texture, tone and firmness across the face and body with minimal downtime.",
    ],
    benefits: [
      "Tightens skin and builds collagen",
      "Refines texture and tone",
      "Non-surgical, minimal downtime",
      "Face and body",
    ],
  },
  "liquid-facelift": {
    summary:
      "A non-surgical refresh using dermal fillers and neurotoxins to restore volume and smooth lines.",
    body: [
      "A liquid facelift uses a tailored combination of dermal fillers and neurotoxins to restore volume, soften lines and subtly lift the face — all without surgery.",
      "Dr. Jindal's anatomical precision delivers balanced, natural-looking enhancement.",
    ],
    benefits: [
      "Restores volume and softens lines",
      "No surgery, no downtime",
      "Subtle, balanced enhancement",
      "Tailored to your features",
    ],
  },
  "laser-treatments": {
    summary:
      "Advanced laser therapies that resurface skin, even tone and restore a healthy, luminous glow.",
    body: [
      "Our laser treatments address texture, pigmentation, fine lines and overall skin quality, stimulating renewal for clearer, more radiant skin.",
      "Treatments are customized to your skin and goals for safe, effective results.",
    ],
    benefits: [
      "Resurfaces and renews skin",
      "Evens tone and pigmentation",
      "Softens fine lines",
      "Customized to your skin",
    ],
  },
  "ultraclear-scar-treatment": {
    summary:
      "UltraClear laser therapy that improves the appearance, texture and color of surgical and other scars.",
    body: [
      "UltraClear is an advanced cold-fiber laser used to improve the texture, color and overall appearance of surgical and traumatic scars.",
      "It promotes smoother, healthier-looking skin with a gentle, controlled treatment.",
    ],
    benefits: [
      "Improves scar texture and color",
      "Advanced cold-fiber laser",
      "Gentle, controlled treatment",
      "Smoother, healthier skin",
    ],
  },
  "iv-treatments": {
    summary:
      "Customized IV therapy that supports hydration, recovery and overall wellness from the inside out.",
    body: [
      "Our IV treatments deliver hydration, vitamins and nutrients directly into the bloodstream to support recovery, energy and overall wellness — part of JIYA's holistic, regenerative philosophy.",
      "Protocols are tailored to your needs, including pre- and post-procedure support.",
    ],
    benefits: [
      "Hydration and nutrient support",
      "Aids recovery and energy",
      "Part of a holistic protocol",
      "Tailored to your needs",
    ],
  },

  // ---- Hair Restoration ----
  "artas-robotic": {
    summary:
      "State-of-the-art robotic hair restoration for precise, natural and minimally invasive results.",
    body: [
      "ARTAS robotic hair restoration uses AI-guided precision to harvest and place follicles for a natural hairline with no linear scar and minimal downtime.",
      "Dr. Jindal pairs advanced technology with an artistic eye for hairline design.",
    ],
    benefits: [
      "AI-guided robotic precision",
      "Natural hairline design",
      "No linear scar",
      "Minimal downtime",
    ],
  },
  neograft: {
    summary:
      "Automated follicular unit extraction (FUE) for natural, scarless hair restoration.",
    body: [
      "NeoGraft is an advanced, automated FUE system that gently harvests and transplants individual follicles, restoring fuller hair without a linear scar.",
      "It's a comfortable, effective option for both men and women.",
    ],
    benefits: [
      "Automated FUE technique",
      "No linear scar",
      "Natural-looking density",
      "For men and women",
    ],
  },
  "nanofat-stem-cell": {
    summary:
      "Regenerative nanofat and stem-cell therapy that revitalizes thinning hair and the scalp.",
    body: [
      "Nanofat stem cell restoration harnesses the regenerative cells in your own fat to revitalize follicles and improve scalp health — a non-surgical approach to thinning hair.",
      "It reflects Dr. Jindal's leadership in regenerative medicine.",
    ],
    benefits: [
      "Uses your own regenerative cells",
      "Non-surgical hair revitalization",
      "Improves scalp health",
      "Leader in regenerative medicine",
    ],
  },
  "prf-therapy": {
    summary:
      "Platelet-rich fibrin therapy that uses your body's own growth factors to strengthen hair.",
    body: [
      "Platelet Rich Fibrin (PRF) therapy concentrates the growth factors in your own blood and delivers them to the scalp to strengthen follicles and encourage fuller growth.",
      "It's a natural, regenerative treatment with no foreign materials.",
    ],
    benefits: [
      "Uses your own growth factors",
      "Strengthens existing follicles",
      "Natural and regenerative",
      "No foreign materials",
    ],
  },
  "scalp-micropigmentation": {
    summary:
      "Precision pigment application that creates the look of fuller hair and a defined hairline.",
    body: [
      "Scalp micropigmentation applies tiny, layered pigment deposits to replicate the appearance of natural hair follicles, adding density and defining the hairline.",
      "It's a non-surgical finishing touch that complements other restoration options.",
    ],
    benefits: [
      "Creates the look of fuller hair",
      "Defines the hairline",
      "Non-surgical",
      "Complements other treatments",
    ],
  },
};

/** Category image keys for hero/detail imagery (swappable placeholders). */
export const categoryImageKey: Record<string, string> = {
  eyelid: "service.eyelid",
  face: "service.face",
  nonsurgical: "service.nonsurgical",
  hair: "service.hair",
};

export type ResolvedProcedure = {
  slug: string;
  name: string;
  categoryId: string;
  categoryTitle: string;
  content: ProcedureContent;
};

/** Flattened list of every procedure with its category + content. */
export function getAllProcedures(): ResolvedProcedure[] {
  return serviceCategories.flatMap((cat) =>
    cat.procedures.map((p) => ({
      slug: p.slug,
      name: p.name,
      categoryId: cat.id,
      categoryTitle: cat.title,
      content:
        procedureContent[p.slug] ?? {
          summary: `${p.name} at JIYA — surgical artistry and regenerative care from Dr. Sumeet Jindal in Raleigh, NC.`,
          body: [
            `${p.name} is offered at JIYA Eyelid & Facial Cosmetic Surgery. Detailed information for this procedure is coming soon — please contact us to learn whether it's right for you.`,
          ],
          benefits: [
            "Personalized consultation",
            "Performed by Dr. Sumeet Jindal",
            "Holistic, regenerative approach",
          ],
        },
    }))
  );
}

export function getProcedure(slug: string): ResolvedProcedure | undefined {
  return getAllProcedures().find((p) => p.slug === slug);
}

export function relatedProcedures(slug: string, categoryId: string): ResolvedProcedure[] {
  return getAllProcedures()
    .filter((p) => p.categoryId === categoryId && p.slug !== slug)
    .slice(0, 4);
}
