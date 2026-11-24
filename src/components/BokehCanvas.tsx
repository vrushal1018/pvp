"use client";

import { useEffect, useRef } from "react";

export default function BokehCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = [
      "255,143,171",
      "255,214,223",
      "255,190,120",
      "200,160,255",
      "255,255,255",
    ];

    const particles = Array.from({ length: 38 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 18 + Math.random() * 60,
      s: 0.15 + Math.random() * 0.5,
      a: 0.12 + Math.random() * 0.3,
      c: cols[(Math.random() * cols.length) | 0],
      p: Math.random() * 6,
    }));

    const render = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      particles.forEach((o) => {
        o.y -= o.s;
        o.p += 0.02;
        if (o.y < -o.r) o.y = c.height + o.r;
        const px = o.x + Math.sin(o.p) * 14;
        const a = o.a * (0.7 + 0.3 * Math.sin(o.p * 2));
        const g = ctx.createRadialGradient(
          px,
          o.y,
          o.r * 0.2,
          px,
          o.y,
          o.r
        );
        g.addColorStop(0, `rgba(${o.c},${a * 0.5})`);
        g.addColorStop(0.85, `rgba(${o.c},${a})`);
        g.addColorStop(1, `rgba(${o.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

