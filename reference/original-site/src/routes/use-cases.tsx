import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Backpack,
  BadgeHelp,
  BriefcaseMedical,
  Check,
  Eye,
  FileText,
  HeartPulse,
  KeyRound,
  Luggage,
  MapPinned,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { PhoneFrame } from "@/components/brand/PhoneFrame";
import { Reveal } from "@/components/brand/Reveal";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { CalendarSection } from "@/components/sections/CalendarSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { demoProfiles } from "@/content/demoProfiles";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases \u2014 NFC Family" },
      {
        name: "description",
        content:
          "Choose a real-life family moment and see how NFC Family can help someone access the right approved information faster.",
      },
      { property: "og:title", content: "NFC Family use cases" },
      {
        property: "og:description",
        content:
          "Interactive family moments showing where to place a QR code or NFC tag and what approved details can be shown.",
      },
      { property: "og:url", content: "/use-cases" },
    ],
    links: [{ rel: "canonical", href: "/use-cases" }],
  }),
  component: UseCasesPage,
});

type Moment = {
  id: string;
  title: string;
  label: string;
  scenario: string;
  helperNote: string;
  bestPlacedOn: string[];
  visibleInformation: string[];
  icon: typeof Backpack;
  accent: string;
};

type PlacementGroup = {
  title: string;
  intro: string;
  icon: typeof Backpack;
  items: string[];
};

const moments: Moment[] = [
  {
    id: "school",
    title: "At school",
    label: "Daily handovers",
    scenario:
      "A school bag has a QR code or NFC tag. A teacher or caregiver can open the approved public card and contact the right person quickly.",
    bestPlacedOn: ["School bag", "Lunch bag", "Clothing sticker"],
    visibleInformation: ["Parent contact", "Emergency contact", "Medical notes"],
    helperNote:
      "Useful for school days, aftercare, outings and transport handovers.",
    icon: Backpack,
    accent: "from-primary via-teal to-ocean-light",
  },
  {
    id: "sports",
    title: "At sports",
    label: "Training and match days",
    scenario:
      "A child is at practice, a match or a tournament where parents may not be close by.",
    bestPlacedOn: ["Sports bag", "Clothing sticker", "Wallet card"],
    visibleInformation: ["Parent contact", "Allergies", "Medical notes"],
    helperNote:
      "Useful when coaches or team parents need the correct details.",
    icon: Activity,
    accent: "from-teal via-primary to-ocean-soft",
  },
  {
    id: "busy-place",
    title: "Busy place",
    label: "Outings and events",
    scenario:
      "A child is separated from family in a mall, park, event or holiday setting.",
    bestPlacedOn: ["Wristband", "Bag tag", "Clothing sticker"],
    visibleInformation: ["Parent contact", "Safe return note", "Emergency contact"],
    helperNote:
      "Helps a trusted adult know who to contact without exposing unnecessary private details.",
    icon: MapPinned,
    accent: "from-primary via-ocean-soft to-teal",
  },
  {
    id: "senior-care",
    title: "Senior care",
    label: "Support with dignity",
    scenario:
      "An elderly family member may become confused, disoriented or unable to explain who to contact.",
    bestPlacedOn: ["Keyring", "Wallet", "Walking bag", "Wristband"],
    visibleInformation: ["Caregiver contact", "Medical notes", "Home support note"],
    helperNote:
      "Helpful for neighbours, carers, responders and community members.",
    icon: HeartPulse,
    accent: "from-gold via-primary to-teal",
  },
  {
    id: "travel",
    title: "Travel",
    label: "Away from home",
    scenario:
      "A family is away from home and needs temporary travel details available on luggage, bags or wallets.",
    bestPlacedOn: ["Luggage tag", "Backpack", "Travel wallet", "Clothing sticker"],
    visibleInformation: ["Travel contact", "Emergency contact", "Important notes"],
    helperNote:
      "Useful for holidays, airports, school trips and family travel.",
    icon: Luggage,
    accent: "from-primary via-teal to-gold",
  },
  {
    id: "medical-visit",
    title: "Medical visit",
    label: "Appointments and urgent care",
    scenario:
      "A caregiver, doctor or responder needs access to approved medical or emergency information.",
    bestPlacedOn: ["Medical folder", "Emergency file", "Fridge card"],
    visibleInformation: ["Medical notes", "Allergies", "Emergency contacts"],
    helperNote:
      "Supports faster access to important information during appointments or urgent moments.",
    icon: BriefcaseMedical,
    accent: "from-teal via-primary to-ocean-light",
  },
];

