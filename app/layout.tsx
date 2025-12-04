import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wolves and Caribou: A Balancing Act in British Columbia",
  description:
    "An interactive infographic exploring predator-prey dynamics, trophic cascades, and ecological balance in British Columbia's forests.",
  icons: {
    icon: [
      {
        url: "/icon.png?v=2",
        type: "image/png",
      },
    ],
    shortcut: ["/icon.png?v=2"],
    apple: "/icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
