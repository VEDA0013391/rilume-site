import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { siteConfig } from "@/app/lib/site";

const url = "https://rilume-site-next.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },

  description: `${siteConfig.description} ${siteConfig.longDescription}`,
  applicationName: siteConfig.name,
  keywords: [
    "Discord",
    "Discord Bot",
    "Rilume",
    "Bot",
  ],

  authors: [
    {
      name: "ryo_001339",
    },
  ],

  creator: "ryo_001339",
  publisher: "ryo_001339",
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/site-icon.png", type: "image/png" },
    ],
    apple: "/site-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: `${siteConfig.description} ${siteConfig.longDescription}`,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: `${siteConfig.description} ${siteConfig.longDescription}`,
    images: ["/twitter.png"],
    creator: "@ryo_001339",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}