/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholders ship as local SVGs in /public/images (trusted, first-party).
    // Real photos (JPG/PNG/WebP) added later are optimized normally.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // The old site served the bleph landing page with a .html extension; the
      // new build only has the extensionless route. Preserve inbound links/ads.
      {
        source: "/blepharoplasty-special.html",
        destination: "/blepharoplasty-special",
        permanent: true,
      },
      // Old jiyacosmetic.com blepharoplasty service URL -> new upper-bleph page.
      {
        source: "/services/blepharoplasty-raleigh",
        destination: "/services/upper-blepharoplasty",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
