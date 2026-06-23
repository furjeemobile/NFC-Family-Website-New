import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";

export function FounderStory() {
  return (
    <section className="section-surface-lavender relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="rounded-[2rem] glass-strong p-8 text-center sm:p-12">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Our story</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Built for families who want to be prepared, not afraid.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-muted-foreground">
              NFC Family was created for the real moments where the right information can make things easier, faster, and calmer. It helps families prepare without making safety feel complicated.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-primary hover:bg-accent">
              Read Our Story →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
