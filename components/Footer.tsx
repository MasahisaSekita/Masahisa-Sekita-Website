"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E7E2D6] py-12">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-10 font-mono text-xs text-[#78716C] flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg
            width="20"
            height="16"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-75"
          >
            <path d="M1 25L14 2L27 25H1Z" stroke="#1C1917" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M6.5 25L16 7.5L25.5 25" stroke="#1C1917" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M11 25L18 12.5L24 25" stroke="#1C1917" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
          <p className="text-[#1C1917]">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={scrollToTop}
            className="text-[#1C1917] hover:text-[#E52E1E] transition editorial-link uppercase tracking-wider text-[11px]"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
