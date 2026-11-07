import type { Metadata } from "next";
import "./globals.css";
import FloatingBackButton from "@/components/FloatingBackButton";

export const metadata: Metadata = {
  title: "WE4YOU UAE | Trading, Printing & Digital Solutions",
  description: "Your trusted partner for trading, printing and digital solutions in the UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        {children}
        <FloatingBackButton />
      </div>
    </div>
  );
}


