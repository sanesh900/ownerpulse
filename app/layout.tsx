import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OwnerPulse - Automated Weekly Owner Updates for Hostaway",
  description: "Bookings, revenue pacing, maintenance, and forward outlook — sent automatically to property owners.",
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
