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
  left: string;
  top: string;
  width: string;
}

const CARDS: CardConfig[] = [
  {
    id: 1,
    name: "Style Your Feed",
    badge: "AI Creativity",
    src: "/images/cards/card-1.png",
    baseZ: 10,
    duration: 5.6,
    delay: 0,
    floatY: [-6, 6, -6],
    floatRotate: [-0.6, 0.4, -0.6],
    left: "-2.4%",
    top: "19.0%",
    width: "28.0%",
  },
  {
    id: 2,
    name: "Automate. Create. Grow.",
    badge: "Smart Agents & Scheduling",
    src: "/images/cards/card-2.png",
    baseZ: 20,
    duration: 6.2,
    delay: 0.4,
    floatY: [7, -7, 7],
    floatRotate: [0.5, -0.3, 0.5],
    left: "16.1%",
    top: "16.4%",
    width: "28.0%",
  },
  {
    id: 3,
    name: "Your Brand. Every Channel.",
    badge: "Central Intelligence Hub",
    src: "/images/cards/card-3.png",
    baseZ: 30,
    duration: 4.8,
    delay: 0.2,
    floatY: [-9, 9, -9],
    floatRotate: [-0.3, 0.3, -0.3],
    left: "34.8%",
    top: "10.2%",
    width: "32.0%",
  },
  {
    id: 4,
    name: "Track. Analyze. Optimize.",
    badge: "Engagement Growth +248%",
    src: "/images/cards/card-4.png",
    baseZ: 22,
    duration: 5.8,
    delay: 0.6,
    floatY: [7, -7, 7],
    floatRotate: [-0.4, 0.4, -0.4],
    left: "54.4%",
    top: "17.6%",
    width: "30.3%",
  },
  {
    id: 5,
    name: "Turn Ideas Into Impact",
    badge: "Multi-Format Campaigns",
    src: "/images/cards/card-5.png",
    baseZ: 12,
    duration: 5.2,
    delay: 0.3,
    floatY: [-6, 6, -6],
    floatRotate: [0.5, -0.5, 0.5],
    left: "74.1%",
    top: "25.0%",
    width: "27.6%",
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

      {/* Render 5 independent full 3D phone cards */}
      {CARDS.map((card) => {
        const isHovered = hoveredCard === card.id;

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="absolute will-change-transform cursor-pointer"
            style={{
              left: card.left,
              top: card.top,
              width: card.width,
              zIndex: isHovered ? 50 : card.baseZ,
            }}
            animate={
              isHovered
                ? {
                    y: -16,
                    scale: 1.05,
                    filter: "drop-shadow(0 28px 45px rgba(89,9,7,0.32))",
                  }
                : {
                    y: card.floatY,
                    rotate: card.floatRotate,
                    scale: 1,
                    filter:
                      card.id === 3
                        ? "drop-shadow(0 20px 35px rgba(89,9,7,0.22))"
                        : "drop-shadow(0 14px 25px rgba(89,9,7,0.16))",
                  }
            }
            transition={
              isHovered
                ? {
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
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
                    scale: { duration: 0.3, ease: "easeOut" },
                    filter: { duration: 0.3, ease: "easeOut" },
                  }
            }
          >
            <div className="relative w-full aspect-[682/1024]">
              <Image
                src={card.src}
                alt={card.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                className="object-contain"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
