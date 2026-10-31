import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { personal, education } = portfolioData;

  return (
    <section className="pt-8 pb-16 sm:pb-24 border-b border-[#E7E2D6]">
      {/* Editorial Headline */}
      <div className="space-y-6 max-w-3xl">
        <div className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ Portfolio &amp; Index ]
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-[3.25rem] font-normal leading-[1.18] tracking-[-0.02em] text-[#1C1917]">
          Full-Stack Developer building{" "}
          <em className="italic font-serif font-light text-[#44403C]">AI automation</em>,{" "}
          high-availability growth systems, and{" "}
          <em className="italic font-serif font-light text-[#44403C]">data pipelines</em>.
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl font-sans pt-2">
          {personal.summary}
        </p>
      </div>

      {/* Quick metadata strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 sm:pt-14 mt-10 border-t border-[#E7E2D6]/80 text-sm">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#A8A29E] block mb-1">
            Current
          </span>
          <p className="font-medium text-[#1C1917]">
            Product &amp; BI Engineer
          </p>
          <p className="text-xs text-[#78716C] mt-0.5">
            YOBOLabs.ai
          </p>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#A8A29E] block mb-1">
            Education
          </span>
          <p className="font-medium text-[#1C1917]">
            {education.institution}
          </p>
          <p className="text-xs text-[#78716C] mt-0.5">
            Honors B.Sc. in Computer Science
          </p>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#A8A29E] block mb-1">
            Connect
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono">
            <a
              href={`mailto:${personal.email}`}
              className="text-[#1C1917] hover:opacity-60 transition editorial-link"
            >
              Email
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-0.5 editorial-link"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1917] hover:opacity-60 transition inline-flex items-center gap-0.5 editorial-link"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
