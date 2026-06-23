import { createFileRoute, Link } from "@tanstack/react-router";
import { type LucideIcon, ArrowRight, Baby, BadgeCheck, Eye, Heart, HeartHandshake, Linkedin, Lock, MapPin, Rocket, ShieldCheck, Smartphone, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/brand/Reveal";
import { PageHeroBackground } from "@/components/brand/PageHeroBackground";
import { PhoneFrame } from "@/components/brand/PhoneFrame";
import { demoProfiles } from "@/content/demoProfiles";
import heroVisual from "@/assets/brand/Heronew.png";
import everyoneImage from "@/assets/Images/everyone.png";
import famImage from "@/assets/Images/fam.png";
import kidsAndTeensImage from "@/assets/Images/kidsnteens.png";
import nfcTagImage from "@/assets/Images/round nfc tag.png";
import parentsAndCaregiversImage from "@/assets/Images/parents-caregivers.png";
import saFlagImage from "@/assets/Images/sa.png";
import seniorsImage from "@/assets/Images/seniors.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - NFC Family" },
      {
        name: "description",
        content:
          "NFC Family was built from real family moments to make important information easier to access when life does not go according to plan.",
      },
      { property: "og:title", content: "About NFC Family" },
      { property: "og:description", content: "Our story, mission, and values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

type IconCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type JourneyStep = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type Founder = {
  name: string;
  role: string;
  body: string;
  initials: string;
};

type AudienceCard = {
  title: string;
  body: string;
  icon: LucideIcon;
  image?: string;
};

const storyPoints: { label: string; icon: LucideIcon }[] = [
  { label: "Real moments", icon: HeartHandshake },
  { label: "Real families", icon: Users },
  { label: "Real peace of mind", icon: ShieldCheck },
];

const missionCards: IconCard[] = [
  {
    title: "Our mission",
    body: "To help every family feel safer and more connected by making vital information instantly accessible in any emergency.",
    icon: Heart,
  },
  {
    title: "Our vision",
    body: "A world where every family is empowered with the tools to protect, connect and care for each other always.",
    icon: Eye,
  },
];

const journey: JourneyStep[] = [
  {
    title: "The spark",
    body: "A real life moment made us realise there had to be a better way.",
    icon: BadgeCheck,
  },
  {
    title: "The idea",
    body: "We started sketching solutions focused on speed, simplicity and privacy.",
    icon: Zap,
  },
  {
    title: "Built with families",
    body: "We tested with real families, refined every detail and kept it simple.",
    icon: HeartHandshake,
  },
  {
    title: "NFC Family is born",
    body: "The NFC Emergency Card went live, turning taps into peace of mind.",
    icon: Smartphone,
  },
  {
    title: "Growing for you",
    body: "We are constantly improving and adding features families love.",
    icon: Rocket,
  },
];

const values: IconCard[] = [
  {
    title: "Privacy-first",
    body: "Your family's data belongs to you. We never compromise on privacy.",
    icon: Lock,
  },
  {
    title: "Built for families",
    body: "Every feature is designed around the real needs of real families.",
    icon: Users,
  },
  {
    title: "Simple in emergencies",
    body: "When it matters most, our tools are fast, clear and easy to use.",
    icon: Zap,
  },
  {
    title: "Proudly South African",
    body: "Designed and built in SA for South African families, by a team that cares.",
    icon: MapPin,
  },
];

const founders: Founder[] = [
  {
    name: "Jared Lundgren",
    role: "Co-founder & CEO",
    body: "A dad of two who believes technology should make family life safer and easier. Jared leads product and strategy with a passion for meaningful innovation.",
    initials: "JL",
  },
  {
    name: "Megan Lundgren",
    role: "Co-founder & COO",
    body: "A mom who knows the mental load is real. Megan leads operations and community with heart, detail and a family-first mindset.",
    initials: "ML",
  },
];

const audienceCards: AudienceCard[] = [
  {
    title: "Parents and caregivers",
    body: "Protect what matters most with instant access to critical information.",
    icon: Users,
    image: parentsAndCaregiversImage,
  },
  {
    title: "Children and teens",
    body: "Give them independence with a safety net you can count on.",
    icon: Baby,
    image: kidsAndTeensImage,
  },
  {
    title: "Seniors",
    body: "Help loved ones stay safe and get help quickly if needed.",
    icon: Heart,
    image: seniorsImage,
  },
  {
    title: "Everyone",
    body: "NFC Family is for every person, every household and every moment where safety, connection and peace of mind matter.",
    icon: Users,
    image: everyoneImage,
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <PageHeroBackground />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-primary shadow-[var(--shadow-soft)] ring-1 ring-border/60">
                <BadgeCheck className="h-3.5 w-3.5 text-teal" />
                About us
              </div>
              <h1 className="mt-5 max-w-xl text-balance text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
                Built from real moments{" "}
                <span className="text-teal">for real families.</span>
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
                NFC Family was created to bring peace of mind to families everywhere by making safety simple, connected and always within reach.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  Get started - it's free
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-primary"
                >
                  See how it works <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08}>
              <div className="relative mx-auto max-w-2xl">
                <div className="absolute -left-8 top-8 hidden h-36 w-36 rounded-full bg-ocean-light blur-3xl md:block" aria-hidden />
                <div className="absolute right-12 top-4 z-20 rounded-2xl bg-white/90 px-4 py-3 shadow-[var(--shadow-float)] ring-1 ring-border/60 backdrop-blur md:right-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">Always there</p>
                      <p className="text-xs text-muted-foreground">when it matters</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[3rem] bg-white p-3 shadow-[var(--shadow-float)] ring-1 ring-border/50">
                  <div className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(192,240,247,0.55),rgba(255,255,255,0.95),rgba(177,212,224,0.45))]">
                    <img
                      src={heroVisual}
                      alt="A family walking together in a calm coastal setting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-8 right-0 flex items-end gap-4 sm:-bottom-10 sm:right-6">
                  <div className="hidden h-24 w-24 rounded-full bg-[linear-gradient(180deg,#16a6ba,#1f628e)] p-1 shadow-[var(--shadow-float)] sm:block">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white/12 text-primary-foreground ring-1 ring-white/25">
                      <Smartphone className="h-6 w-6" />
                      <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em]">NFC</span>
                    </div>
                  </div>
                  <PhoneFrame
                    src={demoProfiles[1].card}
                    alt="NFC Family public emergency card preview"
                    className="max-w-[220px] sm:max-w-[260px]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-surface-lavender relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[2.75rem] bg-white p-3 shadow-[var(--shadow-float)] ring-1 ring-border/60">
                <div className="relative h-[420px] w-full overflow-hidden rounded-[2.25rem] bg-[linear-gradient(180deg,rgba(192,240,247,0.18),rgba(255,255,255,0.92))]">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <img
                      src={famImage}
                      alt="Family using NFC Family for everyday safety"
                      className="h-[92%] w-full object-contain object-bottom"
                    />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 grid h-20 w-20 place-items-center rounded-full bg-white p-1 shadow-[var(--shadow-float)] ring-1 ring-border/50">
                  <img
                    src={nfcTagImage}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-10 left-6 max-w-[220px] rounded-3xl bg-white/95 p-4 shadow-[var(--shadow-float)] ring-1 ring-border/50 backdrop-blur">
                  <p className="text-sm leading-6 text-foreground/85">
                    "I want my family to be safe wherever life takes us."
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.06}>
              <div className="rounded-[2rem] glass-strong p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-teal">OUR STORY</p>
                <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                  Why we built NFC Family
                </h2>
                <div className="mt-5 space-y-4 text-pretty leading-8 text-muted-foreground">
                  <p>
                    NFC Family was built around one simple belief: when someone you love needs help, the right information should be available immediately.
                  </p>
                  <p>
                    In real life, emergencies do not wait. A child can get separated from a parent. A loved one may not be able to explain a medical condition. A missed call, a locked phone, or a forgotten document can cost precious time.
                  </p>
                  <p>
                    We created NFC Family to close that gap. With one tap, trusted information can reach the people who need it, helping families act faster, feel safer, and stay connected when it matters most.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {storyPoints.map((point) => (
                    <div
                      key={point.label}
                      className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-4 py-2 text-sm text-primary ring-1 ring-border/40"
                    >
                      <point.icon className="h-4 w-4 text-teal" />
                      {point.label}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-surface-default relative py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-2">
            {missionCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <div className="flex h-full items-start gap-5 rounded-[2rem] bg-white p-7 shadow-[var(--shadow-soft)] ring-1 ring-border/60">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-accent text-primary">
                    <card.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight">{card.title}</h2>
                    <p className="mt-3 max-w-md text-pretty leading-7 text-muted-foreground">{card.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-blue relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">Our journey</h2>
              <p className="mt-3 text-pretty text-muted-foreground">
                From a single moment to a solution for families everywhere.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-10">
            <div
              className="absolute left-12 right-12 top-11 hidden h-px bg-[linear-gradient(90deg,rgba(31,98,142,0.16),rgba(0,168,168,0.45),rgba(31,98,142,0.16))] lg:block"
              aria-hidden
            />
            <div className="grid gap-5 lg:grid-cols-5">
              {journey.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.04}>
                  <div className="relative h-full rounded-[2rem] bg-white p-6 text-center shadow-[var(--shadow-soft)] ring-1 ring-border/60">
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-primary">
                      <step.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface-default relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">Our values</h2>
              <p className="mt-3 text-pretty text-muted-foreground">
                The principles that guide every decision we make.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.04}>
                <div className="h-full rounded-[2rem] bg-white p-6 shadow-[var(--shadow-soft)] ring-1 ring-border/60">
                  <div className="flex items-start gap-4">
                    <span
                      className={`shrink-0 ${value.title === "Proudly South African" ? "flex h-14 w-14 items-center justify-center" : "grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary"}`}
                    >
                      {value.title === "Proudly South African" ? (
                        <img
                          src={saFlagImage}
                          alt="South African flag"
                          className="h-10 w-10 object-contain"
                        />
                      ) : (
                        <value.icon className="h-6 w-6" />
                      )}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium">{value.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{value.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-aqua relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">Meet the founders</h2>
              <p className="mt-3 text-pretty text-muted-foreground">Parents. Problem solvers. Protectors.</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {founders.map((founder, index) => (
              <Reveal key={founder.name} delay={index * 0.05}>
                <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-soft)] ring-1 ring-border/60 md:grid-cols-[200px_1fr]">
                  <div className="relative min-h-[220px] bg-[linear-gradient(160deg,rgba(177,212,224,0.7),rgba(192,240,247,0.35),rgba(31,98,142,0.14))]">
                    <div className="absolute inset-0 ambient-bg opacity-50" aria-hidden />
                    <div className="absolute inset-5 flex items-end rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(31,98,142,0.14))] p-6 shadow-[var(--shadow-soft)]">
                      <div>
                        <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-2xl font-medium text-primary shadow-[var(--shadow-soft)]">
                          {founder.initials}
                        </div>
                        <p className="mt-4 text-sm font-medium text-primary">NFC Family</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight">{founder.name}</h3>
                      <p className="mt-1 text-sm font-medium text-teal">{founder.role}</p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{founder.body}</p>
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        aria-label={`${founder.name} LinkedIn link placeholder`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary ring-1 ring-border/50 transition hover:bg-ocean-light"
                      >
                        <Linkedin className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-default relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">NFC Family is for...</h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audienceCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-soft)] ring-1 ring-border/60">
                  <div className="relative h-44 overflow-hidden bg-[linear-gradient(135deg,rgba(192,240,247,0.85),rgba(177,212,224,0.55),rgba(255,255,255,0.95))]">
                    {card.image ? (
                      <div className="absolute inset-0 flex items-start justify-center">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-[118%] w-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-primary shadow-[var(--shadow-soft)]">
                          <PawPrint className="h-10 w-10" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                        <card.icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-medium">{card.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#123a5a_0%,#1f628e_45%,#0f8f99_100%)] px-8 py-10 text-primary-foreground shadow-[var(--shadow-float)]">
              <div className="absolute inset-0 opacity-25 ambient-bg" aria-hidden />
              <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative z-10">
                  <h2 className="max-w-xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                    Built with love. Backed by purpose. Here for your family, always.
                  </h2>
                  <p className="mt-4 max-w-lg text-pretty text-primary-foreground/80">
                    Join thousands of families already protected with NFC Family.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-primary shadow-[var(--shadow-soft)]"
                    >
                      Get started - it's free
                    </Link>
                    <Link
                      to="/how-it-works"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-primary-foreground"
                    >
                      See how it works <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="mx-auto flex max-w-md justify-end">
                    <div className="hidden items-end gap-3 sm:flex">
                      <div className="grid h-20 w-20 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20">
                        <Smartphone className="h-8 w-8" />
                      </div>
                      <PhoneFrame
                        src={demoProfiles[0].card}
                        alt="NFC Family emergency card on mobile"
                        className="max-w-[170px]"
                      />
                    </div>
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
