"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Clock,
  Layers,
  Lock,
  Calendar,
  Share2,
  FileCheck,
  Zap,
  Terminal,
  Eye,
  Sliders,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkflowStage {
  id: string;
  stageNumber: string;
  title: string;
  owner: string;
  category: "Intelligence" | "Design" | "Validation" | "Publishing" | "Governance";
  summary: string;
  docReference: string;
  auditOutput: string;
  statusBadge: string;
  postSample?: {
    platform: string;
    caption: string;
    headline: string;
    hashtags: string[];
  };
}

const workflowStagesData: WorkflowStage[] = [
  {
    id: "calendar-detection",
    stageNumber: "01",
    title: "Event & Festival Detection",
    owner: "Research & Event Agent",
    category: "Intelligence",
    summary:
      "Automated monitoring of verified company milestones and regional cultural observances. Authoritative dates are checked against curated calendars before initiating any drafting.",
    docReference: "Section 3.2.2 & Appendix F.2",
    auditOutput: "Event Detected: National Technology Day (11 May) - Region: India (IST) - Source: National Registry Verified",
    statusBadge: "Verified Source",
  },
  {
    id: "fact-gathering",
    stageNumber: "02",
    title: "Contextual Research & Sourcing",
    owner: "Research & Event Agent",
    category: "Intelligence",
    summary:
      "Fact-checking engine records verified URLs for every historical claim, date, and observance fact. Web content is treated strictly as raw data—never as executable instructions.",
    docReference: "Section 4.3 & Appendix D.3",
    auditOutput: "Source URLs Captured: 3 verified domain citations. Zero ungrounded claims detected.",
    statusBadge: "Anti-Hallucination",
  },
  {
    id: "content-generation",
    stageNumber: "03",
    title: "Multi-Platform Copy & Hashtags",
    owner: "Content Agent",
    category: "Design",
    summary:
      "Generates platform-specific caption variants tailored for LinkedIn (thought leadership), Instagram (visual story), Facebook, and Pinterest with brand-aligned vocabulary and prohibited-claim filters.",
    docReference: "Section 3.2.3 & Appendix F.2",
    auditOutput: "Variants: 4 tailored posts generated. 0 prohibited claims. Character lengths within platform limits.",
    statusBadge: "Platform Specific",
    postSample: {
      platform: "LinkedIn Professional",
      headline: "Innovating at the Frontier of Autonomous Engineering",
      caption: "On National Technology Day, Kalpanaaa Software Solutions celebrates the engineers and researchers turning complex algorithms into real-world enterprise infrastructure. From deterministic AI governance to scalable cloud systems, we build what matters.",
      hashtags: ["#Kalpanaaa", "#TechDay2026", "#AIGovernance", "#EnterpriseAI", "#EngineeringExcellence"],
    },
  },
  {
    id: "template-rendering",
    stageNumber: "04",
    title: "Programmatic Poster Rendering",
    owner: "Design Agent",
    category: "Design",
    summary:
      "Combines manual Stitch exploration with deterministic code templates. Places Kalpanaaa's official logo, brand colors (#590907, #E8D2B5), and verified headings programmatically.",
    docReference: "Section 2.3 & Appendix E.1",
    auditOutput: "Poster Rendered: 1080x1080 & 1200x628 SVG/PNG outputs with exact vector logo & font overlay.",
    statusBadge: "Deterministic Layout",
    postSample: {
      platform: "Instagram // 1080x1080 Square",
      headline: "Code. Innovate. Elevate.",
      caption: "A culture of relentless precision. Honoring technological breakthroughs that shape modern computing.",
      hashtags: ["#KalpanaaaSoftware", "#CodeInnovateElevate", "#DesignSystems"],
    },
  },
  {
    id: "compliance-checks",
    stageNumber: "05",
    title: "Brand & Cultural-Safety Review",
    owner: "Quality & Compliance Agent",
    category: "Validation",
    summary:
      "Runs automated assertions against brand profile rules and passes content through a human-supervised cultural checklist (regional, religious, festival, and solemn-timing sensitivities).",
    docReference: "Section 3.2.5 & Appendix D.1",
    auditOutput: "Cultural Safety: Passed. Timing conflict: None. Brand adherence score: 100%.",
    statusBadge: "Pre-Approval Pass",
  },
  {
    id: "admin-approval-gate",
    stageNumber: "06",
    title: "Mandatory Administrator Review",
    owner: "Human Administrator",
    category: "Governance",
    summary:
      "Zero-bypass human decision gate. Approval strictly binds to the exact version, media asset, and destination account. Any subsequent edit immediately revokes approval.",
    docReference: "Section 8.4 & Appendix G",
    auditOutput: "Review Item: v1.0.2 approved by Admin [ID: admin-01] at 2026-11-19 11:40:00 UTC. Hash locked.",
    statusBadge: "Zero Bypass Gate",
  },
  {
    id: "idempotent-publishing",
    stageNumber: "07",
    title: "Timezone Dispatch & Stop-All-Posts",
    owner: "Publishing & Scheduling Agent",
    category: "Publishing",
    summary:
      "Per-platform adapters publish through official LinkedIn, Meta, X, and Pinterest APIs using idempotency keys to prevent duplicate posts. The global circuit breaker can halt all jobs instantly.",
    docReference: "Section 6 & Section 8.4",
    auditOutput: "LinkedIn Post ID: urn:li:share:987263541. Idempotency Key verified. Zero duplicate dispatches.",
    statusBadge: "Idempotent Safe",
  },
];

