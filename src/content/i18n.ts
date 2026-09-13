/**
 * Locale resolver for the bilingual site.
 *
 * English lives at the root ("/about"); Spanish lives under "/es" ("/es/about").
 * Components accept an optional `locale` prop (default "en"); the English render
 * path is byte-identical to before, so nothing about the English site changes.
 */
import * as en from "@/content/site";
import * as es from "@/content/site.es";

export type Locale = "en" | "es";
export const locales: Locale[] = ["en", "es"];

/** Content bundle (business, nav, serviceCategories, bios, testimonials, ...). */
export function getSite(locale: Locale) {
  return locale === "es" ? es : en;
}

/** Prefix an internal href for the active locale ("/about" -> "/es/about"). */
export function localePath(locale: Locale, href: string): string {
  if (locale !== "es") return href;
  if (!href.startsWith("/")) return href; // external / anchors handled by caller
  if (href === "/") return "/es";
  return `/es${href}`;
}

/** Hardcoded UI strings. English values match the current site exactly. */
type UIStrings = {
  bookConsult: string; callUs: string; call: string; explore: string;
  servicesLabel: string; visit: string; contactLabel: string; hoursLabel: string;
  privacyPolicy: string; allRightsReserved: string; brandLine: string;
  heroLine1: string; heroLine2: string; heroLine3: string; heroSubtitle: string;
  exploreServices: string; whatWeDo: string; surgicalArtistry: string; allServices: string;
  whyJiya: string; whyJiyaHeading: string; ourTeam: string; meetTeam: string; meet: string;
  realResults: string; beforeAfter: string; viewGallery: string; resultsVary: string;
  patientStories: string; inTheirWords: string; onYouTube: string; followDrJindal: string;
  subscribeYouTube: string; followAlong: string; beginJourney: string; consultHeading: string;
  consultSubtitle: string; memberOf: string; aboutJiya: string; ourStory: string;
  ourPhilosophy: string; ourServices: string; servicesIntro: string; galleryTitle: string;
  galleryIntro: string; theProcedure: string; commonQuestions: string; watch: string;
  explainedSuffix: string; relatedTitle: string; bookConsultation: string;
  contactHeroBody: string; quickQuestion: string; askAnything: string; inquiryBody: string;
  seeResults: string; socialBody: string; scroll: string;
  shortsEyebrow: string; shortsHeading: string; watchOnYt: string;
  subscribeDrJindal: string;
  ncoEyebrow: string; ncoHeadline: string; ncoBody: string; ncoCta: string;
  askQuestion: string;
};

const uiEn: UIStrings = {
  bookConsult: "Book a Consultation",
  callUs: "Call Us",
  call: "Call",
  explore: "Explore",
  servicesLabel: "Services",
  visit: "Visit",
  contactLabel: "Contact",
  hoursLabel: "Hours",
  privacyPolicy: "Privacy Policy",
  allRightsReserved: "All rights reserved",
  brandLine: "Surgical Artistry · Regenerative Care",
  heroLine1: "Look better.",
  heroLine2: "See better.",
  heroLine3: "Feel better.",
  heroSubtitle:
    "Luxury facial cosmetic surgery & regenerative care from oculofacial surgeon Dr. Sumeet Jindal",
  exploreServices: "Explore Services",
  whatWeDo: "What We Do",
  surgicalArtistry: "Surgical artistry & regenerative care",
  allServices: "All Services",
  whyJiya: "Why JIYA",
  whyJiyaHeading: "The same hospitality & customized care, at every stage",
  ourTeam: "Our Team",
  meetTeam: "Meet the team behind JIYA",
  meet: "Meet",
  realResults: "Real Results",
  beforeAfter: "Before & After",
  viewGallery: "View the Gallery",
  resultsVary: "Actual JIYA patients · Individual results vary",
  patientStories: "Patient Stories",
  inTheirWords: "In their words",
  onYouTube: "On YouTube",
  followDrJindal: "Follow Dr. Jindal",
  subscribeYouTube: "Subscribe on YouTube",
  followAlong: "Follow Along",
  beginJourney: "Begin Your Journey",
  consultHeading: "Refined, natural, undeniably you",
  consultSubtitle:
    "Schedule a consultation with Dr. Jindal to design your personalized plan",
  memberOf: "Member of",
  aboutJiya: "About JIYA",
  ourStory: "Our Story",
  ourPhilosophy: "Our Philosophy",
  ourServices: "Our Services",
  servicesIntro:
    "Refined surgical and non-surgical care, organized by area. Explore what we offer and book a consultation to build your personalized plan.",
  galleryTitle: "Before & After",
  galleryIntro:
    "Real JIYA patients. Explore results by area, and book a consultation to discuss what's realistic for you.",
  theProcedure: "The Procedure",
  commonQuestions: "Common Questions",
  watch: "Watch",
  explainedSuffix: "explained",
  relatedTitle: "You might also consider",
  bookConsultation: "Book a Consultation",
  contactHeroBody:
    "Begin your journey with Dr. Jindal. Complete the form below and our team will reach out to schedule your private consultation.",
  quickQuestion: "Quick Question?",
  askAnything: "Ask us anything",
  inquiryBody:
    "Not ready to book yet? Send us a quick note about a procedure, pricing, or scheduling and our team will reply, no email app required.",
  seeResults: "See the results for yourself",
  socialBody:
    "Follow JIYA for daily before-and-afters, procedure walk-throughs, and patient stories, especially on Instagram.",
  scroll: "Scroll",
  shortsEyebrow: "Latest Shorts",
  shortsHeading: "See us in action",
  watchOnYt: "Watch on YouTube",
  subscribeDrJindal: "Subscribe To Dr. Jindal On YouTube",
  ncoEyebrow: "Our Sister Practice",
  ncoHeadline: "NCO Eye Center",
  ncoBody:
    "JIYA and NCO Eye Center come from the same practice, founded by Dr. Sumeet Jindal. NCO handles the vision side: cataract surgery, lens replacement, ICL, LASIK, and keratoconus care, with operating rooms in the building instead of a hospital. Same Brier Creek address, one suite over.",
  ncoCta: "Visit NCO Eye Center",
  askQuestion: "Ask a question",
};

