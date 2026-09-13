import Header from "@/components/Header";
import Footer from "@/components/Footer";
// SocialBand (Instagram feed band) temporarily removed pending the feed widget.

/** Layout for the Spanish (/es) site, mirrors the English site chrome. */
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="es">
      <Header locale="es" />
      <main>{children}</main>
      <Footer locale="es" />
    </div>
  );
}
