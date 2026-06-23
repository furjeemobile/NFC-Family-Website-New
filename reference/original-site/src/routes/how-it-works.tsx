import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PageHeroBackground } from "@/components/brand/PageHeroBackground";
import { Reveal } from "@/components/brand/Reveal";
import { BrowserFrame, PhoneFrame } from "@/components/brand/PhoneFrame";
import { demoProfiles, screens, type DemoProfile } from "@/content/demoProfiles";
import jasonQr from "@/assets/demo/jason-doe-qr-only.png.asset.json";
import sarahQr from "@/assets/demo/sarah-doe-qr-only.png.asset.json";
import johnQr from "@/assets/demo/john-doe-qr-only.png.asset.json";
import sethQr from "@/assets/demo/seth-doe-qr-only.png.asset.json";
import jasonPublicCard from "@/assets/demo/jason_Public_card.png.asset.json";
import sarahPublicCard from "@/assets/demo/sarah_public_card.png.asset.json";
import johnPublicCard from "@/assets/demo/john_public_card.png.asset.json";
import sethPublicCard from "@/assets/demo/Seth_Public_Card.png.asset.json";
import nfcTagImage from "@/assets/Images/round nfc tag round.png";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  HeartHandshake,
  House,
  LockKeyhole,
  Pill,
  Printer,
  QrCode,
  Radio,
  ScanLine,
  ShieldAlert,
  ShieldCheck,
  Shirt,
  Tags,
  UserRoundPlus,
} from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works - NFC Family" },
      {
        name: "description",
        content:
          "Create your profile, choose what to share, and connect NFC Family to QR tags, NFC tags, clothing labels, or wristbands.",
      },
      { property: "og:title", content: "How NFC Family works" },
      {
        property: "og:description",
        content:
          "Create a family profile, choose your method, and let the right emergency details be easier to access when needed.",
      },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

type MethodKey = "print" | "nfc" | "clothing" | "wristbands";

const journeySteps = [
  {
    title: "Create profile",
    body: "Add the details that matter for each family member.",
    icon: UserRoundPlus,
  },
  {
    title: "Choose privacy",
    body: "Control which information appears on the public emergency profile.",
    icon: LockKeyhole,
  },
  {
    title: "Pick your method",
    body: "Print a QR tag, use an NFC tag, add a clothing label, or use a wristband.",
    icon: Tags,
  },
  {
    title: "Scan or tap",
    body: "A helper scans the QR code or taps the NFC item.",
    icon: ScanLine,
  },
  {
    title: "Help faster",
    body: "They see the information you allowed them to see.",
    icon: HeartHandshake,
  },
];

const methodOrder: MethodKey[] = ["print", "nfc", "clothing", "wristbands"];

const methodContent: Record<
  MethodKey,
  {
    tab: string;
    title: string;
    body: string;
    bullets: string[];
    cta: string;
    badge?: string;
    icon: typeof Printer;
  }
> = {
  print: {
    tab: "Print at home",
    title: "Print your own QR tag at home.",
    body: "Use the tag designer to create a QR tag you can print and place where it is useful.",
    bullets: [
      "Customise the design.",
      "Print at home when you need it.",
      "Use it for school bags, cards, folders, lunch boxes, and more.",
      "Test the QR code before using it.",
    ],
    cta: "Design your tag",
    icon: Printer,
  },
  nfc: {
    tab: "NFC tags",
    title: "Use NFC Family branded NFC tags.",
    body: "Our branded NFC tags give families a simple tap option for everyday safety.",
    bullets: [
      "Tap with a compatible phone.",
      "Useful for bags, keys, cards, and personal items.",
      "Links to the selected public emergency profile.",
      "Easy to update from your account.",
    ],
    cta: "View NFC tags",
    icon: Radio,
  },
  clothing: {
    tab: "Clothing labels",
    title: "Add QR labels to important clothing.",
    body: "Create clothing labels for important clothing items at home. It can also become a simple family activity where everyone helps prepare the items they use most.",
    bullets: [
      "Useful for school clothing, jackets, sportswear, and outings.",
      "Helps identify important items quickly.",
      "Works with the same public emergency profile.",
      "A practical activity for parents and children.",
    ],
    cta: "Create clothing labels",
    icon: Shirt,
  },
  wristbands: {
    tab: "Wristbands",
    title: "NFC Family wristbands.",
    body: "Branded wristbands give families another simple way to keep emergency access close at hand.",
    bullets: [
      "Comfortable everyday option.",
      "Useful for children, seniors, events, and outings.",
      "Tap or scan depending on the wristband type.",
      "Designed to work with your NFC Family profile.",
    ],
    cta: "Learn about wristbands",
    badge: "Coming soon",
    icon: ShieldCheck,
  },
};

