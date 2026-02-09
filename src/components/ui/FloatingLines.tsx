"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingLinesProps {
  className?: string;
  lineCount?: number;
  animated?: boolean;
  color?: string;
}

export function FloatingLines({ 
  className,
  lineCount = 8,
  animated = true,
  color = "rgba(255, 140, 66, 0.1)"
}: FloatingLinesProps) {
  const [lines, setLines] = useState<Array<{
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    animationDuration: number;
    animationDelay: number;
  }>>([]);

  useEffect(() => {
    const generateLines = () => {
      return Array.from({ length: lineCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: 1 + Math.random() * 3,
        height: 20 + Math.random() * 100,
        rotation: Math.random() * 360,
        animationDuration: 3 + Math.random() * 4,
        animationDelay: Math.random() * 2,
      }));
    };

    setLines(generateLines());
  }, [lineCount]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {lines.map((line) => (
        <div
          key={line.id}
          className={cn(
            "absolute opacity-30 rounded-full",
            animated && "animate-pulse"
          )}
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            width: `${line.width}px`,
            height: `${line.height}px`,
            backgroundColor: color,
            transform: `rotate(${line.rotation}deg)`,
            animationDuration: animated ? `${line.animationDuration}s` : undefined,
            animationDelay: animated ? `${line.animationDelay}s` : undefined,
          }}
        />
      ))}

      {/* Floating particles */}
      {animated && (
        <>
          {[...Array(4)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: color.replace('0.1', '0.3'),
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, 
            transparent 0%, 
            ${color} 50%, 
            transparent 100%)`,
          opacity: 0.1,
        }}
      />
    </div>
  );
}