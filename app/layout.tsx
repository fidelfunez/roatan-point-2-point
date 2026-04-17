import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import SiteJsonLd from "@/components/SiteJsonLd";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const defaultTitle =
  "Roatán Point 2 Point | El evento ciclo-turístico internacional más grande de Honduras";
const defaultDescription =
  "Roatán Point 2 Point: fiesta deportiva internacional de ciclismo MTB y Ruta que cruza la isla de punta a punta. Décima edición, turismo y causas benéficas en las Islas de la Bahía, Honduras.";
const ogImage = "/photos/section-covers/roatan-point-2-point-faq-section-cover.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Roatán Point 2 Point",
  },
  description: defaultDescription,
  applicationName: "Roatán Point 2 Point",
  authors: [{ name: "Roatán Point 2 Point", url: siteUrl }],
  creator: "Roatán Point 2 Point",
  publisher: "Roatán Point 2 Point",
  category: "sports",
  keywords: [
    "Roatán Point 2 Point",
    "P2P",
    "ciclismo Roatán",
    "MTB Honduras",
    "ruta ciclismo",
    "Islas de la Bahía",
    "West Bay",
    "carrera bicicleta",
    "evento ciclismo",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: "/",
    siteName: "Roatán Point 2 Point",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        width: 2560,
        height: 1440,
        alt: "Roatán Point 2 Point — evento de ciclismo en Roatán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${sourceSans3.variable} font-sans antialiased`}>
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
