/**
 * Spanish (Latin American / neutral) mirror of site.ts.
 *
 * Same export names and shapes as site.ts, with string VALUES translated.
 * Slugs, hrefs, imageKeys, URLs, phone/email, proper nouns and brand names
 * are kept byte-identical to the English source.
 */

import type { Procedure, ServiceCategory } from "@/content/site";

export const business = {
  name: "JIYA",
  fullName: "JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration",
  tagline: "Luce mejor. Ve mejor. Siéntete mejor.",
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
  hours: "Lunes a viernes, 8:00am a 5:00pm",
  hoursNote: "Fuera de horario y fines de semana con cita previa.",
  social: {
    instagram: "https://www.instagram.com/jiyaraleigh/",
    facebook: "https://www.facebook.com/jiya.cosmeticraleigh/",
    youtube: "https://www.youtube.com/@drjindalraleigh",
  },
};

/**
 * Social feed + YouTube config.
 */
export const socialFeed = {
  instagramHandle: "@jiyaraleigh",
  instagramEmbedUrl: "",
  youtube: {
    channelUrl: "https://www.youtube.com/@drjindalraleigh",
    featuredVideoId: "",

    blurb:
      "El Dr. Jindal comparte recorridos de procedimientos, resultados de antes y después, y consejos sobre rejuvenecimiento de párpados y rostro en YouTube.",
  },
};

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/about" },
  { label: "Servicios", href: "/services" },
  { label: "Galería", href: "/gallery" },
  { label: "Contacto", href: "/contact" },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "eyelid",
    title: "Ojos",
    blurb:
      "Cirugía oculofacial refinada para iluminar los ojos cansados, restaurar el párpado y ampliar el campo visual.",
    procedures: [
      { name: "Blefaroplastia Superior", slug: "upper-blepharoplasty" },
      { name: "Corrección de Ptosis", slug: "eyelid-ptosis" },
      { name: "Blefaroplastia Inferior", slug: "lower-blepharoplasty" },
      { name: "Ziplyft", slug: "ziplyft", href: "/services/ziplyft" },
      { name: "Corrección de Retracción Palpebral", slug: "eyelid-retraction-repair" },
      { name: "Cantoplastia / Cantopexia", slug: "canthoplasty-canthopexy" },
      { name: "Lifting del Tercio Medio", slug: "midface-lift" },
      { name: "Lifting de Cejas", slug: "brow-lift" },
      { name: "Lifting Endoscópico de Cejas / Tercio Medio", slug: "endoscopic-brow-midface" },
      {
        name: "Intercambio de Lente Refractivo",
        slug: "refractive-lens-exchange",
        href: "https://www.ncophth.com/lp/premium-refractive-lens-exchange/",
      },
      {
        name: "Cirugía de Catarata Premium",
        slug: "premium-cataract-surgery",
        href: "https://www.ncophth.com/",
      },
      {
        name: "Corrección Visual con Láser",
        slug: "laser-vision-correction",
        href: "https://www.ncophth.com/",
      },
      { name: "Tratamiento de Ojo Seco", slug: "dry-eye" },
    ],
  },
  {
    id: "face",
    title: "Rostro",
    blurb:
      "Rejuvenecimiento facial natural y duradero, desde el lifting facial de plano profundo hasta el cuello, el labio y el injerto de grasa.",
    procedures: [
      { name: "Lifting Facial de Plano Profundo", slug: "deep-plane-facelift" },
      { name: "Lifting Profundo de Cuello", slug: "deep-neck-lift" },
      { name: "Lifting de Labio", slug: "lip-lift" },
      { name: "Lifting Facial de Revisión", slug: "revision-facelift" },
      { name: "Injerto de Grasa", slug: "fat-grafting" },
    ],
  },
  {
    id: "hair",
    title: "Cabello",
    blurb:
      "Desde el trasplante robótico hasta las terapias regenerativas, restaura una línea de cabello más abundante y natural.",
    procedures: [
      { name: "Restauración Capilar Robótica ARTAS", slug: "artas-robotic" },
      { name: "NeoGraft", slug: "neograft" },
      { name: "Micropigmentación del Cuero Cabelludo", slug: "scalp-micropigmentation" },
      { name: "Terapia Capilar con PRP", slug: "prp-hair-therapy" },
      { name: "Terapia Capilar con Células Madre", slug: "nanofat-stem-cell" },
      { name: "Terapia Capilar con Exosomas", slug: "exosome-hair-therapy" },
    ],
  },
  {
    id: "nonsurgical",
    title: "No Quirúrgico",
    blurb:
      "Tratamientos regenerativos y mínimamente invasivos que refrescan y restauran con poco o ningún tiempo de recuperación.",
    procedures: [
      { name: "Fotofacial IPL", slug: "ipl" },
      { name: "Rellenos", slug: "fillers" },
      { name: "Biosimilares", slug: "biosimilars" },
      { name: "Neurotoxinas", slug: "neurotoxins" },
      { name: "Microagujas", slug: "microneedling" },
      { name: "Estética Regenerativa", slug: "regenerative-aesthetics" },
      { name: "Faciales", slug: "facials" },
      { name: "Rejuvenecimiento con Láser", slug: "laser-resurfacing" },
    ],
  },
];