export default function CaseStudiesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"audit" | "post">("audit");
  const activeStage = workflowStagesData[hoveredIdx];

  return (
    <section id="workflow" className="relative py-32 px-6 md:px-12 lg:px-16 bg-[#E8D2B5] border-t border-[#590907]/15 overflow-hidden">
      {/* Precision Ambient Glows */}
      <div className="absolute top-1/3 right-0 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.08)_0%,_transparent_70%)] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-[#590907]/15">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#220709] tracking-[-0.03em]">
              End-to-End Workflow & Guardrails
            </h2>
          </div>
          <p className="max-w-md text-[#484c42] text-sm md:text-base leading-relaxed">
            From calendar observance detection to idempotent social dispatch, every step is
            logged into an immutable audit trail with zero unapproved releases.
          </p>
        </div>

        {/* Layout: Left 68% Stages, Right 32% Floating Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Rows: Workflow Stages (8 cols) */}
          <div className="lg:col-span-8 divide-y divide-[#590907]/15">
            {workflowStagesData.map((stage, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={stage.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`group py-7 px-5 -mx-5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5 ${
                    isHovered
                      ? "bg-white/70 pl-7 border-l-2 border-[#590907] shadow-lg"
                      : "hover:bg-white/40"
                  }`}
                >
                  {/* Left: Number + Title + Owner */}
                  <div className="flex items-start md:items-center gap-5">
                    <span
                      className={`text-sm font-mono transition-colors duration-200 pt-1 md:pt-0 ${
                        isHovered ? "text-[#590907] font-bold" : "text-[#5A6054]"
                      }`}
                    >
                      {stage.stageNumber}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3
                          className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-all duration-200 ${
                            isHovered
                              ? "text-[#590907] translate-x-1"
                              : "text-[#220709]"
                          }`}
                        >
                          {stage.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-[#484c42] mt-1.5 font-normal line-clamp-1">
                        Owner: <span className="text-[#590907] font-bold">{stage.owner}</span> • {stage.summary}
                      </p>
                    </div>
                  </div>

                  {/* Right: Category Pill + Status */}
                  <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                    <span
                      className={`text-[10px] md:text-xs font-mono uppercase px-3 py-1 rounded-full border transition-colors ${
                        isHovered
                          ? "border-[#590907] text-[#FAF4EB] bg-[#590907]"
                          : "border-[#590907]/20 text-[#590907] bg-white/60"
                      }`}
                    >
                      {stage.statusBadge}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-[#590907] text-[#FAF4EB] rotate-45 scale-105 shadow-md shadow-[#590907]/30"
                          : "bg-white/70 text-[#590907]"
                      }`}
                    >
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Floating Synchronized Command Center (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-3xl glass-panel-milled p-6 border border-[#590907]/20 shadow-xl relative overflow-hidden space-y-5">
              {/* Top Bar Window Controls & Interactive Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-[#590907]/15">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#590907]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7a0e12]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5A6054]/40" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTab("audit")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeTab === "audit"
                        ? "bg-[#590907] text-[#FAF4EB] font-bold"
                        : "text-[#5A6054] hover:text-[#590907]"
                    }`}
                  >
                    Telemetry Log
                  </button>
                  <button
                    onClick={() => setActiveTab("post")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeTab === "post"
                        ? "bg-[#590907] text-[#FAF4EB] font-bold"
                        : "text-[#5A6054] hover:text-[#590907]"
                    }`}
                  >
                    Creative Preview
                  </button>
                </div>
              </div>

              {/* Animated Live Window View */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeStage.id}-${activeTab}`}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  {/* View 1: Telemetry / Audit Mode */}
                  {activeTab === "audit" ? (
                    <div className="rounded-2xl bg-white/80 border border-[#590907]/15 p-4 space-y-3 font-mono text-[11px] shadow-sm">
                      <div className="flex items-center justify-between text-[#5A6054]">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                          [ORCHESTRATOR-JOB-7701]
                        </span>
                        <span className="text-[10px] text-[#5A6054]/80">{activeStage.docReference}</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#E8D2B5]/50 border border-[#590907]/10 text-[#220709] leading-relaxed">
                        {activeStage.auditOutput}
                      </div>

                      <div className="pt-2 border-t border-[#590907]/10 flex items-center justify-between text-[10px]">
                        <span className="text-[#5A6054]">Circuit Breaker:</span>
                        <span className="text-emerald-700 font-bold">ARMED & NORMAL</span>
                      </div>

                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#5A6054]">Token Vault:</span>
                        <span className="text-[#590907] font-semibold">AES-256-GCM ROTATED</span>
                      </div>
                    </div>
                  ) : (
                    /* View 2: Creative Post Mockup Mode */
                    <div className="rounded-2xl bg-white/80 border border-[#590907]/15 p-4 space-y-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-[#590907] flex items-center justify-center text-[10px] font-bold text-[#FAF4EB]">
                            K
                          </div>
                          <span className="text-xs font-bold text-[#220709]">
                            Kalpanaaa Software Solutions
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-400">
                          Approved
                        </span>
                      </div>

                      <div className="text-xs text-[#220709] leading-relaxed font-normal">
                        {activeStage.postSample?.caption ||
                          "Automating complex enterprise workflows with zero-leakage security, deterministic validation, and human-in-the-loop review."}
                      </div>

                      {/* Poster Art Mockup Box */}
                      <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-[#590907] via-[#3a0605] to-[#240405] text-[#FAF4EB] border border-[#590907]/30 p-3.5 flex flex-col justify-between relative overflow-hidden shadow-md">
                        <div className="text-[9px] font-mono uppercase text-[#E8D2B5] tracking-widest">
                          DESIQO // OFFICIAL BRAND ASSET
                        </div>
                        <div>
                          <div className="text-sm font-black text-[#FAF4EB] tracking-tight">
                            {activeStage.postSample?.headline || "Code. Innovate. Elevate."}
                          </div>
                          <div className="text-[9px] font-mono text-[#E8D2B5]/80 mt-0.5">
                            Kalpanaaa Software Solutions Pvt Ltd
                          </div>
                        </div>
                      </div>

                      {/* Hashtags */}
                      <div className="flex flex-wrap gap-1 text-[10px] font-mono text-[#590907]">
                        {(activeStage.postSample?.hashtags || ["#Kalpanaaa", "#EnterpriseAI", "#Guardrails"]).map(
                          (tag) => (
                            <span key={tag}>{tag}</span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Summary Details */}
                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-lg font-bold text-[#220709] tracking-tight">
                      {activeStage.title}
                    </h4>
                    <p className="text-xs text-[#484c42] leading-relaxed">
                      {activeStage.summary}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#security"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#590907] hover:bg-[#730d0a] text-[#FAF4EB] text-xs font-bold uppercase tracking-wider border border-[#590907] shadow-lg shadow-[#590907]/25 transition-all"
                    >
                      <span>Inspect Security Architecture</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
