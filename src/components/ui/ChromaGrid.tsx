"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ChromaGridProps {
  children: React.ReactNode[];
  className?: string;
  columns?: number;
  gap?: number;
}

export function ChromaGrid({ 
  children, 
  className,
  columns = 3,
  gap = 6
}: ChromaGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(new Set<number>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const items = containerRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid auto-rows-fr",
        `grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns}`,
        `gap-${gap}`,
        className
      )}
    >
      {children.map((child, index) => {
        const isVisible = visibleItems.has(index);
        const delay = index * 100; // Stagger animation

        return (
          <div
            key={index}
            data-index={index}
            className={cn(
              "group relative transform transition-all duration-700 ease-out",
              isVisible 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-8 scale-95"
            )}
            style={{
              transitionDelay: `${delay}ms`,
            }}
          >
            {/* Chroma border effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative z-10 h-full transform transition-transform duration-300 group-hover:scale-[1.02]">
              {child}
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        );
      })}
    </div>
  );
}