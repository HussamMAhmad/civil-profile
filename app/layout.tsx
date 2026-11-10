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
    "Nebras Ahmad",
    "Nebras",
    "Civil Engineer",
    "Structural Engineer",
    "Construction Engineer",
    "Structural Engineering",
    "Construction Management",
    "BIM",
    "Revit",
    "ETABS",
    "Infrastructure",
    "Engineering Portfolio",
    "Civil Engineering Portfolio",
  ],
  authors: [
    {
      name: "Nebras Ahmad",
    },
  ],
  creator: "Nebras Ahmad",

  openGraph: {
    title: "Nebras Ahmad — Civil Engineer",

    description:
      "Civil Engineer specializing in structural engineering, construction, BIM, Revit and technical design.",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nebras Ahmad — Civil Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Nebras Ahmad — Civil Engineer",

    description:
      "Civil Engineer specializing in structural engineering, construction, BIM, Revit and technical design.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
