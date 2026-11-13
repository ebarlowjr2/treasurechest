import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { BUSINESS, DEFAULT_DESCRIPTION, SITE_URL } from "./site-config";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mobile Bar & Catering in Alabama | Treasure Chest",
    template: "%s | Treasure Chest",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: BUSINESS.name,
  keywords: [
    "mobile bar Alabama",
    "mobile bar service Alabama",
    "bartending service Alabama",
    "event bar rental Alabama",
    "charcuterie bar Alabama",
    "grazing table Alabama",
    "cigar bar for events Alabama",
    "wedding bar service Alabama",
    "corporate event catering Alabama",
    "food truck catering Alabama",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: BUSINESS.name,
    title: "Mobile Bar & Catering in Alabama | Treasure Chest",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/hero.jpg",
        alt: "The Treasure Chest mobile bar trailer in Alabama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Bar & Catering in Alabama | Treasure Chest",
    description: DEFAULT_DESCRIPTION,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "US-AL",
    "geo.placename": "Alabama",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
