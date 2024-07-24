import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

const faqs = [
  {
    question: 'Is the event 21 and older?',
    answer: 'Yes. You must be 21 or older to attend.',
  },
  {
    question: 'What is the dress code?',
    answer:
      'Imagine that one outfit that you didn’t think you could wear anywhere else. This is the event to wear it.',
  },
  {
    question: 'How do I become a fig™ sponsor?',
    answer:
      'Send us an inquiry through our website to receive the sponsorship packages and schedule a meeting with the fig™ team to learn more.',
  },
  {
    question: 'What is the selection process to become a designer at fig™? ',
    answer:
      'Our team scouts local talent and there is an open application one time a year.',
  },
  {
    question: 'What is the criteria to become a designer at fig™?',
    answer: 'You must live in Buffalo and produce a "cut and sew" collection.',
  },
  {
    question: 'Is there a model casting?',
    answer: 'No. Designers cast their models directly.',
  },
  {
    question: 'Can I buy pre-sale tickets?',
    answer:
      'Yes, there is a pre-sale email list to reoccurring ticket holders and sponsors. You must be on that list to receive the pre-sale.',
  },
  {
    question: 'How do I get involved at fig™?',
    answer:
      'There are volunteer and internship opportunities, which you can inquire through the website.',
  },
  {
    question: 'Are press passes available to photographers and videographers?',
    answer:
      'Yes, press passes area limited. Please inquire through the website.',
  },
  {
    question: 'Is the event handicap accessible?',
    answer:
      'Yes. Once you purchase your ticket, please send us an email to make handicap arrangements.',
  },
  {
    question: 'Is there valet parking?',
    answer:
      'Yes, valet parking is available for Sponsors and VIPs, only. There is street parking and numerous parking lots surroundings Seneca One available.',
  },
  {
    question: 'Is there food available at the event?',
    answer:
      'Hors d’oeuvres are available to sponsors and VIPs. Food trucks are located outside the venue to purchase food.',
  },
]

export default function FAQ() {
  return (
    <section className="mx-auto max-w-[800px] w-full p-4 md:p-10 flex flex-col gap-y-4 justify-center items-center text-center mb-12">
      <h2 className="text-2xl md:text-[37px]">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full text-left">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
        {/* <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it lorem ipsum dolor?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </section>
  )
}
