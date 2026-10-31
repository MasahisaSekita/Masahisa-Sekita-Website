import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Briefcase, BrainCircuit, LineChart, Code2, MapPin } from "lucide-react";

export default function About() {
  const { personal, education } = portfolioData;

  const highlights = [
    {
      icon: LineChart,
      title: "Product & Business Intelligence",
      description:
        "Specialized in transforming multi-source user telemetry into actionable retention strategies, automated cohort analyses, and conversion funnel optimization.",
    },
    {
      icon: BrainCircuit,
      title: "AI-Native Systems",
      description:
        "Building practical AI agent pipelines using LangChain, OpenAI APIs, and vector databases (Pinecone) to deliver automated, context-aware user experiences.",
    },
    {
      icon: Code2,
      title: "Full-Stack Software Engineering",
      description:
        "Developing scalable web architectures from TypeScript, Next.js, and React frontends down to PostgreSQL/Supabase database schemas and Node.js microservices.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3 border border-indigo-500/20">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering with Data &amp; Purpose
          </h2>
          <div className="flex items-center gap-2 mt-3 text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Narrative & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            {personal.bio.map((paragraph, index) => (
              <p key={index} className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
                {paragraph}
              </p>
            ))}

            {/* Academic Card */}
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border-l-4 border-l-indigo-500"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{edu.institution}</h3>
                    <p className="text-xs text-indigo-300">{edu.degree}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-3">{edu.focus}</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Strengths side */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
