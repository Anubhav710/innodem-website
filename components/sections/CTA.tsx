import React from "react";
import Button from "../Button";

const CTA = () => {
  return (
    <section className="w-full bg-[#F5F8F3] px-2 py-20">
      <div className=" w-full flex flex-col md:flex-row gap-5 max-w-screen-xl mx-auto  ">
        <h1 className=" md:text-3xl text-xl font-bold ">
          Give us a call, and our dedicated agent will guide you on securing the
          right deal for your business or finding the perfect supplier for your
          specific requirements.
        </h1>
        <div className=" flex items-center  ">
          <Button>Lat's talk</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
