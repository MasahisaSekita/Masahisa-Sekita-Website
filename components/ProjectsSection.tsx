"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import CourseMatrixPreview from "@/components/previews/CourseMatrixPreview";
import ThrillWheelsPreview from "@/components/previews/ThrillWheelsPreview";
import SupersetPreview from "@/components/previews/SupersetPreview";
import FraudTelemetryPreview from "@/components/previews/FraudTelemetryPreview";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderVisualPreview = (id: string) => {
    switch (id) {
      case "course-matrix":
        return <CourseMatrixPreview />;
      case "thrill-bicycles-platform":
        return <ThrillWheelsPreview />;
      case "apache-superset-migration":
        return <SupersetPreview />;
      case "fraud-video-intelligence":
        return <FraudTelemetryPreview />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24 border-b border-[#E7E2D6]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 sm:mb-16">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
            Selected Systems &amp; Projects
          </h2>
          <p className="font-serif italic text-sm text-[#78716C] mt-1">
            Production full-stack applications, AI automation pipelines, and core open-source contributions.
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 01 — Index ]
        </span>
      </div>

      {/* Projects List */}
      <div className="space-y-16 sm:space-y-20">
        {projects.map((project: Project) => {
          const isExpanded = expandedId === project.id;
          const preview = renderVisualPreview(project.id);

          return (
            <article
              key={project.id}
              className="bg-[#F8F5EE] border border-[#E4DECf] rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(28,25,23,0.03)] hover:shadow-[0_10px_32px_rgba(28,25,23,0.07)] transition-all duration-300"
            >
              {/* Header: Number, Category & Year */}
              <div className="flex items-center justify-between text-xs font-mono text-[#78716C] mb-4 pb-3 border-b border-[#E7E2D6]">
                <div className="flex items-center gap-3">
                  <span className="text-[#E52E1E] font-semibold">{project.index}</span>
                  <span>/</span>
                  <span className="uppercase tracking-wider text-[#57534E] font-medium">
                    {project.category}
                  </span>
                </div>
                <span>{project.period}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] tracking-tight group-hover:text-[#E52E1E] transition">
                  {project.title}
                </h3>
                <p className="font-serif italic text-base sm:text-lg text-[#78716C] mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Visual Mockup Preview */}
              {preview && (
                <div className="my-6">
                  {preview}
                </div>
              )}

              {/* Description & Impact Box */}
              <p className="text-base text-[#44403C] leading-relaxed mb-4 font-sans">
                {project.description}
              </p>

              <div className="bg-[#EFE9DC]/70 border border-[#DDD5C5] rounded-xl p-4 mb-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#78716C] block mb-1">
                  Key Engineering Outcome:
                </span>
                <p className="text-sm font-medium text-[#1C1917]">
                  {project.impact}
                </p>
              </div>

              {/* Highlights List */}
              {project.highlights && (
                <ul className="space-y-2 mb-6 max-w-2xl">
                  {project.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="text-sm text-[#57534E] flex items-start gap-2.5">
                      <span className="text-[#A8A29E] select-none text-xs mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Bottom: Tags & Action Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E7E2D6]">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#57534E] border border-[#DDD7C9]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase tracking-wider text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-1 editorial-link"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase tracking-wider text-[#1C1917] font-semibold hover:opacity-60 transition inline-flex items-center gap-1 editorial-link"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
