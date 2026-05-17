'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionHeader from '@/components/shared/SectionHeader'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQSection() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="bg-white py-section"
    >
      <div className="section-container">
        <SectionHeader
          label="Common Questions"
          title="Frequently Asked Questions"
          align="center"
        />

        <div className="mx-auto mt-12 max-w-[800px] border-t border-blush">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {FAQ_ITEMS.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="border-l-[3px] border-roseGold pl-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
