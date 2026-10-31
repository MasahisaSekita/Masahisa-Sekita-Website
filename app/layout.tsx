import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Masahisa Sekita | Product & Business Intelligence Engineer",
  description:
    "Personal portfolio of Masahisa Sekita. Product & Business Intelligence Engineer at YOBOLabs.ai and University of Toronto software engineering alumni. Building data-driven products, growth telemetry, and AI systems.",
  keywords: [
    "Masahisa Sekita",
    "Product Engineer",
    "Business Intelligence Engineer",
    "Full-Stack Developer",
    "YOBOLabs",
    "University of Toronto",
    "Software Engineer",
    "React",
    "Next.js",
    "Python",
    "Data Pipelines"
  ],
  authors: [{ name: "Masahisa Sekita", url: "https://www.linkedin.com/in/masahisa-sekita-57a7a8148/" }],
  creator: "Masahisa Sekita",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masahisa-sekita.vercel.app",
    title: "Masahisa Sekita | Product & Business Intelligence Engineer",
    description:
      "Product & Business Intelligence Engineer at YOBOLabs.ai and U of T alumnus. Bridging data intelligence, growth analytics, and modern AI engineering.",
    siteName: "Masahisa Sekita Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masahisa Sekita | Product & Business Intelligence Engineer",
    description:
      "Product & Business Intelligence Engineer at YOBOLabs.ai and U of T alumnus. Bridging data intelligence and modern software engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}>
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-70" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="fixed bottom-0 right-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
        
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
