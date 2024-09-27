"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Factory, Package, User } from "lucide-react";
import React, { useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const WhyTrust = () => {
  const [buyers, setBuyers] = useState({
    value: 0,
  });
  const [supplier, setSupplier] = useState({
    value: 0,
  });
  const [manufacturer, setManufacturer] = useState({
    value: 0,
  });

  // Use useEffect to handle side effects
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(
      buyers,
      {
        value: 6790,
        onUpdate: () => setBuyers({ value: Math.floor(buyers.value) }),
        duration: 1,
      },
      0
    );
    tl.to(
      supplier,
      {
        value: 7020,
        onUpdate: () => setSupplier({ value: Math.floor(supplier.value) }),
        duration: 1,
      },
      0
    );
    tl.to(
      manufacturer,
      {
        value: 8608,
        onUpdate: () =>
          setManufacturer({ value: Math.floor(manufacturer.value) }),
        duration: 1,
      },
      0
    );
    ScrollTrigger.create({
      trigger: "#t-counter",
      start: "top 80%",
      end: "bottom 80%",

      animation: tl,
    });
  }, []); // Empty dependency array ensures this runs only once after mount

  const data = [
    {
      icon: <User className="h-10 w-10" />,
      title: "BUYERS",
      num: buyers.value,
    },
    {
      icon: <Package />,
      title: "SUPPLIER",
      num: supplier.value,
    },
    {
      icon: <Factory />,
      title: "MANUFACTURER",
      num: manufacturer.value,
    },
  ];

  return (
    <section id="t-counter" className="w-full bg-[#E2F6DB] ">
      <div className="w-full flex max-w-screen-xl mx-auto py-16 flex-col md:flex-row">
        <div className="flex-[1.2] flex items-center justify-center ">
          <h1 className="text-4xl font-bold ">Why Trust</h1>
        </div>
        <div className="flex-[3] flex justify-between flex-wrap pl-6 md:pl-2 pt-3 md:pt-1 gap-3 ">
          {data.map((item, index) => (
            <Box
              key={index}
              icon={item.icon}
              num={item.num}
              text={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;

const Box = ({ icon, num, text }: { icon: any; num: number; text: string }) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="h-20 w-20 rounded-xl flex items-center justify-center bg-white ">
        {icon}
      </div>
      <div>
        <h1 className="text-4xl font-semibold">{num}</h1>
        <h1>{text}</h1>
      </div>
    </div>
  );
};
