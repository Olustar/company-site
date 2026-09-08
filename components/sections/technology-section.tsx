import { ScrollReveal } from "@/components/scroll-reveal";

const standards = [
  ["Naturally Sourced", "Leaves and herbs gathered in Togo, not synthesized in a lab."],
  ["Local Hands", "Produced with local labor in Togo, supporting the communities we source from."],
  ["Two Homes", "Crafted in West Africa. Delivered to your door in the U.S."],
  ["Small Batch", "We launch with what we can make honestly, not what we can ship fast."],
];

export function TechnologySection() {
  return (
    <section id="standard" className="bg-primary px-6 py-24 text-primary-foreground md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.22em] text-primary-foreground/60">What guides us</p>
        <h2 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">The Sincerely Standard</h2>
        <div className="mt-20 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {standards.map(([title, description], index) => (
            <ScrollReveal key={title} delay={index * 90}>
              <div className="group border-t border-primary-foreground/30 pt-5 transition-colors duration-500 hover:border-accent">
                <span className={`font-mono text-sm ${index % 2 === 0 ? "text-accent" : "text-accent-silver"}`}>0{index + 1}</span>
                <h3 className="mt-8 text-xl">{title}</h3>
                <p className="mt-3 text-base leading-6 text-primary-foreground/65 md:text-[0.95rem]">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
