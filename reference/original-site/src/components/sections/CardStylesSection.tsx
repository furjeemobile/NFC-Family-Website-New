import { Reveal } from "@/components/brand/Reveal";
import { BrowserFrame } from "@/components/brand/PhoneFrame";
import { Palette, Image as ImageIcon } from "lucide-react";
import stylesShot from "@/assets/demo/card_styles.png.asset.json";

export function CardStylesSection() {
  return (
    <section className="section-surface-lavender relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
              <BrowserFrame src={stylesShot.url} alt="NFC Family Card Style picker with preset themes: Light, Dark, Ocean, Sunset, Forest, Lavender, Midnight, Rose, Sky, Earth, Emerald, Slate, Warm Sand, Crimson, plus a background image upload option" />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Card Style</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Pick a theme that feels like your family.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              Choose a preset theme for each card — Light, Dark, Ocean, Sunset, Forest, Lavender and more — or upload your own background image. Same secure card, different look for every family member.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-foreground/80">
              {[
                "14 preset themes to choose from",
                "Custom background image upload",
                "Set a different style per profile",
                "Preview the look before you publish",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Palette className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-primary">
              <ImageIcon className="h-3.5 w-3.5" /> Background image upload included
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
