import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "OwnerPulse – Automated Weekly Owner Updates",
  description:
    "Owner-ready weekly updates for short-term rental managers. Bookings, revenue pace, maintenance highlights, and what changed—without spreadsheets.",
  keywords: [
    "property management",
    "owner reports",
    "STR management",
    "short-term rental",
    "owner communication",
    "vacation rental management",
    "automated owner updates",
    "Hostaway",
  ],
  openGraph: {
    title: "OwnerPulse – Automated Weekly Owner Updates",
    description:
      "Owner-ready weekly updates for short-term rental managers. Bookings, revenue pace, maintenance highlights, and what changed—without spreadsheets.",
    type: "website",
    images: [
      {
        url: "/Screenshot 2026-02-10 at 00.53.23.png",
        width: 1200,
        alt: "OwnerPulse sample owner update preview",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17944653028"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17944653028');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