const placementGroups: PlacementGroup[] = [
  {
    title: "For children",
    intro: "Fast details for school days, outings and everyday movement.",
    icon: Backpack,
    items: ["School bags", "Clothing stickers", "Lunch bags", "Sports bags"],
  },
  {
    title: "For seniors",
    intro: "Simple placement points where support details are easy to find.",
    icon: KeyRound,
    items: ["Keyrings", "Wallets", "Medical folders", "Walking bags"],
  },
  {
    title: "For travel",
    intro: "Keep approved family information close while away from home.",
    icon: Luggage,
    items: ["Luggage tags", "Travel wallets", "Backpacks", "Car seats"],
  },
  {
    title: "For emergencies",
    intro: "Useful in the places helpers already check first.",
    icon: FileText,
    items: ["Medical files", "Fridge cards", "Emergency packs", "Caregiver folders"],
  },
];

const scanSteps = [
  {
    title: "Scan or tap",
    copy: "A QR code is scanned or an NFC tag is tapped.",
    icon: Waves,
  },
  {
    title: "Public card opens",
    copy: "The helper sees a simple mobile-friendly page.",
    icon: FileText,
  },
  {
    title: "Approved details show",
    copy: "You control what is visible for each family member.",
    icon: Eye,
  },
  {
    title: "The right contact can be reached",
    copy: "A parent, caregiver or emergency contact can be contacted faster.",
    icon: ShieldCheck,
  },
];

const personaSteps = [
  "Scan tag",
  "Public card opens",
  "Approved details show",
  "Contact family",
];

function cleanCopy(value: string) {
  return value
    .replaceAll("â€”", "\u2014")
    .replaceAll("Ã¢â‚¬â€", "\u2014")
    .replaceAll("Â·", "\u00b7")
    .replaceAll("Ã‚Â·", "\u00b7")
    .replaceAll("â†’", "\u2192")
    .replaceAll("Ã¢â€\u00a0â€™", "\u2192")
    .replaceAll("â€œ", "\u201c")
    .replaceAll("Ã¢â‚¬Å“", "\u201c")
    .replaceAll("â€", "\u201d")
    .replaceAll("Ã¢â‚¬Â", "\u201d");
}

