"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { PageConfig } from "@/lib/site-data";

export function ContentPage({ page }: { page: PageConfig }) {
  return (
    <>
      <section className={`page-hero theme ${page.themeClass}`}>
        <div className="site-container page-hero__inner">
          <Reveal className="page-hero__copy-block">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1 className="display-title display-title--secondary">{page.title}</h1>
            <p className="lead">{page.copy}</p>
            <div className="button-row">
              <Link href="/contact" className="button button--solid">
                Get started
              </Link>
              <Link href="/plans" className="button button--ghost">
                View plans
              </Link>
            </div>
          </Reveal>

          <motion.div
            className="page-hero__visual"
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="floating-ticket floating-ticket--hero">{page.heroBadge}</div>
            <div className="device-card">
              <div className="device-card__top">
                <span className="device-card__pill">Public card</span>
                <span className="device-card__pill device-card__pill--muted">{page.heroName}</span>
              </div>
              <img src={page.heroCard} alt={`${page.heroName} public card`} className="device-card__image" />
            </div>
            <div className="mini-card mini-card--left">
              <img src={page.heroQr} alt={`${page.heroName} QR code`} />
            </div>
            <div className="mini-card mini-card--right mini-card--tag">
              <img src={page.heroTag} alt="NFC tag" />
            </div>
          </motion.div>
        </div>
      </section>

      {page.sections.map((section, sectionIndex) => (
        <section key={section.title} className={`content-band theme ${section.themeClass}`}>
          <div className="site-container">
            <Reveal className="section-heading">
              <span className="eyebrow eyebrow--dark">{section.eyebrow}</span>
              <h2 className="section-title">{section.title}</h2>
              <p className="section-copy">{section.copy}</p>
            </Reveal>

            <div className="content-grid">
              {section.cards.map((card, cardIndex) => (
                <Reveal key={card.title} delay={cardIndex * 0.08}>
                  <article className={`story-card story-card--${(cardIndex + sectionIndex) % 3}`}>
                    <div className="story-card__shell">
                      {card.icon ? (
                        <div className="story-card__icon" aria-hidden="true">
                          <CardIcon icon={card.icon} />
                        </div>
                      ) : null}
                      <div className="story-card__content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        {card.points ? (
                          <ul className="story-list">
                            {card.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {page.faqs ? (
        <section className="content-band theme theme--paper">
          <div className="site-container">
            <Reveal className="section-heading">
              <span className="eyebrow eyebrow--dark">Frequently asked questions</span>
              <h2 className="section-title">Common questions about the setup flow.</h2>
              <p className="section-copy">
                These answers focus on what families usually want to confirm before they rely on QR codes and NFC tags in real situations.
              </p>
            </Reveal>

            <div className="accordion-list">
              {page.faqs.map((faq, index) => (
                <Reveal key={faq.q} delay={index * 0.06}>
                  <details className="accordion-item">
                    <summary className="accordion-trigger">
                      <span>{faq.q}</span>
                      <span className="accordion-plus" aria-hidden="true" />
                    </summary>
                    <div className="accordion-panel">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

function CardIcon({ icon }: { icon: "profile" | "visibility" | "qr" | "nfc" }) {
  switch (icon) {
    case "profile":
      return (
        <svg viewBox="0 0 24 24" className="story-card__icon-svg">
          <path d="M12 12.25a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4.75 19.25c1.8-3.06 4.3-4.59 7.25-4.59s5.45 1.53 7.25 4.59" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "visibility":
      return (
        <svg viewBox="0 0 24 24" className="story-card__icon-svg">
          <path d="M2.75 12s3.2-5.5 9.25-5.5 9.25 5.5 9.25 5.5-3.2 5.5-9.25 5.5S2.75 12 2.75 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "qr":
      return (
        <svg viewBox="0 0 24 24" className="story-card__icon-svg">
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15 14h2v2h-2zM18 14h2v5h-2zM14 18h2v2h-2zM16 16h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "nfc":
      return (
        <svg viewBox="0 0 24 24" className="story-card__icon-svg">
          <path d="M8 7.5c2.5 1.2 4 3.53 4 6.5M12 5c3.9 1.7 6.25 5.17 6.25 9M5.25 10.25c1.22.68 2 1.88 2 3.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          <path d="M6 18.5V6.75L12 10v7.75L18 21V9.25L12 6" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
  }
}
