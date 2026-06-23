import { ShieldCheck, QrCode, Clock, Users, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/brand/Reveal";

const items = [
  { icon: ShieldCheck, t: "Privacy-first", d: "You choose what is shared." },
  { icon: QrCode, t: "QR and NFC ready", d: "Use a QR code, NFC tag, or both." },
  { icon: Clock, t: "Temporary public card", d: "Share only when it matters." },
  { icon: Users, t: "Parent controlled", d: "Change visibility anytime." },
  { icon: HeartHandshake, t: "Built for families", d: "Designed for real daily life." },
];

export function TrustStrip() {
  return (
    <section className="section-surface-default relative pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-3 rounded-3xl glass p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-5">
            {items.map((i) => (
              <div key={i.t} className="flex items-start gap-3 rounded-2xl px-3 py-2">
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-ocean)" }}
                >
                  <i.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-tight">{i.t}</p>
                  <p className="text-xs text-muted-foreground">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
