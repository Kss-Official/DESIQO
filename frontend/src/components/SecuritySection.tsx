"use client";

import React from "react";
import {
  ShieldCheck,
  Lock,
  StopCircle,
  Database,
  Key,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCw,
  FileText,
} from "lucide-react";

export default function SecuritySection() {
  const securityPillars = [
    {
      icon: Lock,
      title: "Mandatory Human Approval Gate",
      ref: "Section 8.4 // Zero Bypass",
      description:
        "Every publication must be explicitly approved by an authorized administrator. Approvals strictly bind to the exact version, rendered image, and target account. Any subsequent edit immediately voids the approval and returns content to review.",
    },
    {
      icon: StopCircle,
      title: "Global 'Stop-All-Posts' Circuit Breaker",
      ref: "Section 8.4 & 8.5 // Incident Response",
      description:
        "An instant master killswitch immediately halts all queued, scheduled, and retrying posts across all platforms in the event of sensitive news, unexpected crises, or platform anomalies.",
    },
    {
      icon: Key,
      title: "AES-256-GCM Token Encryption",
      ref: "Section 8.3 // Token Vault",
      description:
        "Social-account publishing credentials use envelope encryption at rest with keys held in a dedicated KMS. Social login authentication tokens are strictly separated from publishing authorization scopes.",
    },
    {
      icon: Database,
      title: "Deterministic State & Idempotency",
      ref: "Section 3.2.1 // No LLM Control",
      description:
        "All state transitions, queue scheduling, and retry attempts run in deterministic backend code rather than LLM tokens. Unique idempotency keys guarantee zero duplicate social posts on network retries.",
    },
  ];

  const deliveryPhases = [
    { phase: "Phase 1", title: "Foundation", status: "Complete", desc: "Workspace schema, token vault, Gemini client, festival calendar baseline" },
    { phase: "Phase 2", title: "Event & Content", status: "Active", desc: "Research Agent, Content Agent, platform caption generation & validation" },
    { phase: "Phase 3", title: "Design & Posters", status: "In Progress", desc: "Manual Stitch exploration, SVG/HTML brand templates & programmatic renderer" },
    { phase: "Phase 4", title: "Review Safeguards", status: "Ready", desc: "Versioned review queue, cultural safety checklist, mandatory approval gate" },
    { phase: "Phase 5", title: "Publishing Adapter", status: "Planned", desc: "LinkedIn Company Page API, time-zone scheduler, idempotency tracking" },
    { phase: "Phase 6", title: "Monitoring & Audit", status: "Planned", desc: "Token expiry warnings, cost tracking, immutable audit trail, analytics" },
    { phase: "Phase 7", title: "Enterprise Expansion", status: "Future", desc: "Multi-company workspace isolation, additional platforms (Pinterest, X)" },
  ];

  return (
    <section id="security" className="relative py-32 px-6 md:px-12 lg:px-16 bg-[#E8D2B5] border-t border-[#590907]/15 overflow-hidden">
      {/* Precision Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.08)_0%,_transparent_70%)] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-28">
        {/* Part 1: Security & Governance */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-[#590907]/15">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#5A6054] mb-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#590907] ring-4 ring-[#590907]/30" />
                <span>Section 8 // Security & Governance</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#220709] tracking-[-0.03em]">
                Enterprise Production Safeguards
              </h2>
            </div>
            <p className="max-w-md text-[#484c42] text-sm md:text-base leading-relaxed font-normal">
              Designed from first principles to eliminate AI hallucinations, accidental dispatches,
              and brand reputation risks before any post reaches public channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 sm:p-10 rounded-3xl glass-panel-milled border border-[#590907]/15 hover:border-[#590907]/35 transition-all duration-300 space-y-5 group relative overflow-hidden shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#590907] border border-[#590907] flex items-center justify-center text-[#FAF4EB] group-hover:scale-105 transition-all shadow-md shadow-[#590907]/25">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-white/70 border border-[#590907]/20 text-[#590907] font-bold">
                      {pillar.ref}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#220709] tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#484c42] leading-[1.7] font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Section 11 Delivery Phases */}
        <div id="phases">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#590907]/15">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#5A6054] mb-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#590907] ring-4 ring-[#590907]/30" />
                <span>Section 11 // Product Roadmap</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#220709] tracking-tight">
                7-Phase Delivery Blueprint
              </h3>
            </div>
            <span className="text-xs font-mono text-[#5A6054] uppercase tracking-wider font-semibold">
              Internal Pilot (V1) → Multi-Company SaaS (Phase 7)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliveryPhases.map((phase) => (
              <div
                key={phase.phase}
                className="p-6 rounded-2xl glass-panel-milled border border-[#590907]/15 flex flex-col justify-between space-y-4 hover:border-[#590907]/35 transition-all duration-300 group shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#590907]">
                    {phase.phase}
                  </span>
                  <span
                    className={`text-[9px] font-mono uppercase px-2.5 py-0.5 rounded-full ${
                      phase.status === "Complete"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-400 font-bold"
                        : phase.status === "Active"
                        ? "bg-[#590907] text-[#FAF4EB] border border-[#590907] animate-pulse font-bold"
                        : "bg-white/70 text-[#5A6054] border border-[#590907]/20"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#220709] tracking-tight">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-[#484c42] mt-2 leading-[1.65]">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
