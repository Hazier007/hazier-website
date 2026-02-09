"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollStackProps {
  children: React.ReactNode[];
  className?: string;
  stackOffset?: number;
}

export function ScrollStack({ children, className, stackOffset = 20 }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress based on container position
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;
      
      let progress = 0;
      if (rect.top < startTrigger && rect.bottom > endTrigger) {
        const totalScrollDistance = rect.height + (startTrigger - endTrigger);
        const scrolled = startTrigger - rect.top;
        progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full", className)}
      style={{ minHeight: `${children.length * 100}vh` }}
    >
      {children.map((child, index) => {
        const itemProgress = Math.max(0, Math.min(1, 
          (scrollProgress - (index / children.length)) * children.length
        ));
        
        const translateY = (1 - itemProgress) * stackOffset * (children.length - index);
        const scale = 0.95 + (itemProgress * 0.05);
        const opacity = 0.3 + (itemProgress * 0.7);

        return (
          <div
            key={index}
            className="sticky top-20 transform transition-all duration-300 ease-out"
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              opacity: opacity,
              zIndex: children.length - index,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}