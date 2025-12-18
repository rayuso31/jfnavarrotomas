import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhatsAppWidget } from "@/components/common/WhatsAppWidget";
import { ChatWidget } from "@/components/common/ChatWidget";
import { CursorGlow } from "@/components/ui/CursorGlow";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "J.F. Navarro Tomás - Procuradores",
  description: "Procuradores de los Tribunales en Valencia. Tradición y modernidad al servicio de la justicia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-cream-50 text-slate-800 font-sans`}
      >
        <CursorGlow />
        <ScrollProgress />
        {children}
        <WhatsAppWidget />
        <ChatWidget />
      </body>
    </html>
  );
}
