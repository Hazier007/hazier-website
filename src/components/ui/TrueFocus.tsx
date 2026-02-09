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
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={elementRef} className={cn("relative", className)}>
      <div
        className="transition-all ease-out"
        style={{
          transitionDuration: `${duration}ms`,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
