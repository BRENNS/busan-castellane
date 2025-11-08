import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/organisms/navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Busan Castellane - Restaurant Coréen à Marseille",
  description:
    "Découvrez la cuisine coréenne authentique au cœur de Marseille. Restaurant Busan Castellane, dirigé par le Chef Ren Shaolin avec 20 ans d'expérience.",
  icons: {
    icon: [
      { url: "/assets/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/logo/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/assets/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/assets/logo/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/assets/logo/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/assets/logo/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
