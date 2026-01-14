import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeSync",
  description: "Sync your coding progress instantly and seamlessly",
  openGraph: {
    title: "CodeSync",
    description: "Sync your coding progress instantly and seamlessly",
    siteName: "CodeSync",
    images: [
      {
        url: "/og-images.png",
        width: 1200,
        height: 630,
        alt: "CodeSync Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeSync",
    description: "Sync your coding progress instantly and seamlessly",
    images: ["/og-images.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
