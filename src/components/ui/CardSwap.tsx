"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CardSwapProps {
  children: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
}

export function CardSwap({ 
  children, 
  className,
  autoPlay = true,
  interval = 4000,
  showIndicators = true
}: CardSwapProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoPlay || children.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === children.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 150);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);

  const goToSlide = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  if (!children.length) return null;

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main card container */}
      <div className="relative overflow-hidden">
        <div
          className={cn(
            "transition-all duration-300 ease-in-out",
            isAnimating && "scale-95 opacity-70 blur-sm"
          )}
        >
          {children[currentIndex]}
        </div>

        {/* Navigation arrows */}
        {children.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background-secondary/80 backdrop-blur-sm border border-border hover:bg-background-tertiary transition-all duration-200 flex items-center justify-center group"
              aria-label="Previous card"
            >
              <svg
                className="w-4 h-4 text-text-secondary group-hover:text-foreground transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background-secondary/80 backdrop-blur-sm border border-border hover:bg-background-tertiary transition-all duration-200 flex items-center justify-center group"
              aria-label="Next card"
            >
              <svg
                className="w-4 h-4 text-text-secondary group-hover:text-foreground transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && children.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                index === currentIndex
                  ? "bg-accent w-6"
                  : "bg-border hover:bg-text-tertiary"
              )}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Card preview hints */}
      {children.length > 1 && (
        <div className="absolute inset-y-0 left-0 w-16 pointer-events-none">
          <div
            className={cn(
              "absolute inset-0 transition-all duration-300 opacity-20 scale-90 -translate-x-8 blur-sm",
              isAnimating && "opacity-0"
            )}
          >
            {children[currentIndex === 0 ? children.length - 1 : currentIndex - 1]}
          </div>
        </div>
      )}

      {children.length > 1 && (
        <div className="absolute inset-y-0 right-0 w-16 pointer-events-none">
          <div
            className={cn(
              "absolute inset-0 transition-all duration-300 opacity-20 scale-90 translate-x-8 blur-sm",
              isAnimating && "opacity-0"
            )}
          >
            {children[currentIndex === children.length - 1 ? 0 : currentIndex + 1]}
          </div>
        </div>
      )}
    </div>
  );
}