"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroPhonesShowcase from "./HeroPhonesShowcase";

const PLATFORMS = ["Instagram", "Facebook", "Twitter", "LinkedIn"];

export default function HeroSection() {
  const [platformIndex, setPlatformIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlatformIndex((prev) => (prev + 1) % PLATFORMS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    const target = document.getElementById("agents");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#E8D2B5] bg-tech-grid pt-[180px] pb-24 flex flex-col justify-between">
      {/* Precision Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.12)_0%,_rgba(89,9,7,0.03)_50%,_transparent_75%)] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.08)_0%,_rgba(255,255,255,0.45)_50%,_transparent_75%)] blur-[110px] pointer-events-none" />

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

      {/* Hero Content: Left-aligned content + Right-side hero showcase image */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Heading, Subtitle & CTAs */}
        <div className="lg:col-span-6 xl:col-span-5 text-left">
          {/* Exact Typography Header - 4th Box Alignment */}
          <h1
            className="text-[44px] sm:text-[54px] md:text-[60px] font-extrabold text-[#221d18] tracking-[-1.5px] leading-[1.08] md:leading-[60px]"
            style={{
              fontWeight: 800,
              letterSpacing: "-1.5px",
            }}
          >
            One platform.
            <br />
            <span className="inline-flex items-baseline whitespace-nowrap">
              <span className="text-[#221d18]">For&nbsp;</span>
              <span className="inline-grid grid-cols-1 [clip-path:inset(-10px_-6px_-24px_-6px)] pb-1 -mb-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={PLATFORMS[platformIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="col-start-1 row-start-1 text-[#590907]"
                  >
                    {PLATFORMS[platformIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-[#221d18]">&nbsp;Automation.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#5A6054] max-w-xl font-normal leading-relaxed">
            Create compelling content, plan your publishing, and engage with your audience across every channel while staying true to your brand.
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

        {/* Right Column: Hero Mockup Showcase with 5 independently moving 3D cards */}
        <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end">
          <HeroPhonesShowcase />
        </div>
      </div>

      {/* Bottom Center Scroll Down Indicator */}
      <div className="relative z-30 flex justify-center w-full pt-8 pb-4">
        <button
          onClick={handleScrollDown}
          aria-label="Scroll down to explore"
          className="group flex flex-col items-center gap-1.5 cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#590907]/60 group-hover:text-[#590907] transition-colors duration-200">
            Scroll to explore
          </span>
          <div className="w-8 h-8 rounded-full border border-[#590907]/25 bg-white/50 backdrop-blur-sm flex items-center justify-center shadow-xs group-hover:border-[#590907]/60 group-hover:bg-white/90 group-hover:shadow-md transition-all duration-300">
            <ChevronDown className="w-4 h-4 text-[#590907] animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}