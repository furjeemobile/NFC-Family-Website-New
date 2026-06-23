import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHeroBackground } from "@/components/brand/PageHeroBackground";
import { BrowserFrame, PhoneFrame } from "@/components/brand/PhoneFrame";
import { Reveal } from "@/components/brand/Reveal";
import { allFaqs, type Faq } from "@/content/faqs";
import { demoProfiles } from "@/content/demoProfiles";
import privacyShot from "@/assets/demo/privacy_toggles.png.asset.json";
import analyticsShot from "@/assets/demo/scan_analytics.png.asset.json";
import locationsShot from "@/assets/demo/scan_locations.png.asset.json";
import mapShot from "@/assets/demo/scan_map.png.asset.json";
import nfcTagImage from "@/assets/Images/round nfc tag round.png";
import clothingStickerImage from "@/assets/Images/clothing sticketr.png";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Bell,
  Check,
  Eye,
  EyeOff,
  FileText,
  HeartHandshake,
  Info,
  LockKeyhole,
  MapPin,
  Printer,
  QrCode,
  Radio,
  ScanLine,
  Search,
  ShieldAlert,
  ShieldCheck,
  Shirt,
  Sparkles,
  Tags,
  UserRound,
  UserRoundPlus,
} from "lucide-react";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Safety Center - NFC Family" },
      {
        name: "description",
        content:
          "Explore how NFC Family handles privacy, QR and NFC scanning, public safety cards, printing, tags, scan history, and practical family support.",
      },
      { property: "og:title", content: "NFC Family Safety Center" },
      {
        property: "og:description",
        content:
          "A calm, practical guide to privacy controls, QR and NFC scanning, public card visibility, and family preparation.",
      },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
  component: SafetyCenterPage,
});

type Topic = {
  id: string;
  title: string;
  copy: string;
  icon: typeof ShieldCheck;
};

type HowStep = {
  title: string;
  body: string;
  icon: typeof UserRoundPlus;
};

type VisibilityField = {
  key: "name" | "contact" | "medical" | "allergies" | "address" | "caregiver" | "photo";
  label: string;
  value: string;
  hint: string;
  visibleLabel: string;
};

type PrepCard = {
  title: string;
  body: string;
  bestFor: string[];
  icon: typeof Printer;
  kind: "qr" | "clothing" | "nfc" | "public-card";
};

type ScanTab = "overview" | "activity" | "map";
type ScanMethod = "qr" | "nfc";
type FaqCategory = NonNullable<Faq["c"]> | "all";

const topics: Topic[] = [
  { id: "how-it-works", title: "How it works", copy: "See the real-world flow from profile setup to helper view.", icon: Sparkles },
  { id: "privacy-control", title: "Privacy control", copy: "Understand what stays hidden and what a family chooses to share.", icon: LockKeyhole },
  { id: "qr-nfc", title: "QR and NFC", copy: "Learn the difference between scanning a QR code and tapping an NFC tag.", icon: Radio },
  { id: "public-card", title: "Public card", copy: "Preview what a helper can see after scanning.", icon: Eye },
  { id: "print-and-tags", title: "Print and tags", copy: "Explore QR designer, clothing stickers, and NFC tag preparation.", icon: Tags },
  { id: "scan-history", title: "Scan history", copy: "See what scan history means and what it does not mean.", icon: Bell },
  { id: "emergency-guidance", title: "Emergency guidance", copy: "Clear boundaries for emergencies, medical advice, and professional care.", icon: ShieldAlert },
  { id: "faq", title: "FAQ hub", copy: "Search and filter practical answers in one place.", icon: FileText },
  { id: "support", title: "Support", copy: "Know where to go if you need help setting things up safely.", icon: HeartHandshake },
];

const howSteps: HowStep[] = [
  {
    title: "Create a family profile",
    body: "Start with the person you want to protect and add the details that matter most.",
    icon: UserRoundPlus,
  },
  {
    title: "Choose what is visible",
    body: "Decide which details helpers can see and which details stay private.",
    icon: LockKeyhole,
  },
  {
    title: "Prepare the access point",
    body: "Print a QR code, prepare a clothing sticker, or place an NFC tag on an item your family already uses.",
    icon: Printer,
  },
  {
    title: "A helper scans or taps",
    body: "A phone camera scans the QR code or a compatible phone taps the NFC tag.",
    icon: ScanLine,
  },
  {
    title: "The public safety card opens",
    body: "The helper sees a simple, mobile-friendly card designed for quick understanding.",
    icon: FileText,
  },
  {
    title: "Only approved details are shown",
    body: "The helper sees the information your family chose to make visible - not your full account.",
    icon: ShieldCheck,
  },
];

