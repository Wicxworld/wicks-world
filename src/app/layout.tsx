import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { JsonLd } from "@/components/site/JsonLd";
import { SkipLink } from "@/components/site/SkipLink";
import { getSiteUrl, site } from "@/content/site";
import { organizationJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...buildMetadata(),
  applicationName: site.brand,
  keywords: [
    "Wick's World",
    "W's Creative Studios Ltd",
    "Lagos creative studio",
    "Lagos production house",
    "photography Lagos",
    "cinematography Nigeria",
    "commercial content production Lagos",
    "video editing Lagos",
    "creative direction Nigeria",
  ],
  icons: {
    icon: "/brand/wicks-world-logo.png",
    apple: "/brand/wicks-world-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showAnalytics = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "true";

  return (
    <html
      lang="en-NG"
      className={`${geist.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd data={organizationJsonLd()} />
        <SkipLink />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {showAnalytics ? <Analytics /> : null}
      </body>
    </html>
  );
}
