import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IntroBand from "@/components/home/IntroBand";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import SurgeonsIntro from "@/components/home/SurgeonsIntro";
import ServicesOverview from "@/components/home/ServicesOverview";
import Highlights from "@/components/home/Highlights";
import ResultsTeaser from "@/components/home/ResultsTeaser";
import Testimonials from "@/components/home/Testimonials";
import ShortsFeed from "@/components/home/ShortsFeed";
import ConsultCTA from "@/components/home/ConsultCTA";

export const metadata: Metadata = {
  description:
    "JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration en Raleigh, NC. Cirugía de párpados, lifting facial y cuidado regenerativo del Dr. Sumeet Jindal y su equipo.",
};

export default function HomeEs() {
  return (
    <>
      <Hero locale="es" />
      <IntroBand locale="es" />
      <CredibilityStrip locale="es" />
      <SurgeonsIntro locale="es" />
      <ServicesOverview locale="es" />
      <Highlights locale="es" />
      <ResultsTeaser locale="es" />
      <Testimonials locale="es" />
      <ShortsFeed locale="es" />
      <ConsultCTA locale="es" />
    </>
  );
}
