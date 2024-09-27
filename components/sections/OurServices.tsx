import { serviceData } from "@/constants";
import React from "react";
import ServiceCard from "../ServiceCard";

const OurServices = () => {
  return (
    <section className="max-w-screen-xl mx-auto  py-32">
      <div className="px-4">
        <div>
          <h1 className="uppercase heading font-bold text-center pb-16">
            How We Work
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 justify-items-center">
            {serviceData.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                icon={item.icon}
                desp={item.desp}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
