"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Video,
  Calendar as CalendarIcon,
  PenTool,
  BarChart3,
  Share2,
  ArrowRight,
  Eye,
  Heart,
  Clock,
  Check,
  Play,
} from "lucide-react";

// Platform SVG Icons
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.68c-.01 2.37-.87 4.7-2.45 6.46-1.74 1.94-4.29 3.06-6.9 3.06-2.6 0-5.15-1.12-6.89-3.06-1.75-1.94-2.61-4.52-2.41-7.14.2-2.61 1.48-5.01 3.53-6.6 2.06-1.58 4.74-2.26 7.3-1.85.04 1.37.02 2.74.02 4.11-1.39-.32-2.89-.13-4.14.53-1.07.57-1.87 1.57-2.22 2.76-.35 1.19-.18 2.51.46 3.57.65 1.07 1.73 1.83 2.97 2.1 1.24.27 2.57.03 3.65-.67 1.08-.7 1.76-1.88 1.83-3.16.03-3.41.01-6.82.01-10.23z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WebflowIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.8 8.8c-.8 0-1.6.4-2.2 1-.3.3-.6.7-.8 1.1-.7-1.3-2-2.1-3.6-2.1-.9 0-1.7.3-2.4.8-.4.3-.8.7-1 1.1-.7-1.2-2-1.9-3.4-1.9-2.3 0-4.2 1.9-4.2 4.2v4.8h3v-4.8c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2v4.8h3v-4.8c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2v4.8h3v-4.8c0-2.3-1.9-4.2-4.2-4.2z" />
  </svg>
);

