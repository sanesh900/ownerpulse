import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automated Owner Updates for Hostaway Managers | OwnerPulse",
  description: "Weekly performance summaries for short-term rental owners — automated from Hostaway data. Save time and keep owners informed without manual reporting.",
  keywords: ["Hostaway", "property management", "owner reports", "STR management", "short-term rental", "owner communication", "vacation rental management", "Hostaway automation"],
  openGraph: {
    title: "Automated Owner Updates for Hostaway Managers | OwnerPulse",
    description: "Weekly performance summaries for short-term rental owners — automated from Hostaway data. Save time and keep owners informed without manual reporting.",
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
