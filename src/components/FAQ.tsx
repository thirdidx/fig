import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

export default function FAQ() {
  return (
    <section className="mx-auto max-w-[800px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center mb-12">
      <h2 className="text-[37px]">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full text-left">
        <AccordionItem value="item-1">
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
        </AccordionItem>
      </Accordion>
    </section>
  )
}
