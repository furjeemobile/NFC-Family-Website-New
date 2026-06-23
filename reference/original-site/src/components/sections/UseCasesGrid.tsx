import { Reveal } from "@/components/brand/Reveal";
import schoolAndChildcare from "@/assets/use-cases/school-and-childcare.png.asset.json";
import sportsAndActivities from "@/assets/use-cases/sports-and-activities.png.asset.json";
import elderlyCare from "@/assets/use-cases/elderly-care.png.asset.json";
import travelAndHolidays from "@/assets/use-cases/travel-and-holidays.png.asset.json";
import specialNeeds from "@/assets/use-cases/special-needs.png.asset.json";
import childSeparation from "@/assets/use-cases/child-separation.png.asset.json";
import dementiaOrDisorientation from "@/assets/use-cases/dementia-or-disorientation.png.asset.json";
import everydayEssentials from "@/assets/use-cases/everyday-essentials.png.asset.json";

const cases = [
  {
    t: "School and childcare",
    d: "QR or NFC on bags and printed cards so teachers and carers see approved emergency details fast.",
    image: schoolAndChildcare.url,
    alt: "Children walking to school with NFC Family school use case icon",
  },
  {
    t: "Sports and activities",
    d: "Practices, matches, and tournaments where children may be away from parents.",
    image: sportsAndActivities.url,
    alt: "Children in a sports team huddle with NFC Family sports use case icon",
  },
  {
    t: "Elderly care",
    d: "Carers, neighbours, and responders get a simple way to access key contacts and medical info.",
    image: elderlyCare.url,
    alt: "Elderly care support scene with NFC Family heart use case icon",
  },
  {
    t: "Travel and holidays",
    d: "Useful for luggage, wallets, travel bags, and temporary family travel planning.",
    image: travelAndHolidays.url,
    alt: "Family travelling through an airport with NFC Family travel use case icon",
  },
  {
    t: "Special needs",
    d: "Share only the details that help someone support your loved one with care and respect.",
    image: specialNeeds.url,
    alt: "Child with headphones holding a toy with NFC Family special needs use case icon",
  },
  {
    t: "Child separation",
    d: "If a child is separated in a busy place, a scan helps a helper contact the right person.",
    image: childSeparation.url,
    alt: "Child holding an adult hand with NFC Family child separation use case icon",
  },
  {
    t: "Dementia or disorientation",
    d: "For seniors who may forget where they are — a public card can help them get home safely.",
    image: dementiaOrDisorientation.url,
    alt: "Older man outdoors with NFC Family dementia support use case icon",
  },
  {
    t: "Everyday essentials",
    d: "Bags, keys, wallets, clothing labels — anywhere a quick scan could matter.",
    image: everydayEssentials.url,
    alt: "Keys with NFC Family tag and everyday essentials use case icon",
  },
];

export function UseCasesGrid({ limit }: { limit?: number }) {
  const items = limit ? cases.slice(0, limit) : cases;
  return (
    <section className="section-surface-aqua relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-teal">Use cases</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            For the everyday moments that are not always planned.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div className="group h-full rounded-3xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                <div className="overflow-hidden rounded-[1.25rem] border border-border/50 bg-muted/30">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="h-36 w-full object-cover object-top sm:h-40 lg:h-[152px] xl:h-[164px]"
                  />
                </div>
                <h3 className="mt-4 text-base font-medium">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                <span className="mt-3 inline-block text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  See example →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

