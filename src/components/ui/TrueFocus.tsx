"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TrueFocusProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export function TrueFocus({ 
  children, 
  className, 
  duration = 1000, 
  delay = 0 
}: TrueFocusProps) {
  const [isInView, setIsInView] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimated) {
          setTimeout(() => {
            setIsInView(true);
            setIsAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, isAnimated]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "transition-all ease-out transform",
          isInView 
            ? "translate-y-0 opacity-100 scale-100 blur-0" 
            : "translate-y-8 opacity-0 scale-95 blur-sm"
        )}
        style={{
          transitionDuration: `${duration}ms`,
        }}
      >
        {children}
      </div>
      
      {/* Focus ring effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg transition-all ease-out pointer-events-none",
          isInView
            ? "ring-2 ring-accent/20 ring-offset-2 ring-offset-background scale-100 opacity-100"
            : "ring-0 ring-accent/0 ring-offset-0 scale-95 opacity-0"
        )}
        style={{
          transitionDuration: `${duration * 1.2}ms`,
          transitionDelay: `${duration * 0.3}ms`,
        }}
      />
    </div>
  );
}