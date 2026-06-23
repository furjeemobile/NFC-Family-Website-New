import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { PageHeroBackground } from "@/components/brand/PageHeroBackground";
import { PhoneFrame } from "@/components/brand/PhoneFrame";
import { FinalCta } from "@/components/sections/FinalCta";
import { demoProfiles } from "@/content/demoProfiles";
import { Mail, LifeBuoy, MapPin, Handshake, Send, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NFC Family" },
      { name: "description", content: "Get in touch with NFC Family for support, partnerships, or questions. A real person will read your message." },
      { property: "og:title", content: "Contact NFC Family" },
      { property: "og:description", content: "We would love to hear from you." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const cards = [
  { i: Mail, t: "Email us", d: "hello@nfcfamily.co.za" },
  { i: LifeBuoy, t: "Support", d: "For help with your account, QR codes, public cards, or billing." },
  { i: MapPin, t: "Based in South Africa", d: "Built with care for South African families." },
  { i: Handshake, t: "Partnerships", d: "Schools, care organisations, community groups, and businesses." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const sarah = demoProfiles.find((p) => p.id === "sarah")!;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <PageHeroBackground />
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Contact</p>
              <h1 className="mt-3 text-balance text-4xl font-medium tracking-tight sm:text-5xl">We would love to hear from you.</h1>
              <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">Questions, support, partnerships, or feedback — send us a message and a real person will read it.</p>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.1}>
              <PhoneFrame src={sarah.card} alt="NFC Family public card preview" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-surface-default relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.04}>
                <div className="h-full rounded-2xl glass p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary"><c.i className="h-5 w-5" /></span>
                  <p className="mt-3 text-sm font-medium">{c.t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-blue relative py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl glass-strong p-7">
              <h2 className="text-2xl font-medium">Send a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We typically reply within a working day.</p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Name"><input required className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" /></Field>
                  <Field label="Email"><input required type="email" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" /></Field>
                </div>
                <Field label="Subject"><input className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" /></Field>
                <Field label="Message"><textarea required rows={5} className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" /></Field>
                <label className="flex items-start gap-2 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5" />
                  I agree to NFC Family's privacy policy and the handling of my message.
                </label>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110" style={{ background: "var(--gradient-cta)" }}>
                  {sent ? <><Check className="h-4 w-4" /> Message sent</> : <><Send className="h-4 w-4" /> Send message</>}
                </button>
              </form>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal>
              <div className="rounded-3xl glass p-6">
                <h3 className="text-lg font-medium">Partner with NFC Family</h3>
                <p className="mt-2 text-sm text-muted-foreground">If you work with schools, care providers, family organisations, or community programmes, we would like to hear from you.</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-primary">Partnership enquiries <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-3xl glass p-6">
                <h3 className="text-lg font-medium">Request a demo</h3>
                <p className="mt-2 text-sm text-muted-foreground">See how NFC Family can support your family, school, organisation, or community.</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>Request demo <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl glass p-6">
                <h3 className="text-lg font-medium">Quick help links</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><Link to="/how-it-works" className="text-primary hover:underline">How NFC Family works</Link></li>
                  <li><Link to="/pricing" className="text-primary hover:underline">Plans and pricing</Link></li>
                  <li><Link to="/faqs" className="text-primary hover:underline">Safety and privacy</Link></li>
                  <li><Link to="/how-it-works" className="text-primary hover:underline">QR and NFC guide</Link></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