function UseCasesPage() {
  const [activeMoment, setActiveMoment] = useState(moments[0].id);
  const [activePersona, setActivePersona] = useState("seth");
  const reduceMotion = useReducedMotion();

  const moment = moments.find((item) => item.id === activeMoment) ?? moments[0];
  const profile =
    demoProfiles.find((item) => item.id === activePersona) ?? demoProfiles[3];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(110deg,rgba(188,228,239,0.96)_0%,rgba(129,199,217,0.92)_22%,rgba(58,145,174,0.9)_46%,rgba(24,96,138,0.9)_72%,rgba(18,58,90,0.9)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(235,249,252,0.36),transparent_28%),radial-gradient(circle_at_34%_72%,rgba(192,240,247,0.2),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(0,168,168,0.26),transparent_22%),radial-gradient(circle_at_92%_82%,rgba(18,58,90,0.28),transparent_28%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-[12%] top-[-10%] h-[34rem] w-[34rem] rounded-[42%_58%_52%_48%/42%_42%_58%_58%] bg-[linear-gradient(135deg,rgba(14,121,143,0.34),rgba(24,96,138,0.46),rgba(18,58,90,0.26))] blur-2xl sm:h-[38rem] sm:w-[38rem]"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-8%] bottom-[-20%] h-[22rem] w-[40rem] rounded-[55%_45%_0_0/100%_100%_0_0] bg-[linear-gradient(180deg,rgba(18,58,90,0),rgba(20,71,110,0.26),rgba(18,58,90,0.38))] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute left-[24%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(214,244,247,0.08)_38%,transparent_72%)] blur-3xl"
        />
        <div aria-hidden="true" className="absolute inset-0 opacity-28 ambient-bg" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 md:pt-14">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="relative z-10 lg:col-span-7 lg:-mt-6">
              <p className="text-xs uppercase tracking-[0.22em] text-teal">
                Use cases
              </p>
              <h1 className="mt-4 max-w-2xl text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl">
                See how NFC Family fits into everyday life.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg text-white/80">
                Choose a real-life moment and see how a QR code or NFC tag can
                help someone access the right information faster.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/16"
                >
                  See How It Works
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative z-10 lg:col-span-5" delay={0.1}>
              <div className="relative mx-auto min-h-[360px] max-w-[30rem] sm:min-h-[420px]">
                <div
                  aria-hidden
                  className="absolute left-[56%] top-[48%] -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl"
                  style={{ background: "var(--gradient-ambient)" }}
                />
                <div
                  aria-hidden
                  className="animate-float-y-slow absolute right-4 top-12 h-[4.5rem] w-[4.5rem] rounded-full border border-white/45 bg-white/35 blur-[1px]"
                />
                <div className="absolute right-0 top-6 w-[60%] min-w-[180px] sm:w-[56%]">
                  <PhoneFrame
                    src={demoProfiles[3].card}
                    alt="Seth Doe public card"
                    className="max-w-[250px] sm:max-w-[270px]"
                  />
                </div>
                <div className="absolute left-2 bottom-6 w-[40%] min-w-[136px] sm:left-6 sm:bottom-10 sm:w-[44%]">
                    <div className="relative rounded-[1.75rem] bg-white p-3 shadow-[var(--shadow-float)] ring-1 ring-white/70 sm:p-4">
                      <div className="relative overflow-hidden rounded-[1.15rem] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(192,240,247,0.25))]">
                        <img
                          src={demoProfiles[3].qr}
                          alt="Seth Doe demo QR"
                          className="mx-auto h-32 w-32 object-contain sm:h-40 sm:w-40"
                        />
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-3 top-3 bottom-3 overflow-hidden rounded-[0.9rem]"
                        >
                          <motion.div
                            className="absolute inset-x-0 h-[3px] rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(0,168,168,0.55)_18%,rgba(255,255,255,0.96)_50%,rgba(0,168,168,0.55)_82%,transparent_100%)] shadow-[0_0_10px_rgba(0,168,168,0.32)]"
                            initial={reduceMotion ? false : { top: "14%", opacity: 0.8 }}
                            animate={
                              reduceMotion
                                ? undefined
                                : {
                                    top: ["14%", "86%"],
                                    opacity: [0.72, 0.96, 0.72],
                                  }
                            }
                            transition={
                              reduceMotion
                                ? undefined
                                : {
                                    duration: 2.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }
                            }
                            style={{ filter: "blur(0.2px)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-surface-default relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-teal">
              Interactive family moments
            </p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Choose a moment.
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-muted-foreground">
              Pick a real-life situation and see how NFC Family can help, where
              to place the tag, and what approved details could be shown.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {moments.map((item, index) => {
                const isActive = item.id === activeMoment;

                return (
                  <Reveal key={item.id} delay={index * 0.04}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveMoment(item.id)}
                      className={`relative h-full rounded-[2rem] p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                        isActive
                          ? "text-primary-foreground shadow-[var(--shadow-float)]"
                          : "glass hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                      }`}
                      style={
                        isActive ? { background: "var(--gradient-cta)" } : undefined
                      }
                    >
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-accent text-primary"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                      </span>
                      <p
                        className={`mt-4 text-xs uppercase tracking-[0.18em] ${
                          isActive ? "text-white/80" : "text-teal"
                        }`}
                      >
                        {item.label}
                      </p>
                      <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed ${
                          isActive ? "text-white/90" : "text-muted-foreground"
                        }`}
                      >
                        {item.scenario}
                      </p>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-[2rem] glass-strong p-6 sm:p-8">
                <div
                  aria-hidden
                  className={`absolute inset-x-6 top-0 h-28 rounded-b-[2rem] bg-gradient-to-r ${moment.accent} opacity-15 blur-2xl`}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={moment.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-teal">
                          {moment.label}
                        </p>
                        <h3 className="mt-2 text-2xl font-medium">
                          {moment.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-primary">
                        <BadgeHelp className="h-3.5 w-3.5" />
                        Real-life helper view
                      </span>
                    </div>

                    <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-foreground/80">
                      {moment.scenario}
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                      <div className="rounded-[1.5rem] bg-background/70 p-5">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          Best placed on
                        </p>
                        <ul className="mt-4 space-y-3">
                          {moment.bestPlacedOn.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-3 text-sm text-foreground/85"
                            >
                              <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent text-primary">
                                <Check className="h-4 w-4" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[1.5rem] bg-background/70 p-5">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          Approved details
                        </p>
                        <ul className="mt-4 space-y-3">
                          {moment.visibleInformation.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-3 text-sm text-foreground/85"
                            >
                              <span className="grid h-8 w-8 place-items-center rounded-xl bg-teal/12 text-teal">
                                <Eye className="h-4 w-4" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 rounded-[1.5rem] border border-border/60 bg-white/50 p-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Helper note
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                        {moment.helperNote}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="demo-scan"
        className="section-surface-aqua relative scroll-mt-24 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-teal">
              Demo scan
            </p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              See a real example.
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-muted-foreground">
              Switch between sample family members to see the matching QR code,
              public card, scenario and approved information.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 grid gap-3 rounded-[2rem] glass p-4 sm:grid-cols-2 xl:grid-cols-4">
              {personaSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-[1.25rem] bg-background/70 px-4 py-3"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-medium text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground/85">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {demoProfiles.map((item) => {
              const isActive = item.id === activePersona;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActivePersona(item.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "glass text-foreground/75 hover:text-primary"
                  }`}
                  style={
                    isActive ? { background: "var(--gradient-cta)" } : undefined
                  }
                >
                  {item.name}
                  <span className="opacity-70">{"\u00b7"} {cleanCopy(item.type)}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${profile.id}-qr`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-[2rem] glass-strong p-5"
                >
                  <p className="text-[10px] uppercase tracking-widest text-teal">
                    Scan this demo
                  </p>
                  <img
                    src={profile.qr}
                    alt={`${profile.name} QR`}
                    className="mx-auto mt-4 h-56 w-56 object-contain"
                  />
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    {profile.name} {"\u00b7"} demo profile only
                  </p>
                </motion.div>
              </AnimatePresence>
            </Reveal>

            <Reveal className="lg:col-span-4" delay={0.05}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${profile.id}-card`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <PhoneFrame src={profile.card} alt={`${profile.name} public card`} />
                </motion.div>
              </AnimatePresence>
            </Reveal>

            <Reveal className="lg:col-span-4" delay={0.1}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${profile.id}-details`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-[2rem] glass p-5"
                >
                  <h3 className="text-base font-medium">{profile.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {cleanCopy(profile.type)} {"\u00b7"} {cleanCopy(profile.age)}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {cleanCopy(profile.scenario)}
                  </p>
                  <p className="mt-6 text-[10px] uppercase tracking-widest text-muted-foreground">
                    Approved information
                  </p>
                  <ul className="mt-3 space-y-2">
                    {profile.visible.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/85"
                      >
                        <Eye className="mt-1 h-3.5 w-3.5 shrink-0 text-teal" />
                        <span>{cleanCopy(item)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-surface-warm relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-teal">
              Placement ideas
            </p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              Place it where help would look first.
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-muted-foreground">
              Use NFC tags, QR cards or clothing stickers on the items your
              family already carries.
            </p>
          </Reveal>

          <div className="relative mt-10">
            <div className="grid gap-4 md:grid-cols-2">
              {placementGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 0.04}>
                  <div className="h-full rounded-[2rem] glass p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                        <group.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-medium">{group.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {group.intro}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.25rem] bg-background/75 px-4 py-3 text-sm font-medium text-foreground/85"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface-blue relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-teal">
              Scan flow
            </p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              What happens when someone scans?
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-muted-foreground">
              A simple flow that helps approved information reach the right
              person faster.
            </p>
          </Reveal>

          <div className="mt-10">
            <div className="grid gap-4 lg:hidden">
              {scanSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <div className="relative rounded-[1.75rem] glass p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-primary">
                        <step.icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-teal/12 px-2 text-xs font-medium text-teal">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="hidden items-stretch justify-between lg:flex lg:gap-3">
              {scanSteps.map((step, index) => (
                <div key={step.title} className="flex min-w-0 flex-1 items-center gap-3">
                  <Reveal className="flex-1" delay={index * 0.05}>
                    <div className="relative h-full rounded-[1.75rem] glass p-5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-primary">
                          <step.icon className="h-4.5 w-4.5" />
                        </span>
                        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-teal/12 px-2 text-xs font-medium text-teal">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-medium">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.copy}
                      </p>
                    </div>
                  </Reveal>

                  {index < scanSteps.length - 1 ? (
                    <div
                      aria-hidden
                      className="relative flex h-full w-12 shrink-0 items-center justify-center"
                    >
                      <motion.div
                        className="h-px w-full rounded-full bg-[linear-gradient(90deg,rgba(31,98,142,0.12),rgba(0,168,168,0.34),rgba(31,98,142,0.12))]"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                scaleY: [1, 2.1, 1],
                                opacity: [0.5, 0.95, 0.5],
                                filter: [
                                  "drop-shadow(0 0 0 rgba(0,168,168,0))",
                                  "drop-shadow(0 0 7px rgba(0,168,168,0.45))",
                                  "drop-shadow(0 0 0 rgba(0,168,168,0))",
                                ],
                              }
                        }
                        transition={
                          reduceMotion
                            ? undefined
                            : {
                                duration: 2.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 0,
                              }
                        }
                        style={{ transformOrigin: "center" }}
                      />
                      {!reduceMotion ? (
                        <motion.span
                          className="absolute left-1/2 top-1/2 block h-3 w-full max-w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,168,168,0.72)_0%,rgba(177,212,224,0.34)_50%,transparent_82%)] blur-[3px]"
                          animate={{
                            opacity: [0.16, 0.7, 0.16],
                            scaleY: [1, 1.55, 1],
                            scaleX: [0.88, 1, 0.88],
                          }}
                          transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 0,
                          }}
                        />
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CalendarSection />
      <AnalyticsSection />
      <FinalCta />
    </>
  );
}