const visibilityFields: VisibilityField[] = [
  {
    key: "name",
    label: "Name",
    value: "Amara Jacobs",
    hint: "Helpful for a clear introduction.",
    visibleLabel: "Visible to helper",
  },
  {
    key: "contact",
    label: "Emergency contact",
    value: "Lebo Jacobs - Mom - 082 555 0101",
    hint: "Lets a helper reach family quickly.",
    visibleLabel: "Visible to helper",
  },
  {
    key: "medical",
    label: "Medical notes",
    value: "Asthma inhaler in school bag",
    hint: "Share only what could help in the moment.",
    visibleLabel: "Visible to helper",
  },
  {
    key: "allergies",
    label: "Allergies",
    value: "Peanuts",
    hint: "Useful when urgent care or supervision is needed.",
    visibleLabel: "Visible to helper",
  },
  {
    key: "address",
    label: "Address",
    value: "12 Oak Lane, Centurion",
    hint: "Often better kept private unless there is a strong reason to show it.",
    visibleLabel: "Hidden from helper",
  },
  {
    key: "caregiver",
    label: "School or caregiver note",
    value: "Aftercare pickup by Aunt Zinzi",
    hint: "Useful for handovers, aftercare, outings, or support routines.",
    visibleLabel: "Visible to helper",
  },
  {
    key: "photo",
    label: "Photo",
    value: "Profile photo shown",
    hint: "Can help a helper confirm they opened the right card.",
    visibleLabel: "Visible to helper",
  },
];

const initialVisibilityState: Record<VisibilityField["key"], boolean> = {
  name: true,
  contact: true,
  medical: true,
  allergies: true,
  address: false,
  caregiver: true,
  photo: true,
};

const prepCards: PrepCard[] = [
  {
    title: "Home QR code designer",
    body: "Prepare a QR code in the app, print it at home, and place it on the items your family already uses every day.",
    bestFor: ["School bags", "Fridge sheets", "Travel wallets"],
    icon: Printer,
    kind: "qr",
  },
  {
    title: "Clothing stickers",
    body: "Order clothing stickers for school clothing, outings, care environments, and everyday family routines where clothing is often checked first.",
    bestFor: ["School clothing", "Jackets", "Senior care outings"],
    icon: Shirt,
    kind: "clothing",
  },
  {
    title: "NFC tags",
    body: "Use an NFC tag for a quick tap experience on compatible phones. It opens the same family-approved public safety card.",
    bestFor: ["Keys", "Medical folders", "Bags and everyday carry"],
    icon: Radio,
    kind: "nfc",
  },
  {
    title: "Public safety card",
    body: "Give helpers a clean, mobile-friendly card view that focuses on the information your family decided to share.",
    bestFor: ["Trusted helpers", "Care environments", "Travel support"],
    icon: Eye,
    kind: "public-card",
  },
];

const scanTabs: { key: ScanTab; label: string; icon: typeof Bell; src: string; alt: string }[] = [
  {
    key: "overview",
    label: "Overview",
    icon: Bell,
    src: analyticsShot.url,
    alt: "NFC Family scan analytics overview showing total scans, QR scans, NFC taps, and recent scan context",
  },
  {
    key: "activity",
    label: "Activity log",
    icon: FileText,
    src: locationsShot.url,
    alt: "NFC Family scan analytics activity log and top locations view",
  },
  {
    key: "map",
    label: "Map view",
    icon: MapPin,
    src: mapShot.url,
    alt: "NFC Family scan analytics map view with approximate scan locations in South Africa",
  },
];

const faqCategoryLabels: { key: FaqCategory; label: string }[] = [
  { key: "all", label: "All topics" },
  { key: "getting-started", label: "Getting started" },
  { key: "privacy-and-visibility", label: "Privacy and visibility" },
  { key: "qr-and-nfc", label: "QR and NFC" },
  { key: "tags-stickers-and-printing", label: "Tags, stickers, and printing" },
  { key: "emergency-use", label: "Emergency use" },
  { key: "account-and-support", label: "Account and support" },
];

