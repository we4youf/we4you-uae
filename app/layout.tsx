import type { Metadata } from "next";
import "../globals.css";
import StructuredData from "@/components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteTitle = "WE4YOU UAE | Trading, Printing & Digital Solutions";
const siteDescription =
  "WE4YOU UAE is your trusted partner in Ajman for printing services, trading, import and export, and digital solutions.";

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
