"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, EyeOff } from "lucide-react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

interface BubbleCanvasProps {
  accentColor: string;
}

export function BubbleCanvas({ accentColor }: BubbleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState(true);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Initialize micro bubbles
    const bubbleCount = Math.min(Math.floor(width / 35), 45);
    const bubbles: Bubble[] = Array.from({ length: bubbleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1,
      speedY: Math.random() * 0.7 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.15,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.03 + 0.01,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b) => {
        b.y -= b.speedY;
        b.wobble += b.wobbleSpeed;
        b.x += Math.sin(b.wobble) * 0.4 + b.speedX;

        // Reset if went above screen
        if (b.y < -10) {
          b.y = height + 10;
          b.x = Math.random() * width;
        }

        // Draw bubble
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.fill();

        // Highlight
        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 1.5})`;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [enabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {enabled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60"
        />
      )}

      {/* Floating Ambient Glow Spotlights */}
      <div
        className="absolute -top-[15%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px] transition-colors duration-1000 opacity-30 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute top-[45%] -right-[10%] w-[450px] h-[450px] rounded-full blur-[160px] transition-colors duration-1000 opacity-20 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      {/* Subtle particle toggle control on bottom left */}
      <button
        onClick={() => setEnabled(!enabled)}
        title={enabled ? "Disable ambient fizz particles" : "Enable ambient fizz particles"}
        className="pointer-events-auto fixed bottom-6 left-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 bg-slate-900/80 hover:text-white border border-slate-700/60 backdrop-blur-md transition-all shadow-lg hover:border-slate-500"
      >
        {enabled ? (
          <>
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Fizz FX: On</span>
          </>
        ) : (
          <>
            <EyeOff className="w-3.5 h-3.5 text-slate-400" />
            <span>Fizz FX: Off</span>
          </>
        )}
      </button>
    </div>
  );
}
