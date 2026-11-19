"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#E8D2B5] bg-tech-grid pt-[180px] pb-24 flex flex-col justify-between">
      {/* Precision Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.12)_0%,_rgba(89,9,7,0.03)_50%,_transparent_75%)] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.4)_0%,_transparent_70%)] blur-[90px] pointer-events-none" />

      {/* Engineering Corner Crosshairs (+) */}
      <div className="absolute top-28 left-8 text-[#590907]/25 font-mono text-sm pointer-events-none select-none hidden md:block">
        +
      </div>
      <div className="absolute top-28 right-8 text-[#590907]/25 font-mono text-sm pointer-events-none select-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-16 left-8 text-[#590907]/25 font-mono text-sm pointer-events-none select-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-16 right-8 text-[#590907]/25 font-mono text-sm pointer-events-none select-none hidden md:block">
        +
      </div>

      {/* Left-Aligned Hero Content - Starts at 4th grid box from top */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        {/* Exact Typography Header */}
        <h1
          className="text-[44px] sm:text-[54px] md:text-[60px] font-extrabold text-[#220709] tracking-[-1.5px] leading-[1.08] md:leading-[60px]"
          style={{
            fontWeight: 800,
            letterSpacing: "-1.5px",
          }}
        >
          One platform.
          <br />
          <span className="text-[#590907]">Every social channel.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#5A6054] max-w-xl font-normal leading-relaxed">
          Your posts written, designed, scheduled and answered across every network, always in your brand&apos;s voice.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="px-7 py-3.5 rounded-full bg-[#221d18] text-white font-semibold text-sm hover:bg-[#590907] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
            Try free
          </button>
          <button className="px-7 py-3.5 rounded-full bg-white/90 border border-[#221d18]/15 text-[#221d18] font-semibold text-sm hover:bg-white hover:border-[#221d18]/30 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
            Watch intro
          </button>
        </div>
      </div>

      <div />
    </section>
  );
}