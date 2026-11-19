"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Mail, Terminal } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 lg:px-16 bg-[#E8D2B5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] p-10 md:p-20 lg:p-24 overflow-hidden border border-[#590907]/30 bg-gradient-to-br from-[#590907] via-[#3d0607] to-[#220405] shadow-[0_25px_70px_-15px_rgba(89,9,7,0.4)]">
          {/* Sweeping diagonal aurora light wave */}
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(232,210,181,0.25)_0%,_transparent_75%)] blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_transparent_70%)] blur-[100px] pointer-events-none" />

          {/* Micro HUD Crosshair */}
          <div className="absolute top-8 right-10 text-[#E8D2B5]/50 font-mono text-xs hidden sm:block">
            DESIQO // PILOT GATE
          </div>

          <div className="relative z-10 max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/30 border border-[#E8D2B5]/35 text-xs font-mono uppercase tracking-widest text-[#FAF4EB]">
              <Sparkles size={13} className="text-[#E8D2B5]" />
              <span>Kalpanaaa Software Solutions // Internal Pilot V1</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.035em] leading-[1.02]">
              Elevate your social presence with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF4EB] via-[#E8D2B5] to-[#c7b299] drop-shadow-[0_2px_20px_rgba(232,210,181,0.35)]">
                governed AI automation.
              </span>
            </h2>

            <p className="text-[#E8D2B5]/85 text-base md:text-lg max-w-xl font-normal leading-[1.7]">
              Experience the power of DESIQO's 7-agent pipeline. Deterministic safeguards, zero-spend
              free-tier model routing, and immutable human approval before any creative goes live.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:contact@kalpanaaa.com?subject=DESIQO%20Pilot%20Inquiry"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FAF4EB] text-[#590907] text-sm font-bold tracking-wider uppercase border border-[#FAF4EB] shadow-2xl hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 animate-shimmer whitespace-nowrap shrink-0"
              >
                <span>Deploy</span>
                <div className="w-7 h-7 rounded-full bg-[#590907] text-[#FAF4EB] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </div>
              </a>

              <a
                href="#workflow"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-black/25 hover:bg-black/40 text-[#FAF4EB] text-xs font-semibold uppercase tracking-wider border border-[#E8D2B5]/30 backdrop-blur-md transition-all whitespace-nowrap shrink-0"
              >
                <Terminal size={14} className="text-[#E8D2B5]" />
                <span>Architecture</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
