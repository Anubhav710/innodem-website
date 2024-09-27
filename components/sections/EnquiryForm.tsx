import React from "react";
import Button from "../Button";
import Image from "next/image";

const EnquiryForm = () => {
  return (
    <section className="w-full pt-28 pb-28 bg-[#FDFCF0]">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <h1 className="text-center heading font-bold text-black pb-5">
          Get Quotes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <form className="space-y-6 p-8 w-full max-w-lg">
              <input
                type="text"
                placeholder="Product/Services*"
                className="w-full p-4 rounded-lg bg-[#f6f9e5] border border-gray-400"
              />
              <input
                type="text"
                placeholder="Requirement/ Quantity*"
                className="w-full p-4 rounded-lg bg-[#f6f9e5] border border-gray-400"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-4 rounded-lg bg-[#f6f9e5] border border-gray-400"
              />
              <input
                type="tel"
                placeholder="Mobile*"
                className="w-full p-4 rounded-lg bg-[#f6f9e5] border border-gray-400"
              />
              <div className="flex justify-center">
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src={"/images/eq.png"}
              alt="image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
