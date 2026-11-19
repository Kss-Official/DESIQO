// Generates 3D coordinates for particle shapes
export const PARTICLE_COUNT = 3000;

// Helper to push a point into array
function setPoint(arr: Float32Array, index: number, x: number, y: number, z: number) {
  const i = index * 3;
  arr[i] = x;
  arr[i + 1] = y;
  arr[i + 2] = z;
}

// 0. Sphere (Hero Centerpiece)
export function generateSphere(count = PARTICLE_COUNT): Float32Array {
  const positions = new Float32Array(count * 3);
  const phi = Math.PI * (Math.sqrt(5) - 1); // golden angle

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // y from 1 to -1
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const r = 2.4 + (Math.random() - 0.5) * 0.15;
    const x = Math.cos(theta) * radius * r;
    const z = Math.sin(theta) * radius * r;

    setPoint(positions, i, x, y * r, z);
  }
  return positions;
}

// 1. Master Orchestrator: Wireframe 3D Cube / Frame with Inner Core
export function generateCubeFrame(count = PARTICLE_COUNT): Float32Array {
  const positions = new Float32Array(count * 3);
  const size = 2.2;
  const half = size / 2;

  const edges = [
    { start: [-half, -half, -half], end: [half, -half, -half] },
    { start: [half, -half, -half], end: [half, -half, half] },
    { start: [half, -half, half], end: [-half, -half, half] },
    { start: [-half, -half, half], end: [-half, -half, -half] },
    { start: [-half, half, -half], end: [half, half, -half] },
    { start: [half, half, -half], end: [half, half, half] },
    { start: [half, half, half], end: [-half, half, half] },
    { start: [-half, half, half], end: [-half, half, -half] },
    { start: [-half, -half, -half], end: [-half, half, -half] },
    { start: [half, -half, -half], end: [half, half, -half] },
    { start: [half, -half, half], end: [half, half, half] },
    { start: [-half, -half, half], end: [-half, half, half] },
  ];

  const pointsPerEdge = Math.floor((count * 0.6) / edges.length);
  let idx = 0;

  for (const edge of edges) {
    for (let j = 0; j < pointsPerEdge && idx < count; j++) {
      const t = j / pointsPerEdge;
      const x = edge.start[0] + (edge.end[0] - edge.start[0]) * t + (Math.random() - 0.5) * 0.08;
      const y = edge.start[1] + (edge.end[1] - edge.start[1]) * t + (Math.random() - 0.5) * 0.08;
      const z = edge.start[2] + (edge.end[2] - edge.start[2]) * t + (Math.random() - 0.5) * 0.08;
      setPoint(positions, idx++, x, y, z);
    }
  }

  while (idx < count) {
    const isCore = Math.random() < 0.5;
    if (isCore) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = 0.6 * Math.cbrt(Math.random());
      setPoint(
        positions,
        idx++,
        rad * Math.sin(phi) * Math.cos(theta),
        rad * Math.sin(phi) * Math.sin(theta),
        rad * Math.cos(phi)
      );
    } else {
      const face = Math.floor(Math.random() * 6);
      const u = (Math.random() - 0.5) * size * 0.9;
      const v = (Math.random() - 0.5) * size * 0.9;
      const jitter = (Math.random() - 0.5) * 0.05;
      if (face === 0) setPoint(positions, idx++, half + jitter, u, v);
      else if (face === 1) setPoint(positions, idx++, -half + jitter, u, v);
      else if (face === 2) setPoint(positions, idx++, u, half + jitter, v);
      else if (face === 3) setPoint(positions, idx++, u, -half + jitter, v);
      else if (face === 4) setPoint(positions, idx++, u, v, half + jitter);
      else setPoint(positions, idx++, u, v, -half + jitter);
    }
  }

  return positions;
}

