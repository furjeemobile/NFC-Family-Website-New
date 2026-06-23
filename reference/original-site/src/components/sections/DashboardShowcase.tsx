import { Reveal } from "@/components/brand/Reveal";
import { BrowserFrame } from "@/components/brand/PhoneFrame";
import { screens } from "@/content/demoProfiles";
import { Users, IdCard, QrCode, RefreshCw } from "lucide-react";

const features = [
  { i: Users, t: "Manage member profiles", d: "Adults, children, and seniors in one calm dashboard." },
  { i: IdCard, t: "View public cards", d: "Open the exact card a scanner would see." },
  { i: QrCode, t: "Design QR and card layouts", d: "Custom styles and field ordering for each member." },
  { i: RefreshCw, t: "Keep details up to date", d: "Edits flow through — no reprinting needed." },
];

export function DashboardShowcase() {
  return (
    <section className="section-surface-default relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Real product</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Built around the real family dashboard.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              Manage family members, view profiles, open public cards, design QR layouts, and keep everyone's details organised from one place.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.t} className="rounded-2xl glass p-4 transition hover:-translate-y-0.5">
                  <div className="flex items-center gap-2">
                    <f.i className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium">{f.t}</p>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
              <BrowserFrame src={screens.familyDashboard} alt="NFC Family — family dashboard managing John, Sarah, Jason, and Seth Doe" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
