"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Image as ImageIcon,
  Calendar as CalendarIcon,
  Palette,
  BarChart3,
  Globe,
  CheckCircle2,
  Clock,
  TrendingUp,
  Sliders,
  Send,
  Check,
} from "lucide-react";

// Platform SVG Icons for the "Every network" pill tray
const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.68c-.01 2.37-.87 4.7-2.45 6.46-1.74 1.94-4.29 3.06-6.9 3.06-2.6 0-5.15-1.12-6.89-3.06-1.75-1.94-2.61-4.52-2.41-7.14.2-2.61 1.48-5.01 3.53-6.6 2.06-1.58 4.74-2.26 7.3-1.85.04 1.37.02 2.74.02 4.11-1.39-.32-2.89-.13-4.14.53-1.07.57-1.87 1.57-2.22 2.76-.35 1.19-.18 2.51.46 3.57.65 1.07 1.73 1.83 2.97 2.1 1.24.27 2.57.03 3.65-.67 1.08-.7 1.76-1.88 1.83-3.16.03-3.41.01-6.82.01-10.23z" />
  </svg>
);

const WebflowIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.8 8.8c-.8 0-1.6.4-2.2 1-.3.3-.6.7-.8 1.1-.7-1.3-2-2.1-3.6-2.1-.9 0-1.7.3-2.4.8-.4.3-.8.7-1 1.1-.7-1.2-2-1.9-3.4-1.9-2.3 0-4.2 1.9-4.2 4.2v4.8h3v-4.8c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2v4.8h3v-4.8c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2v4.8h3v-4.8c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2v4.8h3v-4.8c0-2.3-1.9-4.2-4.2-4.2z" />
  </svg>
);

const WordPressIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.164a10.836 10.836 0 1 1 0 21.672 10.836 10.836 0 0 1 0-21.672zM2.38 12c0 2.25.77 4.32 2.06 5.96L8.41 7.23a9.61 9.61 0 0 0-6.03 4.77zm14.15-.49c0-1.07-.38-1.81-.71-2.39-.44-.75-.85-1.38-.85-2.13 0-.83.63-1.61 1.54-1.61.07 0 .14.01.21.02A9.56 9.56 0 0 0 12 2.42c-3.14 0-5.96 1.51-7.75 3.84.24.01.46.02.66.02 1.07 0 2.74-.13 2.74-.13.55-.03.62.77.07.83 0 0-.56.07-1.18.1l3.76 11.19 2.26-6.78-1.61-4.41c-.56-.03-1.09-.1-1.09-.1-.55-.06-.48-.86.07-.83 0 0 1.7.13 2.71.13 1.07 0 2.74-.13 2.74-.13.55-.03.62.77.07.83 0 0-.56.07-1.18.1l3.72 11.08 1.03-3.44c.44-1.42.77-2.45.77-3.33zm-4.32 7.74-3.1-9.28-2.16 6.47c.75.48 1.62.81 2.56.97.87.16 1.8.18 2.7.07v-.03zm4.55-1.92-2.73-7.92 2.57-7.46c.07.13.13.28.18.42 1.48 2.29 2.35 5.01 2.35 7.94 0 2.83-.8 5.48-2.2 7.74-.06-.24-.12-.48-.17-.72z" />
  </svg>
);

