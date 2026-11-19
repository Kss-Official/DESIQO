"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroPhonesShowcase from "./HeroPhonesShowcase";

const PLATFORMS = ["Instagram", "Facebook", "Twitter", "LinkedIn"];

export default function HeroSection() {
  const [platformIndex, setPlatformIndex] = useState(0);
  const [currentText, setCurrentText] = useState("Instagram");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress linked across the Hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll-driven ambient background color interpolation:
  // Warm Beige (#E8D2B5) -> Lighter Beige (#ECE0CE) -> Soft Cream (#F4EBE0) -> Ivory (#FAF6F0)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#E8D2B5", "#ECE0CE", "#F4EBE0", "#FAF6F0"]
  );

  // Subtle ambient glow attenuation as background lightens
  const glowOpacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.65]);
  const glowOpacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.75]);

  // Typewriter effect: types character by character, pauses with shimmer sweep, then backspaces
  useEffect(() => {
    const fullWord = PLATFORMS[platformIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < fullWord.length) {
        // Typing next character (natural typing rhythm)
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, 110);
      } else {
        // Full word typed: pause to let user view and watch the shimmer beam sweep across
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2100);
      }
    } else {
      if (currentText.length > 0) {
        // Backspacing character by character
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, 55);
      } else {
        // Completely deleted: brief pause before starting next platform word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setPlatformIndex((prev) => (prev + 1) % PLATFORMS.length);
        }, 320);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, platformIndex]);

  const handleScrollDown = () => {
    const target = document.getElementById("agents");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };
  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor }}
      className="relative min-h-screen w-full overflow-hidden bg-tech-grid pt-[160px] md:pt-[170px] pb-6 flex flex-col justify-between"
    >
      {/* Precision Ambient Radial Glows */}
      <motion.div
        style={{ opacity: glowOpacity1 }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.12)_0%,_rgba(89,9,7,0.03)_50%,_transparent_75%)] blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ opacity: glowOpacity2 }}
        className="absolute top-1/2 right-1/4 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(89,9,7,0.08)_0%,_rgba(255,255,255,0.45)_50%,_transparent_75%)] blur-[110px] pointer-events-none"
      />

      {/* Engineering Corner Crosshairs (+) */}
      <div className="absolute top-28 left-8 text-[#590907]/25 font-mono text-sm pointer-events-none select-none hidden md:block">
        +
      </div>
      <div className="absolute top-28 right-8 text-[#590907]/25 font-mono text-sm pointer-events-none select-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-8 left-8 text-[#590907]/25 font-mono text-sm pointer-events-none select-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-8 right-8 text-[#590907]/25 font-mono text-sm pointer-events-none select-none hidden md:block">
        +
      </div>

      {/* Hero Content: Left-aligned content + Right-side hero showcase image */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Heading, Subtitle & CTAs */}
        <div className="lg:col-span-6 xl:col-span-5 text-left">
          {/* Exact Typography Header - 4th Box Alignment */}
          <h1
            className="text-[44px] sm:text-[54px] md:text-[60px] font-extrabold text-[#221d18] tracking-[-1.5px] leading-[1.08] md:leading-[60px]"
            style={{
              fontWeight: 800,
              letterSpacing: "-1.5px",
            }}
          >
            One platform.
            <br />
            <span className="inline-flex items-baseline">
              <span className="text-[#221d18]">For&nbsp;</span>
              <span className="inline-flex items-baseline text-[#590907]">
                <span className="animate-text-shimmer">
                  {currentText}
                </span>
                <span
                  className="inline-block w-[3px] sm:w-[3.5px] md:w-[4px] h-[0.82em] bg-[#590907] ml-1 translate-y-[1px] md:translate-y-[2px] rounded-xs animate-cursor-blink select-none"
                  aria-hidden="true"
                />
              </span>
            </span>
            <br />
            <span className="text-[#221d18]">Automation.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#5A6054] max-w-xl font-normal leading-relaxed">
            Create compelling content, plan your publishing, and engage with your audience across every channel while staying true to your brand.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="px-7 py-3.5 rounded-full bg-[#221d18] text-white font-semibold text-sm hover:bg-[#590907] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Try free
            </button>
            <button className="px-7 py-3.5 rounded-full bg-white/90 border border-[#221d18]/15 text-[#221d18] font-semibold text-sm hover:bg-white hover:border-[#221d18]/30 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Watch intro
            </button>
          </div>
        </div>

        {/* Right Column: Hero Mockup Showcase with 5 independently moving 3D cards */}
        <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end">
          <HeroPhonesShowcase />
        </div>
      </div>

      {/* Bottom Center Scroll Down Indicator */}
      <div className="relative z-30 flex justify-center w-full pt-3 pb-1">
        <button
          onClick={handleScrollDown}
          aria-label="Scroll down to explore"
          className="group flex flex-col items-center gap-1 cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#590907]/60 group-hover:text-[#590907] transition-colors duration-200">
            Scroll to explore
          </span>
          <div className="w-[18px] h-[28px] rounded-full border-[1.5px] border-[#590907]/35 bg-white/40 backdrop-blur-xs flex items-start justify-center pt-1.5 shadow-2xs group-hover:border-[#590907]/75 group-hover:bg-white/75 transition-all duration-300">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [1, 0.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-[2.5px] h-[5px] rounded-full bg-[#590907]"
            />
          </div>
        </button>
      </div>
    </motion.section>
  );
}