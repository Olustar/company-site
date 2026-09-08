import { BlurReveal } from "@/components/blur-reveal";
import { FadeImage } from "@/components/fade-image";

export function PhilosophySection() {
  return (
    <section id="story" className="border-t border-border bg-secondary px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.22em] text-muted-foreground">Why Sincerely Grey</p>
          <h2 className="max-w-lg font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-foreground md:text-7xl">Rooted in Togo. Made for you.</h2>
        </div>
        <div className="max-w-xl pt-2 text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
          <BlurReveal text="What touches your skin should be traceable to the earth it came from. Our leaves and herbs are gathered and blended in Togo by local hands, then brought to the U.S. with care." />
          <BlurReveal className="mt-6" text="We are not launching with a hundred products. We are launching with the right ones: body lotions and perfumes made naturally, for people who read labels." />
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl"><FadeImage src="/media/story-ingredients.png" alt="Raw leaves, herbs, shea nuts and botanical powders used in Sincerely Grey formulas" fill className="object-cover" /></div>
        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-2xl md:mt-20"><FadeImage src="/media/story-handmade.png" alt="Hands pouring dried botanicals into a wooden mortar in Togo" fill fadeDelay={100} className="object-cover" /></div>
        <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl md:col-span-1 md:mt-8 md:aspect-[4/5]"><FadeImage src="/media/story-craft.png" alt="Natural body lotion being hand-mixed in a ceramic bowl" fill fadeDelay={200} className="object-cover" /></div>
      </div>
    </section>
  );
}
