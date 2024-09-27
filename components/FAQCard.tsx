import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1" className="border-b border-gray-300">
        <AccordionTrigger className="text-3xl font-medium">
          {title}
        </AccordionTrigger>
        <AccordionContent className="leading-7 text-md">
          {" "}
          {desc}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQCard;
