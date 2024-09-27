"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowBigRight, BriefcaseBusiness, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

// Define the interface for the service data
interface Service {
  title: string;
  description: string;
  number: string;
  icon: React.ReactNode; // The icon is now a ReactNode type
}

const ServiceBox = ({ title, description, number, icon }: Service) => {
  return (
    <motion.div
      whileHover="hover"
      className=" w-full px-4 overflow-hidden "
      initial="initial"
      animate="animate"
    >
      <div className=" py-10 relative  md:px-10 px-5 bg-white rounded-xl shadow-lg cursor-pointer group overflow-hidden">
        <div className="relative z-20 ">
          <div>
            <div className="h-20 w-20 rounded-full mb-4 bg-[#E2F6DB] flex items-center justify-center">
              {icon}
            </div>
            <div className="text-2xl w-[20ch] font-semibold pb-3">{title}</div>
            <div className=" md:w-[36ch] w-[28ch] leading-7 text-md">
              {description}
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-3 font-medium">
              Explore More
              <span>
                <MoveRight />
              </span>
            </div>
            <div className="w-16 h-16 rounded-full bg-[#E1FE6E] flex items-center justify-center group-hover:border group-hover:border-black transition-all duration-300">
              <h1 className="text-2xl">{number}</h1>
            </div>
          </div>
        </div>

        {/* Hover effect */}
        <motion.div
          variants={{
            initial: { scaleY: 0 },
            hover: { scaleY: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-full scale-y-0  absolute top-0 left-0 bg-[#E1FE6E] z-10"
        />
      </div>
    </motion.div>
  );
};

export default ServiceBox;
