"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.status}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hi, I&apos;m{" "}
            <span className="gradient-accent">{personal.name}</span>
          </h1>

          {/* Subtitle / Role */}
          <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-4">
            {personal.role}
          </p>

          {/* Summary / Mission */}
          <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
            {personal.summary}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4 text-[#0a66c2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Email</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 text-sm transition-all hover:-translate-y-0.5"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Highlights / Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-slate-800/80">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-3.5 text-center flex flex-col items-center justify-center"
              >
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  {stat.label}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-200">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll down indicator */}
          <a
            href="#about"
            className="mt-14 text-slate-500 hover:text-slate-300 transition animate-bounce p-2"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
