"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CardConfig {
  id: number;
  name: string;
  badge: string;
  src: string;
  baseZ: number;
  duration: number;
  delay: number;
  floatY: [number, number, number];
  floatRotate: [number, number, number];
  hoverY: number;
  hoverScale: number;
  hitArea: {
    left: string;
    width: string;
    top: string;
    bottom: string;
  };
}

const CARDS: CardConfig[] = [
  {
    id: 1,
    name: "Style Your Feed",
    badge: "AI Creativity",
    src: "/images/card-layer-1.png",
    baseZ: 10,
    duration: 5.6,
    delay: 0,
    floatY: [-3, 3, -3],
    floatRotate: [-0.3, 0.3, -0.3],
    hoverY: -4,
    hoverScale: 1.015,
    hitArea: { left: "1.5%", width: "19%", top: "18%", bottom: "18%" },
  },
  {
    id: 2,
    name: "Automate. Create. Grow.",
    badge: "Smart Agents & Scheduling",
    src: "/images/card-layer-2.png",
    baseZ: 20,
    duration: 6.2,
    delay: 0.4,
    floatY: [3.5, -3.5, 3.5],
    floatRotate: [0.3, -0.2, 0.3],
    hoverY: -5,
    hoverScale: 1.018,
    hitArea: { left: "20%", width: "19%", top: "16%", bottom: "16%" },
  },
  {
    id: 3,
    name: "Your Brand. Every Channel.",
    badge: "Central Intelligence Hub",
    src: "/images/card-layer-3.png",
    baseZ: 30,
    duration: 4.8,
    delay: 0.2,
    floatY: [-5, 5, -5],
    floatRotate: [-0.2, 0.2, -0.2],
    hoverY: -8,
    hoverScale: 1.025,
    hitArea: { left: "38%", width: "24%", top: "10%", bottom: "12%" },
  },
  {
    id: 4,
    name: "Track. Analyze. Optimize.",
    badge: "Engagement Growth +248%",
    src: "/images/card-layer-4.png",
    baseZ: 22,
    duration: 5.8,
    delay: 0.6,
    floatY: [3.5, -3.5, 3.5],
    floatRotate: [-0.3, 0.2, -0.3],
    hoverY: -5,
    hoverScale: 1.018,
    hitArea: { left: "61%", width: "19%", top: "16%", bottom: "16%" },
  },
  {
    id: 5,
    name: "Turn Ideas Into Impact",
    badge: "Multi-Format Campaigns",
    src: "/images/card-layer-5.png",
    baseZ: 12,
    duration: 5.2,
    delay: 0.3,
    floatY: [-3, 3, -3],
    floatRotate: [0.3, -0.3, 0.3],
    hoverY: -4,
    hoverScale: 1.015,
    hitArea: { left: "79.5%", width: "19%", top: "20%", bottom: "18%" },
  },
];

export default function HeroPhonesShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values (normalized -1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid parallax feel
  const springConfig = { damping: 25, stiffness: 120, mass: 0.4 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredCard(null);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] lg:max-w-[720px] xl:max-w-[800px] aspect-[1024/682] select-none"
      style={{ perspective: 1200 }}
    >
      {/* Precision ambient backlight glow */}
      <div className="absolute inset-x-8 top-12 bottom-8 bg-[radial-gradient(ellipse_at_center,_rgba(89,9,7,0.16)_0%,_rgba(255,255,255,0.4)_45%,_transparent_75%)] blur-3xl pointer-events-none -z-10 scale-95" />

      {/* Render 5 independently animated phone card layers */}
      {CARDS.map((card) => {
        const isHovered = hoveredCard === card.id;

        return (
          <motion.div
            key={card.id}
            className="absolute inset-0 will-change-transform pointer-events-none"
            style={{
              zIndex: card.baseZ, // Strict natural hierarchy preserved at all times
            }}
            animate={
              isHovered
                ? {
                    y: card.hoverY,
                    scale: card.hoverScale,
                    filter: "brightness(1.03) drop-shadow(0 24px 36px rgba(89,9,7,0.26))",
                  }
                : {
                    y: card.floatY,
                    rotate: card.floatRotate,
                    scale: 1,
                    filter:
                      card.id === 3
                        ? "drop-shadow(0 20px 32px rgba(89,9,7,0.18))"
                        : "drop-shadow(0 14px 22px rgba(89,9,7,0.14))",
                  }
            }
            transition={
              isHovered
                ? {
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                  }
                : {
                    y: {
                      duration: card.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.delay,
                    },
                    rotate: {
                      duration: card.duration * 1.05,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.delay,
                    },
                    scale: { duration: 0.35, ease: "easeOut" },
                    filter: { duration: 0.35, ease: "easeOut" },
                  }
            }
          >
            <Image
              src={card.src}
              alt={card.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="object-contain"
            />
          </motion.div>
        );
      })}

      {/* Interactive Hit Areas for each of the 5 cards */}
      {CARDS.map((card) => (
        <div
          key={`hit-${card.id}`}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
          className="absolute cursor-pointer rounded-3xl"
          style={{
            left: card.hitArea.left,
            width: card.hitArea.width,
            top: card.hitArea.top,
            bottom: card.hitArea.bottom,
            zIndex: 40,
          }}
          title={card.name}
        />
      ))}

      {/* Floating Pill Status on Hover (Bottom Center of Showcase) */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 z-50">
        {hoveredCard !== null ? (
          <div className="px-4 py-1.5 rounded-full bg-[#221d18]/90 text-white text-xs font-medium backdrop-blur-md shadow-lg border border-white/10 flex items-center gap-2 animate-in fade-in zoom-in-95 duration-200">
            <span className="w-2 h-2 rounded-full bg-[#E8D2B5] animate-ping" />
            <span className="text-[#E8D2B5] font-semibold">
              {CARDS.find((c) => c.id === hoveredCard)?.name}
            </span>
            <span className="text-white/60">•</span>
            <span className="text-white/80">
              {CARDS.find((c) => c.id === hoveredCard)?.badge}
            </span>
          </div>
        ) : (
          <div className="text-[11px] font-mono tracking-wider text-[#590907]/40 uppercase pointer-events-none select-none hidden sm:block">
            DESIQO 3D SHOWCASE // HOVER TO INSPECT CARDS
          </div>
        )}
      </div>
    </div>
  );
}
