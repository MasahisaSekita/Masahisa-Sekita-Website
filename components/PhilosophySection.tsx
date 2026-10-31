export default function PhilosophySection() {
  const principles = [
    {
      number: "01",
      title: "Deterministic Systems Over Hype",
      quote: "AI works best when paired with mathematical rigor and constraint satisfaction.",
      description:
        "Whether building conversational RAG planners or automated QA pipelines, I ground LLM outputs with deterministic algorithms, vector retrieval validation, and strict rollback boundaries to prevent hallucination in production.",
    },
    {
      number: "02",
      title: "Telemetry as the Source of Truth",
      quote: "Operational data should drive automated business actions, not just passive reports.",
      description:
        "I build end-to-end telemetry pipelines from BigQuery and ERP databases that actively surface fraud anomalies, track real-time funnels, and trigger automated GTM workflows—saving teams hundreds of hours of manual triage.",
    },
    {
      number: "03",
      title: "Resilience & Security by Default",
      quote: "A system is only as good as its failure modes and access controls.",
      description:
        "From executing zero-downtime blue-green database migrations to auditing AR/AP workflows and remediating privilege escalation vectors, I engineer applications with strict RBAC, rate limiting, and defensive architecture.",
    },
  ];

  return (
    <section id="principles" className="py-16 sm:py-24 border-b border-[#E7E2D6]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 sm:mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
          Engineering Principles
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-[#78716C]">
          [ 02 — Philosophy ]
        </span>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {principles.map((item, idx) => (
          <div
            key={idx}
            className="space-y-4 pt-6 border-t border-[#E7E2D6] md:border-t md:pt-6"
          >
            <div className="font-mono text-xs text-[#A8A29E]">
              {item.number} / CORE VALUE
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1917] leading-snug">
              {item.title}
            </h3>
            <p className="font-serif italic text-sm text-[#78716C] leading-normal">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="text-sm text-[#57534E] leading-relaxed font-sans pt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
