"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HERO_PARTICLE_COUNT = 7200;
const SPHERE_BASE_RADIUS = 2.18;

// Generate smooth circular dot texture for anti-aliased round particles
function createCircleTexture(): THREE.Texture | null {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.45, "rgba(255, 255, 255, 0.95)");
  gradient.addColorStop(0.75, "rgba(255, 255, 255, 0.45)");
  gradient.addColorStop(0.95, "rgba(255, 255, 255, 0.08)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Generate dense 3D particle sphere coordinates and palette
function generateGlobeParticles(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const scales = new Float32Array(count);

  const phi = Math.PI * (Math.sqrt(5) - 1); // Golden ratio angle for uniform distribution

  for (let i = 0; i < count; i++) {
    // 88% on spherical shell, 12% in inner depth layer
    const isShell = i < count * 0.88;
    const y = 1 - (i / (count - 1)) * 2; // -1 to +1
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = phi * i;

    let r: number;
    if (isShell) {
      // Crisp spherical shell with delicate micro-thickness
      r = SPHERE_BASE_RADIUS + (Math.random() - 0.5) * 0.06;
    } else {
      // Subsurface volumetric core points
      r = SPHERE_BASE_RADIUS * (0.4 + Math.random() * 0.55);
    }

    const x = Math.cos(theta) * radiusAtY * r;
    const z = Math.sin(theta) * radiusAtY * r;
    const py = y * r;

    const i3 = i * 3;
    positions[i3] = x;
    positions[i3 + 1] = py;
    positions[i3 + 2] = z;

    // Rich luxury palette tuned for Warm Cream Beige (#E8D2B5)
    const rand = Math.random();
    let cr: number, cg: number, cb: number;

    if (rand < 0.58) {
      // Signature Deep Burgundy (#590907)
      cr = 0.35 + (Math.random() - 0.5) * 0.04;
      cg = 0.035 + (Math.random() - 0.5) * 0.01;
      cb = 0.027 + (Math.random() - 0.5) * 0.01;
    } else if (rand < 0.82) {
      // Rich Wine / Crimson (#7A0E12)
      cr = 0.48 + (Math.random() - 0.5) * 0.05;
      cg = 0.055 + (Math.random() - 0.5) * 0.015;
      cb = 0.07 + (Math.random() - 0.5) * 0.015;
    } else if (rand < 0.93) {
      // Deep Velvet Garnet (#350406)
      cr = 0.22 + (Math.random() - 0.5) * 0.03;
      cg = 0.02 + (Math.random() - 0.5) * 0.008;
      cb = 0.025 + (Math.random() - 0.5) * 0.008;
    } else {
      // Muted Sage Slate Accent (#444D40)
      cr = 0.26 + (Math.random() - 0.5) * 0.03;
      cg = 0.30 + (Math.random() - 0.5) * 0.03;
      cb = 0.24 + (Math.random() - 0.5) * 0.03;
    }

    colors[i3] = cr;
    colors[i3 + 1] = cg;
    colors[i3 + 2] = cb;

    scales[i] = isShell ? 0.8 + Math.random() * 0.4 : 0.5 + Math.random() * 0.3;
  }

  return { positions, colors, scales };
}

function ParticleGlobe() {
  const pointsRef = useRef<THREE.Points>(null!);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const circleTexture = useMemo(() => createCircleTexture(), []);

  const { positions, colors } = useMemo(() => {
    return generateGlobeParticles(HERO_PARTICLE_COUNT);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    // Smooth mouse parallax easing
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.03;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.03;

    // Steady, hypnotic 3D globe rotation
    pointsRef.current.rotation.y += delta * 0.16;

    // Fixed planetary axial tilt with subtle reactive mouse parallax
    pointsRef.current.rotation.x = 0.22 + mouseRef.current.y * 0.15;
    pointsRef.current.rotation.z = -0.1 + mouseRef.current.x * 0.12;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.046}
        map={circleTexture || undefined}
        vertexColors
        transparent
        opacity={0.92}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroParticleSphere() {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.0} />
        <ParticleGlobe />
      </Canvas>
    </div>
  );
}
