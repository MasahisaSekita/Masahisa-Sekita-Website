"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3 border border-indigo-500/20">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Whether you want to discuss product engineering, business intelligence, full-stack development, or explore new opportunities, my inbox is always open.
          </p>
        </div>

        {/* Contact Action Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-500/30">
              <Mail className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Send me an email
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Drop a note directly to my university email inbox:
            </p>

            {/* Email pill with copy button */}
            <div className="flex items-center gap-2 p-1.5 pl-4 pr-1.5 rounded-2xl bg-slate-900 border border-slate-700/80 mb-8 max-w-full">
              <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                {personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition shadow-md shadow-indigo-600/30 flex-shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full pt-6 border-t border-slate-800">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-[#0a66c2] border border-[#0a66c2]/30 text-sm font-medium transition"
              >
                <Linkedin className="w-4 h-4" />
                <span>Message on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-medium transition"
              >
                <Github className="w-4 h-4" />
                <span>Follow on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
