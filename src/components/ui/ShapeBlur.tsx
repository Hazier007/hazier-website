"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ShapeBlurProps {
  className?: string;
  intensity?: number;
  animated?: boolean;
  shapes?: number;
}

export function ShapeBlur({ 
  className,
  intensity = 1,
  animated = true,
  shapes = 5
}: ShapeBlurProps) {
  const [shapePositions, setShapePositions] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    color: string;
    animationDuration: number;
  }>>([]);

  useEffect(() => {
    const colors = [
      `rgba(255, 140, 66, ${0.1 * intensity})`, // Orange
      `rgba(255, 165, 0, ${0.08 * intensity})`, // Orange variant
      `rgba(255, 120, 50, ${0.12 * intensity})`, // Red-orange
      `rgba(255, 180, 100, ${0.06 * intensity})`, // Light orange
      `rgba(240, 140, 80, ${0.09 * intensity})`, // Warm orange
    ];

    const generateShapes = () => {
      return Array.from({ length: shapes }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 200 + Math.random() * 400,
        opacity: 0.2 + Math.random() * 0.3,
        color: colors[i % colors.length],
        animationDuration: 8 + Math.random() * 12,
      }));
    };

    setShapePositions(generateShapes());
  }, [shapes, intensity]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Main blur shapes */}
      {shapePositions.map((shape) => (
        <div
          key={shape.id}
          className={cn(
            "absolute rounded-full blur-3xl",
            animated && "animate-pulse"
          )}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: `radial-gradient(circle, ${shape.color} 0%, transparent 70%)`,
            opacity: shape.opacity,
            transform: 'translate(-50%, -50%)',
            animationDuration: animated ? `${shape.animationDuration}s` : undefined,
            animationDelay: animated ? `${shape.id * 0.5}s` : undefined,
          }}
        />
      ))}

      {/* Moving gradient overlay */}
      {animated && (
        <div
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            background: `conic-gradient(
              from 0deg at 50% 50%,
              rgba(255, 140, 66, ${0.1 * intensity}) 0deg,
              transparent 60deg,
              rgba(255, 140, 66, ${0.05 * intensity}) 120deg,
              transparent 180deg,
              rgba(255, 140, 66, ${0.08 * intensity}) 240deg,
              transparent 300deg,
              rgba(255, 140, 66, ${0.1 * intensity}) 360deg
            )`,
            animationDuration: '15s',
          }}
        />
      )}

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Edge fade */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center,
            transparent 0%,
            transparent 40%,
            rgba(10, 10, 10, ${0.3 * intensity}) 100%
          )`,
        }}
      />
    </div>
  );
}