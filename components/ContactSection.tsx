"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 sm:mb-12">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
            Inquiries &amp; Colophon
          </h2>
          <p className="font-serif italic text-sm text-[#78716C] mt-1">
            Always open to discussing AI automation, telemetry architecture, and engineering collaborations.
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 05 — Contact ]
        </span>
      </div>

      <div className="bg-[#F8F5EE] border border-[#E4DECf] rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(28,25,23,0.03)] space-y-6">
        <p className="font-serif text-xl sm:text-2xl text-[#1C1917] leading-relaxed">
          Open to full-time engineering roles, AI system contracts, and technical advisory.
        </p>

        {/* Direct Email with copy helper */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="font-mono text-base sm:text-lg text-[#1C1917] font-medium editorial-link"
          >
            {personal.email}
          </a>

          <button
            onClick={handleCopyEmail}
            className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#EAE4D7] text-[#57534E] hover:text-[#1C1917] transition border border-[#DDD7C9] inline-flex items-center gap-1.5 shadow-sm"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied to clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 opacity-60" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Channels */}
        <div className="pt-6 border-t border-[#E7E2D6] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#78716C]">
          <div>
            <span className="uppercase tracking-wider text-[#A8A29E] block mb-1">
              Availability
            </span>
            <p className="text-[#1C1917] font-medium">
              {personal.availability}
            </p>
          </div>

          <div>
            <span className="uppercase tracking-wider text-[#A8A29E] block mb-1">
              Profiles &amp; Code
            </span>
            <div className="flex items-center gap-5">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-0.5 editorial-link font-medium"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-0.5 editorial-link font-medium"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
