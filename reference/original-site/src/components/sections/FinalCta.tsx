import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 text-center text-primary-foreground sm:p-16" style={{ background: "var(--gradient-cta)" }}>
            <div className="absolute inset-0 -z-10 opacity-40 ambient-bg" aria-hidden />
            <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Be ready for what matters most.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty opacity-90">
              Create your first family profile, try a demo scan, and see how NFC Family keeps important information within reach.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-primary hover:brightness-105">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#demo-scan" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-white/25">
                Try Demo Scan
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