/** Homepage philosophy / about teaser copy. */
export const philosophy = {
  eyebrow: "La Filosofía JIYA",
  heading: "Envejecer con gracia, en tus propios términos.",
  body: [
    "JIYA es una consulta local de cirugía cosmética facial que combina los tratamientos tradicionales antienvejecimiento con la medicina regenerativa. Fundada por el reconocido cirujano cosmético oculofacial Dr. Sumeet Jindal, originario de Raleigh, el Jindal Institute for Youthful Aging nació para traer los mejores tratamientos del mundo de vuelta a casa.",
    "Envejecer no debería ser motivo de estrés, sino algo que puedes vivir con gracia, con o sin realces cosméticos faciales. Nuestro objetivo es que tu exterior se parezca más a tu interior, con procedimientos quirúrgicos y no quirúrgicos de lujo y alta calidad, realizados en tus propios términos.",
  ],
};

/** About page content. */
export const about = {
  intro:
    "JIYA es una consulta local de cirugía cosmética facial que combina los tratamientos tradicionales antienvejecimiento con la medicina regenerativa, creada para traer los mejores tratamientos del mundo a casa, a Raleigh.",
  story: {
    heading: "Una consulta local, atención de clase mundial",
    body: [
      "El Jindal Institute for Youthful Aging fue fundado por el reconocido cirujano cosmético oculofacial Dr. Sumeet Jindal, originario del área de Raleigh, quien creó JIYA específicamente para traer los mejores tratamientos del mundo de vuelta a su ciudad natal. La consulta se encuentra en el animado vecindario de Brier Creek en Raleigh.",
      "Desde tu primera visita, puedes esperar un servicio al cliente de primera calidad, una atención compasiva y personalizada, y una de las mejores experiencias en procedimientos antienvejecimiento de la mano de un destacado cirujano oculoplástico de Raleigh.",
    ],
  },
  philosophy: {
    heading: "Envejecer con gracia, en tus propios términos",
    body: [
      "Envejecer no debería ser motivo de estrés, sino algo que puedes vivir con gracia, con o sin realces cosméticos faciales. Nuestro objetivo es que tu exterior se parezca más a tu interior, con procedimientos quirúrgicos y no quirúrgicos de lujo y alta calidad, realizados en tus propios términos.",
      "Nuestra filosofía es holística: la nutrición, la ciencia de la piel y la medicina regenerativa complementan cada plan quirúrgico. El Dr. Jindal ofrece a cada paciente protocolos personalizados de nutrición y recuperación pre y postoperatorios para lograr los mejores resultados posibles.",
      "Como uno de los principales especialistas en PRP de Raleigh, el Dr. Jindal prefiere las técnicas regenerativas como el PRP y el nanofat siempre que puedan brindar el resultado ideal, recurriendo a la cirugía solo cuando es verdaderamente el mejor camino.",
    ],
  },
};