const uiEs: UIStrings = {
  bookConsult: "Reserva una Consulta",
  callUs: "Llámanos",
  call: "Llama al",
  explore: "Explorar",
  servicesLabel: "Servicios",
  visit: "Visítanos",
  contactLabel: "Contacto",
  hoursLabel: "Horario",
  privacyPolicy: "Política de Privacidad",
  allRightsReserved: "Todos los derechos reservados",
  brandLine: "Arte Quirúrgico · Cuidado Regenerativo",
  heroLine1: "Luce mejor.",
  heroLine2: "Ve mejor.",
  heroLine3: "Siéntete mejor.",
  heroSubtitle:
    "Cirugía estética facial de lujo y cuidado regenerativo, del cirujano oculofacial Dr. Sumeet Jindal",
  exploreServices: "Ver Servicios",
  whatWeDo: "Lo Que Hacemos",
  surgicalArtistry: "Arte quirúrgico y cuidado regenerativo",
  allServices: "Todos los Servicios",
  whyJiya: "Por Qué JIYA",
  whyJiyaHeading: "La misma hospitalidad y atención personalizada, en cada etapa",
  ourTeam: "Nuestro Equipo",
  meetTeam: "Conoce al equipo de JIYA",
  meet: "Conoce a",
  realResults: "Resultados Reales",
  beforeAfter: "Antes y Después",
  viewGallery: "Ver la Galería",
  resultsVary: "Pacientes reales de JIYA · Los resultados individuales varían",
  patientStories: "Historias de Pacientes",
  inTheirWords: "En sus palabras",
  onYouTube: "En YouTube",
  followDrJindal: "Sigue al Dr. Jindal",
  subscribeYouTube: "Suscríbete en YouTube",
  followAlong: "Síguenos",
  beginJourney: "Comienza tu Proceso",
  consultHeading: "Refinada, natural, inconfundiblemente tú",
  consultSubtitle:
    "Agenda una consulta con el Dr. Jindal para diseñar tu plan personalizado",
  memberOf: "Miembro de",
  aboutJiya: "Sobre JIYA",
  ourStory: "Nuestra Historia",
  ourPhilosophy: "Nuestra Filosofía",
  ourServices: "Nuestros Servicios",
  servicesIntro:
    "Cuidado quirúrgico y no quirúrgico refinado, organizado por área. Explora lo que ofrecemos y reserva una consulta para crear tu plan personalizado.",
  galleryTitle: "Antes y Después",
  galleryIntro:
    "Pacientes reales de JIYA. Explora los resultados por área y reserva una consulta para conversar sobre lo que es realista para ti.",
  theProcedure: "El Procedimiento",
  commonQuestions: "Preguntas Frecuentes",
  watch: "Ver",
  explainedSuffix: "explicado",
  relatedTitle: "También podrías considerar",
  bookConsultation: "Reserva una Consulta",
  contactHeroBody:
    "Comienza tu proceso con el Dr. Jindal. Completa el formulario y nuestro equipo se comunicará contigo para agendar tu consulta privada.",
  quickQuestion: "¿Tienes una Pregunta?",
  askAnything: "Pregúntanos lo que sea",
  inquiryBody:
    "¿Aún no quieres reservar? Envíanos una nota rápida sobre un procedimiento, precios u horarios y nuestro equipo te responderá, sin necesidad de abrir tu correo.",
  seeResults: "Míralo por ti misma",
  socialBody:
    "Sigue a JIYA para ver antes y después a diario, explicaciones de procedimientos e historias de pacientes, sobre todo en Instagram.",
  scroll: "Scroll",
  shortsEyebrow: "Últimos Shorts",
  shortsHeading: "Míranos en acción",
  watchOnYt: "Ver en YouTube",
  subscribeDrJindal: "Suscríbete al Dr. Jindal en YouTube",
  ncoEyebrow: "Nuestra Marca Hermana",
  ncoHeadline: "NCO Eye Center",
  ncoBody:
    "JIYA y NCO Eye Center pertenecen al mismo grupo médico, fundado por el Dr. Sumeet Jindal. NCO se encarga de la visión: cirugía de cataratas, reemplazo de cristalino, ICL, LASIK y queratocono, con quirófanos propios en el edificio, no en un hospital. Mismo edificio en Brier Creek, una suite más allá.",
  ncoCta: "Visitar NCO Eye Center",
  askQuestion: "Hacer una pregunta",
};

export type UI = UIStrings;

export function getUI(locale: Locale): UI {
  return locale === "es" ? uiEs : uiEn;
}
