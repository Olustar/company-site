import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const products = [
  { name: "Body Lotion", description: "Deeply hydrating, naturally blended.", image: "/media/product-body-lotion.png" },
  { name: "Perfume", description: "A signature scent, rooted in nature.", image: "/media/product-perfume.png" },
  { name: "For Him & Her", description: "One standard. Two expressions: yours.", image: "/media/product-him-her.png" },
];

export function FeaturedProductsSection() {
  return (
    <section id="products" className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-sm uppercase tracking-[0.22em] text-muted-foreground">The first collection</p><h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">Coming Soon</h2></div><p className="max-w-xs text-base leading-6 text-muted-foreground md:text-lg md:leading-7">Small-batch body care and fragrance, made with ingredients that have a place of origin.</p></div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 90}>
              <article className="group transition-transform duration-500 ease-out hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary"><Image src={product.image} alt={`${product.name} product preview sketch`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                <div className="flex justify-between gap-4 border-b border-border py-5 transition-colors duration-300 group-hover:border-accent"><div><h3 className="text-xl text-foreground">{product.name}</h3><p className="mt-1 text-base text-muted-foreground">{product.description}</p></div><span className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Soon</span></div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <Link href="#waitlist" className="mt-10 inline-block text-sm uppercase tracking-[0.2em] text-foreground underline decoration-border underline-offset-8">Be first to know →</Link>
      </div>
    </section>
  );
}
