import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SEO } from "./lib/seo";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: "North Himalayan Traders | Himalayan Salt Exporter",
    template: "%s | North Himalayan Traders",
  },
  description:
    "Trusted Himalayan salt exporter from Pakistan for USA and Canada buyers, offering bulk edible, de-icing, and livestock salt with reliable global B2B supply.",
  keywords: [
    "Himalayan salt exporter Pakistan",
    "bulk Himalayan salt supplier USA",
    "Himalayan salt supplier Canada",
    "de-icing salt bulk supplier",
    "pink salt wholesaler",
    "livestock salt lick exporter",
    "industrial salt export business",
  ],
  openGraph: {
    title: "North Himalayan Traders | Himalayan Salt Exporter",
    description:
      "Premium Himalayan salt exporter supplying bulk edible salt, de-icing salt, and salt licks to USA, Canada, and international B2B markets.",
    url: SEO.siteUrl,
    siteName: SEO.siteName,
    images: [
      {
        url: SEO.defaultImage,
        width: 1200,
        height: 630,
        alt: "North Himalayan Traders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "North Himalayan Traders | Himalayan Salt Exporter",
    description:
      "Bulk Himalayan salt supplier for USA, Canada, and global buyers with consistent quality, export-ready packaging, and dependable shipping.",
    images: [SEO.defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icon.png", sizes: "512x512" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar is fixed and transparent, so content can scroll behind it */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
