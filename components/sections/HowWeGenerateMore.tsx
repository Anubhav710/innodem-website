import { GenerateBusinessData } from "@/constants";
import React from "react";
import HowWeGenerateCard from "../HowWeGenerateCard";

const HowWeGenerateMore = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto py-32">
      <div className="w-full">
        <div className="w-full flex justify-center">
          <h1 className="heading lineHeight  font-bold w-[24ch] text-center pb-9">
            How We Generate More Business?
          </h1>
        </div>
        <div className="grid md:grid-cols-3  grid-cols-1 justify-items-center gap-6 px-4">
          {GenerateBusinessData.map((item) => (
            <HowWeGenerateCard
              key={item.title}
              title={item.title}
              desc={item.desp}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeGenerateMore;
