export default function sitemap() {
  const siteUrl = process.env.SITE_URL || "https://nestro-chris-landing-page.vercel.app";
  return siteUrl ? [{ url: new URL("/", siteUrl).href }] : [];
}
