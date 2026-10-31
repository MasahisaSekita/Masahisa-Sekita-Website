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
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
          Inquiries &amp; Colophon
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 04 — Contact ]
        </span>
      </div>

      <div className="max-w-2xl space-y-6">
        <p className="font-serif text-xl sm:text-2xl text-[#1C1917] leading-relaxed">
          Always open to discussing AI automation pipelines, growth telemetry systems, or new engineering opportunities.
        </p>

        {/* Direct Email with copy helper */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="font-mono text-sm sm:text-base text-[#1C1917] font-medium editorial-link"
          >
            {personal.email}
          </a>

          <button
            onClick={handleCopyEmail}
            className="font-mono text-xs px-2.5 py-1 rounded bg-[#F3EFE7] hover:bg-[#E7E2D6] text-[#57534E] hover:text-[#1C1917] transition border border-[#E7E2D6] inline-flex items-center gap-1.5"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 opacity-60" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Channels */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#78716C]">
          <div>
            <span className="uppercase tracking-wider text-[#A8A29E] block mb-1">
              Availability
            </span>
            <p className="text-[#1C1917]">
              {personal.availability}
            </p>
          </div>

          <div>
            <span className="uppercase tracking-wider text-[#A8A29E] block mb-1">
              Profiles
            </span>
            <div className="flex items-center gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-0.5 editorial-link"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-0.5 editorial-link"
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