function SafetyCenterPage() {
  const [visibility, setVisibility] = useState(initialVisibilityState);
  const [scanMethod, setScanMethod] = useState<ScanMethod>("qr");
  const [scanTab, setScanTab] = useState<ScanTab>("overview");
  const [faqCategory, setFaqCategory] = useState<FaqCategory>("all");
  const [faqQuery, setFaqQuery] = useState("");

  const sarah = demoProfiles.find((profile) => profile.id === "sarah") ?? demoProfiles[0];
  const activeScanTab = scanTabs.find((tab) => tab.key === scanTab) ?? scanTabs[0];
  const visibleFaqs = allFaqs.filter((faq) => {
    const matchesCategory = faqCategory === "all" ? true : faq.c === faqCategory;
    const matchesQuery =
      faqQuery.trim().length === 0
        ? true
        : `${faq.q} ${faq.a}`.toLowerCase().includes(faqQuery.trim().toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <PageHeroBackground />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,25,46,0.96)_0%,rgba(18,58,90,0.92)_44%,rgba(15,143,153,0.74)_100%)]"
        />
        <div aria-hidden="true" className="absolute inset-0 opacity-35 ambient-bg" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="relative z-10 lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.22em] text-teal">Safety Center</p>
              <h1 className="mt-4 max-w-2xl text-balance text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
                Family safety information, privacy control, and calm preparation in one place.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg text-white/80">
                Explore how NFC Family works, what a helper can see after scanning, what stays
                private, and how to prepare QR codes, clothing stickers, and NFC tags responsibly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#topic-hub"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  Explore safety topics <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Contact support
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
                {["Family-approved information", "Private by default", "Built for practical moments"].map((note) => (
                  <span
                    key={note}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur"
                  >
                    <ShieldCheck className="h-4 w-4 text-teal" />
                    {note}
                  </span>
                ))}
              </div>

              <div className="mt-8 max-w-2xl rounded-[1.75rem] border border-gold/30 bg-white/10 p-5 text-white backdrop-blur">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-medium">Important safety guidance</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      NFC Family is not an emergency response service. It does not replace emergency
                      services, medical advice, or professional care. In a real emergency, contact
                      the appropriate local emergency services first. NFC Family helps approved
                      helpers access the information the family chose to make visible.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="relative z-10 lg:col-span-6" delay={0.08}>
              <div className="relative mx-auto min-h-[440px] max-w-2xl">
                <div className="absolute right-0 top-8 w-[62%] min-w-[210px]">
                  <PhoneFrame src={sarah.card} alt="Example NFC Family public safety card preview" />
                </div>

                <div className="absolute left-0 top-24 w-[42%] min-w-[150px] rounded-[1.75rem] bg-white p-4 shadow-[var(--shadow-float)]">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Scan with camera</p>
                  <div className="relative mt-3 rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(192,240,247,0.4))] p-3">
                    <img src={sarah.qr} alt="Example QR code linked to a family profile" className="mx-auto h-28 w-28 object-contain" loading="lazy" />
                    <div aria-hidden="true" className="animate-scan-line pointer-events-none absolute inset-x-4 top-5 h-1 rounded-full bg-teal/40" />
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="topic-hub" className="relative -mt-8 z-10 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-[var(--shadow-float)] backdrop-blur sm:p-6">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.18em] text-teal">Interactive topic hub</p>
                <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                  Start with the topic that matters most to your family.
                </h2>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {topics.map((topic, index) => (
                  <Reveal key={topic.id} delay={index * 0.03}>
                    <a
                      href={`#${topic.id}`}
                      className="group flex h-full flex-col rounded-[1.6rem] border border-border/70 bg-white p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <topic.icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-lg font-medium">{topic.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.copy}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Jump to section <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="how-it-works" className="section-surface-default relative scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">How NFC Family works in a real moment</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                A simple flow from family setup to helper view.
              </h2>
              <p className="mt-4 text-muted-foreground">
                This is designed to make family-approved information easier to access. It does not
                guarantee a response, tracking, or emergency dispatch.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="absolute left-6 right-6 top-9 hidden h-px bg-[linear-gradient(90deg,rgba(31,98,142,0.08),rgba(0,168,168,0.45),rgba(31,98,142,0.08))] xl:block"
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {howSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.04}>
                  <div className="relative h-full rounded-[1.75rem] glass p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-soft)]"
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      <step.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Step {index + 1}</p>
                    <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="privacy-control" className="section-surface-blue relative scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Privacy and visibility simulator</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Families control what appears on the public card.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Toggle the example fields below to see what a helper could see. Private information
                stays hidden unless the family chooses to show it.
              </p>

              <div className="mt-6 space-y-3">
                {visibilityFields.map((field) => {
                  const isVisible = visibility[field.key];
                  return (
                    <button
                      key={field.key}
                      type="button"
                      aria-pressed={isVisible}
                      onClick={() => setVisibility((current) => ({ ...current, [field.key]: !current[field.key] }))}
                      className="w-full rounded-[1.5rem] border border-border/70 bg-white px-4 py-4 text-left shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-medium">{field.label}</p>
                            <span
                              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                                isVisible ? "bg-teal/12 text-teal" : "bg-foreground/8 text-muted-foreground"
                              }`}
                            >
                              {isVisible ? "Visible" : "Private"}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-foreground/80">{field.value}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{field.hint}</p>
                        </div>
                        <span
                          aria-hidden="true"
                          className={`inline-flex h-7 w-12 shrink-0 items-center rounded-full p-0.5 transition ${
                            isVisible ? "bg-primary" : "bg-foreground/15"
                          }`}
                        >
                          <span className={`h-6 w-6 rounded-full bg-white shadow transition ${isVisible ? "translate-x-5" : "translate-x-0"}`} />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-border/70 bg-white/80 p-4">
                <p className="text-sm font-medium text-foreground">Responsible sharing guidance</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The public card is designed to share useful information responsibly. Most families
                  should think carefully before showing full addresses, identity numbers, banking
                  details, or anything a helper does not need in the moment.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08}>
              <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(192,240,247,0.4))] p-5 shadow-[var(--shadow-float)] ring-1 ring-border/60">
                  <div className="rounded-[1.75rem] bg-white p-5 shadow-[var(--shadow-soft)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-teal">Live public card preview</p>
                        <h3 className="mt-1 text-xl font-medium">Amara Jacobs</h3>
                        <p className="text-xs text-muted-foreground">What a helper might see after scanning</p>
                      </div>
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                        Approved view
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      {visibility.name ? (
                        <PreviewItem icon={UserRound} label="Name" value="Amara Jacobs" />
                      ) : null}
                      {visibility.contact ? (
                        <PreviewItem icon={HeartHandshake} label="Emergency contact" value="Lebo Jacobs - 082 555 0101" />
                      ) : null}
                      {visibility.medical ? (
                        <PreviewItem icon={ShieldCheck} label="Medical notes" value="Asthma inhaler in school bag" />
                      ) : null}
                      {visibility.allergies ? (
                        <PreviewItem icon={AlertCircle} label="Allergies" value="Peanuts" />
                      ) : null}
                      {visibility.caregiver ? (
                        <PreviewItem icon={BadgeCheck} label="School or caregiver note" value="Aftercare pickup by Aunt Zinzi" />
                      ) : null}
                      {visibility.address ? (
                        <PreviewItem icon={MapPin} label="Address" value="12 Oak Lane, Centurion" />
                      ) : null}
                      {!visibility.address ? (
                        <HiddenItem label="Address" />
                      ) : null}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-teal/12 px-3 py-1 text-xs font-medium text-teal">Visible to helper</span>
                      <span className="rounded-full bg-foreground/8 px-3 py-1 text-xs font-medium text-muted-foreground">Private fields stay hidden</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[1.75rem] glass p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-teal">Status labels</p>
                    <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                      {visibilityFields.map((field) => {
                        const isVisible = visibility[field.key];
                        return (
                          <li key={field.key} className="flex items-center justify-between gap-3 rounded-[1rem] bg-background/70 px-3 py-2.5">
                            <span>{field.label}</span>
                            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${isVisible ? "bg-teal/12 text-teal" : "bg-foreground/8 text-muted-foreground"}`}>
                              {isVisible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                              {field.visibleLabel}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="rounded-[1.75rem] glass-strong p-4">
                    <BrowserFrame
                      src={privacyShot.url}
                      alt="NFC Family privacy and visibility settings with a public card preview inside the app"
                    />
                    <p className="mt-3 text-xs text-muted-foreground">
                      Example app screen showing that visibility controls can be adjusted before a
                      family publishes a public card.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="qr-nfc" className="section-surface-default relative scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">QR, NFC, and public card explainer</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Two ways to open the same family-approved public card.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A phone camera can scan the QR code. A compatible phone can tap the NFC tag. Both
                methods open the selected public safety card.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
            <Reveal>
              <button
                type="button"
                aria-pressed={scanMethod === "qr"}
                onClick={() => setScanMethod("qr")}
                className={`relative rounded-[2rem] p-6 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  scanMethod === "qr" ? "glass-strong shadow-[var(--shadow-float)]" : "glass hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <QrCode className="h-5 w-5" />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-medium ${scanMethod === "qr" ? "bg-teal/12 text-teal" : "bg-foreground/8 text-muted-foreground"}`}>
                    Camera scan
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium">QR code</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A helper scans the code with a normal phone camera and opens the same public safety
                  card you prepared for that family member.
                </p>
                <div className="relative mt-6 rounded-[1.5rem] bg-white p-4 shadow-[var(--shadow-soft)]">
                  <img src={sarah.qr} alt="Example QR code for a family profile" className="mx-auto h-40 w-40 object-contain" loading="lazy" />
                  {scanMethod === "qr" ? (
                    <div aria-hidden="true" className="animate-scan-line pointer-events-none absolute inset-x-4 top-5 h-1 rounded-full bg-teal/45" />
                  ) : null}
                </div>
              </button>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[2rem] border border-border/70 bg-white p-5 shadow-[var(--shadow-float)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-teal">Public safety card</p>
                    <h3 className="mt-1 text-lg font-medium">Same approved destination</h3>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                    Helper view
                  </span>
                </div>
                <div className="mt-5">
                  <PhoneFrame src={sarah.card} alt="Example public safety card shown to a helper after scanning or tapping" className="max-w-[260px]" />
                </div>
                <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                  {[
                    "Shows only family-approved visible information",
                    "Designed for quick reading on a phone",
                    "Does not expose the full private account",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <button
                type="button"
                aria-pressed={scanMethod === "nfc"}
                onClick={() => setScanMethod("nfc")}
                className={`relative rounded-[2rem] p-6 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  scanMethod === "nfc" ? "glass-strong shadow-[var(--shadow-float)]" : "glass hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Radio className="h-5 w-5" />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-medium ${scanMethod === "nfc" ? "bg-teal/12 text-teal" : "bg-foreground/8 text-muted-foreground"}`}>
                    Phone tap
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium">NFC tag</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A compatible phone taps the NFC tag and opens the same family-approved public card
                  without needing the helper to search for anything else.
                </p>
                <div className="relative mt-6 grid place-items-center rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-soft)]">
                  <div className="relative grid h-40 w-40 place-items-center rounded-full bg-accent/55">
                    {scanMethod === "nfc" ? (
                      <>
                        <span aria-hidden="true" className="absolute inset-3 rounded-full ring-2 ring-teal/30 animate-soft-pulse" />
                        <span aria-hidden="true" className="absolute inset-8 rounded-full ring-2 ring-teal/20 animate-soft-pulse" style={{ animationDelay: "0.8s" }} />
                      </>
                    ) : null}
                    <img src={nfcTagImage} alt="Example NFC Family NFC tag" className="h-24 w-24 object-contain" />
                  </div>
                </div>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="print-and-tags" className="section-surface-aqua relative scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Ways to prepare your family</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Practical options for QR codes, clothing stickers, NFC tags, and the public card.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Choose the preparation method that fits your household, school routine, travel setup,
                or care environment best.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {prepCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <div className="h-full rounded-[2rem] border border-border/70 bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary">
                      <card.icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-wrap justify-end gap-2">
                      {card.bestFor.map((chip) => (
                        <span key={chip} className="rounded-full bg-foreground/6 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                          Best for: {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-medium">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>

                  <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(192,240,247,0.18),rgba(255,255,255,0.96))] p-4">
                    {card.kind === "qr" ? <PrepQrVisual qrSrc={sarah.qr} /> : null}
                    {card.kind === "clothing" ? <PrepClothingVisual /> : null}
                    {card.kind === "nfc" ? <PrepNfcVisual /> : null}
                    {card.kind === "public-card" ? <PrepPublicCardVisual cardSrc={sarah.card} /> : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="public-card" className="section-surface-default relative scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Public card preview</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                What a helper might see after scanning.
              </h2>
              <p className="mt-4 text-muted-foreground">
                The public safety card is a focused helper view. It is meant to show useful details
                the family chose to make visible - not everything in the account.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-[1.5rem] glass p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-teal">Visible to helper</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                    {["Emergency contact", "Medical notes", "Allergies", "Helpful caregiver notes"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Eye className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] glass p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Usually kept private</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                    {["Identity numbers", "Banking information", "Private account settings"].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <EyeOff className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08}>
              <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[2rem] glass-strong p-5">
                  <PhoneFrame src={sarah.card} alt="Example NFC Family public safety card visible to a helper" />
                </div>
                <div className="rounded-[2rem] border border-border/70 bg-white p-5 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-teal">Helper view guidance</p>
                      <h3 className="mt-1 text-lg font-medium">Why this matters</h3>
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                      Family controlled
                    </span>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                    <p>
                      A helper should be able to understand the basics quickly: who this is, who to
                      contact, and what details may help in the moment.
                    </p>
                    <p>
                      The public card is not intended to replace a full medical file, legal document,
                      or emergency responder workflow.
                    </p>
                    <p>
                      Families can decide how much or how little to show for each family member and
                      can update those choices over time.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="scan-history" className="section-surface-blue relative scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">Scan history</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Helpful context for families, not live tracking.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Scan history can help a family understand that a profile was scanned and review
                general scan context. It is not a guaranteed emergency alert system and it is not
                live tracking.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap gap-2">
              {scanTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  aria-pressed={scanTab === tab.key}
                  onClick={() => setScanTab(tab.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    scanTab === tab.key ? "text-primary-foreground shadow-[var(--shadow-soft)]" : "glass text-foreground/75 hover:text-primary"
                  }`}
                  style={scanTab === tab.key ? { background: "var(--gradient-cta)" } : undefined}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="relative">
                <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70" style={{ background: "var(--gradient-ambient)" }} />
                <BrowserFrame src={activeScanTab.src} alt={activeScanTab.alt} />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-border/70 bg-white p-6 shadow-[var(--shadow-soft)]">
                <h3 className="text-lg font-medium">What scan history can help with</h3>
                <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                  {[
                    "Review that a profile was scanned",
                    "Understand basic channel and timing context",
                    "Check recent activity inside the family dashboard",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-lg font-medium">What it does not do</h3>
                <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                  {[
                    "It does not guarantee that a family will be alerted instantly",
                    "It is not a dispatch service",
                    "It should not be treated as live location tracking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="emergency-guidance" className="section-surface-warm relative scroll-mt-24 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-[2rem] border border-gold/30 bg-gold/5 p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Emergency guidance</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Honest boundaries for urgent situations.
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "NFC Family is a safety information tool.",
                  "It helps make selected information easier to access.",
                  "It does not call emergency services.",
                  "It does not guarantee that someone will respond.",
                  "It does not replace medical advice or professional care.",
                  "In urgent situations, local emergency services should be contacted first.",
                ].map((item) => (
                  <div key={item} className="rounded-[1.4rem] bg-white/80 p-4 text-sm text-foreground/85 shadow-[var(--shadow-soft)]">
                    <div className="flex items-start gap-3">
                      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="section-surface-lavender relative scroll-mt-24 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">FAQ hub</p>
              <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Search practical answers by topic.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Use the categories below to focus on privacy, QR and NFC, tags and printing,
                emergency use, or support questions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 rounded-[2rem] border border-border/70 bg-white p-5 shadow-[var(--shadow-soft)]">
              <label className="relative block">
                <span className="sr-only">Search safety questions</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={faqQuery}
                  onChange={(event) => setFaqQuery(event.target.value)}
                  placeholder="Search Safety Center questions"
                  className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-teal/20"
                />
              </label>

              <div className="mt-4 flex flex-wrap gap-2">
                {faqCategoryLabels.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    aria-pressed={faqCategory === category.key}
                    onClick={() => setFaqCategory(category.key)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      faqCategory === category.key ? "text-primary-foreground shadow-[var(--shadow-soft)]" : "glass text-foreground/75 hover:text-primary"
                    }`}
                    style={faqCategory === category.key ? { background: "var(--gradient-cta)" } : undefined}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {visibleFaqs.length} question{visibleFaqs.length === 1 ? "" : "s"} found
              </p>

              <div className="mt-6 rounded-[1.5rem] glass p-3 sm:p-5">
                {visibleFaqs.length === 0 ? (
                  <div className="rounded-[1.25rem] bg-background/80 px-4 py-8 text-center text-sm text-muted-foreground">
                    No questions matched that search. Try another keyword or reset the category filter.
                  </div>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    {visibleFaqs.map((faq, index) => (
                      <AccordionItem key={`${faq.q}-${index}`} value={`item-${index}`} className="border-b border-border/60 last:border-b-0">
                        <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                          <span className="pr-4">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-pretty text-sm leading-relaxed text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="support" className="relative scroll-mt-24 pb-24 pt-8">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2.5rem] px-8 py-10 text-primary-foreground shadow-[var(--shadow-float)] sm:px-10 sm:py-14"
              style={{ background: "var(--gradient-cta)" }}
            >
              <div aria-hidden="true" className="absolute inset-0 opacity-30 ambient-bg" />
              <div aria-hidden="true" className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-teal">Support</p>
                  <h2 className="mt-3 max-w-xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                    Still unsure? We will help you set it up safely.
                  </h2>
                  <p className="mt-4 max-w-xl text-pretty text-primary-foreground/85">
                    Contact support if you are unsure what to show, where to place a tag, how to use
                    clothing stickers, or how to start your first family profile responsibly.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-primary shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]"
                    >
                      Contact support
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/16"
                    >
                      Start your family profile <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3">
                  {[
                    "Talk through privacy choices before you publish a card",
                    "Get help deciding between QR codes, clothing stickers, and NFC tags",
                    "Check where to place tags for school, travel, or care environments",
                  ].map((item) => (
                    <div key={item} className="rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-4 text-sm text-white/90 backdrop-blur">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PreviewItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof UserRound;
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

function HiddenItem({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[1rem] border border-dashed border-border/70 bg-background/60 px-3 py-2.5">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-background text-muted-foreground">
        <EyeOff className="h-3.5 w-3.5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-muted-foreground">Hidden from helper</p>
      </div>
    </div>
  );
}

function PrepQrVisual({ qrSrc }: { qrSrc: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_148px] sm:items-center">
      <div className="rounded-[1.25rem] bg-white p-4 shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">Design and print at home</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Useful for school bags, folders, fridge sheets, travel documents, and printed emergency
          cards.
        </p>
      </div>
      <div className="rounded-[1.25rem] bg-white p-3 shadow-[var(--shadow-soft)]">
        <img src={qrSrc} alt="Example QR code prepared for printing at home" className="mx-auto h-28 w-28 object-contain" loading="lazy" />
      </div>
    </div>
  );
}

function PrepClothingVisual() {
  return (
    <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr] sm:items-center">
      <div className="rounded-[1.25rem] bg-white p-3 shadow-[var(--shadow-soft)]">
        <img src={clothingStickerImage} alt="Example NFC Family clothing sticker for practical family preparation" className="mx-auto h-32 object-contain" loading="lazy" />
      </div>
      <div className="rounded-[1.25rem] bg-white p-4 shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">Clothing-based preparation</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Useful for children, seniors, school clothing, outings, and care environments where the
          clothing item may be checked first.
        </p>
      </div>
    </div>
  );
}

function PrepNfcVisual() {
  return (
    <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr] sm:items-center">
      <div className="grid place-items-center rounded-[1.25rem] bg-white p-4 shadow-[var(--shadow-soft)]">
        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-accent/55">
          <span aria-hidden="true" className="absolute inset-3 rounded-full ring-2 ring-teal/30 animate-soft-pulse" />
          <img src={nfcTagImage} alt="Example NFC tag for family preparation" className="h-20 w-20 object-contain" />
        </div>
      </div>
      <div className="rounded-[1.25rem] bg-white p-4 shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">Tap with a compatible phone</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Useful for bags, keys, medical folders, senior care items, and everyday carry where a tap
          can be simpler than scanning.
        </p>
      </div>
    </div>
  );
}

function PrepPublicCardVisual({ cardSrc }: { cardSrc: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
      <div className="rounded-[1.25rem] bg-white p-4 shadow-[var(--shadow-soft)]">
        <PhoneFrame src={cardSrc} alt="Example public safety card shared with a helper" className="max-w-[180px]" />
      </div>
      <div className="rounded-[1.25rem] bg-white p-4 shadow-[var(--shadow-soft)]">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">Focused helper view</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Keep the information readable, calm, and practical so a helper can understand the basics
          quickly on a phone.
        </p>
      </div>
    </div>
  );
}
