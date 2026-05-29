import Hero from "@/components/home/Hero";
import MeetDoctor from "@/components/home/MeetDoctor";
import ServicesOverview from "@/components/home/ServicesOverview";
import Highlights from "@/components/home/Highlights";
import SpecialBanner from "@/components/home/SpecialBanner";
import ConsultCTA from "@/components/home/ConsultCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MeetDoctor />
      <ServicesOverview />
      <Highlights />
      <SpecialBanner />
      <ConsultCTA />
    </>
  );
}
