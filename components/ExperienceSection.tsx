import { portfolioData, Experience } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#E7E2D6]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 sm:mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
          Experience &amp; Contributions
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 02 — Career ]
        </span>
      </div>

      {/* Experience List */}
      <div className="space-y-14 sm:space-y-16">
        {experience.map((exp: Experience, idx: number) => (
          <article
            key={idx}
            className="pt-8 border-t border-[#E7E2D6] first:border-t-0 first:pt-0"
          >
            {/* Header: Role, Company & Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-4">
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
                      className="text-[#78716C] hover:text-[#1C1917] transition"
                      title="View Pull Request"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="font-serif italic text-base text-[#57534E] mt-0.5">
                  {exp.role}
                </p>
              </div>

              <div className="font-mono text-xs text-[#78716C] sm:text-right mt-1 sm:mt-0">
                <span className="block text-[#1C1917] font-medium">{exp.period}</span>
                {exp.type && <span>{exp.type}</span>}
              </div>
            </div>

            {/* Achievements */}
            <ul className="space-y-2.5 mb-6 max-w-3xl">
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
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech: string, tIdx: number) => (
                <span
                  key={tIdx}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#F3EFE7] text-[#57534E] border border-[#E7E2D6]/80"
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
