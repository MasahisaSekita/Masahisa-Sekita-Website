export default function SupersetPreview() {
  return (
    <div className="w-full bg-[#1C1917] rounded-xl overflow-hidden border border-[#3E3835] shadow-lg text-stone-200 text-xs font-mono select-none">
      {/* Top GitHub PR bar */}
      <div className="bg-[#262220] px-4 py-2.5 flex items-center justify-between border-b border-[#3E3835]">
        <div className="flex items-center gap-2">
          <span className="text-[#8957E5]">⑂</span>
          <span className="text-[11px] text-[#A8A29E]">apache/superset #35920</span>
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#8957E5]/10 text-[#C9D1D9] border border-[#8957E5]/30">
            Merged Upstream
          </span>
        </div>
        <div className="text-[11px] text-[#A8A29E] flex items-center gap-2">
          <span className="text-[#98C379]">+1,240</span>
          <span className="text-[#E06C75]">-980</span>
          <span className="hidden sm:inline">in 50+ files</span>
        </div>
      </div>

      {/* Code diff representation */}
      <div className="p-4 bg-[#141211] space-y-2 text-[11px]">
        <div className="text-[#78716C] text-[10px] uppercase tracking-wider mb-1">
          Dependency Refactor: Marshmallow Legacy Upgrade
        </div>
        <div className="bg-[#1C1917] p-2.5 rounded border border-[#2B2724] font-mono leading-relaxed space-y-1">
          <div className="text-[#E06C75] bg-[#E06C75]/10 px-2 py-0.5 rounded">
            - from marshmallow import Schema, fields, post_load # deprecated v2 syntax
          </div>
          <div className="text-[#98C379] bg-[#98C379]/10 px-2 py-0.5 rounded">
            + from marshmallow import Schema, fields, EXCLUDE, post_load # modernized v3 schema
          </div>
        </div>

        {/* Verification badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[10px]">
          <div className="bg-[#1F1B19] p-2 rounded border border-[#2B2724] flex items-center gap-1.5 text-[#98C379]">
            <span>✓</span>
            <span>50+ Unit &amp; Integration Tests</span>
          </div>
          <div className="bg-[#1F1B19] p-2 rounded border border-[#2B2724] flex items-center gap-1.5 text-[#98C379]">
            <span>✓</span>
            <span>Jest &amp; Pytest Suites Passing</span>
          </div>
          <div className="bg-[#1F1B19] p-2 rounded border border-[#2B2724] flex items-center gap-1.5 text-[#E5C07B] col-span-2 sm:col-span-1">
            <span>●</span>
            <span>Zero Regressions In Prod</span>
          </div>
        </div>
      </div>
    </div>
  );
}
