import type { Metadata } from "next";
import "./globals.css";
import { colors } from "@/config/colors";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.perfectesthetic.com"),
  title: "Perfestetic - Lipolisis Láser",
  description: "Centro de estética especializado en lipolisis láser. Reducción de grasa, recuperación rápida y resultados visibles.",
  openGraph: {
    title: "Perfestetic - Lipolisis Láser",
    description: "Centro de estética especializado en lipolisis láser. Reducción de grasa, recuperación rápida y resultados visibles.",
    url: "https://www.perfectesthetic.com",
    siteName: "Perfestetic",
    images: [
      {
        url: "/logoicono.webp",
        width: 1200,
        height: 630,
        alt: "Perfestetic - Lipolisis Láser sin cirugía",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfestetic - Lipolisis Láser",
    description: "Centro de estética especializado en lipolisis láser. Reducción de grasa, recuperación rápida y resultados visibles.",
    images: ["/miniatura.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="antialiased"
        style={{ 
          backgroundColor: colors.background, 
          color: colors.foreground,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        }}
      >
        {children}
      </body>
    </html>
  );
}
