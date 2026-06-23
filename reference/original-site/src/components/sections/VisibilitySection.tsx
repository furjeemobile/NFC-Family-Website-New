import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { BrowserFrame } from "@/components/brand/PhoneFrame";
import privacyShot from "@/assets/demo/privacy_toggles.png.asset.json";

type Field = { key: string; label: string; value: string; sensitive?: boolean };

const fields: Field[] = [
  { key: "contact", label: "Emergency contact", value: "John (Husband) - 000 1111 444" },
  { key: "blood", label: "Blood type", value: "B+" },
  { key: "allergies", label: "Allergies", value: "None" },
  { key: "medical", label: "Medical aid", value: "Discovery - Essential Saver" },
  { key: "doctor", label: "Doctor", value: "Dr. John - 000 5555 222" },
  { key: "id", label: "ID number", value: "Kept private", sensitive: true },
  { key: "address", label: "Home address", value: "Kept private", sensitive: true },
];

const initial = Object.fromEntries(fields.map((f) => [f.key, !f.sensitive])) as Record<string, boolean>;

export function VisibilitySection() {
  const [v, setV] = useState(initial);

  return (
    <section id="visibility" className="section-surface-blue relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">You're in control</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              You decide what others can see.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Every public card is controlled by visibility settings. Toggle a field on or off and the live preview updates instantly.
            </p>
            <ul className="mt-5 space-y-1.5 text-sm text-foreground/80">
              {[
                "Toggle fields on or off",
                "Show emergency contacts",
                "Hide sensitive information",
                "Preview the public card before sharing",
                "Update visibility anytime",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-3xl glass p-3">
              {fields.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  aria-pressed={v[f.key]}
                  onClick={() => setV((s) => ({ ...s, [f.key]: !s[f.key] }))}
                  className="flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-foreground/[0.03]"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{f.label}</p>
                    <p className="truncate text-xs text-muted-foreground">{f.value}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-7 w-12 shrink-0 items-center rounded-full p-0.5 transition ${
                      v[f.key] ? "bg-primary" : "bg-foreground/15"
                    }`}
                  >
                    <span className={`h-6 w-6 rounded-full bg-white shadow transition ${v[f.key] ? "translate-x-5" : "translate-x-0"}`} />
                  </span>
                </button>
              ))}
              <p className="mt-2 px-3 pb-1 text-[11px] text-muted-foreground">
                Tip: keep ID numbers, addresses, and policy numbers off the public card.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-8 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
              <BrowserFrame src={privacyShot.url} alt="NFC Family privacy and visibility toggles with live public card preview for Sarah Doe" />
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Live preview from the NFC Family app - toggle a field and Sarah&apos;s public card updates instantly.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
