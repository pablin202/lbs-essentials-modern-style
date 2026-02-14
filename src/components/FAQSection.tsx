import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What materials are your bags made from?",
    answer: "Our bags are crafted from high-quality PU leather that's durable, easy to clean, and cruelty-free. We select materials that look and feel premium while remaining accessible.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 7–14 business days. We ship worldwide from our fulfillment partners. You'll receive a tracking number once your order is dispatched.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on unused items in their original packaging. Contact us at hello@lbsessentials.com to start a return.",
  },
  {
    question: "How long does order processing take?",
    answer: "Orders are processed within 1–3 business days. During peak seasons, processing may take an additional day or two.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location and will be calculated at checkout.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 section-padding">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Support</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-sm px-5">
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
