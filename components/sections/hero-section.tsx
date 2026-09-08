"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function HeroSection() {
  const { ref, progress, reduced } = useScrollProgress<HTMLElement>(1);

  // Phase 1 (0 -> 0.3 of pinned scroll): intro text fades and drifts up out of view.
  const textOpacity = Math.max(0, 1 - progress / 0.3);
  const textTranslate = -progress * 36;

  // Continuous: the dominant image narrows and a companion frame slides in from behind it,
  // the site's signature "dominant visual becomes a composition" move, kept inside the same
  // footprint the hero already occupies rather than restructuring the layout.
  const companionShare = Math.max(0, Math.min(1, (progress - 0.1) / 0.75)) * 32; // 0 -> 32% of the band
  const mainShare = 100 - companionShare;
  const companionOpacity = companionShare / 32;
  const companionTranslate = (1 - companionOpacity) * 100;
  const gapPx = (companionShare / 32) * 10;

  // Primitive E: a slow, GPU-friendly parallax drift on the hero image itself.
  const parallaxY = progress * 34;

  const textStyle = !reduced && progress > 0 ? { opacity: textOpacity, transform: `translateY(${textTranslate}px)` } : undefined;

  return (
    <section id="hero" ref={ref} className="relative bg-background" style={{ minHeight: reduced ? undefined : "200vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-end overflow-hidden bg-background px-6 pb-10 pt-28 md:px-12 md:pb-14 md:pt-32 lg:px-20">
        <div className="pointer-events-none absolute right-0 top-0 flex h-[72vh] w-full md:h-[82vh] md:w-[62%]" style={{ gap: `${gapPx}px` }}>
          <div
            className="relative hidden h-full shrink-0 overflow-hidden md:block"
            style={{
              width: `${companionShare}%`,
              opacity: companionOpacity,
              transform: `translateX(${companionTranslate}%)`,
              willChange: "transform, opacity, width",
            }}
          >
            <Image src="/media/gallery-still.png" alt="" fill className="object-cover" sizes="20vw" />
          </div>
          <div
            className="relative h-full overflow-hidden rounded-bl-[2.5rem] animate-fade-in md:rounded-bl-[4rem]"
            style={{ width: "100%", flex: `0 0 ${mainShare}%`, animationDelay: "150ms", willChange: "transform" }}
          >
            <Image
              src="/media/hero.png"
              alt="Sincerely Grey natural body lotion bottle styled with dried botanicals on stone"
              fill
              priority
              className="scale-110 object-cover object-center opacity-90"
              style={reduced ? undefined : { transform: `translateY(${parallaxY}px) scale(1.1)`, willChange: "transform" }}
            />
            <div className="absolute inset-0 bg-background/60 md:bg-gradient-to-r md:from-background md:via-background/20 md:to-transparent" />
          </div>
        </div>
        <div className={`relative z-10 max-w-4xl ${progress === 0 ? "animate-fade-up" : ""}`} style={textStyle}>
          <p className="mb-6 text-sm uppercase tracking-[0.12em] text-muted-foreground md:tracking-[0.24em]">Coming soon · Crafted in Togo</p>
          <h1 className="max-w-3xl font-serif text-[clamp(3.25rem,12vw,10rem)] leading-[0.92] tracking-[-0.04em] text-foreground md:leading-[0.82] md:tracking-[-0.06em]">Skin, sincerely.</h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:gap-10">
            <p className="max-w-sm text-lg leading-7 text-muted-foreground">Natural body lotions and perfumes, sourced from the leaves and herbs of Togo. Coming soon to the U.S.</p>
            <div className="flex shrink-0 items-center gap-5">
              <Link href="#waitlist" className="btn-glow rounded-full bg-primary px-5 py-3 text-sm uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5">Join the Waitlist</Link>
              <Link href="#story" className="text-sm uppercase tracking-[0.16em] text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-accent">Our Story</Link>
            </div>
          </div>
        </div>
        <div className={`relative z-10 mt-12 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted-foreground md:mt-20 ${progress === 0 ? "animate-fade-up" : ""}`} style={textStyle ?? { animationDelay: "240ms" }}><span className="h-px w-10 bg-accent" /> Naturally sourced. Honestly made. Sincerely yours.</div>
      </div>
    </section>
  );
}
