import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { BrowserFrame } from "@/components/brand/PhoneFrame";
import { Stethoscope, GraduationCap, Plane, Cake, Send, Check } from "lucide-react";
import calendarShot from "@/assets/demo/family_calendar.png.asset.json";

const chips = [
  { l: "Medical", i: Stethoscope, c: "bg-teal/15 text-teal" },
  { l: "School", i: GraduationCap, c: "bg-primary/15 text-primary" },
  { l: "Travel", i: Plane, c: "bg-gold/20 text-gold" },
  { l: "Birthday", i: Cake, c: "bg-accent text-primary" },
];

const events = [
  { day: "Mon 14", time: "08:30", title: "Jason — School drop-off", chip: "School", color: "text-primary" },
  { day: "Tue 15", time: "10:00", title: "John — GP follow-up", chip: "Medical", color: "text-teal" },
  { day: "Wed 16", time: "All day", title: "Family travel to Cape Town", chip: "Travel", color: "text-gold" },
  { day: "Sat 19", time: "14:00", title: "Sarah's birthday lunch", chip: "Birthday", color: "text-primary" },
];

export function CalendarSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section-surface-warm relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Family calendar</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Plan important family moments together.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              NFC Family includes a shared family calendar. Add appointments, school events, travel, birthdays, and reminders so everyone is on the same page.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span key={c.l} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${c.c}`}>
                  <c.i className="h-3.5 w-3.5" /> {c.l}
                </span>
              ))}
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-foreground/80">
              {[
                "Add family events in one shared view",
                "Track medical appointments together",
                "Organise school and travel plans",
                "Send meeting invites to other family members",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {b}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => { setSent(true); setTimeout(() => setSent(false), 2400); }}
              className="mt-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-primary hover:bg-accent"
            >
              {sent ? <><Check className="h-4 w-4" /> Invite sent</> : <><Send className="h-4 w-4" /> Send a sample invite</>}
            </button>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
              <BrowserFrame src={calendarShot.url} alt="NFC Family monthly calendar with event chips for appointments, school, medical, travel, birthday, other and public holiday, plus an upcoming events panel and Add Event button" />
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Real Family Calendar view — colour-coded chips, Add Event, and upcoming events panel.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