/** Team intro (homepage). */
export const surgeons = [
  {
    name: "Dr. Sumeet Jindal",
    role: "Fundador · Cirujano Oculofacial",
    blurb:
      "Oftalmólogo certificado y fundador de JIYA, especializado en el rejuvenecimiento refinado de párpados y rostro con un enfoque regenerativo.",
    imageKey: "home.doctor",
    meetHref: "/about#dr-jindal",
    meetLabel: "Dr. J",
    bookLabel: "Reserva con Dr. Jindal",
  },
  {
    name: "Dr. Samantha Prabakaran",
    role: "Cirujana Oculofacial",
    blurb:
      "Oftalmóloga certificada con formación de fellowship en cirugía oculofacial, enfocada en el rejuvenecimiento natural de párpados y cejas.",
    imageKey: "provider.prabakaran",
    meetHref: "/about#dr-prabakaran",
    meetLabel: "Dr. P",
    bookLabel: "Reserva con Dr. Prabakaran",
  },
  {
    name: "Katie Gambino, PA-C",
    role: "Asociada Médica",
    blurb:
      "Asociada médica del Dr. Jindal, junto a los pacientes quirúrgicos en cada etapa y enfocada en un rejuvenecimiento facial natural y conservador en el lado no quirúrgico.",
    imageKey: "provider.katie",
    meetHref: "/about#katie-gambino",
    meetLabel: "Katie",
    bookLabel: "Reserva con Katie",
  },
];

/** Dr. Samantha Prabakaran bio (second surgeon). */
export const drPrabakaran = {
  eyebrow: "Cirujana Oculofacial",
  name: "Dr. Samantha Prabakaran",
  bio: [
    "Samantha Prabakaran, MD es una oftalmóloga certificada con formación especializada en cirugía cosmética oculofacial. Completó su residencia en oftalmología en Virginia Commonwealth University, un programa quirúrgico de alto volumen, donde construyó una sólida base en procedimientos complejos de párpado y oftálmicos.",
    "Su práctica se enfoca en técnicas avanzadas de blefaroplastia superior, corrección de ptosis, blefaroplastia inferior cosmética, eliminación de bolsas de los ojos, lifting de cejas y cirugía reconstructiva de párpado.",
    "La Dra. Prabakaran se formó en el mismo programa quirúrgico que el fundador de JIYA, el Dr. Sumeet Jindal, y continúa perfeccionando su arte junto a él, ofreciendo los mismos resultados refinados y naturales por los que JIYA es reconocida.",
  ],
  cta: { label: "Reserva con Dr. Prabakaran", href: "/contact" },
};

/** Katie Gambino, PA-C bio (physician associate, surgical + non-surgical). */
export const katiePA = {
  eyebrow: "Asociada Médica",
  name: "Katie Gambino, PA-C",
  bio: [
    "Katie Gambino cree que una buena atención estética comienza con una respuesta honesta a una pregunta: ¿qué te dará realmente el resultado que deseas, una jeringa, un láser o un cirujano? Como trabaja en ambos lados de la consulta, no tiene motivo para inclinarte hacia ninguno.",
    "Como asociada médica del Dr. Sumeet Jindal, Katie acompaña a los pacientes quirúrgicos en cada etapa: la primera consulta, la evaluación preoperatoria, el quirófano y cada visita de seguimiento. La persona que ayuda a planificar tu cirugía es la misma que está a tu lado cuando ocurre.",
    "En el lado no quirúrgico, se enfoca en el rejuvenecimiento facial con neuromoduladores, rellenos dérmicos, bioestimuladores, PRP y PRF, microagujas y tratamientos de piel basados en energía. Sus inyecciones son precisas y conservadoras, fundamentadas en una formación avanzada en anatomía facial a nivel quirúrgico. El objetivo es un rostro que luzca descansado, equilibrado e inconfundiblemente tuyo. Katie estableció una de las bases de pacientes de inyectables más activas de la consulta durante su tiempo en su med spa anterior, impulsada principalmente por recomendaciones de boca en boca y clientela recurrente.",
    "Durante tu consulta inicial con Katie, espera una conversación minuciosa, atenta y cuidadosa. Agenda tu consulta con Katie para determinar el plan de tratamiento ideal para tus necesidades.",
  ],
  cta: { label: "Reserva con Katie", href: "/contact" },
};

