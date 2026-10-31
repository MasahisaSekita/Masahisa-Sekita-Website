"use client";

import { useEffect, useRef } from "react";

interface Needle {
  x: number;
  y: number;
  baseAngle: number;
  currentAngle: number;
  targetAngle: number;
  length: number;
}

interface InteractiveHeroFieldProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

export default function InteractiveHeroField({ heroRef }: InteractiveHeroFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const hero = heroRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let needles: Needle[] = [];

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      active: false,
    };

    const setupCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      // Create a clean 8 cols x 7 rows matrix of needles with comfortable inset padding
      needles = [];
      const cols = 8;
      const rows = 7;

      // Inset padding so needles never clip against edges
      const paddingX = Math.max(width * 0.08, 24);
      const paddingY = Math.max(height * 0.08, 24);
      const innerW = width - paddingX * 2;
      const innerH = height - paddingY * 2;

      const cellW = innerW / (cols - 1);
      const cellH = innerH / (rows - 1);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = paddingX + c * cellW;
          const y = paddingY + r * cellH;

          // Natural resting flow matching Arlen McCluskey reference:
          // Top-left: ~ -35deg, rotating across the grid toward +85deg on the right/bottom
          const normX = c / (cols - 1);
          const normY = r / (rows - 1);
          const baseAngle = (-35 + normX * 85 + normY * 35) * (Math.PI / 180);

          needles.push({
            x,
            y,
            baseAngle,
            currentAngle: baseAngle,
            targetAngle: baseAngle,
            length: 12,
          });
        }
      }
    };

    setupCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const canvasRect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - canvasRect.left;
      mouse.y = e.clientY - canvasRect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", setupCanvas);

    // Track mouse across the whole hero section for broad responsive interaction
    const targetElement = hero || container;
    targetElement.addEventListener("mousemove", handleMouseMove);
    targetElement.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1.35;
      ctx.lineCap = "round";

      for (let i = 0; i < needles.length; i++) {
        const needle = needles[i];

        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - needle.x;
          const dy = mouse.y - needle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Needles rotate smoothly toward the cursor
          if (dist < 360) {
            const angleToMouse = Math.atan2(dy, dx);
            const influence = Math.pow(Math.max(0, 1 - dist / 360), 1.4);
            needle.targetAngle =
              needle.baseAngle * (1 - influence) + angleToMouse * influence;
          } else {
            needle.targetAngle = needle.baseAngle;
          }
        } else {
          needle.targetAngle = needle.baseAngle;
        }

        // Smooth spring-like interpolation
        needle.currentAngle += (needle.targetAngle - needle.currentAngle) * 0.14;

        const halfLen = needle.length / 2;
        const cos = Math.cos(needle.currentAngle);
        const sin = Math.sin(needle.currentAngle);

        const x1 = needle.x - cos * halfLen;
        const y1 = needle.y - sin * halfLen;
        const x2 = needle.x + cos * halfLen;
        const y2 = needle.y + sin * halfLen;

        ctx.strokeStyle = "rgba(28, 25, 23, 0.75)";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setupCanvas);
      targetElement.removeEventListener("mousemove", handleMouseMove);
      targetElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [heroRef]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block relative z-10"
      />
    </div>
  );
}
