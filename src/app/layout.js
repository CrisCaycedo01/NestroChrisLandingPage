import {GoogleTagManager} from "@next/third-parties/google";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "https://nestro-chris-landing-page.vercel.app";
const title = "Chris Wine | Vinos para compartir momentos extraordinarios";
const description = "Conoce Chris Wine: una propuesta de vino para cenas, regalos y celebraciones. Descubre nuestra historia y recibe novedades sobre la próxima experiencia de compra.";

export const metadata = {
  title,
  description,
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  openGraph: { title, description, siteName: "Chris Wine", locale: "es_CO", type: "website", ...(siteUrl ? { url: "/" } : {}) },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({children}) {
  return <html lang="es"><body>{children}<GoogleTagManager gtmId="GTM-M66T557B" /></body></html>;
}
