import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Layout for the main marketing site — includes the global header and footer. */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
