import { portfolioData, SkillGroup } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#E7E2D6]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 sm:mb-16">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
            Technical Competencies
          </h2>
          <p className="font-serif italic text-sm text-[#78716C] mt-1">
            Languages, libraries, distributed systems, and engineering methodologies.
          </p>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 04 — Stack ]
        </span>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skills.map((group: SkillGroup, idx: number) => (
          <div
            key={idx}
            className="bg-[#F8F5EE] border border-[#E4DECf] rounded-2xl p-6 shadow-[0_4px_20px_rgba(28,25,23,0.03)]"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1C1917] font-semibold border-b border-[#E7E2D6] pb-2.5 mb-3 flex items-center justify-between">
              <span>{group.category}</span>
              <span className="text-[#A8A29E] text-[10px]">0{idx + 1}</span>
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {group.skills.map((skill: string, sIdx: number) => (
                <span
                  key={sIdx}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#44403C] border border-[#DDD7C9]"
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
