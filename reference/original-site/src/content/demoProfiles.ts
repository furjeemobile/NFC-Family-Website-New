import jasonQr from "@/assets/demo/jason-doe-qr-only.png.asset.json";
import sarahQr from "@/assets/demo/sarah-doe-qr-only.png.asset.json";
import johnQr from "@/assets/demo/john-doe-qr-only.png.asset.json";
import sethQr from "@/assets/demo/seth-doe-qr-only.png.asset.json";
import jasonCard from "@/assets/demo/jason_Public_card.png.asset.json";
import sarahCard from "@/assets/demo/sarah_public_card.png.asset.json";
import johnCard from "@/assets/demo/john_public_card.png.asset.json";
import sethCard from "@/assets/demo/Seth_Public_Card.png.asset.json";
import familyDashboard from "@/assets/demo/family_dashboard.png.asset.json";
import sarahProfile from "@/assets/demo/Sarah_profile_view.png.asset.json";

export const screens = {
  familyDashboard: familyDashboard.url,
  sarahProfile: sarahProfile.url,
};

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

export const demoProfiles: DemoProfile[] = [
  {
    id: "jason",
    name: "Jason Doe",
    type: "Toddler",
    age: "5 years old",
    scenario:
      "A young child at school, childcare, or a busy public place - quick access to allergies, medical aid, and family contact.",
    visible: ["Blood type B+", "Allergies: Dairy, Starch", "Medical aid: Discovery", "Powered by NFC Family"],
    qr: jasonQr.url,
    card: jasonCard.url,
  },
  {
    id: "sarah",
    name: "Sarah Doe",
    type: "Adult",
    age: "55 years old",
    scenario:
      "An adult profile with selected emergency and medical details - a partner can be reached in seconds.",
    visible: ["Emergency contact: John (Husband)", "Blood type B+", "Doctor: Dr. John", "Medical aid: Discovery"],
    qr: sarahQr.url,
    card: sarahCard.url,
  },
  {
    id: "john",
    name: "John Doe",
    type: "Medical profile",
    age: "62 years old",
    scenario:
      "Allergies, chronic conditions, medications, and two emergency contacts visible for first responders.",
    visible: [
      "Allergies: Peanuts, Fish, Cat hair",
      "Conditions: Asthma, Diabetes",
      "Medications: Inhaler, Insulin",
      "Two emergency contacts",
    ],
    qr: johnQr.url,
    card: johnCard.url,
  },
  {
    id: "seth",
    name: "Seth Doe",
    type: "Senior",
    age: "71 years old",
    scenario:
      "For a senior who may become confused or disoriented - a helper can reach family right away.",
    visible: ["Emergency contact: Jason (Son)", "Conditions: Dementia", "Notes: May forget who he is", "Registered organ donor"],
    qr: sethQr.url,
    card: sethCard.url,
  },
];
