import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FIZZIQ — Botanical Real-Fruit Sparkling Tonics",
  description: "Next-gen sparkling soda infused with cold-pressed real juices, botanical adaptogens, and micro-bubbles. 5g prebiotic fiber, 0g added sugar.",
  keywords: ["sparkling soda", "botanical tonic", "healthy soda", "adaptogen drink", "prebiotic soda", "fizzy tonic"],
  openGraph: {
    title: "FIZZIQ — Botanical Real-Fruit Sparkling Tonics",
    description: "Cold-pressed real juices, botanical adaptogens, and ultra-fine carbonation. 25 calories, zero fake stuff.",
    images: ["/images/hero-collection.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080B12] text-slate-100 selection:bg-yellow-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