// 2. Research & Event: 3D Observance Matrix & Code Structure </>
export function generateCodeBrackets(count = PARTICLE_COUNT): Float32Array {
  const positions = new Float32Array(count * 3);
  let idx = 0;

  const leftCount = Math.floor(count * 0.38);
  const rightCount = Math.floor(count * 0.38);
  const slashCount = count - leftCount - rightCount;

  for (let i = 0; i < leftCount; i++) {
    const t = i / leftCount;
    let x, y;
    if (t < 0.5) {
      const segT = t / 0.5;
      x = -1.0 + (-2.1 - -1.0) * segT;
      y = 1.3 + (0 - 1.3) * segT;
    } else {
      const segT = (t - 0.5) / 0.5;
      x = -2.1 + (-1.0 - -2.1) * segT;
      y = 0 + (-1.3 - 0) * segT;
    }
    const z = (Math.random() - 0.5) * 0.5;
    const jitter = (Math.random() - 0.5) * 0.08;
    setPoint(positions, idx++, x + jitter, y + jitter, z);
  }

  for (let i = 0; i < slashCount; i++) {
    const t = i / slashCount;
    const x = -0.45 + (0.45 - -0.45) * t;
    const y = -1.5 + (1.5 - -1.5) * t;
    const z = (Math.random() - 0.5) * 0.5;
    const jitter = (Math.random() - 0.5) * 0.08;
    setPoint(positions, idx++, x + jitter, y + jitter, z);
  }

  for (let i = 0; i < rightCount; i++) {
    const t = i / rightCount;
    let x, y;
    if (t < 0.5) {
      const segT = t / 0.5;
      x = 1.0 + (2.1 - 1.0) * segT;
      y = 1.3 + (0 - 1.3) * segT;
    } else {
      const segT = (t - 0.5) / 0.5;
      x = 2.1 + (1.0 - 2.1) * segT;
      y = 0 + (-1.3 - 0) * segT;
    }
    const z = (Math.random() - 0.5) * 0.5;
    const jitter = (Math.random() - 0.5) * 0.08;
    setPoint(positions, idx++, x + jitter, y + jitter, z);
  }

  return positions;
}

// 3. Content & Growth: 3D Ascending Growth Wave & Bar Chart
export function generateBarChart(count = PARTICLE_COUNT): Float32Array {
  const positions = new Float32Array(count * 3);
  let idx = 0;

  const barHeights = [0.9, 1.5, 2.1, 2.9];
  const barWidth = 0.55;
  const barDepth = 0.55;
  const xPositions = [-2.0, -0.7, 0.6, 1.9];
  const baseY = -1.5;

  const arrowPointsCount = Math.floor(count * 0.35);
  const barPointsCount = count - arrowPointsCount;
  const perBarCount = Math.floor(barPointsCount / 4);

  for (let b = 0; b < 4; b++) {
    const bx = xPositions[b];
    const h = barHeights[b];
    for (let i = 0; i < perBarCount; i++) {
      const x = bx + (Math.random() - 0.5) * barWidth;
      const y = baseY + Math.random() * h;
      const z = (Math.random() - 0.5) * barDepth;
      setPoint(positions, idx++, x, y, z);
    }
  }

  while (idx < count - arrowPointsCount) {
    const b = Math.floor(Math.random() * 4);
    const x = xPositions[b] + (Math.random() - 0.5) * barWidth;
    const y = baseY + Math.random() * barHeights[b];
    const z = (Math.random() - 0.5) * barDepth;
    setPoint(positions, idx++, x, y, z);
  }

  for (let i = 0; i < arrowPointsCount; i++) {
    const t = i / arrowPointsCount;
    if (t < 0.8) {
      const segT = t / 0.8;
      const x = -2.5 + segT * 4.4;
      const y = -1.2 + Math.pow(segT, 1.4) * 2.8;
      const z = 0.4 + (Math.random() - 0.5) * 0.15;
      setPoint(positions, idx++, x, y, z);
    } else {
      const headT = (t - 0.8) / 0.2;
      const tipX = 2.4;
      const tipY = 1.9;
      const branch = headT < 0.5 ? 0 : 1;
      const localT = (headT % 0.5) / 0.5;
      let ax, ay;
      if (branch === 0) {
        ax = tipX - localT * 0.55;
        ay = tipY - localT * 0.1;
      } else {
        ax = tipX - localT * 0.25;
        ay = tipY - localT * 0.55;
      }
      setPoint(positions, idx++, ax, ay, 0.4 + (Math.random() - 0.5) * 0.15);
    }
  }

  return positions;
}

