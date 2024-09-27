import { ServiceData } from "@/constants";
import React from "react";
import ServiceBox from "../ServiceBox";

const Service = () => {
  return (
    <section className="pt-20 sm:pt-24 lg:pt-32">
      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-4   ">
        {ServiceData.map((item) => (
          <ServiceBox
            key={item.title}
            title={item.title}
            description={item.description}
            number={item.number}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
