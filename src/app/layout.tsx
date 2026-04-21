import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vantage-app.gg"),
  title: {
    default: "Vantage — Valorant improvement tool",
    template: "%s · Vantage",
  },
  description:
    "Curated learning content and AI-powered match analysis for Gold–Ascendant Valorant players. Not endorsed by Riot Games.",
  openGraph: {
    type: "website",
    siteName: "Vantage",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vantage_app_gg",
    creator: "@vantage_app_gg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
