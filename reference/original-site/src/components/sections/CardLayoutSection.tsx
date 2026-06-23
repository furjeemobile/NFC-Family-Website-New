import { Reveal } from "@/components/brand/Reveal";
import { BrowserFrame } from "@/components/brand/PhoneFrame";
import { GripVertical, Layers } from "lucide-react";
import editorShot from "@/assets/demo/card_layout_editor.png.asset.json";

export function CardLayoutSection() {
  return (
    <section className="section-surface-default relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Card Layout Editor</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Arrange the card the way you'd want a stranger to read it.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              Drag and drop sections to control the order of your emergency card — profile photo, name, emergency contacts, medical information, address and more. Put the most important details first.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-foreground/80">
              {[
                "Reorder sections by drag and drop",
                "Choose what comes first in a real emergency",
                "Free and Premium sections clearly labelled",
                "Different layout for each family member",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <GripVertical className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-primary">
              <Layers className="h-3.5 w-3.5" /> Built into every NFC Family profile
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
              <BrowserFrame src={editorShot.url} alt="NFC Family Card Layout Editor showing draggable section order for Profile Photo, Name, Age & Relationship, Emergency Contacts, Medical Information, Advanced, Home Address and QR Footer" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