const privacyFields = [
  {
    key: "contacts",
    label: "Emergency Contacts",
    value: "John Doe, Megan Doe",
  },
  {
    key: "conditions",
    label: "Medical Conditions",
    value: "Asthma",
  },
  {
    key: "allergies",
    label: "Allergies",
    value: "Peanuts",
  },
  {
    key: "medications",
    label: "Medications",
    value: "Hidden",
  },
  {
    key: "address",
    label: "Home Address",
    value: "Hidden",
  },
] as const;

const initialPrivacyState = {
  contacts: true,
  conditions: true,
  allergies: true,
  medications: false,
  address: false,
};

const demoCards = [
  {
    id: "jason" as const,
    name: "Jason Doe",
    label: "Toddler",
    age: "5 years old",
    qrImage: jasonQr.url,
    publicCardImage: jasonPublicCard.url,
    qrAlt: "Demo QR code for Jason Doe",
    publicAlt: "Public emergency profile for Jason Doe",
  },
  {
    id: "sarah" as const,
    name: "Sarah Doe",
    label: "Adult",
    age: "55 years old",
    qrImage: sarahQr.url,
    publicCardImage: sarahPublicCard.url,
    qrAlt: "Demo QR code for Sarah Doe",
    publicAlt: "Public emergency profile for Sarah Doe",
  },
  {
    id: "john" as const,
    name: "John Doe",
    label: "Medical profile",
    age: "62 years old",
    qrImage: johnQr.url,
    publicCardImage: johnPublicCard.url,
    qrAlt: "Demo QR code for John Doe",
    publicAlt: "Public emergency profile for John Doe",
  },
  {
    id: "seth" as const,
    name: "Seth Doe",
    label: "Senior",
    age: "71 years old",
    qrImage: sethQr.url,
    publicCardImage: sethPublicCard.url,
    qrAlt: "Demo QR code for Seth Doe",
    publicAlt: "Public emergency profile for Seth Doe",
  },
];

