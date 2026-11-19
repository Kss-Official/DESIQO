"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  Workflow,
  Calendar,
  PenTool,
  Palette,
  ShieldCheck,
  Send,
  BarChart2,
  Lock,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ParticleMorphCanvas = dynamic(() => import("./ParticleMorphCanvas"), {
  ssr: false,
});

interface AgentItem {
  id: string;
  number: string;
  name: string;
  role: string;
  shapeName: string;
  shapeIndex: number;
  icon: React.ElementType;
  techModel: string;
  costApproach: string;
  description: string;
  coreResponsibilities: string[];
  mandatoryGuardrails: string[];
}

const agentsData: AgentItem[] = [
  {
    id: "orchestrator",
    number: "01",
    name: "Master Orchestrator",
    role: "Deterministic State Machine & Workflow Governor",
    shapeName: "3D Isometric Workflow Core",
    shapeIndex: 0,
    icon: Workflow,
    techModel: "Deterministic Backend Logic (No LLM)",
    costApproach: "Zero AI Spend (Pure Backend Code)",
    description:
      "The central nervous system of DESIQO. Coordinates all campaign jobs, assigns atomic tasks to agents, tracks state transitions, and guarantees that no post can bypass mandatory administrator approval.",
    coreResponsibilities: [
      "Campaign job creation & state transition enforcement",
      "Task delegation with timeout handling & bounded retries",
      "Immutable version-bound approval gate enforcement",
      "Global Stop-All-Posts circuit breaker monitoring",
    ],
    mandatoryGuardrails: [
      "Zero LLM in control path: routine state transitions run in code, never model tokens",
      "Any content edit automatically invalidates existing approval and re-enters queue",
    ],
  },
  {
    id: "research",
    number: "02",
    name: "Research & Event Agent",
    role: "Calendar Verification & Cultural Fact Attributions",
    shapeName: "3D Observance Matrix & Code Structure",
    shapeIndex: 1,
    icon: Calendar,
    techModel: "Shared Gemini Flash-Lite + Rule-based Calendar Engine",
    costApproach: "Free-tier API Quota (with Local Calendar Cache)",
    description:
      "Continuously monitors verified company milestones and regional festival calendars. Classifies observances, verifies cultural context, and records immutable source URLs for every factual claim.",
    coreResponsibilities: [
      "Verified festival calendar detection (Diwali, Eid, National Days, Milestones)",
      "Regional time zone and observance conflict cross-referencing",
      "Fact gathering with mandatory verified source URL recording",
      "Pre-post draft trigger generation ahead of critical dates",
    ],
    mandatoryGuardrails: [
      "Model never serves as the authority for a date; dates come from confirmed calendar tables",
      "Untrusted web content is strictly treated as data only, never instructions",
    ],
  },
  {
    id: "content",
    number: "03",
    name: "Content Agent",
    role: "Multi-Platform Copywriting & Tone Compliance",
    shapeName: "3D Ascending Content Wave & Growth Chart",
    shapeIndex: 2,
    icon: PenTool,
    techModel: "Shared Gemini Text Model",
    costApproach: "Free-tier Quota with Strict JSON Schemas",
    description:
      "Generates platform-tailored copy (LinkedIn thought leadership, Instagram visual story, Facebook, Pinterest) while strictly enforcing brand voice and eliminating hallucinated company claims.",
    coreResponsibilities: [
      "Platform-specific variant generation (LinkedIn, Instagram, Meta, Pinterest)",
      "Cultural-aware greetings and contextual brand storytelling",
      "Hashtag research and targeted call-to-action formulation",
      "Strict brand vocabulary and prohibited-claim filtering",
    ],
    mandatoryGuardrails: [
      "Must not invent offers, statistics, salary figures, or unverified company claims",
      "Captions automatically formatted to platform-specific length constraints",
    ],
  },
  {
    id: "design",
    number: "04",
    name: "Design Agent",
    role: "Visual Direction & Programmatic Template Renderer",
    shapeName: "3D Double Helix Brand DNA",
    shapeIndex: 3,
    icon: Palette,
    techModel: "ChatGPT + Stitch (Manual Concept) + Programmatic Template Renderer",
    costApproach: "No Automated Image API (Deterministic Brand Templates)",
    description:
      "Translates event briefs into visual prompts for manual exploration in Google Stitch & ChatGPT. Renders pixel-perfect final production posters from approved templates with programmatically placed logos and typography.",
    coreResponsibilities: [
      "Creative brief formulation with visual hierarchy guidelines",
      "Manual design exploration workflow integration (Stitch & ChatGPT)",
      "Programmatic poster rendering from reusable brand templates",
      "Exact placement of corporate logo, palette (#590907, #E8D2B5), and typography",
    ],
    mandatoryGuardrails: [
      "Never relies on AI-drawn text or hallucinated logos on poster graphics",
      "Paid image generation (DALL-E/Midjourney) deferred to Tier 1 budget approval",
    ],
  },
  {
    id: "compliance",
    number: "05",
    name: "Quality & Compliance Agent",
    role: "Brand Adherence, Factual Accuracy & Cultural Safety",
    shapeName: "3D Multi-Point Safety Astroid & Shield",
    shapeIndex: 4,
    icon: ShieldCheck,
    techModel: "Rule-based Engine + Shared Gemini Model + Human Checklist",
    costApproach: "Free-tier Quota + Deterministic Brand Assertions",
    description:
      "Performs deep multi-layer checks on spelling, formatting, dates, platform limits, brand tone, and a critical cultural-safety checklist covering festival, regional, and religious sensitivities.",
    coreResponsibilities: [
      "Automated brand conformity validation (logo, colors, typography, tone)",
      "Factual claim and source attribution cross-checking",
      "Festival sensitivity, regional appropriateness, and solemnity review",
      "Compilation of review warnings for the human administrator",
    ],
    mandatoryGuardrails: [
      "Automated checks assist the reviewer; they can flag issues but cannot override approval",
      "Sensitive holiday timing or mourning periods trigger automatic pause flags",
    ],
  },
  {
    id: "publishing",
    number: "06",
    name: "Publishing & Scheduling Agent",
    role: "OAuth Gateway, Timezone Scheduler & Idempotent Dispatch",
    shapeName: "3D Connected Security Node Network",
    shapeIndex: 5,
    icon: Send,
    techModel: "Official Social Platform APIs (LinkedIn, Meta, X, Pinterest)",
    costApproach: "Direct Platform Adapters (No LLM in publishing path)",
    description:
      "Safely manages official platform integrations with AES-256-GCM token encryption. Schedules posts based on exact time zones, enforces idempotency keys, and provides instant circuit-breaker controls.",
    coreResponsibilities: [
      "Timezone-aware scheduling and platform-specific payload formatting",
      "AES-256-GCM token vault management with server-side refresh",
      "Idempotency enforcement to eliminate duplicate publication risks",
      "Instant 'Stop-All-Posts' global and per-platform circuit breaker",
    ],
    mandatoryGuardrails: [
      "Publishes only the exact approved version; any subsequent edit aborts publishing",
      "Social login credentials strictly isolated from publishing access tokens",
    ],
  },
  {
    id: "analytics",
    number: "07",
    name: "Analytics Agent",
    role: "Telemetry Aggregation & Natural Language Summaries",
    shapeName: "3D Ascending Content Wave & Growth Chart",
    shapeIndex: 2,
    icon: BarChart2,
    techModel: "Backend Telemetry Aggregator + Shared Gemini Model",
    costApproach: "Free-tier Gemini for Natural Language Summaries",
    description:
      "Aggregates real-time post performance metrics from connected social APIs. Uses deterministic backend math for engagement calculations, with Gemini producing executive summaries and timing recommendations.",
    coreResponsibilities: [
      "Social platform API metric collection (impressions, clicks, shares)",
      "Deterministic calculation of engagement rates and audience resonance",
      "Executive summary generation for marketing leadership",
      "Gradual best-time-to-post recommendations based on historical data",
    ],
    mandatoryGuardrails: [
      "Gemini explains results; it never invents or calculates raw metrics",
      "Unavailable metrics are clearly labeled as unavailable rather than guessed",
    ],
  },
];

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeAgent = agentsData[activeIdx];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (index: number) => {
    setActiveIdx(index);
    if (scrollContainerRef.current) {
      const cardElements = scrollContainerRef.current.children;
      if (cardElements[index]) {
        (cardElements[index] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIdx > 0 ? activeIdx - 1 : agentsData.length - 1;
    handleSelect(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIdx < agentsData.length - 1 ? activeIdx + 1 : 0;
    handleSelect(nextIdx);
  };

  return (
    <section id="agents" className="relative py-32 px-6 md:px-12 lg:px-16 bg-[#E8D2B5] border-t border-[#590907]/15 overflow-hidden">
      {/* Precision Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.08)_0%,_transparent_70%)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Horizontal Scroll Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#590907]/15">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#5A6054] mb-3 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#590907] ring-4 ring-[#590907]/30" />
              <span>Section 3 // Final Catalogue</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#220709] tracking-[-0.03em]">
              The 7-Agent Architecture
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-[#5A6054] font-bold">
              [{activeAgent.number} / 07] • Scroll Horizontally
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#590907] text-[#590907] hover:text-[#FAF4EB] border border-[#590907]/20 flex items-center justify-center transition-all duration-200 shadow-sm"
                aria-label="Previous Agent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#590907] hover:bg-[#730d0a] text-[#FAF4EB] border border-[#590907] flex items-center justify-center transition-all duration-200 shadow-md shadow-[#590907]/25"
                aria-label="Next Agent"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Left Pinned 3D Chamber, Right Horizontal Scroll Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Pinned 3D Morphing Chamber (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-3xl glass-panel-milled p-5 relative overflow-hidden border border-[#590907]/20 shadow-xl">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#590907]/15 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <span className="text-[#590907] font-bold tracking-wider uppercase">
                    3D Vertex Engine
                  </span>
                </div>
                <div className="text-[#5A6054]">
                  [NODE: {activeAgent.number}]
                </div>
              </div>

              {/* 3D Morphing Canvas */}
              <div className="w-full aspect-square max-h-[380px] flex items-center justify-center relative">
                <ParticleMorphCanvas activeShapeIndex={activeAgent.shapeIndex} />
              </div>

              {/* Telemetry Footer */}
              <div className="mt-3 pt-3 border-t border-[#590907]/15 space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[#5A6054]">Active Agent:</span>
                  <span className="text-[#590907] font-bold">{activeAgent.name}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#5A6054]">
                  <span>Geometry:</span>
                  <span className="text-[#7a0e12] font-semibold">{activeAgent.shapeName}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: HORIZONTAL SCROLL CAROUSEL TRACK (8 cols) */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-5 overflow-x-auto pb-8 pt-1 px-1 scroll-smooth snap-x snap-mandatory focus:outline-none"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#590907 #E8D2B5",
              }}
            >
              {agentsData.map((agent, index) => {
                const isActive = activeIdx === index;
                const Icon = agent.icon;

                return (
                  <div
                    key={agent.id}
                    onClick={() => handleSelect(index)}
                    className={`snap-start shrink-0 cursor-pointer rounded-3xl border transition-all duration-300 p-7 flex flex-col justify-between ${
                      isActive
                        ? "w-[440px] sm:w-[500px] lg:w-[540px] bg-gradient-to-br from-[#590907] via-[#450709] to-[#2c0506] text-[#FAF4EB] border-[#590907] shadow-2xl shadow-[#590907]/35 scale-[1.01]"
                        : "w-[260px] sm:w-[300px] glass-panel-milled border-[#590907]/15 hover:border-[#590907]/35 text-[#220709] hover:bg-white/60"
                    }`}
                  >
                    <div>
                      {/* Card Header Row */}
                      <div className="flex items-center justify-between pb-4 border-b border-current/15">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-sm font-mono font-bold tracking-wider ${
                              isActive ? "text-[#FAF4EB]" : "text-[#590907]"
                            }`}
                          >
                            {agent.number}
                          </span>
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                              isActive
                                ? "bg-[#FAF4EB] text-[#590907] border-[#FAF4EB]"
                                : "bg-white/80 text-[#590907] border-[#590907]/20"
                            }`}
                          >
                            <Icon size={18} strokeWidth={2.2} />
                          </div>
                        </div>

                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-[#FAF4EB] text-[#590907] rotate-45 shadow-md"
                              : "bg-white/80 text-[#590907]"
                          }`}
                        >
                          <ArrowUpRight size={16} strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Card Title & Role */}
                      <div className="pt-4">
                        <h3
                          className={`text-xl sm:text-2xl font-bold tracking-tight ${
                            isActive ? "text-white" : "text-[#220709]"
                          }`}
                        >
                          {agent.name}
                        </h3>
                        <p
                          className={`text-xs mt-1 font-medium line-clamp-1 ${
                            isActive ? "text-[#E8D2B5]" : "text-[#5A6054]"
                          }`}
                        >
                          {agent.role}
                        </p>
                      </div>

                      {/* Expanded Details when Active */}
                      {isActive ? (
                        <div className="mt-4 space-y-4">
                          <p className="text-[#FAF4EB]/90 text-xs sm:text-sm leading-relaxed font-normal">
                            {agent.description}
                          </p>

                          {/* Tech Badges */}
                          <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                            <span className="px-2.5 py-1 rounded-md bg-black/30 border border-[#FAF4EB]/30 text-[#FAF4EB]">
                              ⚡ {agent.techModel}
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-black/30 border border-[#E8D2B5]/30 text-[#E8D2B5]">
                              💰 {agent.costApproach}
                            </span>
                          </div>

                          {/* Responsibilities & Safeguards */}
                          <div className="pt-4 border-t border-[#FAF4EB]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8D2B5] font-bold block mb-2">
                                Actions
                              </span>
                              <ul className="space-y-1.5">
                                {agent.coreResponsibilities.slice(0, 3).map((item) => (
                                  <li
                                    key={item}
                                    className="text-[11px] text-[#FAF4EB] flex items-start gap-1.5"
                                  >
                                    <CheckCircle2 size={11} className="text-[#E8D2B5] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffd0cb] font-bold block mb-2">
                                Safeguards
                              </span>
                              <ul className="space-y-1.5">
                                {agent.mandatoryGuardrails.map((rule) => (
                                  <li
                                    key={rule}
                                    className="text-[11px] text-[#ffd0cb] flex items-start gap-1.5"
                                  >
                                    <Lock size={11} className="text-[#ff928a] mt-0.5 shrink-0" />
                                    <span>{rule}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="mt-4 text-[#5A6054] text-xs leading-relaxed line-clamp-3">
                          {agent.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Status / Selection prompt */}
                    <div className="pt-4 border-t border-current/15 flex items-center justify-between text-[10px] font-mono">
                      <span className={isActive ? "text-[#E8D2B5]" : "text-[#5A6054]"}>
                        {isActive ? "ACTIVE SELECTION" : "CLICK TO EXPAND"}
                      </span>
                      <span className={isActive ? "text-[#FAF4EB] font-bold" : "text-[#590907]"}>
                        {isActive ? "SYNCHRONIZED" : "3D Topo"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
