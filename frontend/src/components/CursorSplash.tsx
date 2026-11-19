"use client";

import React, { useEffect, useRef } from "react";

interface Droplet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  friction: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  color: string;
  alpha: number;
  decay: number;
  lineWidth: number;
}

const SPLASH_COLORS = [
  "rgba(89, 9, 7, ",     // Signature Deep Burgundy
  "rgba(140, 29, 24, ",   // Crimson Accent
  "rgba(60, 5, 8, ",      // Dark Wine
  "rgba(195, 142, 90, ",  // Warm Bronze / Gold
  "rgba(232, 210, 181, ", // Desert Sand
  "rgba(250, 244, 235, ", // Light Cream
];

export default function CursorSplash() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let droplets: Droplet[] = [];
    let ripples: Ripple[] = [];
    let animationFrameId: number;
    let isRunning = false;

    let lastX = 0;
    let lastY = 0;
    let hasMoved = false;

    // Handle high-DPI scaling
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Strict exclusion check: never trigger inside the Hero section
    const isInsideHero = (
      clientX: number,
      clientY: number,
      target: EventTarget | null
    ): boolean => {
      // 1. Direct ancestor DOM check
      if (
        target &&
        target instanceof Element &&
        target.closest("#hero-section")
      ) {
        return true;
      }

      // 2. Viewport coordinate bounding rect check
      const hero = document.getElementById("hero-section");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          return true;
        }
      }

      return false;
    };

    // Spawn splash droplets on click or fast mouse movements
    const createClickSplash = (x: number, y: number) => {
      // 1. Expanding primary shockwave ripples
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius: 52 + Math.random() * 18,
        color: SPLASH_COLORS[0],
        alpha: 0.85,
        decay: 0.028,
        lineWidth: 2.8,
      });

      ripples.push({
        x,
        y,
        radius: 2,
        maxRadius: 36 + Math.random() * 12,
        color: SPLASH_COLORS[3],
        alpha: 0.7,
        decay: 0.038,
        lineWidth: 1.8,
      });

      // 2. Liquid spray burst of droplets
      const dropletCount = 18 + Math.floor(Math.random() * 8);
      for (let i = 0; i < dropletCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2.2 + Math.random() * 5.8;
        const colorBase =
          SPLASH_COLORS[Math.floor(Math.random() * SPLASH_COLORS.length)];

        droplets.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (Math.random() * 1.5), // slight upward pop
          radius: 2 + Math.random() * 3.5,
          color: colorBase,
          alpha: 0.95,
          decay: 0.02 + Math.random() * 0.025,
          gravity: 0.12,
          friction: 0.94,
        });
      }

      startLoop();
    };

    // Spawn subtle trailing splash droplets on mouse movement
    const createMoveSplash = (x: number, y: number, dx: number, dy: number) => {
      // Trailing micro droplets
      const count = 1 + (Math.random() > 0.6 ? 1 : 0);
      for (let i = 0; i < count; i++) {
        const spreadAngle = (Math.random() - 0.5) * 1.4;
        const baseAngle = Math.atan2(dy, dx) + Math.PI + spreadAngle; // flick back
        const speed = 0.8 + Math.random() * 2.2;
        const colorBase =
          SPLASH_COLORS[Math.floor(Math.random() * (SPLASH_COLORS.length - 1))];

        droplets.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(baseAngle) * speed,
          vy: Math.sin(baseAngle) * speed + 0.2,
          radius: 1.4 + Math.random() * 2.0,
          color: colorBase,
          alpha: 0.65,
          decay: 0.035 + Math.random() * 0.02,
          gravity: 0.06,
          friction: 0.92,
        });
      }

      // Occasional soft micro ripple when gliding smoothly
      if (Math.random() > 0.72) {
        ripples.push({
          x,
          y,
          radius: 2,
          maxRadius: 18 + Math.random() * 8,
          color: SPLASH_COLORS[0],
          alpha: 0.4,
          decay: 0.045,
          lineWidth: 1.2,
        });
      }

      startLoop();
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      let target: EventTarget | null = e.target;

      if ("touches" in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
        target = e.touches[0].target;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (isInsideHero(clientX, clientY, target)) return;

      createClickSplash(clientX, clientY);
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      let target: EventTarget | null = e.target;

      if ("touches" in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
        target = e.touches[0].target;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (isInsideHero(clientX, clientY, target)) {
        hasMoved = false;
        return;
      }

      if (!hasMoved) {
        lastX = clientX;
        lastY = clientY;
        hasMoved = true;
        return;
      }

      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const distance = Math.hypot(dx, dy);

      if (distance > 12) {
        createMoveSplash(clientX, clientY, dx, dy);
        lastX = clientX;
        lastY = clientY;
      }
    };

    // Render loop
    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 1. Draw and update expanding shockwave ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += (r.maxRadius - r.radius) * 0.12 + 0.8;
        r.alpha -= r.decay;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${r.color}${Math.max(0, r.alpha)})`;
        ctx.lineWidth = r.lineWidth * (r.alpha / 0.85);
        ctx.stroke();
      }

      // 2. Draw and update splash droplets
      for (let i = droplets.length - 1; i >= 0; i--) {
        const d = droplets[i];
        d.x += d.vx;
        d.y += d.vy;
        d.vy += d.gravity;
        d.vx *= d.friction;
        d.vy *= d.friction;
        d.alpha -= d.decay;

        if (d.alpha <= 0 || d.radius <= 0.3) {
          droplets.splice(i, 1);
          continue;
        }

        // Draw droplet body
        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(0.5, d.radius * (d.alpha / 0.95)), 0, Math.PI * 2);
        ctx.fillStyle = `${d.color}${Math.max(0, d.alpha)})`;
        ctx.fill();
      }

      // Keep running if there are active elements; stop when idle to conserve battery & CPU
      if (ripples.length > 0 || droplets.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
