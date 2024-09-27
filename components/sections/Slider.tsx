"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../Button";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1664575599730-0814817939de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);
  return (
    <section className=" " id="home">
      <div className="h-auto relative overflow-hidden">
        <div
          className="w-max h-full flex transition-all ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row `}
            >
              {/* IMAGE CONTAINER  */}

              <div className="relative heroHeight w-full ">
                <Image
                  src={slide.img}
                  alt=""
                  fill
                  sizes="100%"
                  className=" md:object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className=" absolute -translate-x-1/2 left-1/2 bottom-8 flex gap-4  ">
          {slides.map((slide, index) => (
            <div
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                current === index ? "scale-100" : ""
              }`}
              key={slide.id}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-600 rounded-full "></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
