import Image from "next/image";
import { StackReveal } from "@/components/stack-reveal";

export function GallerySection() {
  return (
    <section className="bg-secondary px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-muted-foreground">A quiet ritual</p>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">Nature, bottled honestly.</h2>
          </div>
          <StackReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl" distance={56}>
            <Image src="/media/gallery-curtain.png" alt="Perfume bottle on a sunlit windowsill with a sheer curtain" fill className="object-cover" />
          </StackReveal>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-3">
          <StackReveal className="relative aspect-square overflow-hidden rounded-2xl" distance={64}>
            <Image src="/media/gallery-texture.png" alt="Close-up of natural body lotion texture with a dried leaf" fill className="object-cover" />
          </StackReveal>
          <StackReveal className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-2xl" distance={80} scaleFrom={0.92}>
            <Image src="/media/gallery-still.png" alt="Perfume bottle at dusk overlooking the Togo hills" fill className="object-cover" />
          </StackReveal>
        </div>
      </div>
    </section>
  );
}
