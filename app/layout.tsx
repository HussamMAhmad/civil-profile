import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/sections/navbar";
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
  title: "Nbras Ahmad — Civil Engineer",
  description:
    "Nbras Ahmad — Civil Engineer specializing in structural engineering, construction management and infrastructure.",
  keywords: [
    "Nbras Ahmad",
    "Civil Engineer",
    "Structural Engineer",
    "Construction",
    "Infrastructure",
    "Engineering Portfolio",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
              <Navbar />
        {children}</body>
    </html>
  );
}
