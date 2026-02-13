import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LiquidBackground } from "@/components/ui/LiquidBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Enter Mexico | Strategic Relocation to Baja",
  description: "The only relocation platform that filters Mexican cities by your Budget, Lifestyle, and Safety Standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased relative`}>
        <LiquidBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
