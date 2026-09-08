import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { FooterSection } from "@/components/sections/footer-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ScrollReveal>
        <PhilosophySection />
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <FeaturedProductsSection />
      </ScrollReveal>
      <ScrollReveal delay={40}>
        <TechnologySection />
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <GallerySection />
      </ScrollReveal>
      <ScrollReveal delay={40}>
        <CollectionSection />
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <FooterSection />
      </ScrollReveal>
    </main>
  );
}
