export default function ThrillWheelsPreview() {
  return (
    <div className="w-full bg-[#1C1917] rounded-xl overflow-hidden border border-[#3E3835] shadow-lg text-stone-200 text-xs font-mono select-none">
      {/* Top browser bar */}
      <div className="bg-[#262220] px-4 py-2.5 flex items-center justify-between border-b border-[#3E3835]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]/80 inline-block" />
          <div className="ml-3 px-3 py-0.5 rounded bg-[#181615] text-[#A8A29E] text-[11px] border border-[#332D2A] flex items-center gap-1.5">
            <span className="text-[#98C379]">🔒</span>
            <span>https://thrillwheels.com</span>
          </div>
        </div>
        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#61AFEF]/10 text-[#61AFEF] border border-[#61AFEF]/20">
          Production Web App
        </span>
      </div>

      {/* Mockup Preview Body */}
      <div className="p-4 sm:p-5 bg-[#141211] space-y-3 font-sans">
        <div className="flex items-center justify-between border-b border-[#2B2724] pb-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-white tracking-wider">THRILL BICYCLES</span>
            <span className="text-[#78716C] text-[11px] hidden sm:inline">| Built by PT. Lajukarsa Global Industri</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#98C379]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#98C379] animate-pulse" />
            <span>Airflow ETL: Active</span>
          </div>
        </div>

        {/* Categories strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
          <div className="bg-[#1F1B19] p-2.5 rounded border border-[#2F2925] text-center">
            <div className="text-white font-medium">E-Volare Series</div>
            <div className="text-[10px] text-[#A8A29E] font-mono mt-0.5">Electric E-Bikes</div>
          </div>
          <div className="bg-[#1F1B19] p-2.5 rounded border border-[#2F2925] text-center">
            <div className="text-white font-medium">Ricochet MTB</div>
            <div className="text-[10px] text-[#A8A29E] font-mono mt-0.5">Dual-Suspension</div>
          </div>
          <div className="bg-[#1F1B19] p-2.5 rounded border border-[#2F2925] text-center">
            <div className="text-white font-medium">Fiery BMX</div>
            <div className="text-[10px] text-[#A8A29E] font-mono mt-0.5">Racing &amp; Street</div>
          </div>
          <div className="bg-[#1F1B19] p-2.5 rounded border border-[#2F2925] text-center">
            <div className="text-white font-medium">Dealer Locator</div>
            <div className="text-[10px] text-[#A8A29E] font-mono mt-0.5">Interactive Map</div>
          </div>
        </div>

        {/* Backend pipeline status note */}
        <div className="bg-[#1B1816] p-2.5 rounded border border-[#292421] text-[11px] text-[#A8A29E] font-mono flex items-center justify-between">
          <span>Consolidated REST APIs: Multi-ERP database synchronization</span>
          <span className="text-[#E5C07B] hidden sm:inline">-2 to 3 hrs/day manual reporting</span>
        </div>
      </div>
    </div>
  );
}