// 4. Design & Templates: 3D Double Helix Brand DNA
export function generateDNAHelix(count = PARTICLE_COUNT): Float32Array {
  const positions = new Float32Array(count * 3);
  const totalTurns = 3.5;
  const height = 4.0;
  const radius = 1.25;

  let idx = 0;
  const strandCount = Math.floor(count * 0.38);
  const rungsCount = count - strandCount * 2;

  for (let i = 0; i < strandCount; i++) {
    const t = (i / strandCount) * 2 - 1;
    const y = t * (height / 2);
    const angle = t * totalTurns * Math.PI;
    const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.08;
    const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.08;
    setPoint(positions, idx++, x, y, z);
  }

  for (let i = 0; i < strandCount; i++) {
    const t = (i / strandCount) * 2 - 1;
    const y = t * (height / 2);
    const angle = t * totalTurns * Math.PI + Math.PI;
    const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.08;
    const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.08;
    setPoint(positions, idx++, x, y, z);
  }

  const numRungs = 24;
  for (let i = 0; i < rungsCount; i++) {
    const rungIndex = Math.floor(Math.random() * numRungs);
    const t = (rungIndex / numRungs) * 2 - 1;
    const y = t * (height / 2);
    const angle = t * totalTurns * Math.PI;

    const s1X = Math.cos(angle) * radius;
    const s1Z = Math.sin(angle) * radius;
    const s2X = Math.cos(angle + Math.PI) * radius;
    const s2Z = Math.sin(angle + Math.PI) * radius;

    const lerp = Math.random();
    const x = s1X + (s2X - s1X) * lerp + (Math.random() - 0.5) * 0.06;
    const z = s1Z + (s2Z - s1Z) * lerp + (Math.random() - 0.5) * 0.06;
    setPoint(positions, idx++, x, y, z);
  }

  return positions;
}

// 5. Quality & Compliance: 3D Four-Point AI Safety Astroid & Stars
export function generateAISparkles(count = PARTICLE_COUNT): Float32Array {
  const positions = new Float32Array(count * 3);
  let idx = 0;

  const mainCount = Math.floor(count * 0.7);
  for (let i = 0; i < mainCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const r = Math.pow(Math.abs(Math.cos(theta)), 3) + Math.pow(Math.abs(Math.sin(theta)), 3);
    const scale = 2.4 / (r + 0.15);
    const dist = Math.pow(Math.random(), 0.7) * scale;

    const x = dist * Math.cos(theta);
    const y = dist * Math.sin(theta);
    const zFalloff = Math.max(0, 1 - (Math.abs(x) + Math.abs(y)) / 2.2);
    const z = (Math.random() - 0.5) * 0.8 * zFalloff;

    setPoint(positions, idx++, x, y, z);
  }

  while (idx < count) {
    const miniStar = Math.random() < 0.5 ? 0 : 1;
    const center = miniStar === 0 ? [-1.6, 1.4, 0.4] : [1.7, -1.3, -0.3];
    const theta = Math.random() * Math.PI * 2;
    const r = Math.pow(Math.abs(Math.cos(theta)), 3) + Math.pow(Math.abs(Math.sin(theta)), 3);
    const dist = Math.pow(Math.random(), 0.6) * (0.8 / (r + 0.1));

    const x = center[0] + dist * Math.cos(theta);
    const y = center[1] + dist * Math.sin(theta);
    const z = center[2] + (Math.random() - 0.5) * 0.3;
    setPoint(positions, idx++, x, y, z);
  }

  return positions;
}

