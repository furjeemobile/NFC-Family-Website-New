import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck, Radio, QrCode } from "lucide-react";
import { HeroOverlay } from "@/components/brand/HeroOverlay";
import { PhoneFrame } from "@/components/brand/PhoneFrame";
import { demoProfiles } from "@/content/demoProfiles";

export function Hero() {
  const reduce = useReducedMotion();
  const sarah = demoProfiles.find((p) => p.id === "sarah")!;
  const jason = demoProfiles.find((p) => p.id === "jason")!;

  return (
    <section className="relative isolate overflow-hidden">
      <HeroOverlay />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-foreground/70"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-thread-pulse rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              A calm digital guardian for your family
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Ready for the moments that{" "}
              <span className="bg-gradient-to-r from-primary via-teal to-primary bg-clip-text text-transparent">
                matter most
              </span>
              .
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              NFC Family helps families share the right information in seconds through secure emergency profiles, QR codes, and NFC tags.
            </motion.p>

            <ul className="mt-6 grid max-w-xl gap-2 text-sm text-foreground/80 sm:grid-cols-2">
              {[
                "QR and NFC access for real-life situations",
                "Temporary public emergency cards",
                "You choose what people can see",
                "No app needed for the person scanning",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-float)] hover:brightness-110"
                style={{ background: "var(--gradient-cta)" }}
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#demo-scan"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground/85 hover:text-primary"
              >
                Try a Demo Scan
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" /> Privacy-first by design</span>
              <span className="inline-flex items-center gap-2"><QrCode className="h-4 w-4 text-primary" /> QR + NFC on Free and Premium</span>
              <span className="inline-flex items-center gap-2"><Radio className="h-4 w-4 text-gold" /> Built in South Africa</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroComposition sarahCard={sarah.card} jasonQr={jason.qr} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroComposition({ sarahCard, jasonQr }: { sarahCard: string; jasonQr: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-lg">
      <div className="absolute inset-0 -z-10 rounded-[3rem] opacity-80" style={{ background: "var(--gradient-ocean)" }} aria-hidden />
      <div className="absolute inset-0 -z-10 rounded-[3rem] opacity-60 ambient-bg" aria-hidden />

      <motion.div
        initial={reduce ? false : { opacity: 0, x: 30 }}
        animate={reduce ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-2 top-6 w-[68%] animate-float-y"
      >
        <PhoneFrame src={sarahCard} alt="Sarah Doe public emergency card preview" />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute -left-2 bottom-10 w-[44%] rounded-3xl bg-white p-3 shadow-[var(--shadow-float)]"
        style={{ animationDelay: "1s" }}
      >
        <p className="px-1 text-[10px] uppercase tracking-widest text-muted-foreground">
          Scan this demo
        </p>
        <img src={jasonQr} alt="Demo QR code" className="mt-1 aspect-square w-full object-contain" loading="lazy" />
        <p className="px-1 pb-1 text-[10px] text-primary">Jason Doe · demo profile</p>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="absolute left-4 top-8 rounded-full glass-strong px-3 py-1.5 text-[11px] font-medium text-primary"
      >
        Temporary public card
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute right-6 top-2 rounded-full glass-strong px-3 py-1.5 text-[11px] font-medium text-primary"
      >
        No app needed to scan
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 text-[11px] font-medium"
      >
        <span className="relative grid h-8 w-8 place-items-center rounded-full" style={{ background: "var(--gradient-cta)" }}>
          <Radio className="h-4 w-4 text-primary-foreground" />
          <span className="absolute inset-0 animate-thread-pulse rounded-full ring-2 ring-teal/40" />
        </span>
        <span className="text-foreground/80">NFC tag · tap to open</span>
      </motion.div>
    </div>
  );
}
