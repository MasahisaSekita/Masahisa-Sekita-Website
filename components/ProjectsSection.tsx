import { portfolioData, Project } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="work" className="py-16 sm:py-24 border-b border-[#E7E2D6]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 sm:mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
          Selected Systems &amp; Projects
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 01 — Index ]
        </span>
      </div>

      {/* Projects List */}
      <div className="space-y-16 sm:space-y-20">
        {projects.map((project: Project) => (
          <article
            key={project.id}
            className="group relative pt-8 border-t border-[#E7E2D6] first:border-t-0 first:pt-0"
          >
            {/* Top row: Number, Category & Year */}
            <div className="flex items-center justify-between text-xs font-mono text-[#78716C] mb-3">
              <div className="flex items-center gap-3">
                <span className="text-[#1C1917] font-semibold">{project.index}</span>
                <span>/</span>
                <span className="uppercase tracking-wider">{project.category}</span>
              </div>
              <span>{project.period}</span>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] tracking-tight group-hover:text-[#44403C] transition">
                {project.title}
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-[#78716C] mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Description & Impact */}
            <p className="text-base text-[#44403C] leading-relaxed mb-4 max-w-2xl font-sans">
              {project.description}
            </p>

            <div className="bg-[#F3EFE7]/70 border border-[#E7E2D6] rounded-lg p-3.5 sm:p-4 mb-5 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716C] block mb-1">
                Engineering Impact:
              </span>
              <p className="text-sm font-medium text-[#1C1917]">
                {project.impact}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && (
              <ul className="space-y-2 mb-6 max-w-2xl">
                {project.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="text-sm text-[#57534E] flex items-start gap-2.5">
                    <span className="text-[#A8A29E] select-none">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Tags & Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#F3EFE7] text-[#57534E] border border-[#E7E2D6]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-1 editorial-link"
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
                    className="font-mono text-xs uppercase tracking-wider text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-1 editorial-link"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
