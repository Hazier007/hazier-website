"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollStackProps {
  children: React.ReactNode[];
  className?: string;
}

export function ScrollStack({ children, className }: ScrollStackProps) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const stickyTop = 80 + index * 20; // Each card stacks 20px lower
        
        // When the card is stuck at the top, scale it down slightly
        // to create the "stack" visual effect
        if (rect.top <= stickyTop + 1) {
          const nextEl = itemRefs.current[index + 1];
          if (nextEl) {
            const nextRect = nextEl.getBoundingClientRect();
            const nextStickyTop = 80 + (index + 1) * 20;
            // How far the next card has pushed us
            const overlap = Math.max(0, (nextStickyTop + 200) - nextRect.top);
            const maxOverlap = 200;
            const progress = Math.min(1, overlap / maxOverlap);
            
            el.style.transform = `scale(${1 - progress * 0.05})`;
            el.style.opacity = `${1 - progress * 0.3}`;
          }
        } else {
          el.style.transform = 'scale(1)';
          el.style.opacity = '1';
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [children.length]);

  return (
    <div className={cn("relative", className)}>
      {children.map((child, index) => (
        <div
          key={index}
          ref={(el) => { itemRefs.current[index] = el; }}
          className="sticky transition-[transform,opacity] duration-200 ease-out mb-8 last:mb-0"
          style={{
            top: `${80 + index * 20}px`,
            zIndex: children.length + index, // Later cards on top
          }}
        >
          {child}
        </div>
      ))}
      {/* Extra scroll space so last card can fully reveal */}
      <div className="h-[30vh]" />
    </div>
  );
}
