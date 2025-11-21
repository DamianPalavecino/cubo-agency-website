"use client";

import { ReactNode, useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  const getDirectionClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-8 blur-sm";
        case "down":
          return "opacity-0 -translate-y-8 blur-sm";
        case "left":
          return "opacity-0 translate-x-8 blur-sm";
        case "right":
          return "opacity-0 -translate-x-8 blur-sm";
        case "scale":
          return "opacity-0 scale-95 blur-sm";
        case "fade":
          return "opacity-0 blur-sm";
        default:
          return "opacity-0 translate-y-8 blur-sm";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";
  };

  return (
    <div
      ref={elementRef}
      className={`${getDirectionClasses()} transition-all ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}

