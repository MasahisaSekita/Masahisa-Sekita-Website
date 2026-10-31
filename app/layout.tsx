import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Masahisa Sekita — Full-Stack Developer",
  description:
    "Computer Science graduate from the University of Toronto building AI-driven automation, high-availability growth systems, and secure full-stack applications for ecommerce and B2B platforms.",
  keywords: [
    "Masahisa Sekita",
    "Full-Stack Developer",
    "AI Automation",
    "Data Pipelines",
    "Internal Tooling",
    "University of Toronto",
    "TypeScript",
    "Python",
    "Next.js",
    "BigQuery",
    "Supabase",
    "Apache Superset"
  ],
  authors: [{ name: "Masahisa Sekita", url: "https://www.linkedin.com/in/masahisa-sekita" }],
  creator: "Masahisa Sekita",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masahisa-sekita.vercel.app",
    title: "Masahisa Sekita — Full-Stack Developer",
    description:
      "Computer Science graduate from the University of Toronto building AI automation, high-availability growth systems, and data pipelines.",
    siteName: "Masahisa Sekita",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masahisa Sekita — Full-Stack Developer",
    description:
      "Computer Science graduate from the University of Toronto building AI automation, high-availability growth systems, and data pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#E52E1E] selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="pt-[68px] sm:pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
