import { portfolioData, Experience } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#E7E2D6]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 sm:mb-16">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
            Experience &amp; Contributions
          </h2>
          <p className="font-serif italic text-sm text-[#78716C] mt-1">
            Track record across production telemetry, full-stack web engineering, and open source.
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 03 — Career ]
        </span>
      </div>

      {/* Experience List */}
      <div className="space-y-10 sm:space-y-12">
        {experience.map((exp: Experience, idx: number) => (
          <article
            key={idx}
            className="bg-[#F8F5EE] border border-[#E4DECf] rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(28,25,23,0.03)] hover:shadow-[0_10px_32px_rgba(28,25,23,0.06)] transition-all duration-300"
          >
            {/* Header: Role, Company & Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-3 border-b border-[#E7E2D6]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1917]">
                    {exp.company}
                  </h3>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#78716C] hover:text-[#1C1917] transition inline-flex items-center"
                      title="View Link"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="font-serif italic text-base text-[#57534E] mt-0.5">
                  {exp.role}
                </p>
              </div>

              <div className="font-mono text-xs text-[#78716C] sm:text-right">
                <span className="block text-[#1C1917] font-medium">{exp.period}</span>
                {exp.type && <span className="text-[11px] text-[#A8A29E] uppercase tracking-wider">{exp.type}</span>}
              </div>
            </div>

            {/* Achievements */}
            <ul className="space-y-2.5 mb-6">
              {exp.achievements.map((ach: string, aIdx: number) => (
                <li
                  key={aIdx}
                  className="text-sm text-[#44403C] leading-relaxed flex items-start gap-3"
                >
                  <span className="text-[#A8A29E] select-none text-xs mt-1">—</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E7E2D6]/80">
              {exp.technologies.map((tech: string, tIdx: number) => (
                <span
                  key={tIdx}
                  className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#FAF8F5] text-[#57534E] border border-[#DDD7C9]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
