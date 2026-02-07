"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number; // 0-1 normalized
  y: number; // 0-1 normalized
  baseRadius: number;
  speed: number; // twinkle speed
  phase: number; // random phase offset
  brightness: number; // 0-1 peak brightness
}

export function StrataBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const initParticles = useCallback(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        baseRadius: 0.8 + Math.random() * 2.2,
        speed: 0.3 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        brightness: 0.4 + Math.random() * 0.6,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    initParticles();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx!.scale(dpr, dpr);
    }

    resize();

    // Strata layer definitions — matching the reference image colors
    // Top to bottom: dark navy → blue → teal → cyan/mint → green → dark
    const layers = [
      { color: "hsl(220, 30%, 8%)", offset: 0.0 },
      { color: "hsl(218, 28%, 12%)", offset: 0.08 },
      { color: "hsl(215, 30%, 16%)", offset: 0.18 },
      { color: "hsl(210, 32%, 20%)", offset: 0.28 },
      { color: "hsl(200, 38%, 26%)", offset: 0.38 },
      { color: "hsl(192, 42%, 32%)", offset: 0.46 },
      { color: "hsl(174, 50%, 38%)", offset: 0.52 },
      { color: "hsl(165, 45%, 34%)", offset: 0.58 },
      { color: "hsl(155, 38%, 28%)", offset: 0.65 },
      { color: "hsl(148, 32%, 22%)", offset: 0.72 },
      { color: "hsl(170, 25%, 16%)", offset: 0.80 },
      { color: "hsl(210, 28%, 12%)", offset: 0.88 },
      { color: "hsl(220, 30%, 8%)", offset: 1.0 },
    ];

    function drawFrame() {
      if (!ctx || !canvas) return;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Fill base background
      ctx.fillStyle = "hsl(220, 30%, 7%)";
      ctx.fillRect(0, 0, w, h);

      // Draw strata layers (back to front)
      for (let i = layers.length - 1; i >= 0; i--) {
        const layer = layers[i];
        const baseY = layer.offset * h;

        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += 3) {
          const nx = x / w;
          const wave1 = Math.sin(nx * Math.PI * 2.2 + time * 0.15 + i * 0.6) * (h * 0.025);
          const wave2 = Math.sin(nx * Math.PI * 3.8 + time * 0.1 + i * 0.9) * (h * 0.015);
          const wave3 = Math.sin(nx * Math.PI * 1.3 + time * 0.08 + i * 1.4) * (h * 0.02);
          const y = baseY + wave1 + wave2 + wave3;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.fill();
      }

      // Draw contour / topographic lines
      ctx.globalAlpha = 0.08;
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = "hsl(180, 40%, 60%)";

      for (let i = 0; i < 12; i++) {
        const baseY = (i / 12) * h * 0.85 + h * 0.08;
        ctx.beginPath();

        for (let x = 0; x <= w; x += 3) {
          const nx = x / w;
          const wave = Math.sin(nx * Math.PI * 3.5 + time * 0.12 + i * 1.8) * (h * 0.018)
                     + Math.sin(nx * Math.PI * 5.2 + time * 0.08 + i * 2.4) * (h * 0.008);
          const y = baseY + wave;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Draw particles with glow
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const px = p.x * w;
        const py = p.y * h;

        // Twinkle: oscillate opacity and size
        const twinkle = (Math.sin(time * p.speed * 2 + p.phase) + 1) / 2;
        const alpha = 0.1 + twinkle * p.brightness * 0.9;
        const radius = p.baseRadius * (0.6 + twinkle * 0.5);

        // Outer glow
        ctx.globalAlpha = alpha * 0.3;
        ctx.shadowColor = "hsl(180, 60%, 70%)";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(px, py, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(180, 50%, 65%)";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Core dot
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(180, 30%, ${75 + twinkle * 20}%)`;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      time += 0.008;
      animRef.current = requestAnimationFrame(drawFrame);
    }

    drawFrame();

    const handleResize = () => {
      // Reset scale before re-applying
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
