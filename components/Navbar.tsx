"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E2D6] py-4"
          : "bg-transparent py-6 sm:py-8"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Name / Home */}
        <Link
          href="/"
          className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 text-[#1C1917]"
        >
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#1C1917] group-hover:opacity-70 transition">
            {portfolioData.personal.name}
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-[#78716C] tracking-wide uppercase">
            Full-Stack Developer
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-7 font-mono text-xs tracking-wider uppercase text-[#78716C]">
          <Link
            href="#work"
            className="hover:text-[#1C1917] transition editorial-link"
          >
            Work
          </Link>
          <Link
            href="#experience"
            className="hover:text-[#1C1917] transition editorial-link"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="hover:text-[#1C1917] transition editorial-link hidden sm:inline"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#1C1917] transition editorial-link text-[#1C1917] font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
