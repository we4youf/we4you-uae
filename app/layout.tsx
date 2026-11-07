import type { Metadata } from "next";
import "../globals.css";
import StructuredData from "@/components/StructuredData";

const siteUrl = "https://www.we4youfzellc.com";
const siteTitle = "WE4YOU UAE | Trading, Printing & Digital Solutions in Ajman";
const siteDescription =
  "WE4YOU FZE LLC is an Ajman, UAE business providing printing, trading, import and export, and digital solutions across the United Arab Emirates.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | WE4YOU UAE",
  },
  description: siteDescription,
  keywords: [
    "WE4YOU UAE",
    "printing services Ajman",
    "trading company UAE",
    "import export Ajman",
    "digital solutions UAE",
    "e-commerce web design UAE",
    "printing materials UAE",
    "electrical spare parts trading UAE",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "WE4YOU UAE",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/we4you-hero.webp",
        width: 1672,
        height: 941,
        alt: "WE4YOU UAE trading, printing and digital solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/we4you-hero.webp"],
  },
  authors: [{ name: "WE4YOU FZE LLC", url: siteUrl }],
  creator: "WE4YOU FZE LLC",
  publisher: "WE4YOU FZE LLC",
  applicationName: "WE4YOU UAE",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "AE-AJ",
    "geo.placename": "Ajman",
    "business:contact_data:locality": "Ajman",
    "business:contact_data:country_name": "United Arab Emirates",
  },
  icons: {
    icon: [{ url: "/assets/we4you-favicon.webp", type: "image/webp" }],
    shortcut: "/assets/we4you-favicon.webp",
    apple: "/assets/we4you-favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
