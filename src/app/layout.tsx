import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { IntroOverlay } from "@/components/IntroOverlay";
import { VexurCalendarProvider } from "@/components/vexur/VexurCalendarProvider";
import { siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { vexurCalendarConfig } from "@/lib/vexur-calendar";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.rating}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "buyer's agent",
    "buyer's agency",
    "buyers agent Australia",
    "buyers agent Gosford",
    "buyers agent Central Coast",
    "off-market property",
    "property investment",
    "first home buyer",
    "Amir Thapa Magaranti",
    "Ether Property Hub",
  ],
  authors: [{ name: siteConfig.contact, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLM-readable site summary" }],
    },
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.rating}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: siteImages.hero,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — buyer's agency Australia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.rating}`,
    description: siteConfig.description,
    images: [siteImages.hero],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href={vexurCalendarConfig.embedOrigin} crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        <IntroOverlay />
        <VexurCalendarProvider>{children}</VexurCalendarProvider>
      </body>
    </html>
  );
}