function HowItWorksPage() {
  const [activeMethod, setActiveMethod] = useState<MethodKey>("print");
  const [privacyState, setPrivacyState] = useState(initialPrivacyState);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const sarah = demoProfiles.find((profile) => profile.id === "sarah")!;
  const john = demoProfiles.find((profile) => profile.id === "john")!;
  const jason = demoProfiles.find((profile) => profile.id === "jason")!;
  const activeMethodContent = methodContent[activeMethod];

  function handleMethodKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % methodOrder.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + methodOrder.length) % methodOrder.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = methodOrder.length - 1;

    if (nextIndex !== index) {
      event.preventDefault();
      const nextMethod = methodOrder[nextIndex];
      setActiveMethod(nextMethod);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  function toggleFlip(id: DemoProfile["id"]) {
    setFlippedCards((current) => ({ ...current, [id]: !current[id] }));
  }

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <PageHeroBackground />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,25,46,0.96)_0%,rgba(18,58,90,0.9)_45%,rgba(15,143,153,0.7)_100%)]"
        />
        <div aria-hidden="true" className="absolute inset-0 opacity-30 ambient-bg" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="relative z-10 lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.22em] text-teal">How It Works</p>
              <h1 className="mt-4 max-w-2xl text-balance text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
                Simple steps. Safer everyday moments.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg text-white/80">
                Create a family profile, choose what to share, and connect it to a QR code, NFC tag,
                clothing label, or wristband. When someone scans or taps, they see the emergency
                information you have chosen to make visible.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  Create your profile <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#demo-scan"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/16"
                >
                  Try a demo scan
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
                {["Private by default", "Built for families", "Update anytime"].map((note) => (
                  <span
                    key={note}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur"
                  >
                    <ShieldCheck className="h-4 w-4 text-teal" />
                    {note}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative z-10 lg:col-span-6" delay={0.08}>
              <div className="relative mx-auto min-h-[420px] max-w-2xl">
                <div className="relative ml-auto w-[86%] animate-float-y-slow">
                  <BrowserFrame src={screens.familyDashboard} alt="NFC Family dashboard" />
                </div>

                <div className="absolute -left-2 bottom-12 w-36 rounded-[2rem] bg-white p-3 shadow-[var(--shadow-float)] ring-1 ring-white/50 animate-float-y-fast sm:w-44">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">QR ready</p>
                  <img
                    src={john.qr}
                    alt="Demo QR code"
                    className="mx-auto mt-2 h-24 w-24 object-contain sm:h-32 sm:w-32"
                    loading="lazy"
                  />
                </div>

                <div className="absolute left-16 top-16 hidden rounded-full bg-white/10 p-2 backdrop-blur sm:block">
                  <div className="relative grid h-[5.5rem] w-[5.5rem] place-items-center rounded-full bg-white shadow-[var(--shadow-float)]">
                    <span className="absolute inset-0 rounded-full ring-2 ring-teal/35 animate-soft-pulse" />
                    <img
                      src={nfcTagImage}
                      alt="NFC Family branded NFC tag"
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-6 right-4 z-20 w-[38%] min-w-[160px] animate-float-y">
                  <PhoneFrame src={sarah.card} alt="Sarah Doe public emergency profile" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 z-10 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-float)] backdrop-blur sm:p-8">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute left-[9%] right-[9%] top-8 hidden h-px bg-[linear-gradient(90deg,rgba(31,98,142,0.08),rgba(0,168,168,0.45),rgba(31,98,142,0.08))] lg:block"
                />
                <div className="grid gap-4 lg:grid-cols-5">
                  {journeySteps.map((step, index) => (
                    <Reveal key={step.title} delay={index * 0.06}>
                      <div className="group relative h-full rounded-[1.75rem] border border-border/70 bg-white p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-soft)]" style={{ background: "var(--gradient-cta)" }}>
                          <step.icon className="h-5 w-5" />
                        </span>
                        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Step {index + 1}
                        </p>
                        <h2 className="mt-2 text-lg font-medium">{step.title}</h2>
                        <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-surface-default relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Choose your method</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Choose the way NFC Family fits your life.
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Every family is different. Start with the method that works for you today and add
                more later.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div
              role="tablist"
              aria-label="How to use NFC Family"
              className="mt-8 flex gap-2 overflow-x-auto pb-2"
            >
              {methodOrder.map((method, index) => {
                const tab = methodContent[method];
                const isActive = activeMethod === method;
                return (
                  <button
                    key={method}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    id={`method-tab-${method}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`method-panel-${method}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveMethod(method)}
                    onKeyDown={(event) => handleMethodKeyDown(event, index)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "text-primary-foreground shadow-[var(--shadow-soft)]"
                        : "glass text-foreground/75 hover:text-primary"
                    }`}
                    style={isActive ? { background: "var(--gradient-cta)" } : undefined}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.tab}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMethod}
                id={`method-panel-${activeMethod}`}
                role="tabpanel"
                aria-labelledby={`method-tab-${activeMethod}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-center gap-8 rounded-[2rem] border border-border/70 bg-white p-6 shadow-[var(--shadow-float)] lg:grid-cols-12 lg:p-8"
              >
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-teal">{activeMethodContent.tab}</p>
                    {activeMethodContent.badge ? (
                      <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
                        {activeMethodContent.badge}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-balance text-3xl font-medium tracking-tight">
                    {activeMethodContent.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-muted-foreground">{activeMethodContent.body}</p>
                  <ul className="mt-6 space-y-2">
                    {activeMethodContent.bullets.map((bullet, index) => (
                      <motion.li
                        key={bullet}
                        initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.04 * index }}
                        className="flex items-start gap-3 text-sm text-foreground/85"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]"
                    style={{ background: "var(--gradient-cta)" }}
                  >
                    {activeMethodContent.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="lg:col-span-7">
                  <MethodVisual activeMethod={activeMethod} qrSrc={jason.qr} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section-surface-aqua relative overflow-hidden py-20">
        <div aria-hidden="true" className="absolute inset-0 opacity-70 ambient-bg" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Real life flow</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                What happens when someone scans or taps?
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The QR code or NFC item opens the public emergency profile for that family member.
                The person helping only sees what you chose to share.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute inset-x-[18%] top-1/2 hidden -translate-y-1/2 items-center justify-between lg:flex">
              <ArrowRight className="h-6 w-6 text-teal/40" />
              <ArrowRight className="h-6 w-6 text-teal/40" />
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <Reveal>
                <div className="relative h-full rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <ScanLine className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-medium">They scan or tap</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Someone scans your QR code or taps your NFC item.
                  </p>
                  <div className="mt-6 rounded-[1.5rem] glass p-4">
                    <div className="relative mx-auto grid h-32 w-32 place-items-center rounded-full bg-[linear-gradient(135deg,rgba(192,240,247,0.85),rgba(255,255,255,0.96),rgba(177,212,224,0.75))]">
                      <span className="absolute inset-3 rounded-full ring-2 ring-teal/35 animate-soft-pulse" />
                      <img src={nfcTagImage} alt="NFC Family branded NFC tag" className="h-20 w-20 object-contain" />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="h-full rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Eye className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-medium">The public profile opens</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    They see the information you allowed them to see.
                  </p>
                  <div className="mt-6 animate-float-y-slow">
                    <PhoneFrame src={john.card} alt="John Doe public emergency profile" className="max-w-[240px]" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="h-full rounded-[2rem] border border-border/60 bg-white/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <HeartHandshake className="h-5 w-5 animate-soft-pulse" />
                  </span>
                  <h3 className="mt-5 text-xl font-medium">They can help</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    They can use the shared details when it matters.
                  </p>
                  <div className="mt-6 rounded-[1.5rem] glass p-5">
                    <div className="space-y-3">
                      {[
                        "Call the right emergency contact",
                        "Check allergies or medical conditions",
                        "Use the profile details you made visible",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface-blue relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Privacy controls</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Privacy stays in your hands.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                You decide what appears publicly. Keep private information hidden and only share
                what could help in an emergency.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Choose what to show.",
                  "Hide what should stay private.",
                  "Update details anytime.",
                  "Keep one profile connected to many methods.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["QR tags", "NFC tags", "Clothing labels", "Wristbands"].map((item) => (
                  <span key={item} className="rounded-full bg-accent/75 px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-border/40">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08}>
              <div className="grid gap-5 rounded-[2rem] border border-border/70 bg-white p-5 shadow-[var(--shadow-float)] lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[1.5rem] glass p-3">
                  {privacyFields.map((field) => {
                    const isOn = privacyState[field.key];
                    return (
                      <button
                        key={field.key}
                        type="button"
                        aria-pressed={isOn}
                        onClick={() =>
                          setPrivacyState((current) => ({
                            ...current,
                            [field.key]: !current[field.key],
                          }))
                        }
                        className="flex w-full items-center justify-between gap-3 rounded-[1.25rem] px-3 py-3 text-left transition hover:bg-foreground/[0.03]"
                      >
                        <div>
                          <p className="text-sm font-medium">{field.label}</p>
                          <p className="text-xs text-muted-foreground">{field.value}</p>
                        </div>
                        <span
                          className={`inline-flex h-7 w-12 shrink-0 items-center rounded-full p-0.5 transition ${
                            isOn ? "bg-primary" : "bg-foreground/15"
                          }`}
                        >
                          <span
                            className={`h-6 w-6 rounded-full bg-white shadow transition ${
                              isOn ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(192,240,247,0.4),rgba(255,255,255,0.92))] p-4 ring-1 ring-border/60">
                  <div className="rounded-[1.5rem] bg-white p-5 shadow-[var(--shadow-soft)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-teal">Public preview</p>
                        <h3 className="mt-1 text-lg font-medium">Sarah Doe</h3>
                        <p className="text-xs text-muted-foreground">Only selected details are visible</p>
                      </div>
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                        Live
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      {privacyState.contacts ? (
                        <PreviewItem icon={UserRoundPlus} label="Emergency Contacts" value="John Doe, Megan Doe" />
                      ) : null}
                      {privacyState.conditions ? (
                        <PreviewItem icon={ShieldCheck} label="Medical Conditions" value="Asthma" />
                      ) : null}
                      {privacyState.allergies ? (
                        <PreviewItem icon={ShieldAlert} label="Allergies" value="Peanuts" />
                      ) : null}
                      {privacyState.medications ? (
                        <PreviewItem icon={Pill} label="Medications" value="Inhaler" />
                      ) : null}
                      {privacyState.address ? (
                        <PreviewItem icon={House} label="Home Address" value="Visible to helpers" />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="demo-scan" className="section-surface-default relative py-20 pb-36 md:pb-40 xl:pb-44">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Demo scan</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Try a demo scan.
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Flip a demo card, scan the QR code, and see how a public emergency profile can look.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Tap a card to flip.</p>
            </div>
          </Reveal>

          <div className="mt-10 mb-12 grid items-start gap-5 md:mb-16 md:grid-cols-2 xl:mb-20 xl:grid-cols-4">
            {demoCards.map((card, index) => {
              const isFlipped = !!flippedCards[card.id];

              return (
                <Reveal key={card.id} delay={index * 0.05}>
                  <button
                    type="button"
                    aria-pressed={isFlipped}
                    aria-label={`${card.name} demo card. Tap to flip between QR code and public profile.`}
                    onClick={() => toggleFlip(card.id)}
                    className="group block h-[38rem] min-h-[38rem] w-full text-left [perspective:1200px] focus:outline-none md:h-[44rem] md:min-h-[44rem] xl:h-[48rem] xl:min-h-[48rem]"
                  >
                    <div
                      className="relative h-full w-full rounded-[2rem] transition-transform duration-700 [transform-style:preserve-3d] group-hover:-translate-y-1"
                      style={{
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                        transitionDuration: reduceMotion ? "0ms" : "700ms",
                      }}
                    >
                      <div className="absolute inset-0 rounded-[2rem] border border-border/70 bg-white p-5 shadow-[var(--shadow-float)] [backface-visibility:hidden]">
                        <div className="flex h-full flex-col">
                          <div className="flex items-center justify-between gap-3">
                            <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                              {card.label}
                            </span>
                            <QrCode className="h-4 w-4 text-primary/60" />
                          </div>
                          <h3 className="mt-4 text-xl font-medium">{card.name}</h3>
                          <p className="text-xs text-muted-foreground">{card.age}</p>
                          <div className="relative mt-4 flex flex-1 items-center justify-center rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(192,240,247,0.22),rgba(255,255,255,0.98))]">
                            <div className="relative rounded-[1.5rem] bg-white p-4 shadow-[var(--shadow-soft)]">
                              <img
                                src={card.qrImage}
                                alt={card.qrAlt}
                                className="h-40 w-40 object-contain"
                                loading="lazy"
                              />
                              <div aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-4 h-1 rounded-full bg-teal/40 animate-scan-line" />
                            </div>
                          </div>
                          <p className="mt-4 text-sm text-muted-foreground">Tap to flip</p>
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 rounded-[2rem] border border-border/70 bg-white p-5 shadow-[var(--shadow-float)] [backface-visibility:hidden]"
                        style={{ transform: "rotateY(180deg)" }}
                      >
                        <div className="flex h-full flex-col">
                          <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                            {card.label}
                          </span>
                          <Eye className="h-4 w-4 text-primary/60" />
                        </div>
                          <h3 className="mt-4 text-xl font-medium">{card.name}</h3>
                          <p className="text-xs text-muted-foreground">{card.age}</p>
                          <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden">
                            <PhoneFrame
                              src={card.publicCardImage}
                              alt={card.publicAlt}
                              className="max-w-[190px]"
                            />
                          </div>
                          <p className="mt-4 text-sm text-muted-foreground">
                            Tap to return to QR code
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-surface-warm relative py-12">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="flex gap-3 rounded-3xl border border-gold/40 bg-gold/5 p-5">
              <ShieldAlert className="h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm text-foreground/80">
                Only share information you would be comfortable showing to someone helping in an
                emergency. You can change visibility settings at any time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24 pt-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2.5rem] px-8 py-10 text-primary-foreground shadow-[var(--shadow-float)] sm:px-10 sm:py-14"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.19 0.04 245) 0%, oklch(0.35 0.08 234) 45%, oklch(0.58 0.11 195) 100%)",
              }}
            >
              <div aria-hidden="true" className="absolute inset-0 opacity-25 ambient-bg" />
              <div aria-hidden="true" className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70 animate-float-y-slow sm:block">
                QR
              </div>
              <div aria-hidden="true" className="absolute right-16 bottom-16 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70 animate-float-y-fast">
                NFC
              </div>
              <div aria-hidden="true" className="absolute left-1/2 top-8 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70 animate-float-y">
                Labels
              </div>

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-teal">Get started</p>
                  <h2 className="mt-3 max-w-xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                    Ready to set up your family profile?
                  </h2>
                  <p className="mt-4 max-w-lg text-pretty text-primary-foreground/80">
                    Start with one profile, choose your first method, and add more options when your
                    family needs them.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-primary shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]"
                    >
                      Create your profile
                    </Link>
                    <a
                      href="#demo-scan"
                      className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/16"
                    >
                      Try a demo scan
                    </a>
                  </div>
                </div>

                <div className="relative mx-auto flex max-w-md items-end justify-end gap-3">
                  <div className="hidden rounded-[1.5rem] bg-white/12 p-4 backdrop-blur sm:block">
                    <img src={jason.qr} alt="Demo QR code" className="h-24 w-24 object-contain" />
                  </div>
                  <div className="relative grid h-24 w-24 place-items-center rounded-full bg-white/14 ring-1 ring-white/20 sm:grid">
                    <span className="absolute inset-2 rounded-full ring-2 ring-teal/35 animate-soft-pulse" />
                    <img src={nfcTagImage} alt="NFC Family branded NFC tag" className="h-16 w-16 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FloatingLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute z-30 rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function MethodVisual({ activeMethod, qrSrc }: { activeMethod: MethodKey; qrSrc: string }) {
  if (activeMethod === "print") {
    return (
      <div className="relative mx-auto max-w-2xl animate-float-y-slow">
        <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
        <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(192,240,247,0.4))] p-6 shadow-[var(--shadow-float)]">
          <div className="mx-auto max-w-md rounded-[1.75rem] border border-dashed border-primary/20 bg-white p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-teal">Printable tag</p>
                <h4 className="mt-1 text-lg font-medium">Ready to print</h4>
              </div>
              <Printer className="h-5 w-5 text-primary/60" />
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_140px] sm:items-center">
              <div className="rounded-[1.25rem] bg-accent/50 p-4">
                <p className="text-sm font-medium text-primary">Family profile linked</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Add a name, emergency contact, and the details you want visible.
                </p>
              </div>
              <div className="rounded-[1.25rem] bg-white p-3 shadow-[var(--shadow-soft)] ring-1 ring-border/60">
                <img src={qrSrc} alt="Printable QR tag" className="mx-auto h-28 w-28 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeMethod === "nfc") {
    return (
      <div className="relative mx-auto grid max-w-xl place-items-center rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(192,240,247,0.45))] p-10 shadow-[var(--shadow-float)] animate-float-y-slow">
        <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
        <div className="relative grid h-64 w-64 place-items-center rounded-full bg-white shadow-[var(--shadow-float)]">
          <span className="absolute inset-4 rounded-full ring-2 ring-teal/30 animate-soft-pulse" />
          <span className="absolute inset-10 rounded-full ring-2 ring-teal/45 animate-soft-pulse" style={{ animationDelay: "0.9s" }} />
          <img src={nfcTagImage} alt="NFC Family branded NFC tag" className="h-48 w-48 object-contain" />
        </div>
      </div>
    );
  }

  if (activeMethod === "clothing") {
    return (
      <div className="relative mx-auto max-w-2xl animate-float-y-slow">
        <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
        <div className="grid gap-4 rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(192,240,247,0.4))] p-6 shadow-[var(--shadow-float)] sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] bg-white p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                <Shirt className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-medium">Clothing item label</p>
                <p className="text-xs text-muted-foreground">Attach a QR label to the items you use most.</p>
              </div>
            </div>
            <div className="mt-5 rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(177,212,224,0.28),rgba(255,255,255,0.9))] p-5">
              <div className="mx-auto grid h-48 w-40 place-items-center rounded-[2rem_2rem_1.25rem_1.25rem] bg-white shadow-[var(--shadow-soft)]">
                <div className="rounded-[1rem] border border-dashed border-primary/20 bg-accent/35 px-4 py-2 text-xs font-medium text-primary">
                  School Jacket
                </div>
                <div className="rounded-[1.25rem] bg-white p-2 ring-1 ring-border/60">
                  <img src={qrSrc} alt="QR label for clothing" className="h-24 w-24 object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[1.5rem] glass p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">At home setup</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Prepare school clothing, jackets, sportswear, and outing essentials using one linked
              profile.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto grid max-w-xl place-items-center rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(192,240,247,0.4))] p-8 shadow-[var(--shadow-float)] animate-float-y-slow">
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
      <span className="absolute right-5 top-5 rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
        Coming soon
      </span>
      <div className="flex items-center justify-center gap-3">
        <div className="grid h-40 w-20 place-items-center rounded-full bg-[linear-gradient(180deg,rgba(31,98,142,0.95),rgba(0,168,168,0.85))] shadow-[var(--shadow-soft)]">
          <div className="grid h-[5.5rem] w-10 place-items-center rounded-full bg-white/90">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="grid h-40 w-20 place-items-center rounded-full bg-[linear-gradient(180deg,rgba(31,98,142,0.55),rgba(0,168,168,0.45))] opacity-80 shadow-[var(--shadow-soft)]">
          <div className="grid h-[5.5rem] w-10 place-items-center rounded-full bg-white/90">
            <Radio className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
      <p className="mt-6 max-w-sm text-center text-sm text-muted-foreground">
        A branded wristband option for children, seniors, events, and everyday outings.
      </p>
    </div>
  );
}

function PreviewItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof ShieldCheck;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-[1rem] bg-accent/45 px-3 py-2.5">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-primary shadow-[var(--shadow-soft)]">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-foreground/90">{value}</p>
      </div>
    </div>
  );
}
