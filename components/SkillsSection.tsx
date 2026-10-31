import { portfolioData } from "@/data/portfolio";
import { BarChart3, Database, Code, Wrench } from "lucide-react";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons = [BarChart3, Database, Code, Wrench];

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3 border border-indigo-500/20">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-3">
            A comprehensive overview of tools, languages, and methodologies I leverage across engineering and analytics.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-indigo-500/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-indigo-500/40 hover:text-white transition shadow-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
