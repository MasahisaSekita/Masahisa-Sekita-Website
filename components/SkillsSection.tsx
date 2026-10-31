import { portfolioData, SkillGroup } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#E7E2D6]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 sm:mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
          Technical Competencies
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 03 — Stack ]
        </span>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {skills.map((group: SkillGroup, idx: number) => (
          <div key={idx} className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1C1917] font-semibold border-b border-[#E7E2D6] pb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {group.skills.map((skill: string, sIdx: number) => (
                <span
                  key={sIdx}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-[#F3EFE7] text-[#44403C] border border-[#E7E2D6]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
