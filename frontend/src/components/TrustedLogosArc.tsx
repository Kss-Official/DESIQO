"use client";

import React from "react";

// Platform Official SVG Logos
const LinkedInLogo = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const MetaLogo = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 7.15c-1.39 0-2.61.64-3.41 1.67-.78-1.03-2-1.67-3.39-1.67C2.33 7.15 0 9.48 0 12.35c0 3.23 2.92 6.05 6.2 6.05 2.1 0 3.82-1.15 4.8-2.64.98 1.49 2.7 2.64 4.8 2.64 3.28 0 6.2-2.82 6.2-6.05 0-2.87-2.33-5.2-5.2-5.2-1.39 0-2.61.64-3.41 1.67-.78-1.03-2-1.67-3.39-1.67zm-6.8 9.15c-1.99 0-3.6-1.61-3.6-3.6 0-1.99 1.61-3.6 3.6-3.6 1.4 0 2.58.79 3.17 1.95l.43.85.43-.85c.59-1.16 1.77-1.95 3.17-1.95 1.99 0 3.6 1.61 3.6 3.6 0 1.99-1.61 3.6-3.6 3.6-1.55 0-2.91-.97-3.41-2.43h-3.38c-.5 1.46-1.86 2.43-3.41 2.43z" />
  </svg>
);

const InstagramLogo = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const PinterestLogo = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const XLogo = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GeminiLogo = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
  </svg>
);

const MicrosoftLogo = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z"/>
  </svg>
);

const KalpanaaaLogo = () => (
  <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="7.5" strokeWidth="2.2" />
    <line x1="12" y1="2" x2="12" y2="22" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const platformIntegrations = [
  { name: "LinkedIn", logo: <LinkedInLogo />, desc: "Company Pages API (V1 Primary)" },
  { name: "Meta Facebook", logo: <MetaLogo />, desc: "Meta Graph API v20.0" },
  { name: "Instagram", logo: <InstagramLogo />, desc: "Professional Graph Publishing" },
  { name: "Pinterest", logo: <PinterestLogo />, desc: "Business Boards & Visual Pins" },
  { name: "X (Twitter)", logo: <XLogo />, desc: "Developer API Adapters" },
  { name: "Gemini AI", logo: <GeminiLogo />, desc: "Tier 0 Flash-Lite Engine" },
  { name: "Microsoft", logo: <MicrosoftLogo />, desc: "OIDC / PKCE Single Sign-On" },
  { name: "Kalpanaaa", logo: <KalpanaaaLogo />, desc: "Workspace Isolation Layer" },
];

export default function TrustedLogosArc() {
  return (
    <section id="platforms" className="relative py-32 px-6 md:px-12 lg:px-16 bg-[#E8D2B5] border-t border-[#590907]/15 overflow-hidden">
      {/* Curved glowing horizon arc */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-[1400px] h-[340px] pointer-events-none">
        <div className="w-full h-full rounded-[100%] border-t border-[#590907]/30 bg-gradient-to-b from-[#590907]/10 via-[#E8D2B5]/40 to-transparent blur-[1px]" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#590907]/15 blur-[60px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#590907]/20 text-[11px] font-mono uppercase tracking-widest text-[#590907] mb-4 shadow-sm font-bold">
          <span>Section 6 // Platform Adapters</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-[#220709] tracking-tight">
          Supported Publishing Platforms & Ecosystem
        </h2>
        <p className="mt-4 text-[#484c42] text-sm md:text-base max-w-2xl mx-auto font-normal">
          DESIQO integrates via official developer APIs with isolated token vaults, least-privilege scopes,
          and format validation specific to each social network.
        </p>

        {/* Seamless Infinite Marquee */}
        <div className="mt-16 relative overflow-hidden py-6">
          {/* Edge gradient masks */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#E8D2B5] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#E8D2B5] to-transparent z-20 pointer-events-none" />

          {/* Marquee track */}
          <div className="animate-marquee flex items-center gap-8 md:gap-12">
            {[...platformIntegrations, ...platformIntegrations].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex flex-col items-center justify-center min-w-[200px] md:min-w-[230px] p-5 rounded-2xl glass-panel-milled border border-[#590907]/15 hover:border-[#590907]/40 transition-all duration-300 group cursor-default shadow-md hover:shadow-lg"
              >
                <div className="w-10 h-10 flex items-center justify-center text-[#590907] group-hover:text-[#7A0E12] group-hover:scale-110 transition-all duration-300 mb-2.5">
                  {item.logo}
                </div>
                <span className="text-base md:text-lg font-bold tracking-tight text-[#220709] group-hover:text-[#590907] transition-all duration-300 font-sans">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-[#5A6054] tracking-wider uppercase mt-1 font-semibold text-center">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
