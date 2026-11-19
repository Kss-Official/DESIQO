"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  PARTICLE_COUNT,
  generateCubeFrame,
  generateCodeBrackets,
  generateBarChart,
  generateDNAHelix,
  generateAISparkles,
  generateNetworkShield,
  generateParticleColors,
} from "@/utils/shapes";

interface ParticleMorphProps {
  activeShapeIndex: number;
}

function MorphingParticlesMesh({ activeShapeIndex }: { activeShapeIndex: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const currentPositionsRef = useRef<Float32Array>(null!);

  // Pre-calculate all 6 shape target geometries
  const shapes = useMemo(() => {
    return [
      generateCubeFrame(PARTICLE_COUNT),
      generateCodeBrackets(PARTICLE_COUNT),
      generateBarChart(PARTICLE_COUNT),
      generateDNAHelix(PARTICLE_COUNT),
      generateAISparkles(PARTICLE_COUNT),
      generateNetworkShield(PARTICLE_COUNT),
    ];
  }, []);

  const colors = useMemo(() => generateParticleColors(PARTICLE_COUNT), []);

  // Initialize current positions array
  useEffect(() => {
    if (!currentPositionsRef.current) {
      currentPositionsRef.current = new Float32Array(shapes[0]);
    }
  }, [shapes]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !currentPositionsRef.current) return;

    const targetShape = shapes[activeShapeIndex] || shapes[0];
    const currentArray = currentPositionsRef.current;
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    // Responsive lerp factor for smooth organic morphing
    const lerpSpeed = Math.min(delta * 4.5, 0.2);
    const time = state.clock.getElapsedTime();

    // Rotate points smoothly
    pointsRef.current.rotation.y += delta * 0.35;
    pointsRef.current.rotation.x = Math.sin(time * 0.4) * 0.12;

    for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
      // Lerp X, Y, Z towards target shape
      currentArray[i] += (targetShape[i] - currentArray[i]) * lerpSpeed;
      currentArray[i + 1] += (targetShape[i + 1] - currentArray[i + 1]) * lerpSpeed;
      currentArray[i + 2] += (targetShape[i + 2] - currentArray[i + 2]) * lerpSpeed;

      // Add dynamic micro-swirl turbulence
      const pIndex = i / 3;
      const swirl = Math.sin(time * 2.0 + pIndex * 0.05) * 0.02;

      array[i] = currentArray[i] + swirl;
      array[i + 1] = currentArray[i + 1] + swirl;
      array[i + 2] = currentArray[i + 2] + swirl;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[new Float32Array(shapes[0]), 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.052}
        vertexColors
        transparent
        opacity={0.92}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleMorphCanvas({ activeShapeIndex }: ParticleMorphProps) {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[500px] relative flex items-center justify-center">
      {/* Ambient Burgundy glow core behind canvas */}
      <div className="absolute w-72 h-72 rounded-full bg-[#590907]/30 blur-[90px] pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-[#E8D2B5]/10 blur-[60px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        className="relative z-10"
      >
        <ambientLight intensity={0.6} />
        <MorphingParticlesMesh activeShapeIndex={activeShapeIndex} />
      </Canvas>
    </div>
  );
}
