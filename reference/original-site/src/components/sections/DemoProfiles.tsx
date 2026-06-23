import { useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/brand/Reveal";
import { FlipCard } from "@/components/brand/FlipCard";
import { PhoneFrame } from "@/components/brand/PhoneFrame";
import { demoProfiles } from "@/content/demoProfiles";
import { Eye } from "lucide-react";

export function DemoProfiles() {
  const [active, setActive] = useState(demoProfiles[0].id);
  const current = demoProfiles.find((p) => p.id === active)!;

  return (
    <section id="demo-scan" className="section-surface-default relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <motion.p
            className="text-xs uppercase tracking-[0.18em] text-teal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Try it yourself
          </motion.p>
          <motion.h2
            className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Scan a demo profile and see what someone would see.
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-pretty text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            These are demo profiles only — no real personal information. Tap a card to reveal the QR, or scan it with your phone to open an example public emergency card.
          </motion.p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {demoProfiles.map((p, index) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FlipCard key={p.id} profile={p} selected={p.id === active} onSelect={() => setActive(p.id)} />
                </motion.div>
              ))}
            </div>
            <motion.p
              className="mt-4 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Tap a card to flip · Scan with your phone camera · Demo profile only
            </motion.p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <motion.div
              className="rounded-[2rem] glass-strong p-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <motion.p
                    className="text-[10px] uppercase tracking-widest text-teal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    What the scanner sees
                  </motion.p>
                  <motion.p
                    className="mt-1 text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  >
                    {current.name} · {current.type}
                  </motion.p>
                </div>
                <motion.span
                  className="rounded-full bg-teal/15 px-2.5 py-1 text-[10px] font-medium text-teal"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  Temporary link
                </motion.span>
              </div>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <PhoneFrame src={current.card} alt={`${current.name} public emergency card`} />
              </motion.div>

              <motion.div
                className="mt-5 rounded-2xl bg-background/70 p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.p
                  className="text-[10px] uppercase tracking-widest text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  Visible information
                </motion.p>
                <motion.ul
                  className="mt-2 space-y-1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                >
                  {current.visible.map((v, index) => (
                    <motion.li
                      key={v}
                      className="flex items-start gap-2 text-sm text-foreground/85"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                    >
                      <Eye className="mt-1 h-3.5 w-3.5 shrink-0 text-teal" />
                      <span>{v}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.p
                  className="mt-3 text-[11px] text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                >
                  The scanner only sees the public card. The profile owner controls which fields are visible.
                </motion.p>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
