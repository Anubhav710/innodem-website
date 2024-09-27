import React from "react";
import FAQCard from "../FAQCard";
import { FAQData } from "@/constants";
import Image from "next/image";

const FAQ = () => {
  return (
    <section className="max-w-screen-xl mx-auto pt-32 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 space-y-6 md:pr-4">
          <div className="pb-4">
            <h6 className="text-2xl font-medium pb-4">We can help</h6>
            <h1 className="heading lineHeight  font-semibold pb-3">
              Questions & Answers
            </h1>
            <p className="text-xl">
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
          </div>
          <div className="w-full h-[300px] md:h-[400px] relative bg-green-300">
            <Image
              src={"/images/faqs-video-poster.webp"}
              alt="faq-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 bg-[#E2F6DB] w-full flex items-center md:mt-0 mt-6">
          <div className="px-4 md:px-7 py-10 space-y-6 w-full">
            {FAQData.map((item) => (
              <FAQCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
