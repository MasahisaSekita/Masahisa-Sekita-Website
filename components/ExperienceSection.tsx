import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3 border border-indigo-500/20">
            Professional Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Where I&apos;ve Made an Impact
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-3">
            Translating analytical insights into real-world product engineering and growth architecture.
          </p>
        </div>

        {/* Timeline items */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top Row: Role, Company & Period */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-2 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Current Role
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-indigo-400 font-medium text-base mt-0.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs">{exp.type}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-400 gap-1">
                  <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Key Responsibilities &amp; Outcomes
                </h4>
                <ul className="space-y-2.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium mr-1">Stack:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
