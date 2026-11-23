"use client";

import { useEffect, useRef } from "react";

/**
 * Googly eyes whose pupils follow the cursor.
 * Matches the "Eyes (interactive)" layers in Figma (Frame 18):
 * two tilted eyes, each with sclera, iris, pupil core and highlight.
 *
 * Usage: <GooglyEyes size={112} /> placed after the intro paragraph.
 */

type EyeConfig = { cx: number; cy: number };

const EYES: EyeConfig[] = [
  { cx: 30, cy: 40 }, // left eye
  { cx: 70, cy: 48 }, // right eye
];

const SCLERA_RX = 19;
const SCLERA_RY = 29;
const TILT = -14; // degrees, same as Figma
const IRIS_R = 10;
const MAX_TRAVEL_X = SCLERA_RX - IRIS_R - 2; // keep iris inside the white
const MAX_TRAVEL_Y = SCLERA_RY - IRIS_R - 3;

export default function GooglyEyes({ size = 112 }: { size?: number }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pupilRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame = 0;
    let mouse = { x: 0, y: 0 };

    const update = () => {
      frame = 0;
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const scale = rect.width / 112;

      EYES.forEach((eye, i) => {
        const g = pupilRefs.current[i];
        if (!g) return;
        // Eye center in screen space
        const ex = rect.left + eye.cx * scale;
        const ey = rect.top + eye.cy * scale;
        const dx = mouse.x - ex;
        const dy = mouse.y - ey;
        const dist = Math.hypot(dx, dy);
        // Ease toward the edge as the cursor gets further away
        const pull = Math.min(dist / 150, 1);
        // Rotate the direction into the eye's tilted frame
        const a = Math.atan2(dy, dx) - (TILT * Math.PI) / 180;
        const tx = Math.cos(a) * MAX_TRAVEL_X * pull;
        const ty = Math.sin(a) * MAX_TRAVEL_Y * pull;
        g.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    };

    const onMove = (e: PointerEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width={size}
      height={(size * 94) / 112}
      viewBox="0 0 112 94"
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="sclera" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#FBFBF4" />
          <stop offset="100%" stopColor="#DCDCCF" />
        </radialGradient>
      </defs>

      {EYES.map((eye, i) => (
        <g key={i} transform={`translate(${eye.cx} ${eye.cy}) rotate(${TILT})`}>
          <ellipse
            rx={SCLERA_RX}
            ry={SCLERA_RY}
            fill="url(#sclera)"
            stroke="#C9C9BC"
            strokeWidth={0.75}
          />
          <g
            ref={(el) => {
              pupilRefs.current[i] = el;
            }}
            style={{ transition: "transform 120ms ease-out" }}
          >
            <circle r={IRIS_R} fill="#8A5A2E" stroke="#5E3B1C" strokeWidth={1} />
            <circle r={5} fill="#141414" />
            <circle cx={2.75} cy={-2.75} r={1.75} fill="#FFFFFF" />
          </g>
        </g>
      ))}
    </svg>
  );
}
