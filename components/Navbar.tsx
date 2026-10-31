"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#DDD6C8] ${
        scrolled
          ? "py-3.5 shadow-[0_2px_12px_rgba(28,25,23,0.04)]"
          : "py-5 sm:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Geometric Mark Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-[#1C1917]"
          aria-label="Home"
        >
          {/* Stylized Triple-Chevron / Triangle Monogram Icon matching the reference */}
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:opacity-60 transition"
          >
            {/* Outer triangle */}
            <path
              d="M1 25L14 2L27 25H1Z"
              stroke="#1C1917"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Inner diagonal chevron 1 */}
            <path
              d="M6.5 25L16 7.5L25.5 25"
              stroke="#1C1917"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Inner diagonal chevron 2 */}
            <path
              d="M11 25L18 12.5L24 25"
              stroke="#1C1917"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>

          <span className="font-serif text-lg font-medium tracking-tight text-[#1C1917] hidden sm:inline">
            Masahisa Sekita
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 font-sans text-sm font-medium text-[#1C1917]">
          <Link
            href="#work"
            className="hover:text-[#E52E1E] transition editorial-link"
          >
            Work
          </Link>
          <Link
            href="#experience"
            className="hover:text-[#E52E1E] transition editorial-link"
          >
            Experience
          </Link>
          <Link
            href="#principles"
            className="hover:text-[#E52E1E] transition editorial-link hidden sm:inline"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#E52E1E] transition editorial-link"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
