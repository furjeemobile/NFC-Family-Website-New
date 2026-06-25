"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { demoProfiles, faqs, homeSections, plans, trustPillars, useCases } from "@/lib/site-data";

export function HomePage() {
  return (
    <>
      <section className="hero theme theme--ink">
        <div className="site-container hero__inner">
          <div className="hero__copy">
            <Reveal>
              <span className="eyebrow">A calm digital guardian for your family</span>
              <h1 className="display-title">
                Protect what matters. <span>In a few simple steps.</span>
              </h1>
              <p className="lead">
                Create a profile, choose what stays visible, and connect it to a QR code or NFC tag so the right person can
                help in seconds. No app is needed for the person scanning.
              </p>
              <div className="button-row">
                <Link href="/contact" className="button button--solid">
                  Get started
                </Link>
                <Link href="/how-it-works" className="button button--ghost">
                  Explore the flow
                </Link>
              </div>
              <ul className="hero-bullets">
                <li>Temporary public cards with family-controlled visibility</li>
                <li>QR and NFC access for school, travel, outings, and care</li>
                <li>Profiles for children, adults, seniors, and special care needs</li>
                <li>Built to feel calm, clean, and trustworthy under pressure</li>
              </ul>
            </Reveal>
          </div>

          <motion.div
            className="hero-scene"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-glow hero-glow--one" />
            <div className="hero-glow hero-glow--two" />

            <motion.div
              className="floating-ticket floating-ticket--top"
              animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              Public card opens in seconds
            </motion.div>

            <motion.div
              className="floating-ticket floating-ticket--right"
              animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
              transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              No app needed to scan
            </motion.div>

            <div className="dashboard-shell">
              <img src={homeSections.hero.dashboard} alt="NFC Family dashboard preview" />
            </div>

            <motion.div
              className="phone-shell"
              animate={{ y: [0, -12, 0], rotate: [7, 5, 7] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="phone-shell__notch" />
              <div className="phone-shell__screen">
                <img src={homeSections.hero.card} alt="NFC Family public card in phone" />
              </div>
            </motion.div>

            <motion.div
              className="scan-card scan-card--qr"
              animate={{ y: [0, -10, 0], rotate: [-6, -2, -6] }}
              transition={{ duration: 6.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <img src={homeSections.hero.qr} alt="Demo QR code" />
              <span>Jason Doe demo scan</span>
            </motion.div>

            <motion.div
              className="scan-card scan-card--tag"
              animate={{ y: [0, 12, 0], x: [0, -4, 0] }}
              transition={{ duration: 6.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <img src={homeSections.hero.tag} alt="NFC tag" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="trust-strip theme theme--paper">
        <div className="site-container trust-strip__inner">
          {trustPillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="trust-pill">
              <strong>{item.title}</strong>
              <span>{item.copy}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-band theme theme--mist">
        <div className="site-container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow--dark">How it works</span>
            <h2 className="section-title">A clearer journey from profile setup to a real-world scan.</h2>
            <p className="section-copy">
              The interaction design is simple on purpose. Families set things up once, then the experience stays easy for
              carers, teachers, relatives, or good samaritans when they need it.
            </p>
          </Reveal>

          <div className="steps-grid">
            {homeSections.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="step-card">
                  <div className="step-card__count">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band theme theme--aqua">
        <div className="site-container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow--dark">Demo profiles</span>
            <h2 className="section-title">Flip through the people behind the demo scans.</h2>
            <p className="section-copy">
              Each profile shows the kind of practical information a helper would see on the public card. The QR side keeps
              the interaction familiar; the reverse side explains the value clearly.
            </p>
          </Reveal>

          <div className="profile-grid">
            {demoProfiles.map((profile, index) => (
              <Reveal key={profile.id} delay={index * 0.08}>
                <article className="flip-card">
                  <div className="flip-card__inner">
                    <div className="flip-card__face flip-card__face--front">
                      <div className="flip-card__label">Scan preview</div>
                      <img src={profile.qr} alt={`${profile.name} QR code`} className="flip-card__qr" />
                      <h3>{profile.name}</h3>
                      <p>
                        {profile.type} - {profile.age}
                      </p>
                    </div>
                    <div className="flip-card__face flip-card__face--back">
                      <div className="flip-card__label">Public card contains</div>
                      <h3>{profile.name}</h3>
                      <p>{profile.scenario}</p>
                      <ul className="story-list story-list--compact">
                        {profile.visible.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band theme theme--sand">
        <div className="site-container story-layout">
          <Reveal className="story-layout__copy">
            <span className="eyebrow eyebrow--dark">What a public card shows</span>
            <h2 className="section-title">Enough to be useful. Never more than it needs to be.</h2>
            <p className="section-copy">
              The strongest trust signal is control. A public card can include things like an emergency contact, allergies,
              blood type, conditions, medications, doctor details, medical aid context, and a short note about what a helper
              should do next.
            </p>
            <div className="story-clusters">
              {homeSections.visibility.map((group) => (
                <div key={group.title} className="cluster-card">
                  <h3>{group.title}</h3>
                  <p>{group.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <motion.div
            className="story-layout__visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <div className="device-stack">
              <img src={homeSections.visibilityAssets.card} alt="Profile card preview" className="device-stack__card" />
              <img
                src={homeSections.visibilityAssets.profile}
                alt="Profile screen preview"
                className="device-stack__panel"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="content-band theme theme--lavender">
        <div className="site-container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow--dark">Use cases</span>
            <h2 className="section-title">One system, many family moments.</h2>
            <p className="section-copy">
              Different situations need different items, but they all benefit from fast access to the same trusted
              family-approved details.
            </p>
          </Reveal>

          <div className="use-case-grid">
            {useCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="use-case-card">
                  <div className="use-case-card__media">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="use-case-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band theme theme--ink-soft">
        <div className="site-container showcase-grid">
          <Reveal className="showcase-panel">
            <span className="eyebrow">Family dashboard</span>
            <h2 className="section-title section-title--light">Manage your family setup from one calm control center.</h2>
            <p className="section-copy section-copy--light">
              The dashboard side of the product supports profile management, visibility choices, and broader family
              coordination.
            </p>
            <img src={homeSections.showcase.dashboard} alt="Family dashboard" className="showcase-panel__image" />
          </Reveal>

          <Reveal className="showcase-panel showcase-panel--alt" delay={0.12}>
            <span className="eyebrow">Privacy tools</span>
            <h2 className="section-title section-title--light">
              Live card previews make visibility decisions easier to trust.
            </h2>
            <p className="section-copy section-copy--light">
              Families can understand what a scan would reveal before they rely on the tag, card, or QR code in the real
              world.
            </p>
            <img
              src={homeSections.showcase.privacy}
              alt="Privacy controls and card preview"
              className="showcase-panel__image"
            />
          </Reveal>
        </div>
      </section>

      <section className="content-band theme theme--paper">
        <div className="site-container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow--dark">Plans</span>
            <h2 className="section-title">Keep the starting point simple, with room to grow.</h2>
            <p className="section-copy">
              The structure below keeps the product easy to understand while still making the Premium value clear.
            </p>
          </Reveal>

          <div className="plans-grid">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <article className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`}>
                  <div className="plan-card__eyebrow">{plan.featured ? "Most flexible" : "Plan option"}</div>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="plan-card__price">{plan.price}</div>
                  <ul className="story-list">
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-band theme theme--mist">
        <div className="site-container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow--dark">Questions families ask</span>
            <h2 className="section-title">Simple answers that build confidence.</h2>
            <p className="section-copy">
              These answers come directly from the extracted product and support content, rewritten for a clearer marketing
              flow.
            </p>
          </Reveal>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 0.05}>
                <article className="faq-card">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band theme theme--ink">
        <div className="site-container cta-band__inner">
          <Reveal>
            <span className="eyebrow">Built for families</span>
            <h2 className="section-title section-title--light">
              Make important information easier to reach when it matters most.
            </h2>
            <p className="section-copy section-copy--light">
              Use NFC Family for children, seniors, travel, special needs, everyday essentials, and any moment where clear
              family-approved information can help.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button button--solid">
                Start the conversation
              </Link>
              <Link href="/use-cases" className="button button--ghost">
                Browse use cases
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
