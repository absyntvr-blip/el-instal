import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Instal - Precyzja w instalacjach elektrycznych",
  description: "Instalacje elektryczne i teletechniczne. Od niskiego do wysokiego napięcia. Od idei do certyfikatu.",
  keywords: "instalacje elektryczne, teletechnika, instalacje WN, instalacje nn, monitoring CCTV, systemy BMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
