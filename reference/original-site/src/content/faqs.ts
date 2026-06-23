// Source of truth: NFC Family app - src/components/Help/FAQSection.tsx
// Plus website-tone additions for topics not yet covered in the app FAQ.
// Keep wording plain, parent-to-parent, and honest.

export type Faq = { q: string; a: string; c?: "getting-started" | "privacy-and-visibility" | "qr-and-nfc" | "tags-stickers-and-printing" | "emergency-use" | "account-and-support" };

export const allFaqs: Faq[] = [
  {
    q: "What is NFC Family?",
    a: "NFC Family helps families keep important safety information easier to access in practical moments. You choose what to add, what stays private, and what can appear on a public safety card after a QR scan or NFC tap.",
    c: "getting-started",
  },
  {
    q: "How do QR codes work?",
    a: "Each family member can have their own QR code. When someone scans it with a normal phone camera, it opens that family member's public safety card with only the fields you chose to make visible.",
    c: "qr-and-nfc",
  },
  {
    q: "How do NFC tags work, and does the helper need the app?",
    a: "An NFC tag is a small item that a compatible phone can tap. The tap opens the same public safety card linked to that family member. The helper does not need the NFC Family app just to view the card.",
    c: "qr-and-nfc",
  },
  {
    q: "Are NFC tags available on the Free plan?",
    a: "Yes. QR codes and NFC tags work on Free and Premium. Premium adds more advanced features such as expanded customization, scan analytics, custom fields, and reminders.",
    c: "qr-and-nfc",
  },
  {
    q: "Does the helper need internet access?",
    a: "Yes. The helper needs internet access to open the public safety card, the same way a phone needs internet access to open a website.",
    c: "qr-and-nfc",
  },
  {
    q: "What does someone see after a scan or tap?",
    a: "They only see the information your family chose to make visible on that public safety card. Private account information stays private unless you decide to show it.",
    c: "privacy-and-visibility",
  },
  {
    q: "What should usually stay private?",
    a: "Most families should think carefully before showing identity numbers, passport numbers, banking details, passwords, PINs, policy numbers, or full home addresses unless there is a strong practical reason to show them.",
    c: "privacy-and-visibility",
  },
  {
    q: "How long does the temporary public card link stay active?",
    a: "The helper link is short-lived and intended for short-term access after the scan or tap. Scanning the QR code or tapping the NFC tag again opens a fresh helper link.",
    c: "privacy-and-visibility",
  },
  {
    q: "Can someone save the temporary link?",
    a: "They may try to save it, but it is designed to expire. They would normally need to scan the QR code or tap the NFC tag again to reopen the public card.",
    c: "privacy-and-visibility",
  },
  {
    q: "Do QR codes expire?",
    a: "The QR code itself does not normally expire. The temporary helper link it opens is the part that expires after a short period.",
    c: "qr-and-nfc",
  },
  {
    q: "Do I need to reprint after updating information?",
    a: "No. If the QR code or NFC tag still points to the same family member, profile updates and visibility changes can flow through without reprinting everything from scratch.",
    c: "tags-stickers-and-printing",
  },
  {
    q: "Can I test the QR code myself?",
    a: "Yes. Testing is a good idea. Scan it with your own phone before relying on it so you can check exactly what a helper would see.",
    c: "tags-stickers-and-printing",
  },
  {
    q: "Can one QR code be used for more than one person?",
    a: "It is better for each family member to have their own QR code or linked tag so the right information appears for the right person.",
    c: "getting-started",
  },
  {
    q: "What happens if I delete a family member?",
    a: "That profile should no longer be available through the normal public card flow. It is still sensible to remove or destroy printed QR codes or tags that are no longer needed.",
    c: "account-and-support",
  },
  {
    q: "What is the difference between Free and Premium?",
    a: "Free covers basic family setup. Premium adds broader customization, analytics, reminders, and other advanced account features. The exact plan details should always be confirmed on the pricing page.",
    c: "account-and-support",
  },
  {
    q: "What about calendar reminders?",
    a: "Premium includes reminder and calendar features so families can keep important dates and prompts easier to manage inside the app.",
    c: "account-and-support",
  },
  {
    q: "What scan data may be collected?",
    a: "Basic scan context such as date, time, and general device or browser context may be recorded to help families understand activity and to help prevent abuse. It should not be treated as a guaranteed alert or live tracking system.",
    c: "privacy-and-visibility",
  },
  {
    q: "Is NFC Family aligned with South African privacy expectations?",
    a: "NFC Family is built in South Africa and is designed to give families practical control over what information they share. Formal legal detail should still be read in the Privacy Policy and Terms when those documents are provided.",
    c: "privacy-and-visibility",
  },
  {
    q: "Is NFC Family an emergency service?",
    a: "No. NFC Family is not an emergency response service. It helps make selected family-approved information easier to access. In a real emergency, contact the appropriate local emergency services first.",
    c: "emergency-use",
  },
  {
    q: "Where can I get help?",
    a: "You can use the Contact page on this site for help with setup, privacy questions, QR placement, clothing stickers, NFC tags, or general support.",
    c: "account-and-support",
  },
];
