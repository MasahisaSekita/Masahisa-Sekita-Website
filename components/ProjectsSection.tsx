"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { Github, ExternalLink, Sparkles, Layers, ArrowUpRight, Check } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI & Full-Stack", "Product & BI", "UI/UX & HCI"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3 border border-indigo-500/20">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-3">
            A blend of AI-driven applications, data intelligence architectures, and human-computer interaction designs.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between relative group border border-slate-800 hover:border-indigo-500/40"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-6 space-y-2 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom: Tags & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/70 text-slate-300 font-mono border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition group/link"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition ml-auto"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
