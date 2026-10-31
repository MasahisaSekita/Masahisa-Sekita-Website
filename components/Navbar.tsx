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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0C0A09]/95 backdrop-blur-md border-b border-[#292524] ${
        scrolled
          ? "py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
          : "py-5 sm:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Geometric Mark Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-white"
          aria-label="Home"
        >
          {/* Stylized Triple-Chevron / Triangle Monogram Icon with white strokes */}
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:opacity-75 transition"
          >
            {/* Outer triangle */}
            <path
              d="M1 25L14 2L27 25H1Z"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Inner diagonal chevron 1 */}
            <path
              d="M6.5 25L16 7.5L25.5 25"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Inner diagonal chevron 2 */}
            <path
              d="M11 25L18 12.5L24 25"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>

          <span className="font-serif text-lg font-medium tracking-tight text-white hidden sm:inline">
            Masahisa Sekita
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 sm:gap-8 font-sans text-sm font-medium text-stone-200">
          <Link
            href="#work"
            className="hover:text-white transition editorial-link"
          >
            Work
          </Link>
          <Link
            href="#experience"
            className="hover:text-white transition editorial-link"
          >
            Experience
          </Link>
          <Link
            href="#principles"
            className="hover:text-white transition editorial-link hidden sm:inline"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-white transition editorial-link text-white font-semibold"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
