"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LightPillarProps {
  className?: string;
  intensity?: number;
  animated?: boolean;
}

export function LightPillar({ 
  className, 
  intensity = 1,
  animated = true 
}: LightPillarProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!animated) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [animated]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Main light pillar */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(255, 140, 66, ${0.4 * intensity}) 0%, 
            rgba(255, 140, 66, ${0.2 * intensity}) 25%, 
            transparent 70%)`,
        }}
      />
      
      {/* Secondary glow */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(255, 140, 66, ${0.6 * intensity}) 0%, 
            rgba(255, 140, 66, ${0.1 * intensity}) 40%, 
            transparent 70%)`,
        }}
      />

      {/* Animated particles */}
      {animated && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-pulse opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(135deg, 
            transparent 0%, 
            rgba(255, 140, 66, ${0.1 * intensity}) 50%, 
            transparent 100%)`,
        }}
      />
    </div>
  );
}