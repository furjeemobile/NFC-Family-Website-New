export type DemoProfile = {
  id: "jason" | "sarah" | "john" | "seth";
  name: string;
  type: string;
  age: string;
  scenario: string;
  visible: string[];
  qr: string;
  card: string;
};

type UseCase = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type TrustPillar = {
  title: string;
  copy: string;
};

type StoryCard = {
  title: string;
  description: string;
  points?: string[];
  icon?: "profile" | "visibility" | "qr" | "nfc";
};

type PageSection = {
  eyebrow: string;
  title: string;
  copy: string;
  themeClass: string;
  cards: StoryCard[];
};

type FaqItem = {
  q: string;
  a: string;
};

export type PageConfig = {
  eyebrow: string;
  title: string;
  copy: string;
  heroBadge: string;
  heroName: string;
  heroCard: string;
  heroQr: string;
  heroTag: string;
  themeClass: string;
  sections: PageSection[];
  faqs?: FaqItem[];
};

function asset(name: string) {
  return `/source-assets/assets/Images/${encodeURIComponent(name)}`;
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Plans", href: "/plans" },
  { label: "Safety Center", href: "/safety-center" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const demoProfiles: DemoProfile[] = [
  {
    id: "jason",
    name: "Jason Doe",
    type: "Toddler",
    age: "5 years old",
    scenario:
      "A young child at school, childcare, or a busy public place where a helper may need fast access to allergies, medical aid, and family contact details.",
    visible: ["Blood type B+", "Allergies: Dairy, Starch", "Medical aid: Discovery", "Emergency contact visible"],
    qr: asset("jason-doe-qr-only.png"),
    card: asset("jason Public card.png"),
  },
  {
    id: "sarah",
    name: "Sarah Doe",
    type: "Adult",
    age: "55 years old",
    scenario:
      "An adult profile with selected emergency and medical details so a partner or relative can be reached quickly and responsibly.",
    visible: ["Emergency contact: John (Husband)", "Blood type B+", "Doctor details visible", "Medical aid: Discovery"],
    qr: asset("sarah-doe-qr-only.png"),
    card: asset("sarah public card.png"),
  },
  {
    id: "john",
    name: "John Doe",
    type: "Medical profile",
    age: "62 years old",
    scenario:
      "A richer medical profile for first responders, with conditions, medications, allergies, and more than one emergency contact.",
    visible: ["Allergies: Peanuts, Fish, Cat hair", "Conditions: Asthma, Diabetes", "Medications visible", "Two emergency contacts"],
    qr: asset("john-doe-qr-only.png"),
    card: asset("john public card.png"),
  },
  {
    id: "seth",
    name: "Seth Doe",
    type: "Senior",
    age: "71 years old",
    scenario:
      "For a senior who may become confused or disoriented, where a quick scan helps someone reach family and understand the situation faster.",
    visible: ["Emergency contact: Jason (Son)", "Condition: Dementia", "Notes for helpers", "Registered organ donor"],
    qr: asset("seth-doe-qr-only.png"),
    card: asset("Seth Public Card.png"),
  },
];

export const useCases: UseCase[] = [
  {
    title: "School and childcare",
    description: "Bag tags, printed cards, and approved details for teachers, carers, and staff who may need quick context.",
    image: asset("School and Childcare.png"),
    alt: "School and childcare use case",
  },
  {
    title: "Sports and activities",
    description: "Useful for practices, tournaments, and moments when children are moving between adults or venues.",
    image: asset("Sports and Activities.png"),
    alt: "Sports and activities use case",
  },
  {
    title: "Travel and holidays",
    description: "Helpful on luggage, carry bags, travel cards, and shared family travel situations.",
    image: asset("Travel and Holiday.png"),
    alt: "Travel and holiday use case",
  },
  {
    title: "Special needs",
    description: "Share only the information that can genuinely help someone respond with care and respect.",
    image: asset("special needs.png"),
    alt: "Special needs use case",
  },
  {
    title: "Elderly care",
    description: "Support carers, neighbours, or bystanders with a simple path to important contacts and context.",
    image: asset("Elderly Care.png"),
    alt: "Elderly care use case",
  },
  {
    title: "Dementia or disorientation",
    description: "A practical fit for seniors who may forget where they are or how to get home.",
    image: asset("Dementia and disorientation.png"),
    alt: "Dementia or disorientation use case",
  },
  {
    title: "Child separation",
    description: "If a child is separated in a busy place, a helper can reach the right adult much faster.",
    image: asset("Child Seperation.png"),
    alt: "Child separation use case",
  },
  {
    title: "Everyday essentials",
    description: "Use NFC Family on bags, keys, wallets, stickers, and the items that move through daily life.",
    image: asset("Everyday essentials.png"),
    alt: "Everyday essentials use case",
  },
];

export const trustPillars: TrustPillar[] = [
  {
    title: "Family-controlled visibility",
    copy: "Only the information you decide to show becomes part of the public card.",
  },
  {
    title: "No app needed to scan",
    copy: "A normal phone can open the card through a QR scan or NFC tap.",
  },
  {
    title: "Built for real situations",
    copy: "School, travel, care, and everyday moments all shape the product.",
  },
  {
    title: "Designed in South Africa",
    copy: "Made to feel practical, calm, and privacy-aware from the start.",
  },
];

export const plans = [
  {
    name: "Free",
    description: "A straightforward starting point for families who want the core public-card setup without unnecessary complexity.",
    price: "Get started free",
    items: ["Family member profiles", "QR access", "Public card visibility controls"],
    featured: false,
  },
  {
    name: "Premium",
    description: "For families who want richer customization, NFC support, reminders, analytics, and more control over the experience.",
    price: "Best for growing families",
    items: ["QR and NFC support", "Custom fields and styling", "Reminders and scan insights"],
    featured: true,
  },
  {
    name: "Custom rollout",
    description: "For schools, partners, and larger setups that need planning, guidance, and a more tailored structure.",
    price: "Talk to us",
    items: ["Guided rollout", "Use-case planning", "Support for larger groups"],
    featured: false,
  },
];

export const faqs = [
  {
    q: "What is NFC Family?",
    a: "NFC Family helps families keep important safety information easier to access in practical moments. You choose what to add, what stays private, and what can appear on a public safety card after a QR scan or NFC tap.",
  },
  {
    q: "How do QR codes work?",
    a: "Each family member can have their own QR code. When someone scans it with a normal phone camera, it opens that family member's public safety card with only the fields you chose to make visible.",
  },
  {
    q: "How do NFC tags work, and does the helper need the app?",
    a: "An NFC tag is a small item that a compatible phone can tap. The tap opens the same public safety card linked to that family member. The helper does not need the NFC Family app just to view the card.",
  },
  {
    q: "What does someone see after a scan or tap?",
    a: "They only see the information your family chose to make visible on that public safety card. Private account information stays private unless you decide to show it.",
  },
  {
    q: "Do I need to reprint after updating information?",
    a: "No. If the QR code or NFC tag still points to the same family member, profile updates and visibility changes can flow through without reprinting everything from scratch.",
  },
  {
    q: "Is NFC Family an emergency service?",
    a: "No. NFC Family is not an emergency response service. It helps make selected family-approved information easier to access. In a real emergency, contact the appropriate local emergency services first.",
  },
];

export const homeSections = {
  hero: {
    dashboard: asset("family dashboard.png"),
    card: asset("jason Public card.png"),
    qr: asset("jason-doe-qr-only.png"),
    tag: asset("round nfc tag.png"),
  },
  steps: [
    {
      title: "Create a family profile",
      copy: "Add the details that matter for a child, adult, senior, or loved one with specific care needs.",
    },
    {
      title: "Choose what stays visible",
      copy: "Decide which fields appear publicly and which stay private inside the account.",
    },
    {
      title: "Connect a QR or NFC tag",
      copy: "Put the right access point on the right item, from school bags to wallets or luggage.",
    },
    {
      title: "Let the card do its job",
      copy: "When someone scans or taps, they see the family-approved details that help them respond better.",
    },
  ],
  visibility: [
    {
      title: "Identity and contact",
      copy: "Names, relationship context, emergency contacts, and quick instructions for who to call first.",
    },
    {
      title: "Medical essentials",
      copy: "Allergies, conditions, medications, blood type, doctor details, and medical aid context where needed.",
    },
    {
      title: "Situation notes",
      copy: "Short plain-language guidance such as dementia notes, childcare context, or travel-specific information.",
    },
  ],
  showcase: {
    dashboard: asset("family dashboard.png"),
    privacy: asset("publiccard privacy toggles with live preveiw.png"),
  },
  visibilityAssets: {
    card: asset("john public card.png"),
    profile: asset("Sarah profile view.png"),
  },
};

export const pages: Record<string, PageConfig> = {
  howItWorks: {
    eyebrow: "How it works",
    title: "A simple scan journey for real life.",
    copy:
      "The structure is designed to stay obvious: create the profile, choose visibility, connect the right item, and let the public card handle the moment cleanly.",
    heroBadge: "Four-step scan flow",
    heroName: "Sarah Doe",
    heroCard: asset("sarah public card.png"),
    heroQr: asset("sarah-doe-qr-only.png"),
    heroTag: asset("keyring -tag.png"),
    themeClass: "theme--ink-soft",
    sections: [
      {
        eyebrow: "Setup",
        title: "Build the profile with purpose.",
        copy: "The strongest setups are the simplest ones: useful contact and medical details, written clearly, with nothing extra added just because there is space.",
        themeClass: "theme--paper",
        cards: [
          {
            title: "Step 1: Add the person",
            description: "Create a family member entry for a child, adult, senior, or anyone who may need quicker support in public situations.",
            points: ["Name and relationship", "Emergency contacts", "Medical context where needed"],
            icon: "profile",
          },
          {
            title: "Step 2: Choose visibility",
            description: "Select what should appear on the public card so a helper sees only the details that genuinely help in that moment.",
            points: ["Keep sensitive details private", "Expose only useful context", "Update settings as life changes"],
            icon: "visibility",
          },
        ],
      },
      {
        eyebrow: "Connection",
        title: "Match the access point to the moment.",
        copy: "Different families prefer different objects. The system works best when the QR code or tag lives on the item most likely to be with the person.",
        themeClass: "theme--mist",
        cards: [
          {
            title: "Step 3: Connect a QR code",
            description: "Use printed cards, stickers, or labels when scanning should feel familiar and visual.",
            points: ["Wallet cards", "School bag tags", "Printed travel items"],
            icon: "qr",
          },
          {
            title: "Step 4: Add an NFC tag",
            description: "Use NFC when you want a fast tap-based interaction on keyrings, tags, or other durable items.",
            points: ["Tap to open the same public card", "No app needed for the helper", "Works alongside QR if desired"],
            icon: "nfc",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does the helper need the NFC Family app?",
        a: "No. The helper only needs a phone that can scan the QR code or tap the NFC tag to open the public card.",
      },
      {
        q: "What information appears after a scan?",
        a: "Only the fields your family chose to make visible on the public card appear after the scan or tap.",
      },
      {
        q: "Can we update the profile after printing a QR code?",
        a: "Yes. If the QR code or tag still points to the same family member, your profile updates and visibility changes continue to flow through.",
      },
      {
        q: "Can QR and NFC work together for the same person?",
        a: "Yes. Many families use both so the same public card can be reached through the format that best suits the item.",
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases",
    title: "Different family moments, one clear system.",
    copy:
      "The value is not tied to one scenario. NFC Family can support schools, travel, elderly care, special needs, and the ordinary daily items that move through family life.",
    heroBadge: "Everyday-ready setup",
    heroName: "John Doe",
    heroCard: asset("john public card.png"),
    heroQr: asset("john-doe-qr-only.png"),
    heroTag: asset("round nfc tag round.png"),
    themeClass: "theme--aqua",
    sections: [
      {
        eyebrow: "Families",
        title: "Useful where children move between people and places.",
        copy: "Schools, carers, sports, and travel all create moments where another adult may need simple approved information quickly.",
        themeClass: "theme--paper",
        cards: [
          {
            title: "School and childcare",
            description: "Give staff a clearer path to key contacts and care details through bag tags, cards, or labels.",
          },
          {
            title: "Travel and holiday",
            description: "Use public cards and tags on luggage, backpacks, wallets, and shared travel items to support family movement.",
          },
        ],
      },
      {
        eyebrow: "Care",
        title: "Equally valuable for adults and seniors.",
        copy: "The same core structure also works for medical needs, dementia support, and situations where independence and safety need to coexist.",
        themeClass: "theme--lavender",
        cards: [
          {
            title: "Special needs and medical context",
            description: "Expose only the information that helps someone respond with care, respect, and clarity.",
          },
          {
            title: "Elderly care and disorientation",
            description: "Help family or carers get reached sooner when someone becomes confused, lost, or unsure of what to do next.",
          },
        ],
      },
    ],
  },
  plans: {
    eyebrow: "Plans",
    title: "Start simple now, add more control later.",
    copy:
      "The plan story should feel as clear as the product itself: there is a straightforward entry point, a richer Premium layer, and a guided option for bigger rollouts.",
    heroBadge: "Clear value ladder",
    heroName: "Seth Doe",
    heroCard: asset("Seth Public Card.png"),
    heroQr: asset("seth-doe-qr-only.png"),
    heroTag: asset("tag qr j.png"),
    themeClass: "theme--sand",
    sections: [
      {
        eyebrow: "Structure",
        title: "A simpler way to explain the offer.",
        copy: "People trust pricing more when it sounds grounded and specific instead of over-marketed or overloaded with feature language.",
        themeClass: "theme--paper",
        cards: [
          {
            title: "Free",
            description: "Best for learning the flow and using the core public-card setup without friction.",
          },
          {
            title: "Premium",
            description: "Best for families who want stronger customization, NFC, reminders, analytics, and deeper control.",
          },
        ],
      },
      {
        eyebrow: "Growth",
        title: "Flexible enough for bigger rollouts.",
        copy: "Larger setups need guidance and consistency, not just more features. That is where the custom path becomes useful.",
        themeClass: "theme--mist",
        cards: [
          {
            title: "Custom rollout",
            description: "Useful for schools, partner organizations, or broader family support networks that need planning.",
          },
          {
            title: "Trust-friendly messaging",
            description: "Position the plans around confidence, control, and real use rather than aggressive upsell language.",
          },
        ],
      },
    ],
  },
  safetyCenter: {
    eyebrow: "Safety center",
    title: "Share just enough information to help.",
    copy:
      "The most important safety idea in NFC Family is restraint. The product should help a person act well without turning the public card into a full record.",
    heroBadge: "Privacy-first thinking",
    heroName: "Jason Doe",
    heroCard: asset("jason Public card.png"),
    heroQr: asset("jason-doe-qr-only.png"),
    heroTag: asset("round nfc tag.png"),
    themeClass: "theme--mist",
    sections: [
      {
        eyebrow: "Visibility",
        title: "Good privacy comes from good choices.",
        copy: "Families should think carefully about what truly helps in a public moment and what belongs only inside their private account.",
        themeClass: "theme--paper",
        cards: [
          {
            title: "What often belongs on the card",
            description: "Emergency contacts, medical essentials, brief care notes, and simple instructions for what to do next.",
          },
          {
            title: "What often stays private",
            description: "Identity numbers, banking details, passwords, PINs, and anything else that does not directly help in the moment.",
          },
        ],
      },
      {
        eyebrow: "Practical use",
        title: "Clarity matters under stress.",
        copy: "Short, readable, well-chosen details are more useful than long public cards filled with low-value information.",
        themeClass: "theme--sand",
        cards: [
          {
            title: "Review profiles regularly",
            description: "When medical needs, contacts, school details, or travel plans change, the public card should be reviewed too.",
          },
          {
            title: "Remember the limits",
            description: "NFC Family supports better access to details, but it is not a replacement for emergency services or direct care.",
          },
        ],
      },
    ],
  },
  aboutUs: {
    eyebrow: "About us",
    title: "Built by parents, for families.",
    copy:
      "NFC Family is designed to feel calm, practical, and reassuring. The site now reflects that more clearly through motion, contrast, brand color, and more focused messaging.",
    heroBadge: "Family-first product thinking",
    heroName: "Sarah Doe",
    heroCard: asset("Sarah profile view.png"),
    heroQr: asset("sarah-doe-qr-only.png"),
    heroTag: asset("keyring -tag.png"),
    themeClass: "theme--lavender",
    sections: [
      {
        eyebrow: "Approach",
        title: "The design should feel human before it feels technical.",
        copy: "Families respond better to products that look trustworthy, readable, and emotionally steady instead of over-complicated or clinical.",
        themeClass: "theme--paper",
        cards: [
          {
            title: "Calm visual language",
            description: "Logo-led blues and teals create a sense of reassurance while warmer accent surfaces soften the overall experience.",
          },
          {
            title: "Simple trust messaging",
            description: "The copy now focuses on visibility control, scan simplicity, and practical use rather than generic feature noise.",
          },
        ],
      },
      {
        eyebrow: "Build logic",
        title: "The redesign uses the real product assets throughout.",
        copy: "The site now feels more grounded because it shows the dashboard, cards, tags, and scans people will actually interact with.",
        themeClass: "theme--mist",
        cards: [
          {
            title: "Real profile imagery",
            description: "Public cards, QR codes, and dashboard screens all come from your existing image set.",
          },
          {
            title: "Motion with purpose",
            description: "Floating elements, reveal timing, and flip cards add depth without making the site feel chaotic or hard to use.",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Talk to us about setup, tags, and rollout ideas.",
    copy:
      "The contact page keeps the messaging focused and useful. It gives families and partners a clear next step without stuffing the page with low-trust placeholders.",
    heroBadge: "Start the conversation",
    heroName: "Jason Doe",
    heroCard: asset("jason Public card.png"),
    heroQr: asset("jason-doe-qr-only.png"),
    heroTag: asset("round nfc tag.png"),
    themeClass: "theme--ink-soft",
    sections: [
      {
        eyebrow: "Support",
        title: "Use this page for practical product questions.",
        copy: "Families usually need help deciding what to put on the card, which item should carry the QR or NFC tag, and how to keep the card useful without oversharing.",
        themeClass: "theme--paper",
        cards: [
          {
            title: "Planning support",
            description: "Talk through profile structure, public-card content, and visibility decisions before you roll things out.",
          },
          {
            title: "Use-case guidance",
            description: "Get direction on school, travel, elderly care, special needs, or everyday item placement.",
          },
        ],
      },
      {
        eyebrow: "Next step",
        title: "A cleaner path to future contact tooling.",
        copy: "The layout leaves room for a real contact form or CRM connection later, without pretending a placeholder form is already doing the job.",
        themeClass: "theme--mist",
        cards: [
          {
            title: "Current call to action",
            description: "Use the page to invite a conversation and keep the contact experience simple and trustworthy.",
          },
          {
            title: "Future-ready structure",
            description: "The design already supports expansion into a proper enquiry flow when the business is ready for it.",
          },
        ],
      },
    ],
  },
};
