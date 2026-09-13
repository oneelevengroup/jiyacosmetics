import Header from "@/components/Header";
import Footer from "@/components/Footer";
// SocialBand (Instagram feed band) temporarily removed pending the feed widget.
// Re-add <SocialBand /> above <Footer /> to restore it.

/** Layout for the main marketing site, includes the global header and footer. */
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
