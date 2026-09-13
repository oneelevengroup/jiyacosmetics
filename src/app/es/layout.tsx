import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialBand from "@/components/SocialBand";

/** Layout for the Spanish (/es) site, mirrors the English site chrome. */
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="es">
      <Header locale="es" />
      <main>{children}</main>
      <SocialBand locale="es" />
      <Footer locale="es" />
    </div>
  );
}
