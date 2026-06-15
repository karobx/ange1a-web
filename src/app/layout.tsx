import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ange1a.com"),
  title: {
    default: "Ange1a",
    template: "%s · Ange1a",
  },
  icons: {
    icon: "/assets/ange1a-logo.png",
  },
  openGraph: {
    siteName: "Ange1a",
    type: "website",
    images: [{ url: "/assets/ange1a-logo.png", width: 300, height: 89, alt: "Ange1a" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-[100dvh] antialiased">
        <SiteNav />
        <main className="overflow-x-hidden">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