/** Dr. Jindal bio + credentials. */
export const doctor = {
  eyebrow: "Conoce a Tu Cirujano",
  name: "Dr. Sumeet Jindal",
  bio: [
    "Sumeet Jindal, MD, MBA es un oftalmólogo certificado con formación avanzada de fellowship en cirugía cosmética oculofacial. Su experiencia en microcirugía ocular y en procedimientos cosméticos y reconstructivos de párpado y rostro le permite realizar algunas de las técnicas más avanzadas y refinadas de la cirugía plástica moderna de párpado y rostro.",
    "El Dr. Jindal se especializa en el lifting endoscópico facial y de cejas mediante incisiones diminutas y bien disimuladas, logrando un rejuvenecimiento natural del tercio superior y medio del rostro con mínima cicatrización y tiempo de recuperación. También es muy solicitado para casos complejos de revisión, incluyendo la retracción palpebral y la corrección de cirugías previas fallidas o mal realizadas.",
    "El Dr. Jindal fue aceptado en la escuela de medicina directamente al terminar la preparatoria a través del Early Assurance Program de East Carolina University. Completó su residencia en oftalmología en Richmond, Virginia, donde realizó un número récord de casos quirúrgicos, adquiriendo amplia experiencia operatoria desde temprano en su carrera. Luego perfeccionó aún más sus habilidades con formación avanzada de fellowship en una gran consulta privada de múltiples sedes en Florida, antes de regresar a Raleigh, Carolina del Norte, donde ahora ejerce.",
  ],
  cta: { label: "Reserva una Consulta", href: "/contact" },
};

/**
 * Professional memberships shown as a credentials row.
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

/** Practice highlights / why JIYA. */
export const highlights = [
  {
    title: "Experiencia Oculofacial",
    body: "Oftalmólogo certificado con formación avanzada de fellowship en cirugía cosmética oculofacial y microcirugía ocular.",
  },
  {
    title: "Medicina Regenerativa",
    body: "Un líder en PRP, células madre y nanofat, que prefiere las técnicas regenerativas y reserva la cirugía para cuando brinda el resultado ideal.",
  },
  {
    title: "Sanación Holística",
    body: "La nutrición, la ciencia de la piel y los protocolos personalizados pre y postoperatorios complementan cada plan quirúrgico.",
  },
  {
    title: "Atención Personalizada",
    body: "Tratamiento compasivo y personalizado en cada etapa, la misma hospitalidad ya sea que elijas inyecciones o un lifting facial.",
  },
];

/** Short positioning band shown right after the hero. */
export const homeIntro = {
  heading: "El arte de envejecer con gracia",
  body: "JIYA combina la cirugía oculofacial refinada con la medicina regenerativa, la nutrición, la ciencia de la piel, el PRP y el nanofat, para lograr resultados que lucen naturales y se sienten completamente tuyos.",
  cta: { label: "Nuestra Filosofía", href: "/about" },
};

/** Slim credibility / trust signals. */
export const credibility = [
  "Oftalmólogo Certificado",
  "Formación de Fellowship Oculofacial",
  "Medicina Regenerativa",
  "Raleigh · Brier Creek",
];

