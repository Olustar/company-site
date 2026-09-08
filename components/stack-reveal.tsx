"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface StackRevealProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  scaleFrom?: number;
}

/**
 * Scroll-linked "enters from below, settles into place" reveal: cards lift up, scale up
 * and fade in as they approach the viewport, rather than a single on/off intersection toggle.
 * The site's primitive for image narratives (galleries, portfolios, product sequences).
 */
export function StackReveal({ children, className = "", distance = 64, scaleFrom = 0.94 }: StackRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(prefersReducedMotion);
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const raw = (windowHeight - rect.top) / (windowHeight * 0.65);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const translateY = (1 - progress) * distance;
  const scale = scaleFrom + progress * (1 - scaleFrom);

  return (
    <div
      ref={ref}
      className={className}
      style={
        reduced
          ? undefined
          : {
              opacity: progress,
              transform: `translateY(${translateY}px) scale(${scale})`,
              willChange: "transform, opacity",
            }
      }
    >
      {children}
    </div>
  );
}
