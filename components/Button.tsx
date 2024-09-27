"use client";
import { motion } from "framer-motion";
import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div className="relative">
      <motion.div
        initial="initial"
        whileHover="whileHover"
        className="relative bg-purple-900 group cursor-pointer w-max"
      >
        {/* Black background that moves slightly on hover */}
        <motion.div
          variants={{
            initial: {
              translateX: "7px",
              translateY: "5px",
            },
            whileHover: {
              translateX: "-7px",
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="bg-black px-8 h-12 absolute  rounded-sm"
        >
          {children}
        </motion.div>

        {/* White background that contains the hover effect */}
        <motion.div className="px-8 h-12 bg-[#E2F6DB] flex items-center relative justify-center outline outline-1 outline-black rounded-sm ">
          {/* This div handles the text hover effect */}
          <div className="h-1/2 overflow-hidden">
            <motion.div
              variants={{
                whileHover: {
                  translateY: "-24px", // Smooth movement for the text
                },
              }}
              transition={{
                duration: 0.2,
              }}
              className="h-full"
            >
              {/* Texts to switch during hover */}
              <div className="h-full flex items-center">{children}</div>
              <div className="h-full flex items-center">{children}</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Button;