// 6. Publishing & Gateway: 3D Connected Security Shield & Nodes
export function generateNetworkShield(count = PARTICLE_COUNT): Float32Array {
  const positions = new Float32Array(count * 3);
  let idx = 0;

  const boundaryCount = Math.floor(count * 0.45);
  for (let i = 0; i < boundaryCount; i++) {
    const t = i / boundaryCount;
    let x, y;
    if (t < 0.25) {
      const st = t / 0.25;
      x = -1.8 + st * 3.6;
      y = 1.5 + Math.sin(st * Math.PI) * 0.4;
    } else if (t < 0.45) {
      const st = (t - 0.25) / 0.2;
      x = -1.8;
      y = 1.5 - st * 1.5;
    } else if (t < 0.65) {
      const st = (t - 0.45) / 0.2;
      x = 1.8;
      y = 1.5 - st * 1.5;
    } else if (t < 0.825) {
      const st = (t - 0.65) / 0.175;
      x = -1.8 * (1 - st);
      y = 0 - st * 2.1;
    } else {
      const st = (t - 0.825) / 0.175;
      x = 1.8 * (1 - st);
      y = 0 - st * 2.1;
    }
    const z = (Math.random() - 0.5) * 0.2;
    setPoint(positions, idx++, x + (Math.random() - 0.5) * 0.08, y + (Math.random() - 0.5) * 0.08, z);
  }

  const nodes = [
    [0, 0.8, 0.3],
    [-0.9, 0.5, 0.2],
    [0.9, 0.5, 0.2],
    [-0.8, -0.6, 0.15],
    [0.8, -0.6, 0.15],
    [0, -1.2, 0.25],
    [0, -0.1, 0.4],
  ];

  while (idx < count) {
    const n1 = nodes[Math.floor(Math.random() * nodes.length)];
    const n2 = nodes[Math.floor(Math.random() * nodes.length)];
    const lerp = Math.random();
    const x = n1[0] + (n2[0] - n1[0]) * lerp + (Math.random() - 0.5) * 0.12;
    const y = n1[1] + (n2[1] - n1[1]) * lerp + (Math.random() - 0.5) * 0.12;
    const z = n1[2] + (n2[2] - n1[2]) * lerp + (Math.random() - 0.5) * 0.12;
    setPoint(positions, idx++, x, y, z);
  }

  return positions;
}

// Particle colors array tuned for Warm Cream Beige (#E8D2B5) background:
// Deep Burgundy (#590907), Rich Wine (#7A0E12), Muted Sage (#485043), and Dark Espresso
export function generateParticleColors(count = PARTICLE_COUNT): Float32Array {
  const colors = new Float32Array(count * 3);

  // Deep Burgundy (#590907): 0.35, 0.035, 0.027
  // Rich Wine (#7A0E12): 0.48, 0.055, 0.07
  // Dark Sage / Slate: 0.28, 0.32, 0.26
  // Intense Crimson Accent: 0.65, 0.08, 0.08

  for (let i = 0; i < count; i++) {
    const rand = Math.random();
    let r, g, b;

    if (rand < 0.6) {
      // Primary Deep Burgundy
      r = 0.35 + (Math.random() - 0.5) * 0.05;
      g = 0.035 + (Math.random() - 0.5) * 0.01;
      b = 0.027 + (Math.random() - 0.5) * 0.01;
    } else if (rand < 0.85) {
      // Rich Wine / Crimson
      r = 0.48 + (Math.random() - 0.5) * 0.06;
      g = 0.055 + (Math.random() - 0.5) * 0.02;
      b = 0.07 + (Math.random() - 0.5) * 0.02;
    } else if (rand < 0.95) {
      // Muted Dark Sage
      r = 0.28 + (Math.random() - 0.5) * 0.03;
      g = 0.32 + (Math.random() - 0.5) * 0.03;
      b = 0.26 + (Math.random() - 0.5) * 0.03;
    } else {
      // Intense Burgundy Accent
      r = 0.62;
      g = 0.08;
      b = 0.08;
    }

    colors[i * 3] = r;
    colors[i * 3 + 1] = g;
    colors[i * 3 + 2] = b;
  }

  return colors;
}
