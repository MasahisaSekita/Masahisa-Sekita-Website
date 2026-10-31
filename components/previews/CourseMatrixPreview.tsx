export default function CourseMatrixPreview() {
  return (
    <div className="w-full bg-[#1C1917] rounded-xl overflow-hidden border border-[#3E3835] shadow-lg text-stone-200 text-xs font-mono select-none">
      {/* Top window bar */}
      <div className="bg-[#262220] px-4 py-2.5 flex items-center justify-between border-b border-[#3E3835]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]/80 inline-block" />
          <span className="text-[11px] text-[#A8A29E] ml-2 font-mono">
            course-matrix // agent-scheduler.ts
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#98C379]/10 text-[#98C379] border border-[#98C379]/20">
          Agent Active
        </span>
      </div>

      {/* Interactive Mockup Body */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#141211]">
        {/* Left: Conversational RAG prompt */}
        <div className="md:col-span-5 bg-[#1C1917] p-3.5 rounded-lg border border-[#2F2B28] flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-[#78716C] uppercase tracking-wider mb-2">
              Natural Language Intent
            </div>
            <p className="text-stone-300 text-xs font-sans leading-relaxed mb-3">
              &ldquo;Generate optimal timetable for CS Major (3rd year) with no Friday classes and afternoon lab preference.&rdquo;
            </p>
            <div className="space-y-1.5 text-[11px]">
              <div className="text-[#98C379] flex items-center gap-1.5">
                <span>✓</span>
                <span>Vector match: UTSC CS Degree Req</span>
              </div>
              <div className="text-[#98C379] flex items-center gap-1.5">
                <span>✓</span>
                <span>Backtracking solver: 0 collisions</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-[#2F2B28] text-[10px] text-[#A8A29E]">
            LangChain + Pinecone Vector DB
          </div>
        </div>

        {/* Right: Timetable Grid Preview */}
        <div className="md:col-span-7 bg-[#1C1917] p-3.5 rounded-lg border border-[#2F2B28]">
          <div className="text-[10px] text-[#78716C] uppercase tracking-wider mb-2 flex justify-between">
            <span>Synthesized Schedule</span>
            <span className="text-[#E5C07B]">100% Conflict-Free</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
            <div className="bg-[#24201E] p-1.5 rounded text-[#A8A29E]">Mon</div>
            <div className="bg-[#24201E] p-1.5 rounded text-[#A8A29E]">Tue</div>
            <div className="bg-[#24201E] p-1.5 rounded text-[#A8A29E]">Wed</div>
            <div className="bg-[#24201E] p-1.5 rounded text-[#A8A29E]">Thu</div>
          </div>
          <div className="grid grid-cols-4 gap-1.5 mt-1.5 text-[10px]">
            <div className="bg-[#4E3F32] text-[#F3EFE7] p-2 rounded border border-[#7A6451]">
              <span className="font-bold block">CSCC01</span>
              <span className="text-[9px] opacity-80">10:00 - 11:30</span>
            </div>
            <div className="bg-[#2E3C48] text-[#F3EFE7] p-2 rounded border border-[#485E71]">
              <span className="font-bold block">CSCC10</span>
              <span className="text-[9px] opacity-80">11:00 - 12:30</span>
            </div>
            <div className="bg-[#4E3F32] text-[#F3EFE7] p-2 rounded border border-[#7A6451]">
              <span className="font-bold block">CSCC01</span>
              <span className="text-[9px] opacity-80">10:00 - 11:30</span>
            </div>
            <div className="bg-[#3B4436] text-[#F3EFE7] p-2 rounded border border-[#586751]">
              <span className="font-bold block">CSCD01</span>
              <span className="text-[9px] opacity-80">13:00 - 14:30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
