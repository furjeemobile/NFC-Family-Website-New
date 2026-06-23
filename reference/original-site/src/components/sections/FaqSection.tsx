import { Reveal } from "@/components/brand/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { allFaqs } from "@/content/faqs";

export { allFaqs };

export function FaqSection({ limit, showAll = false }: { limit?: number; showAll?: boolean }) {
  const items = limit ? allFaqs.slice(0, limit) : allFaqs;
  return (
    <section className="section-surface-aqua relative py-24" id="faqs">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Questions</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
              {showAll ? "Everything you might want to know." : "Calm, honest answers."}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl glass p-3 sm:p-5">
            <Accordion type="single" collapsible className="w-full">
              {items.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border/60 last:border-b-0">
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
