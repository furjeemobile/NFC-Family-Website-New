import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const free = [
  "Up to 3 family members",
  "Basic profile info",
  "QR code generation",
  "NFC tag support",
  "1 emergency contact",
  "Medical aid details",
];

const premium = [
  "Up to 10 family members",
  "Full layout editor",
  "Scan tracking and analytics",
  "Activity logs",
  "Visibility toggles",
  "Custom fields",
  "Advanced medical info",
  "Card customization",
  "Family calendar planning tools",
  "Priority support",
];

export function PricingPreview() {
  return (
    <section className="section-surface-default relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Plans</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Start simple. Grow when your family needs more.
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl glass p-7 transition hover:-translate-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Free</p>
              <p className="mt-3 text-4xl font-medium">R0</p>
              <p className="mt-1 text-sm text-muted-foreground">For getting started with essential family safety.</p>
              <ul className="mt-6 space-y-2 text-sm">
                {free.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className="mt-7 inline-flex w-full items-center justify-center rounded-full glass px-5 py-3 text-sm font-medium text-primary hover:bg-accent">
                Start Free
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative h-full rounded-3xl p-7 text-primary-foreground shadow-[var(--shadow-float)]" style={{ background: "var(--gradient-cta)" }}>
              <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium">
                <Sparkles className="h-3 w-3" /> Most popular
              </span>
              <p className="text-xs uppercase tracking-widest opacity-80">Premium</p>
              <p className="mt-3 text-4xl font-medium">R49<span className="text-base opacity-80"> / month</span></p>
              <p className="mt-1 text-sm opacity-90">For families who want more members, control, customization, and analytics.</p>
              <ul className="mt-6 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                {premium.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 opacity-90" /> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-primary hover:brightness-105">
                Get Premium <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">Annual option available with savings.</p>
        <div className="mt-6 text-center">
          <Link to="/pricing" className="text-sm font-medium text-primary hover:underline">View full plan comparison →</Link>
        </div>
      </div>
    </section>
  );
}
