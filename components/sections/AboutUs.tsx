"use client";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const [counter, setCounter] = useState({
    value: 0,
  });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(
      "#sliderBar",
      {
        width: "75%",
        duration: 1,
        ease: "circ.inOut",
      },
      0
    );
    tl.to(
      counter,
      {
        value: 75,
        onUpdate: () => setCounter({ value: Math.floor(counter.value) }),
        duration: 1,
        ease: "circ.inOut",
      },
      0
    );

    ScrollTrigger.create({
      trigger: "#slider",
      start: "top 95%",
      end: "bottom bootom",

      animation: tl,
    });
  }, []);
  return (
    <section className="w-full pt-32 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full    px-4">
        <div className="flex flex-col w-full pr-10">
          <div>
            <h6 className="text-2xl font-medium pb-5">What We Do</h6>
            <h1 className="text-[6vw] md:text-7xl pb-5 font-semibold">
              We Empower Suppliers, Manufacturers, and Traders.
            </h1>
            <p className="text-lg md:text-xl pb-10">
              Providing tailored solutions to help suppliers, manufacturers, and
              traders thrive in competitive markets with efficiency and growth.
            </p>
          </div>
          <div>
            <h6 className="text-lg font-medium">
              {counter.value}% Consulting Success
            </h6>
            <div
              id="slider"
              className="w-full border border-black h-12 mt-2 rounded-tr-full bg-[#F1FAEE] flex items-center pl-5"
            >
              <div
                id="sliderBar"
                className="h-1/2 w-[0%] bg-[#CBE75E] rounded-tr-full"
              ></div>
            </div>
          </div>
          <div className="pt-12 space-y-5">
            <div className="flex gap-3 bg-[#FEF7E6] w-max pl-5 pr-14 py-4 rounded-sm">
              <CircleArrowRight />
              <h4>Connecting buyers with suppliers</h4>
            </div>
            <div className="flex gap-3 bg-[#EFF8F8] w-max pl-5 pr-14 py-4 rounded-sm">
              <CircleArrowRight />
              <h4>Increased credibility for your brand</h4>
            </div>
          </div>
          <div className="pt-10">
            <Button>About Agency</Button>
          </div>
        </div>
        <div className="w-full relative h-64 md:h-auto">
          <Image
            src={
              "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="about-image"
            fill
            className="object-cover rounded-lg" // Ensure the image covers the area and retains aspect ratio
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
