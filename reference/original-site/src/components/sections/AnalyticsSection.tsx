import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { BrowserFrame } from "@/components/brand/PhoneFrame";
import { BarChart3, MapPin, ListChecks, Map as MapIcon } from "lucide-react";
import overviewShot from "@/assets/demo/scan_analytics.png.asset.json";
import locationsShot from "@/assets/demo/scan_locations.png.asset.json";
import mapShot from "@/assets/demo/scan_map.png.asset.json";

type Tab = "overview" | "locations" | "map";

const tabs: { k: Tab; l: string; I: typeof BarChart3; src: string; alt: string }[] = [
  { k: "overview", l: "Overview", I: BarChart3, src: overviewShot.url, alt: "NFC Family scan analytics overview showing total scans, QR scans, NFC taps, last scan, device breakdown and interactions" },
  { k: "locations", l: "Top locations & events", I: ListChecks, src: locationsShot.url, alt: "NFC Family scan analytics top locations list and scan events log" },
  { k: "map", l: "Map view", I: MapIcon, src: mapShot.url, alt: "NFC Family scan events map view showing scan locations across South Africa" },
];

export function AnalyticsSection() {
  const [tab, setTab] = useState<Tab>("overview");
  const active = tabs.find((t) => t.k === tab)!;

  return (
    <section className="section-surface-blue relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-teal">Scan analytics</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            Know when your QR code or NFC tag was used.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            See total scans, QR scans, NFC taps, the last scan, device breakdown, top locations, a full event log, and a map view — all from inside the NFC Family app.
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-teal" />
            IP addresses are stored in a hashed format and locations are approximate.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <div role="tablist" className="flex flex-wrap gap-1 rounded-full bg-background/80 p-1 shadow-[var(--shadow-soft)] w-fit">
              {tabs.map(({ k, l, I }) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={tab === k}
                  onClick={() => setTab(k)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition ${
                    tab === k ? "text-primary-foreground shadow-[var(--shadow-soft)]" : "text-foreground/70 hover:text-primary"
                  }`}
                  style={tab === k ? { background: "var(--gradient-cta)" } : undefined}
                >
                  <I className="h-4 w-4" /> {l}
                </button>
              ))}
            </div>

            <div className="mt-5 relative">
              <div aria-hidden className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
              <BrowserFrame key={active.k} src={active.src} alt={active.alt} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
