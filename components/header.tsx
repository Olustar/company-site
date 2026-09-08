"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Our Story", href: "#story" },
  { label: "Coming Soon", href: "#products" },
  { label: "The Standard", href: "#standard" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 transition-all duration-300 ${isScrolled ? "rounded-full bg-background/90 shadow-sm backdrop-blur-md" : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
          <Image src="/logo/monogram.png" alt="" width={40} height={40} className="h-9 w-9 rounded-full md:h-10 md:w-10" />
          <span className="font-serif text-xl tracking-tight text-foreground md:text-2xl">Sincerely Grey</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 text-base uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <Link href="#waitlist" className="btn-glow hidden rounded-full bg-primary px-6 py-3 text-base uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-80 md:block">
          Join the list
        </Link>
        <button type="button" className="text-foreground md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="flex flex-col gap-6 border-t border-border bg-background px-6 py-7 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="text-lg uppercase tracking-[0.14em] text-foreground">{link.label}</Link>
          ))}
          <Link href="#waitlist" onClick={closeMenu} className="mt-2 rounded-full bg-primary px-5 py-3.5 text-center text-base uppercase tracking-[0.14em] text-primary-foreground">Join the list</Link>
        </nav>
      )}
    </header>
  );
}
