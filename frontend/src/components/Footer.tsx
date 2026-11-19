"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navColumns = [
    {
      title: "7-Agent System",
      links: [
        { label: "01 Master Orchestrator", href: "#agents" },
        { label: "02 Research & Event", href: "#agents" },
        { label: "03 Content & Tone", href: "#agents" },
        { label: "04 Design & Templates", href: "#agents" },
        { label: "05 Quality & Compliance", href: "#agents" },
        { label: "06 Publishing Gateway", href: "#agents" },
        { label: "07 Analytics Engine", href: "#agents" },
      ],
    },
    {
      title: "Security & Guardrails",
      links: [
        { label: "Mandatory Admin Gate", href: "#security" },
        { label: "Stop-All-Posts Circuit", href: "#security" },
        { label: "AES-256-GCM Token Vault", href: "#security" },
        { label: "Cultural Safety Checklist", href: "#security" },
        { label: "Idempotent Publishing", href: "#security" },
      ],
    },
    {
      title: "Roadmap (Phases)",
      links: [
        { label: "Phase 1: Foundation (V1)", href: "#phases" },
        { label: "Phase 2: Event & Content", href: "#phases" },
        { label: "Phase 3: Design & Posters", href: "#phases" },
        { label: "Phase 5: LinkedIn OAuth", href: "#phases" },
        { label: "Phase 7: Multi-Tenant SaaS", href: "#phases" },
      ],
    },
    {
      title: "Kalpanaaa Suite",
      links: [
        { label: "About Kalpanaaa", href: "#" },
        { label: "Architecture Doc (v1.1)", href: "#" },
        { label: "Festival Calendar API", href: "#" },
        { label: "Brand Asset Vault", href: "#" },
        { label: "Contact Engineering", href: "mailto:contact@kalpanaaa.com" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#DFCBB2] text-[#484c42] border-t border-[#590907]/20 pt-20 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background subtle radial leak */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[380px] bg-[#590907]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top & Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Top-Left / Brand column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#590907] via-[#3a0605] to-[#240405] border border-[#590907]/30 flex items-center justify-center p-1.5 shadow-md shadow-[#590907]/25">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-[#FAF4EB]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="3" x2="12" y2="21" strokeWidth="2.2" stroke="#FAF4EB" />
                  <circle cx="12" cy="7" r="1.5" fill="#FAF4EB" />
                  <path d="M12 7 C7 2, 3 8, 5 14 C7 17, 10 16, 12 17" stroke="#FAF4EB" />
                  <path d="M12 7 C17 2, 21 8, 19 14 C17 17, 14 16, 12 17" stroke="#FAF4EB" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-[0.22em] text-[#590907] uppercase">
                  DESIQO
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#5A6054] font-bold">
                  CODE . INNOVATE . ELEVATE
                </span>
              </div>
            </div>

            <p className="text-sm text-[#484c42] max-w-sm leading-relaxed font-normal">
              Building governed, multi-agent creative automation for modern enterprises.
            </p>

            {/* Email + LinkedIn links */}
            <div className="space-y-3 pt-2">
              <a
                href="mailto:contact@kalpanaaa.com"
                className="inline-flex items-center gap-2 text-sm text-[#590907] hover:text-[#220709] transition-colors group font-semibold"
              >
                <div className="w-8 h-8 rounded-full bg-white/80 border border-[#590907]/20 flex items-center justify-center group-hover:border-[#590907] transition-colors shadow-sm">
                  <Mail size={14} />
                </div>
                <span className="font-mono text-xs">contact@kalpanaaa.com</span>
                <ArrowUpRight size={13} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#590907] hover:text-[#220709] transition-colors group font-semibold"
                >
                  <div className="w-8 h-8 rounded-full bg-white/80 border border-[#590907]/20 flex items-center justify-center group-hover:border-[#590907] transition-colors shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                    </svg>
                  </div>
                  <span className="text-xs">Kalpanaaa Software Solutions</span>
                  <ArrowUpRight size={13} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: 4 Navigation Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navColumns.map((col) => (
              <div key={col.title} className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#590907] font-bold block">
                  {col.title}
                </span>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-[#5A6054] hover:text-[#590907] transition-colors duration-200 block py-0.5 font-medium"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-8 border-t border-[#590907]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A6054] font-mono font-medium">
          <p>© {currentYear} DESIQO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#590907] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#590907] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
