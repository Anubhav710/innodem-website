import { MoveUpRight } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <section className="w-full flex flex-col md:flex-row pt-32">
      <div className="md:w-1/2 bg-[#173401] flex items-center justify-center py-12">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-white text-6xl">30 years+</h1>
          <p className="text-2xl text-[#CCD9C2]">
            We’ve experienced more than 30 years with success.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 bg-[#E1FE6E] flex items-center pl-4 md:pl-24 gap-8 md:gap-36 py-12">
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-black text-6xl">$2.4b+</h1>
          <p className="text-2xl text-[#CCD9C2]">
            Total trading volume over time
          </p>
        </div>
        <div className="h-36 w-36 flex items-center justify-center rounded-full bg-[#4A6436]">
          <MoveUpRight className="h-16 w-16" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
