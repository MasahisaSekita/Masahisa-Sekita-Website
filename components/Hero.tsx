"use client";

import { useRef } from "react";
import InteractiveHeroField from "./InteractiveHeroField";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-8 pb-16 sm:pt-12 sm:pb-20 overflow-hidden select-text border-b border-[#D5CEC0]"
    >
      {/* Radiant Glowing Red-Orange Aura (Flush against the top navbar boundary, with zero gap) */}
      <div
        className="absolute right-[-15vw] sm:right-[-6vw] md:right-[-2vw] top-[-100px] sm:top-[-140px] w-[65vw] min-w-[500px] max-w-[860px] aspect-square rounded-full pointer-events-none opacity-95 blur-2xl sm:blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 65% 45%, #E62A20 0%, #FA5B2A 30%, #FFA733 55%, rgba(250, 248, 245, 0.4) 72%, rgba(250, 248, 245, 0) 84%)",
        }}
      />

      {/* Secondary warm ambient highlight extending to the top border */}
      <div
        className="absolute right-[5vw] top-[-50px] sm:top-[-80px] w-[340px] sm:w-[480px] aspect-square rounded-full pointer-events-none opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, #FFB703 0%, #FB8500 45%, transparent 70%)",
        }}
      />

      {/* Two-Column Grid: Text on Left, Spinny Needles on Right */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typography */}
        <div className="lg:col-span-7 max-w-xl">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-[#1C1917] mb-8">
            Hello, I&apos;m Masahisa.<br />
            I&apos;m a developer.
          </h1>

          <div className="font-mono text-sm sm:text-[15px] text-[#44403C] leading-[1.8] space-y-5 max-w-lg">
            <p>
              I build AI-driven automation, high-availability growth systems, and resilient data pipelines for ecommerce and B2B platforms.
            </p>

            <p>
              I value <strong className="font-bold text-[#1C1917]">clarity</strong>, <strong className="font-bold text-[#1C1917]">resilience</strong>, and <strong className="font-bold text-[#1C1917]">integrity</strong> above all else. These ideals guide my approach to engineering and problem solving in general.
            </p>
          </div>
        </div>

        {/* Right Column: Dedicated Interactive Vector Needle Field */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <InteractiveHeroField heroRef={heroRef} />
        </div>
      </div>
    </section>
  );
}
