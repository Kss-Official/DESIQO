"use client";

import React from "react";
import { ArrowRight, Terminal } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative py-12 md:py-16 px-6 md:px-12 lg:px-16 bg-[#E8D2B5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 overflow-hidden border border-[#590907]/30 bg-gradient-to-br from-[#590907] via-[#3d0607] to-[#220405] shadow-[0_20px_50px_-15px_rgba(89,9,7,0.35)]">
          {/* Sweeping diagonal aurora light wave */}
          <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(232,210,181,0.25)_0%,_transparent_75%)] blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_transparent_70%)] blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-[-0.03em] leading-[1.08]">
              Elevate your social presence with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF4EB] via-[#E8D2B5] to-[#c7b299] drop-shadow-[0_2px_15px_rgba(232,210,181,0.3)]">
                governed AI automation.
              </span>
            </h2>

            <p className="text-[#E8D2B5]/85 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Experience the power of DESIQO&apos;s 7-agent pipeline. Deterministic safeguards, zero-spend
              free-tier model routing, and immutable human approval before any creative goes live.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:contact@kalpanaaa.com?subject=DESIQO%20Pilot%20Inquiry"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FAF4EB] text-[#590907] text-xs font-bold tracking-wider uppercase border border-[#FAF4EB] shadow-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <span>Deploy</span>
                <div className="w-5 h-5 rounded-full bg-[#590907] text-[#FAF4EB] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </a>

              <a
                href="#workflow"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/25 hover:bg-black/40 text-[#FAF4EB] text-xs font-semibold uppercase tracking-wider border border-[#E8D2B5]/30 backdrop-blur-md transition-all whitespace-nowrap shrink-0"
              >
                <Terminal size={13} className="text-[#E8D2B5]" />
                <span>Architecture</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}