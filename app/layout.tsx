import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automated Weekly Owner Updates for Hostaway Managers | OwnerPulse",
  description: "Bookings, revenue pacing, maintenance, and forward outlook — sent automatically to property owners. Built for professional short-term rental managers using Hostaway.",
  keywords: ["Hostaway", "property management", "owner reports", "STR management", "short-term rental"],
  openGraph: {
    title: "Automated Weekly Owner Updates for Hostaway Managers | OwnerPulse",
    description: "Bookings, revenue pacing, maintenance, and forward outlook — sent automatically to property owners.",
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
