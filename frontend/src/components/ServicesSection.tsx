"use client";

import React, { useRef } from "react";
import {
  ArrowUpRight,
  Workflow,
  Calendar,
  PenTool,
  Palette,
  ShieldCheck,
  Send,
  BarChart2,
} from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="agents" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#E8D2B5] border-t border-[#590907]/15 overflow-hidden">
      {/* Precision Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.08)_0%,_transparent_70%)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#590907]/15">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#220709] tracking-[-0.03em]">
            The 7-Agent Architecture
          </h2>
        </div>

        {/* Horizontal Scroll Carousel Track (280px x 360px Compact Size) */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 overflow-x-auto pb-8 pt-1 px-1 scroll-smooth snap-x snap-mandatory focus:outline-none"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#590907 #E8D2B5",
            }}
          >
            {agentsData.map((agent) => {
              const Icon = agent.icon;

              return (
                <div
                  key={agent.id}
                  className="w-[270px] sm:w-[280px] min-h-[360px] snap-start shrink-0 rounded-3xl glass-panel-milled border border-[#590907]/15 hover:border-[#590907]/35 hover:bg-white/70 text-[#220709] shadow-sm hover:shadow-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div>
                    {/* Card Header Row */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#590907]/15">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono font-bold tracking-wider text-[#590907]">
                          {agent.number}
                        </span>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#590907] text-[#FAF4EB] shadow-xs">
                          <Icon size={18} strokeWidth={2.2} />
                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#590907] text-[#FAF4EB] shadow-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Card Title & Role */}
                    <div className="pt-4">
                      <h3 className="text-xl font-bold tracking-tight text-[#220709] leading-snug">
                        {agent.name}
                      </h3>
                      <p className="text-xs mt-1 font-medium text-[#5A6054] line-clamp-1">
                        {agent.role}
                      </p>
                    </div>

                    {/* Card Description */}
                    <p className="mt-4 text-[#5A6054] text-xs leading-relaxed line-clamp-6">
                      {agent.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
