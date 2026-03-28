import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { OrganizationSchema } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hazier | SEO & Webdesign Agency - Meer Klanten via Google",
  description: "Professionele SEO en webdesign services. Meer klanten, meer groei, meer omzet. 50+ tevreden klanten, bewezen resultaten. Gratis SEO audit.",
  keywords: ["SEO", "webdesign", "digital marketing", "Google", "België", "Vlaanderen"],
  authors: [{ name: "Hazier" }],
  creator: "Hazier",
  publisher: "Hazier",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Hazier",
    title: "Hazier | SEO & Webdesign Agency",
    description: "Meer klanten, meer groei, meer omzet via professionele SEO en webdesign",
    url: "https://hazier.be",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hazier - SEO & Webdesign Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazier | SEO & Webdesign Agency",
    description: "Meer klanten, meer groei, meer omzet via professionele SEO en webdesign",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Ga naar inhoud
        </a>
        {children}
      </body>
    </html>
  );
}
