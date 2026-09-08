"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks scroll progress (0 -> 1) of the element it's attached to, measured from the
 * moment its top reaches the viewport top to `scrollRange` viewport-heights later.
 * Shared by every scroll-driven composition on the site (hero, gallery, ...).
 */
export function useScrollProgress<T extends HTMLElement>(scrollRange = 1) {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(prefersReducedMotion);
    if (prefersReducedMotion) return;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * scrollRange;
      const scrolled = -rect.top;
      const next = Math.max(0, Math.min(1, scrolled / scrollableHeight));
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
  }, [scrollRange]);

  return { ref, progress, reduced };
}
