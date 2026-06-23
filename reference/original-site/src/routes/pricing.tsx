import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";
import { PageHeroBackground } from "@/components/brand/PageHeroBackground";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Check, X, ShieldCheck, Lock, BadgeCheck, Users, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Plans — NFC Family" },
      { name: "description", content: "Start free with essential family safety tools or go Premium for more members, customization, analytics, and the family calendar." },
      { property: "og:title", content: "NFC Family plans — R0 Free or R49/month Premium" },
      { property: "og:description", content: "Choose the plan that keeps your family prepared." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const compare: { feature: string; free: string | boolean; prem: string | boolean }[] = [
  { feature: "Family members", free: "3", prem: "10" },
  { feature: "QR codes", free: true, prem: true },
  { feature: "NFC support", free: true, prem: true },
  { feature: "Emergency contacts", free: "1", prem: "Multiple" },
  { feature: "Medical aid details", free: true, prem: true },
  { feature: "Visibility toggles", free: false, prem: true },
  { feature: "Custom fields", free: false, prem: true },
  { feature: "Advanced medical information", free: false, prem: true },
  { feature: "Public card layout editor", free: false, prem: true },
  { feature: "Card style themes", free: false, prem: true },
  { feature: "Family calendar", free: false, prem: true },
  { feature: "Scan analytics", free: false, prem: true },
  { feature: "Activity logs", free: false, prem: true },
  { feature: "Priority support", free: false, prem: true },
];

function cell(v: string | boolean) {
  if (v === true) return <Check className="mx-auto h-4 w-4 text-teal" />;
  if (v === false) return <X className="mx-auto h-4 w-4 text-muted-foreground/50" />;
  return <span className="text-sm font-medium">{v}</span>;
}

const trust = [
  { i: ShieldCheck, l: "Cancel anytime" },
  { i: Lock, l: "No hidden fees" },
  { i: BadgeCheck, l: "Secure checkout" },
  { i: Users, l: "Privacy-first design" },
  { i: HeartHandshake, l: "Built for families" },
];

function PricingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <PageHeroBackground />
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Plans</p>
            <h1 className="mt-3 text-balance text-4xl font-medium tracking-tight sm:text-5xl">
              Choose the plan that keeps your family prepared.
            </h1>
            <p className="mt-5 text-pretty text-lg text-muted-foreground">
              Start free. Upgrade when your family needs more members, more control, more customization, and scan analytics.
            </p>
          </Reveal>
        </div>
      </section>

      <PricingPreview />

      {/* Comparison */}
      <section className="section-surface-blue relative py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl glass">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-widest text-muted-foreground">Feature</th>
                    <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">Free</th>
                    <th className="px-5 py-4 text-center text-xs font-medium uppercase tracking-widest text-primary">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r, i) => (
                    <tr key={r.feature} className={i % 2 ? "bg-background/40" : ""}>
                      <td className="px-5 py-3 text-foreground/85">{r.feature}</td>
                      <td className="px-5 py-3 text-center">{cell(r.free)}</td>
                      <td className="px-5 py-3 text-center">{cell(r.prem)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-surface-default relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-3 rounded-3xl glass p-5 sm:grid-cols-2 lg:grid-cols-5">
              {trust.map((t) => (
                <div key={t.l} className="flex items-center gap-2 px-2"><t.i className="h-4 w-4 text-teal" /><span className="text-sm">{t.l}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection limit={6} />

      <section className="section-surface-default relative py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link to="/contact" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)]" style={{ background: "var(--gradient-cta)" }}>
            Start with your first family profile
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
