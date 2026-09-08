"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface BlurRevealProps {
  text: string;
  className?: string;
  blur?: number;
}

/**
 * Word-by-word blur + opacity reveal, driven by scroll progress through the viewport.
 * Reused across prose copy (story, editorial, descriptions) as the site's signature
 * text-entrance primitive.
 */
export function BlurReveal({ text, className = "", blur = 12 }: BlurRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.92;
      const endOffset = windowHeight * 0.42;
      const totalDistance = startOffset - endOffset;
      const currentPosition = startOffset - rect.top;
      const next = Math.max(0, Math.min(1, currentPosition / totalDistance));
      setProgress(next);
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

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => {
        const appearProgress = progress * (words.length + 1);
        const wordProgress = Math.max(0, Math.min(1, appearProgress - index));
        const style: CSSProperties = {
          opacity: wordProgress,
          filter: `blur(${(1 - wordProgress) * blur}px)`,
          transition: "opacity 0.1s linear, filter 0.1s linear",
          display: "inline-block",
          marginRight: "0.28em",
          willChange: "opacity, filter",
        };
        return (
          <span key={index} style={style}>
            {word}
          </span>
        );
      })}
    </p>
  );
}