/**
 * Real, verbatim patient reviews from the practice's Google profile.
 */
export const testimonials = [
  {
    quote:
      "Quería recuperar la forma juvenil de mis ojos que tenía antes de los hijos y de los cambios de peso, y el Dr. J me dio exactamente lo que pedí. No podría estar más agradecida. Vuelvo a verme como yo misma.",
    name: "Victoria G.",
    detail: "Blefaroplastia Inferior · Google",
  },
  {
    quote:
      "Desde el momento en que cruzamos la puerta, nos sentimos genuinamente cuidados, escuchados y completamente cómodos. Su experiencia, profesionalismo, atención al detalle y trato con el paciente son verdaderamente excepcionales.",
    name: "Deanna P.",
    detail: "Blefaroplastia Superior · Google",
  },
  {
    quote:
      "Su consulta fue minuciosa e informativa, y nunca intentó venderme procedimientos de más. Es muy conservador y su trabajo es maravilloso, un verdadero perfeccionista. Si pudiera darle 10 estrellas, lo haría.",
    name: "Sue B.",
    detail: "Doble Certificación de Junta · Google",
  },
  {
    quote:
      "Katie, PA me hizo el relleno de labios. Me hizo sentir muy cómoda y escuchó exactamente lo que quería, gentil, conocedora y cuidadosa para que todo se viera natural. Salí con exactamente lo que esperaba.",
    name: "Shannon L.",
    detail: "Relleno de Labios con Katie, PA-C · Google",
  },
  {
    quote:
      "La Dra. P ha sido increíble desde la consulta hasta la cirugía y el seguimiento. No podría estar más feliz con mis resultados, mi hematoma fue mínimo y apenas perceptible a las tres semanas. La recomiendo mucho.",
    name: "Patricia E.",
    detail: "con Dr. Prabakaran · Google",
  },
  {
    quote:
      "Otros cirujanos insistían en opciones más costosas e invasivas, mientras que el equipo de JIYA logró el mismo resultado con menos costo y tiempo de recuperación. Excelente atención desde la videoconsulta gratuita hasta el procedimiento. 10/10 lo recomiendo.",
    name: "Glen W.",
    detail: "Reseña de Google",
  },
];

/** Hardcoded UI strings used across components (Spanish). */
export const ui: Record<string, string> = {
  bookConsult: "Reserva una Consulta",
  callUs: "Llámanos",
  allServices: "Todos los Servicios",
  viewGallery: "Ver la Galería",
  ourStory: "Nuestra Historia",
  ourPhilosophy: "Nuestra Filosofía",
  ourTeam: "Nuestro Equipo",
  meetTeam: "Conoce al equipo de JIYA",
  whatWeDo: "Lo Que Hacemos",
  surgicalArtistry: "Arte quirúrgico y cuidado regenerativo",
  realResults: "Resultados Reales",
  beforeAfter: "Antes y Después",
  patientStories: "Historias de Pacientes",
  inTheirWords: "En sus palabras",
  followAlong: "Síguenos",
  onYouTube: "En YouTube",
  followDrJindal: "Sigue al Dr. Jindal",
  subscribeYouTube: "Suscríbete en YouTube",
  meet: "Conoce a",
  explore: "Explorar",
  servicesLabel: "Servicios",
  visit: "Visítanos",
  contactLabel: "Contacto",
  hoursLabel: "Horario",
  privacyPolicy: "Política de Privacidad",
  allRightsReserved: "Todos los derechos reservados",
  theProcedure: "El Procedimiento",
  commonQuestions: "Preguntas Frecuentes",
  watch: "Ver",
  resultsVary: "Pacientes reales de JIYA · Los resultados individuales varían",
  bookConsultation: "Reserva una Consulta",
  quickQuestion: "¿Tienes una Pregunta?",
  askAnything: "Pregúntanos lo que sea",
  seeResults: "Míralo por ti misma",
};
