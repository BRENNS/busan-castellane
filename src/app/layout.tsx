import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/organisms/navbar";
import { baseMetadata } from "@/src/utils/seo/metadata";
import { getAllSchemas } from "@/src/utils/seo/structured-data";

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

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get all structured data schemas
  const schemas = getAllSchemas();

  return (
    <html lang="fr">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        {schemas.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
