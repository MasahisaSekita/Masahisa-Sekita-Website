"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-16 border-t border-[#E7E2D6] font-mono text-xs text-[#78716C] flex flex-col sm:flex-row items-baseline justify-between gap-4">
      <div>
        <p className="text-[#1C1917]">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
        <p className="text-[11px] text-[#A8A29E] mt-1">
          Designed with editorial typography in Next.js &amp; Tailwind CSS.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={scrollToTop}
          className="text-[#1C1917] hover:opacity-60 transition editorial-link uppercase tracking-wider text-[11px]"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
