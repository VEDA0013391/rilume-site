import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: `${siteConfig.description} ${siteConfig.longDescription}`,
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