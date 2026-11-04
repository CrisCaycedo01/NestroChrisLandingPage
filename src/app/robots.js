export default function robots() {
  const siteUrl = process.env.SITE_URL || "https://nestro-chris-landing-page.vercel.app";
  return { rules: { userAgent: "*", allow: "/" }, ...(siteUrl ? { sitemap: new URL("/sitemap.xml", siteUrl).href } : {}) };
}