export default function MarketingCapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<"post" | "prompt">("post");

  return (
    <section
      id="capabilities"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#120507]"
    >
      {/* Dynamic Cosmic Universe Background Elements */}
      {/* 1. Deep Wine & Starry Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18070A] via-[#100305] to-[#160608] pointer-events-none" />

      {/* 2. Ambient Nebula Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-[radial-gradient(ellipse,_rgba(89,9,7,0.55)_0%,_rgba(61,6,7,0.25)_45%,_transparent_75%)] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,_rgba(120,20,40,0.3)_0%,_transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,_rgba(232,210,181,0.12)_0%,_transparent_70%)] blur-[90px] pointer-events-none" />

      {/* 3. Subtle Celestial Planet Orb on Left & Pearl Star on Right */}
      <div className="absolute top-[42%] left-6 sm:left-14 w-12 h-12 rounded-full bg-gradient-to-tr from-[#590907] via-[#a83232] to-[#E8D2B5] opacity-75 shadow-[0_0_25px_rgba(232,210,181,0.3)] pointer-events-none hidden md:block">
        <div className="absolute -inset-1.5 border border-[#E8D2B5]/30 rounded-full rotate-45 transform scale-x-150" />
      </div>
      <div className="absolute top-[22%] right-10 sm:right-20 w-3.5 h-3.5 rounded-full bg-[#FAF4EB] shadow-[0_0_18px_6px_rgba(250,244,235,0.7)] pointer-events-none" />
      <div className="absolute bottom-[18%] left-1/4 w-2 h-2 rounded-full bg-[#E8D2B5] shadow-[0_0_12px_3px_rgba(232,210,181,0.6)] pointer-events-none" />

      {/* 4. Fine Star Dust Field */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(250, 244, 235, 0.75) 1px, transparent 1px), radial-gradient(rgba(232, 210, 181, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px, 90px 90px",
          backgroundPosition: "0 0, 40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[11px] font-mono uppercase tracking-widest text-[#E8D2B5] shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8D2B5] animate-pulse" />
            Social Media, Visuals & Scheduling in One Suite
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em] leading-[1.12]">
            Everything your marketing needs{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FAF4EB] via-[#E8D2B5] to-[#f0dfc8]">
              — orchestrated by AI
            </span>
          </h2>

          <p className="text-[#E8D2B5]/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Social posts, festive greeting posters, and 30-day multi-channel schedules, all driven by DESIQO&apos;s 7-agent engine. Whether an admin clicks or an event fires, the result is on-brand and ready.
          </p>
        </div>

        {/* Bento Grid Layout (Matches reference image) */}
        <div className="space-y-6">
          {/* Row 1: Large Hero Feature Card (Full Width / 2-Column Split) */}
          <div className="w-full bg-[#FAF7F2] rounded-[32px] p-6 sm:p-8 md:p-10 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row items-center justify-between gap-8 group">
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#590907] text-[#FAF4EB] flex items-center justify-center shadow-sm">
                <Sparkles size={20} strokeWidth={2.2} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#220709] tracking-tight leading-snug">
                Ready-to-publish content, not just drafts
              </h3>

              <p className="text-[#5A6054] text-sm sm:text-base leading-relaxed">
                Describe what you need and get a finished social post with visual creative, contextual hashtags, and platform-tailored copy. Turn one milestone or product idea into a cross-network campaign with a single prompt.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#590907] bg-[#590907]/10 px-3 py-1 rounded-full">
                  <Check size={13} strokeWidth={2.5} /> Zero hallucination checks
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#590907] bg-[#590907]/10 px-3 py-1 rounded-full">
                  <Check size={13} strokeWidth={2.5} /> Human-in-the-loop gate
                </span>
              </div>
            </div>

            {/* Right Interactive Mock UI Column */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-2xl p-4 sm:p-5 border border-[#590907]/15 shadow-xl space-y-3.5">
                {/* Prompt bar */}
                <div className="flex items-center gap-2 px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#590907]/15 text-xs text-[#220709]">
                  <span className="text-[#590907] font-semibold">&ldquo;</span>
                  <span className="italic font-medium truncate">
                    A post about our new quarterly milestone celebration
                  </span>
                  <span className="text-[#590907] font-semibold">&rdquo;</span>
                </div>

                {/* Social Card Preview */}
                <div className="rounded-xl border border-[#590907]/10 overflow-hidden bg-white">
                  {/* Mock Post Header */}
                  <div className="flex items-center justify-between p-3 border-b border-[#590907]/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#590907] text-[#FAF4EB] flex items-center justify-center text-[10px] font-bold">
                        D
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-[#220709]">DESIQO Brand</span>
                          <span className="w-3.5 h-3.5 rounded-full bg-[#590907] text-white flex items-center justify-center text-[8px]">✓</span>
                        </div>
                        <span className="text-[10px] text-[#5A6054]">Scheduled for Instagram & LinkedIn</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Approved
                    </span>
                  </div>

                  {/* Mock Creative Image */}
                  <div className="relative h-44 bg-gradient-to-tr from-[#3b0608] via-[#590907] to-[#E8D2B5] p-4 flex flex-col justify-end text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#E8D2B5] bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                        Milestone Announcement
                      </span>
                      <h4 className="text-lg font-black mt-1 leading-tight text-[#FAF4EB]">
                        Scaling Forward Together
                      </h4>
                      <p className="text-[11px] text-[#E8D2B5]/90 mt-0.5">
                        100,000+ Verified Engagements
                      </p>
                    </div>
                  </div>

                  {/* Mock Post Caption */}
                  <div className="p-3 text-xs text-[#220709] space-y-1">
                    <p className="line-clamp-2 text-[#484c42]">
                      Celebrating milestone growth with our customers worldwide. Crafted with clarity, purpose, and community focus.
                    </p>
                    <p className="text-[11px] text-[#590907] font-semibold">
                      #Innovation #DESIQO #Milestones #TechLeadership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 3-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: AI Visuals & Posters */}
            <div className="bg-[#FAF7F2] rounded-[32px] p-6 sm:p-7 border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#590907] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                  <ImageIcon size={18} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                  AI visuals & video
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                  Generate scroll-stopping graphics, holiday greeting posters, and carousel visuals strictly formatted to 1:1, 4:5, and 9:16 aspect ratios.
                </p>
              </div>

              {/* Visual Mock: Programmatic Poster Preview */}
              <div className="bg-white rounded-2xl p-3 border border-[#590907]/15 shadow-xs space-y-2">
                <div className="relative h-32 rounded-xl bg-gradient-to-br from-[#590907] to-[#1a0507] p-3 flex flex-col justify-between text-white overflow-hidden">
                  <div className="flex justify-between items-center text-[9px] font-mono text-[#E8D2B5]">
                    <span>POSTER AGENT</span>
                    <span className="bg-white/20 px-1.5 py-0.5 rounded">4:5 RATIO</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#E8D2B5] font-semibold">FESTIVE EDIT</span>
                    <p className="text-sm font-black leading-tight text-[#FAF4EB]">Festivals of Lights & Prosperity</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-semibold text-[#5A6054] px-1">
                  <span>SVG Vector Engine</span>
                  <span className="text-emerald-700">100% Brand Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 2: Smart Scheduling & Event Sync */}
            <div className="bg-[#FAF7F2] rounded-[32px] p-6 sm:p-7 border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#590907] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                  <CalendarIcon size={18} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                  Smart scheduling
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                  Seamlessly feed drops into a 30-day verified calendar synced with regional holidays and peak engagement windows across time zones.
                </p>
              </div>

              {/* Visual Mock: Mini Calendar Schedule Matrix */}
              <div className="bg-white rounded-2xl p-3 border border-[#590907]/15 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-[#220709]">
                  <span>November 2026</span>
                  <span className="text-[10px] text-[#590907] font-mono">14 Dispatches Queued</span>
                </div>

                {/* Calendar Mini Grid */}
                <div className="grid grid-cols-7 gap-1.5 text-center text-[10px]">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span key={i} className="text-[#8e9488] font-bold">
                      {d}
                    </span>
                  ))}
                  {[12, 13, 14, 15, 16, 17, 18].map((day, idx) => {
                    const isScheduled = day === 14 || day === 17;
                    const isToday = day === 15;
                    return (
                      <div
                        key={idx}
                        className={`py-1 rounded-md flex flex-col items-center justify-center ${
                          isScheduled
                            ? "bg-[#590907] text-white font-bold shadow-xs"
                            : isToday
                            ? "border border-[#590907] text-[#590907] font-bold"
                            : "bg-[#FAF7F2] text-[#5A6054]"
                        }`}
                      >
                        <span>{day}</span>
                        {isScheduled && <span className="w-1 h-1 rounded-full bg-[#E8D2B5] mt-0.5" />}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-[10px] pt-1 border-t border-[#590907]/10 text-[#5A6054]">
                  <span className="flex items-center gap-1">
                    <Clock size={11} className="text-[#590907]" /> Peak: 11:30 AM
                  </span>
                  <span className="text-emerald-700 font-semibold">Auto-Reschedule ON</span>
                </div>
              </div>
            </div>

            {/* Card 3: Brand Identity Enforcement */}
            <div className="bg-[#FAF7F2] rounded-[32px] p-6 sm:p-7 border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#590907] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                  <Palette size={18} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                  Brand identity
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                  Fonts, palette hexes, tone of voice, and trademark policies applied automatically to every post, article, and creative the AI issues.
                </p>
              </div>

              {/* Visual Mock: Brand Identity Palette & Typography Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-[#590907]/15 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#590907]">Brand Palette</span>
                  <span className="text-[10px] text-[#5A6054]">Locked v1.2</span>
                </div>

                {/* Swatches */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-7 rounded-lg bg-[#590907] flex items-center justify-center text-[9px] font-mono text-white">#590907</div>
                  <div className="flex-1 h-7 rounded-lg bg-[#E8D2B5] flex items-center justify-center text-[9px] font-mono text-[#220709]">#E8D2B5</div>
                  <div className="flex-1 h-7 rounded-lg bg-[#220709] flex items-center justify-center text-[9px] font-mono text-white">#220709</div>
                </div>

                {/* Font & Tone Chips */}
                <div className="flex items-center justify-between text-xs pt-1 border-t border-[#590907]/10">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#220709]">Aa</span>
                    <span className="text-[10px] text-[#5A6054]">Plus Jakarta Sans</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#590907]/10 text-[#590907]">
                    Authoritative
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: 2-Column Bento Grid (Analytics & Omnichannel Network) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 4 (5 Cols): Analytics & Telemetry */}
            <div className="lg:col-span-5 bg-[#FAF7F2] rounded-[32px] p-6 sm:p-7 border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#590907] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                  <BarChart3 size={18} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                  Analytics & telemetry
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                  Track real-time post performance, calculate audience resonance rates, and let the analytics agent recommend when and what to post next.
                </p>
              </div>

              {/* Visual Mock: Interactive Telemetry Graph Card */}
              <div className="bg-white rounded-2xl p-4 border border-[#590907]/15 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#5A6054] font-medium">Aggregated Impressions</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#220709]">14.8k</span>
                      <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                        <TrendingUp size={10} className="mr-0.5" /> +28.4%
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#5A6054]">Last 30 Days</span>
                </div>

                {/* SVG Area Chart */}
                <div className="h-16 w-full pt-1">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#590907" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#590907" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Fill */}
                    <path
                      d="M0,50 Q25,45 50,30 T100,35 T150,15 T200,8 L200,60 L0,60 Z"
                      fill="url(#analyticsGradient)"
                    />
                    {/* Stroke */}
                    <path
                      d="M0,50 Q25,45 50,30 T100,35 T150,15 T200,8"
                      fill="none"
                      stroke="#590907"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 5 (7 Cols): Every Network Dispatch */}
            <div className="lg:col-span-7 bg-[#FAF7F2] rounded-[32px] p-6 sm:p-7 border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#590907] text-[#FAF4EB] flex items-center justify-center shadow-xs">
                  <Globe size={18} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#220709] tracking-tight">
                  Every network
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6054] leading-relaxed">
                  Instagram, TikTok, LinkedIn, Facebook, X (Twitter), Pinterest, plus YouTube Community, Webflow, and custom enterprise webhooks.
                </p>
              </div>

              {/* Visual Mock: Horizontal Social Network App Grid/Tray */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#590907]/15 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#220709]">Connected Publishing Gateways</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" /> All Systems Active
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                  {[
                    { name: "Instagram", icon: <InstagramIcon />, color: "hover:text-[#E4405F]" },
                    { name: "LinkedIn", icon: <LinkedInIcon />, color: "hover:text-[#0A66C2]" },
                    { name: "Facebook", icon: <FacebookIcon />, color: "hover:text-[#1877F2]" },
                    { name: "X (Twitter)", icon: <XIcon />, color: "hover:text-black" },
                    { name: "Pinterest", icon: <PinterestIcon />, color: "hover:text-[#BD081C]" },
                    { name: "YouTube", icon: <YouTubeIcon />, color: "hover:text-[#CD201F]" },
                    { name: "TikTok", icon: <TikTokIcon />, color: "hover:text-black" },
                    { name: "Webflow", icon: <WebflowIcon />, color: "hover:text-[#4353FF]" },
                    { name: "WordPress", icon: <WordPressIcon />, color: "hover:text-[#21759B]" },
                  ].map((network) => (
                    <div
                      key={network.name}
                      title={network.name}
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FAF7F2] border border-[#590907]/15 flex items-center justify-center text-[#220709] transition-all duration-300 hover:scale-110 hover:border-[#590907] hover:bg-white shadow-2xs ${network.color}`}
                    >
                      {network.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
