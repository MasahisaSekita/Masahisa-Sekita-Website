export default function FraudTelemetryPreview() {
  return (
    <div className="w-full bg-[#1C1917] rounded-xl overflow-hidden border border-[#3E3835] shadow-lg text-stone-200 text-xs font-mono select-none">
      {/* Top Bar */}
      <div className="bg-[#262220] px-4 py-2.5 flex items-center justify-between border-b border-[#3E3835]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]/80 inline-block" />
          <span className="text-[11px] text-[#A8A29E] ml-2">
            yobolabs // telemetry-guard.py
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#E5C07B]/10 text-[#E5C07B] border border-[#E5C07B]/20">
          Telemetry Active
        </span>
      </div>

      {/* Body: Stream and Anomaly detection */}
      <div className="p-4 bg-[#141211] space-y-2.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
          {/* Stream 1: Fraud detection */}
          <div className="bg-[#1C1917] p-3 rounded border border-[#2B2724]">
            <div className="text-[#A8A29E] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>BigQuery + Claude API</span>
              <span className="text-[#E06C75]">Anomaly Flagged</span>
            </div>
            <p className="text-stone-300 font-sans text-[11px] leading-relaxed mb-2">
              Uncovered partner-firm billing irregularities across real-time transactional logs.
            </p>
            <div className="text-[10px] text-[#98C379] flex items-center gap-1">
              <span>🛡️</span>
              <span>Financial exposure halted immediately</span>
            </div>
          </div>

          {/* Stream 2: Video QA */}
          <div className="bg-[#1C1917] p-3 rounded border border-[#2B2724]">
            <div className="text-[#A8A29E] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Apify + Gemini Multimodal</span>
              <span className="text-[#98C379]">QA Pass Rate: 99.4%</span>
            </div>
            <p className="text-stone-300 font-sans text-[11px] leading-relaxed mb-2">
              Automated pre-publishing review engine checking Meta policy and brand compliance.
            </p>
            <div className="text-[10px] text-[#61AFEF] flex items-center gap-1">
              <span>⚡</span>
              <span>100% elimination of manual review queue</span>
            </div>
          </div>
        </div>

        {/* Security bar */}
        <div className="bg-[#1A1816] p-2 rounded border border-[#292421] text-[10px] text-[#A8A29E] flex items-center justify-between">
          <span>AR/AP Audit: Remediated privilege escalation vectors with strict RBAC</span>
          <span className="text-[#98C379]">Secured</span>
        </div>
      </div>
    </div>
  );
}
