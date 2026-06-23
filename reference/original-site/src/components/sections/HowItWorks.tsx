import { Reveal } from "@/components/brand/Reveal";
import { UserPlus, EyeOff, Radio, HandHeart, ArrowRight } from "lucide-react";

const steps = [
  { i: UserPlus, t: "Create a profile", d: "Add key details for a child, adult, senior, or family member." },
  { i: EyeOff, t: "Choose what is visible", d: "Decide which fields can appear on the public emergency card." },
  { i: Radio, t: "Add a QR code or NFC tag", d: "Use a QR code, an NFC tag, or both — whichever fits the moment." },
  { i: HandHeart, t: "Someone scans and gets help", d: "The public card opens so they can contact you or see key medical info." },
];

export function HowItWorks() {
  return (
    <section className="section-surface-blue relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-teal">How it works</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            A simple scan journey for real life.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <Reveal key={s.t} delay={idx * 0.08}>
              <div className="group relative h-full rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>
                    <s.i className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">Step {idx + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                {idx < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-teal/60 transition-transform group-hover:translate-x-1 lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
