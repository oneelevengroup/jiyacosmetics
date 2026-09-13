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
import NcoBand from "@/components/home/NcoBand";

export const metadata: Metadata = {
  description:
    "JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration in Raleigh, NC. Look better, see better, feel better. Refined blepharoplasty, facelift, and regenerative care from Dr. Sumeet Jindal and team.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroBand />
      <CredibilityStrip />
      <SurgeonsIntro />
      <ServicesOverview />
      <Highlights />
      <ResultsTeaser />
      <Testimonials />
      <ShortsFeed />
      <ConsultCTA />
      <NcoBand />
    </>
  );
}