export default function MarketingCapabilitiesSection() {
  const [toggleSchedule, setToggleSchedule] = useState(true);

  return (
    <section
      id="capabilities"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#F4E9DC]"
    >
      {/* 3D Fluid Chocolate-Burgundy Wave Ribbons in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Right 3D Silk Wave */}
        <svg
          className="absolute -top-24 -right-24 w-[750px] h-[750px] opacity-90"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250,50 C380,80 520,200 480,360 C440,520 280,580 180,520 C80,460 120,320 180,240 C240,160 300,100 250,50 Z"
            fill="url(#ribbonGradient1)"
          />
          <path
            d="M320,30 C450,120 560,280 490,440 C420,600 240,590 140,510 C40,430 140,280 230,190 C320,100 380,60 320,30 Z"
            fill="url(#ribbonGradient2)"
            opacity="0.75"
          />
          <defs>
            <linearGradient id="ribbonGradient1" x1="120" y1="80" x2="520" y2="520" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A0B0F" />
              <stop offset="45%" stopColor="#2E0608" />
              <stop offset="80%" stopColor="#6E1B1E" />
              <stop offset="100%" stopColor="#3B080B" />
            </linearGradient>
            <linearGradient id="ribbonGradient2" x1="200" y1="30" x2="500" y2="550" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#590907" />
              <stop offset="50%" stopColor="#320709" />
              <stop offset="100%" stopColor="#1E0305" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient Warm Glows */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(232,210,181,0.6)_0%,_transparent_70%)] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.08)_0%,_transparent_70%)] blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-7">
        {/* ============================================================== */}
        {/* ROW 1: Large Hero Feature Card                                */}
        {/* ============================================================== */}
        <div className="w-full bg-[#FFFDFB] rounded-[36px] p-8 sm:p-10 md:p-14 border border-[#590907]/10 shadow-[0_25px_60px_rgba(89,9,7,0.07)] flex flex-col lg:flex-row items-center justify-between gap-12 group transition-all duration-300">
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Header Badge & Gold Star Line */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#3D080B] text-[#FAF4EB] flex items-center justify-center shadow-md shadow-[#3D080B]/20">
                <TrendingUp size={22} strokeWidth={2.4} />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-[1px] bg-[#C89B6D]/60" />
                <span className="text-[#C89B6D] text-xs">✦</span>
              </div>
            </div>

            {/* Title with Serif Italic Accent */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#220709] tracking-tight leading-[1.12]">
              Ready-to-publish{" "}
              <span className="font-serif italic font-normal text-[#590907]">
                content,
              </span>
              <br />
              not just drafts
            </h3>

            {/* Description */}
            <p className="text-[#5A6054] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Design what you need and get a finished social post with visual creative, contextual hashtags, and platform-tailored copy. Turn one milestone or product idea into a cross-network campaign with a single prompt.
            </p>

            {/* Guardrail Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#3D080B] bg-[#EFE3D5] px-4 py-2 rounded-full border border-[#DFCBB5] shadow-2xs">
                <Check size={14} strokeWidth={2.8} /> Zero hallucination checks
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#3D080B] bg-[#EFE3D5] px-4 py-2 rounded-full border border-[#DFCBB5] shadow-2xs">
                <Check size={14} strokeWidth={2.8} /> Human-in-the-loop gate
              </span>
            </div>
          </div>

          {/* Right Floating Post Preview Card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[440px] bg-white rounded-3xl p-5 sm:p-6 border border-[#590907]/12 shadow-[0_20px_50px_rgba(89,9,7,0.14)] space-y-4">
              {/* Prompt Bar with Arrow Button */}
              <div className="flex items-center justify-between px-3.5 py-1.5 bg-[#FAF7F2] rounded-full border border-[#590907]/15">
                <div className="flex items-center gap-2 text-xs text-[#220709] truncate pr-2">
                  <span className="text-[#C89B6D] text-xs shrink-0">✦</span>
                  <span className="font-medium truncate">
                    A post about our new quarterly milestone celebration
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#3D080B] text-[#FAF4EB] flex items-center justify-center shrink-0 shadow-xs">
                  <ArrowRight size={13} strokeWidth={2.5} />
                </div>
              </div>

              {/* Main Social Post Container */}
              <div className="rounded-2xl border border-[#590907]/12 overflow-hidden bg-white shadow-2xs">
                {/* Header */}
                <div className="flex items-center justify-between p-3.5 border-b border-[#590907]/10">
                  <div className="flex items-center gap-2.5">
                    {/* Brand Avatar */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3D080B] to-[#590907] flex items-center justify-center text-[#E8D2B5] shadow-xs">
                      {/* Geometric pillar logo */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M4 21V9l4-4v16H4zm6 0V3l4-2v20h-4zm6 0v-8l4-4v12h-4z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-[#220709]">DESIQO Brand</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#220709] text-white flex items-center justify-center text-[8px] font-bold">✓</span>
                      </div>
                      <span className="text-[10px] text-[#5A6054]">Scheduled for Instagram • LinkedIn</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]">
                    Approved ✓
                  </span>
                </div>

                {/* Creative Image Preview (Architecture Sunset Building) */}
                <div
                  className="relative h-48 bg-cover bg-center flex flex-col justify-end p-4 text-white overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(20,4,6,0.85) 0%, rgba(20,4,6,0.3) 50%, rgba(0,0,0,0) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')`,
                  }}
                >
                  <div className="relative z-10 space-y-0.5">
                    <span className="text-[10px] font-medium text-[#E8D2B5] tracking-wide">
                      Celebrating Milestones
                    </span>
                    <h4 className="text-lg font-black leading-tight text-white drop-shadow-sm">
                      Scaling Forward Together
                    </h4>
                    <p className="text-[10px] text-white/80 font-medium">
                      100,000+ Verified Engagements
                    </p>
                  </div>
                </div>

                {/* Post Caption */}
                <div className="p-3.5 text-xs text-[#220709] space-y-1">
                  <p className="text-[#3a3d36] leading-relaxed">
                    Celebrating milestones! Grateful for our customers worldwide.
                  </p>
                  <p className="text-[11px] text-[#590907] font-semibold">
                    #Innovation #DESIQO #Milestone #Growth #Together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* ROW 2: 3-Column Bento Grid                                    */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* ------------------------------------------------------------ */}
          {/* Card 1: Visuals & Video                                      */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-[#FFFDFB] rounded-[32px] p-7 border border-[#590907]/10 shadow-[0_15px_35px_rgba(89,9,7,0.05)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-3.5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#3D080B] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                    <Video size={18} strokeWidth={2.3} />
                  </div>
                  <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                    Visuals & Video
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#590907]/15 flex items-center justify-center text-[#3D080B] group-hover:bg-[#3D080B] group-hover:text-[#FAF4EB] transition-colors shadow-2xs">
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                Generate scroll-stopping graphics, holiday greetings, posters, and carousel visuals.
              </p>
            </div>

            {/* 3 Vertical Post Thumbnails Preview */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {/* Preview 1: Coffee / Dream Bigger */}
              <div className="h-36 rounded-xl bg-gradient-to-b from-[#2E0709] to-[#150304] p-2.5 flex flex-col justify-between text-white overflow-hidden shadow-xs relative">
                <span className="text-[8px] font-mono tracking-widest text-[#E8D2B5] opacity-75">
                  DESIQO
                </span>
                <div className="text-center my-auto">
                  <p className="font-serif italic text-xs leading-tight text-[#FAF4EB]">
                    Dream
                  </p>
                  <p className="font-serif italic text-sm font-bold text-[#E8D2B5]">
                    Bigger
                  </p>
                </div>
                <div className="w-8 h-8 mx-auto rounded-full bg-[#3D080B] border border-[#E8D2B5]/30 flex items-center justify-center text-[10px]">
                  ☕
                </div>
              </div>

              {/* Preview 2: Botanical / Good Vibes Only */}
              <div className="h-36 rounded-xl bg-gradient-to-b from-[#EDE0D2] to-[#DFCBB7] p-2.5 flex flex-col justify-between text-[#220709] overflow-hidden shadow-xs border border-[#590907]/10 relative">
                <div className="text-right text-xs opacity-60">🌿</div>
                <div className="text-center my-auto">
                  <p className="font-serif italic text-xs font-semibold text-[#590907] leading-tight">
                    Good
                  </p>
                  <p className="font-serif italic text-xs font-bold text-[#220709] leading-tight">
                    Vibes
                  </p>
                  <p className="font-serif italic text-xs text-[#590907]">
                    Only
                  </p>
                </div>
                <div className="text-left text-xs opacity-40">🍂</div>
              </div>

              {/* Preview 3: Sunset Landscape with Play Button */}
              <div
                className="h-36 rounded-xl bg-cover bg-center p-2 flex flex-col justify-center items-center text-white overflow-hidden shadow-xs relative"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(30,5,8,0.7), rgba(30,5,8,0.2)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80')`,
                }}
              >
                <div className="w-9 h-9 rounded-full bg-white/35 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                  <Play size={14} className="fill-white translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="flex items-center gap-1.5 text-[#5A6054] font-medium">
                <Clock size={12} className="text-[#3D080B]" /> 4.5s Avg. Render Time
              </span>
              <span className="text-[#2E7D32] bg-[#E8F5E9] border border-[#C8E6C9] px-2.5 py-0.5 rounded-full font-semibold">
                ✓ 100% Brand Compliant
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Card 2: Smart Scheduling                                     */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-[#FFFDFB] rounded-[32px] p-7 border border-[#590907]/10 shadow-[0_15px_35px_rgba(89,9,7,0.05)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-3.5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#3D080B] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                    <CalendarIcon size={18} strokeWidth={2.3} />
                  </div>
                  <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                    Smart Scheduling
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#590907]/15 flex items-center justify-center text-[#3D080B] group-hover:bg-[#3D080B] group-hover:text-[#FAF4EB] transition-colors shadow-2xs">
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                Seamlessly schedule posts 30-day in advance with calendar sync across all platforms.
              </p>
            </div>

            {/* Calendar Preview Widget */}
            <div className="bg-white rounded-2xl p-4 border border-[#590907]/10 shadow-xs space-y-3">
              {/* Month Header */}
              <div className="flex items-center justify-between text-xs font-bold text-[#220709]">
                <span className="text-[#5A6054] hover:text-[#220709] cursor-pointer">&lsaquo;</span>
                <span>November 2026</span>
                <span className="text-[#5A6054] hover:text-[#220709] cursor-pointer">&rsaquo;</span>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-[#8E9488]">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

              {/* Row 1: Muted prev-month days */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-[#A6ABA0]">
                {["26", "27", "28", "29", "30", "1", "2"].map((d, idx) => (
                  <div key={idx} className="py-1">
                    {d}
                  </div>
                ))}
              </div>

              {/* Row 2: Current month days with Day 6 Highlighted */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-[#220709]">
                {["3", "4", "5", "6", "7", "8", "9"].map((d, idx) => {
                  const isHighlighted = d === "6";
                  return (
                    <div
                      key={idx}
                      className={`py-1 rounded-lg flex items-center justify-center ${isHighlighted
                          ? "bg-[#3D080B] text-white font-bold shadow-xs"
                          : "hover:bg-[#FAF7F2]"
                        }`}
                    >
                      {d}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer with Toggle Switch */}
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="flex items-center gap-1.5 text-[#5A6054] font-medium">
                <Clock size={12} className="text-[#3D080B]" /> Auto-Recommended Time
              </span>

              {/* Functional Toggle */}
              <button
                type="button"
                onClick={() => setToggleSchedule(!toggleSchedule)}
                className={`w-9 h-5 rounded-full transition-colors relative focus:outline-none ${toggleSchedule ? "bg-[#3D080B]" : "bg-[#DFCBB5]"
                  }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full bg-white transition-transform absolute top-0.5 ${toggleSchedule ? "right-1" : "left-1"
                    }`}
                />
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Card 3: Brand Identity                                       */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-[#FFFDFB] rounded-[32px] p-7 border border-[#590907]/10 shadow-[0_15px_35px_rgba(89,9,7,0.05)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-3.5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#3D080B] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                    <PenTool size={18} strokeWidth={2.3} />
                  </div>
                  <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                    Brand Identity
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#590907]/15 flex items-center justify-center text-[#3D080B] group-hover:bg-[#3D080B] group-hover:text-[#FAF4EB] transition-colors shadow-2xs">
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                Fonts, palette, tone of voice, and trademark policies. Applied automatically to every post.
              </p>
            </div>

            {/* Brand Swatches + Brand Card Preview */}
            <div className="space-y-3 pt-1">
              {/* 5 Color Circles */}
              <div className="flex items-center justify-center gap-3">
                {["#2E0608", "#7A321E", "#E6B98D", "#F5DEC4", "#111111"].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full shadow-xs border border-black/10 transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Kalpanaa Finance Brand Kit Banner */}
              <div className="bg-gradient-to-r from-[#EEDDCB] to-[#DEC6AD] rounded-2xl p-3.5 border border-[#590907]/10 flex items-center gap-3.5 shadow-2xs">
                {/* Brand Avatar */}
                <div className="w-11 h-11 rounded-full bg-[#3D080B] text-[#E8D2B5] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M4 21V9l4-4v16H4zm6 0V3l4-2v20h-4zm6 0v-8l4-4v12h-4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#220709]">
                    Kalpanaa Finance
                  </h4>
                  <p className="text-[10px] text-[#5A6054] font-medium">
                    Grow • Invest • Prosper
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Button */}
            <div className="pt-1">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3D080B] bg-[#EFE3D5] hover:bg-[#E5D5C4] px-4 py-2 rounded-full border border-[#DFCBB5] transition-all"
              >
                <span>Customize Brand</span>
                <ArrowRight size={12} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* ROW 3: 2-Column Bento Grid (Analytics & Omnichannel Network)   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* ------------------------------------------------------------ */}
          {/* Card 4 (5 cols): Analytics & Telemetry                       */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-5 bg-[#FFFDFB] rounded-[32px] p-7 border border-[#590907]/10 shadow-[0_15px_35px_rgba(89,9,7,0.05)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-3.5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#3D080B] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                    <BarChart3 size={18} strokeWidth={2.3} />
                  </div>
                  <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                    Analytics & Telemetry
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#590907]/15 flex items-center justify-center text-[#3D080B] group-hover:bg-[#3D080B] group-hover:text-[#FAF4EB] transition-colors shadow-2xs">
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                Track real-time post performance. Calculate audience resonance rates, and let the analytics agent recommend when and what to post next.
              </p>
            </div>

            {/* Metrics & Wave Chart */}
            <div className="bg-white rounded-2xl p-4 border border-[#590907]/10 shadow-xs space-y-3">
              {/* Metric Stats Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#220709]">
                      <Eye size={13} className="text-[#590907]" />
                      <span>14.8k</span>
                    </div>
                    <p className="text-[10px] text-[#8E9488]">Total Reach</p>
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#220709]">
                      <Heart size={13} className="text-[#590907]" />
                      <span>8.2k</span>
                    </div>
                    <p className="text-[10px] text-[#8E9488]">Engagements</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] border border-[#C8E6C9] px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  &uarr; 18.7%
                </span>
              </div>

              {/* Area Wave Chart with Tooltip Pill */}
              <div className="relative pt-2">
                {/* Floating pill badge on curve */}
                <div className="absolute top-1 right-[30%] bg-[#3D080B] text-white text-[9px] font-mono px-2 py-0.5 rounded-full shadow-md z-10">
                  +18.7%
                </div>

                <div className="h-16 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 280 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartWaveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#590907" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#590907" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M0,52 Q40,55 80,45 T160,42 T220,18 T280,30 L280,60 L0,60 Z"
                      fill="url(#chartWaveGradient)"
                    />
                    {/* Curve line */}
                    <path
                      d="M0,52 Q40,55 80,45 T160,42 T220,18 T280,30"
                      fill="none"
                      stroke="#590907"
                      strokeWidth="2.2"
                    />
                    {/* Dots */}
                    <circle cx="20" cy="53" r="2.5" fill="#590907" />
                    <circle cx="65" cy="48" r="2.5" fill="#590907" />
                    <circle cx="110" cy="43" r="2.5" fill="#590907" />
                    <circle cx="155" cy="42" r="2.5" fill="#590907" />
                    <circle cx="200" cy="24" r="3.5" fill="#3D080B" stroke="#FAF4EB" strokeWidth="1.5" />
                    <circle cx="245" cy="22" r="2.5" fill="#590907" />
                  </svg>
                </div>

                {/* X Axis Day Labels */}
                <div className="flex items-center justify-between text-[10px] text-[#8E9488] pt-1">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <span key={i}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Card 5 (7 cols): Every Network                               */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-7 bg-[#FFFDFB] rounded-[32px] p-7 border border-[#590907]/10 shadow-[0_15px_35px_rgba(89,9,7,0.05)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="space-y-3.5 relative z-10 max-w-md">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#3D080B] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                    <Share2 size={18} strokeWidth={2.3} />
                  </div>
                  <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                    Every Network
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#590907]/15 flex items-center justify-center text-[#3D080B] group-hover:bg-[#3D080B] group-hover:text-[#FAF4EB] transition-colors shadow-2xs">
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                Instagram, TikTok, LinkedIn, Facebook, X (Twitter), Pinterest, plus YouTube Community, Webflow, and custom enterprise webhooks.
              </p>
            </div>

            {/* Bottom Row: Left App Tray + Right 3D Orbiting Social Composition */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10 pt-2">
              {/* Left Action & App Pill Tray */}
              <div className="space-y-4">
                {/* Apps Pill Box */}
                <div className="inline-flex items-center gap-2 p-2 bg-[#FAF7F2] rounded-full border border-[#590907]/15 shadow-2xs">
                  <div title="Instagram" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] hover:text-[#E4405F] transition-colors shadow-2xs">
                    <InstagramIcon />
                  </div>
                  <div title="TikTok" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] hover:text-black transition-colors shadow-2xs">
                    <TikTokIcon />
                  </div>
                  <div title="LinkedIn" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] hover:text-[#0A66C2] transition-colors shadow-2xs">
                    <LinkedInIcon />
                  </div>
                  <div title="Facebook" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] hover:text-[#1877F2] transition-colors shadow-2xs">
                    <FacebookIcon />
                  </div>
                  <div title="X" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] hover:text-black transition-colors shadow-2xs">
                    <XIcon />
                  </div>
                  <div title="Pinterest" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] hover:text-[#BD081C] transition-colors shadow-2xs">
                    <PinterestIcon />
                  </div>
                  <div title="YouTube" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] hover:text-[#CD201F] transition-colors shadow-2xs">
                    <YouTubeIcon />
                  </div>
                  <div title="Webflow" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] hover:text-[#4353FF] transition-colors shadow-2xs">
                    <WebflowIcon />
                  </div>
                  <div title="API Webhooks" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#220709] font-mono text-xs font-bold shadow-2xs">
                    &lt;/&gt;
                  </div>
                </div>

                {/* Connect Accounts Button */}
                <div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3D080B] bg-[#EFE3D5] hover:bg-[#E5D5C4] px-4 py-2 rounded-full border border-[#DFCBB5] transition-all"
                  >
                    <span>Connect Accounts</span>
                    <ArrowRight size={12} strokeWidth={2.4} />
                  </button>
                </div>
              </div>

              {/* Right: 3D Orbiting Social Composition */}
              <div className="relative w-48 h-36 flex items-center justify-center shrink-0 self-center sm:self-end">
                {/* Golden Orbit Ring */}
                <div className="absolute inset-0 border-2 border-[#D8A776]/50 rounded-[100%] rotate-[-22deg] transform scale-y-60 shadow-[0_0_15px_rgba(216,167,118,0.3)] pointer-events-none" />

                {/* Central Glossy 3D Cube with Paper Plane */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#250406] via-[#3D080B] to-[#590907] border border-[#D8A776]/50 shadow-[0_15px_30px_rgba(61,8,11,0.35)] flex items-center justify-center rotate-6 transform group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-[#E8D2B5] -translate-y-0.5 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>

                {/* Orbiting Badge 1: LinkedIn (Top Right) */}
                <div className="absolute top-2 right-6 w-7 h-7 rounded-lg bg-[#3D080B] text-white flex items-center justify-center text-[10px] font-bold shadow-md border border-[#D8A776]/40">
                  in
                </div>

                {/* Orbiting Badge 2: Instagram (Top Left) */}
                <div className="absolute top-4 left-3 w-7 h-7 rounded-lg bg-[#3D080B] text-white flex items-center justify-center shadow-md border border-[#D8A776]/40">
                  <InstagramIcon />
                </div>

                {/* Orbiting Badge 3: X (Bottom Right) */}
                <div className="absolute bottom-4 right-1 w-7 h-7 rounded-lg bg-[#3D080B] text-white flex items-center justify-center shadow-md border border-[#D8A776]/40">
                  <XIcon />
                </div>

                {/* Orbiting Badge 4: YouTube Play (Bottom Left) */}
                <div className="absolute bottom-1 left-8 w-6 h-6 rounded-full bg-[#3D080B] text-white flex items-center justify-center shadow-md border border-[#D8A776]/40 text-[9px]">
                  ▶
                </div>

                {/* Tiny Gold Sparkle Orbs */}
                <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-[#D8A776] shadow-[0_0_8px_#D8A776]" />
                <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#D8A776] shadow-[0_0_8px_#D8A776]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
