import { Mail, PhoneCall } from "lucide-react";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import MobileNav from "../MobileNav";

export const Header = () => {
  return (
    <header className="pt-2  border-b border-black bg-white ">
      <div className=" justify-between border-b border-black px-7 pb-2 hidden lg:flex ">
        <div className="flex items-center  gap-3">
          <div className="w-9 h-9  rounded-full relative ">
            <Image
              src={
                "https://themazine.com/newwp/inconsl/wp-content/themes/inconsl/assets/images/icons/icon-1.png"
              }
              alt="icon"
              fill
            />
          </div>
          <h6>Welcome To Digital Exports Marketing</h6>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 cursor-pointer">
            <Mail className="text-gray-500" />
            <h6>support@digitalexportsmarketing.com</h6>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <PhoneCall className="text-gray-500" />
            <h6>+91 8448668076 </h6>
          </div>
        </div>
      </div>
      <nav className="py-3 flex  justify-between">
        <div className="px-7 flex items-center gap-10">
          <div className="w-40 h-14 relative ">
            <Image
              src={
                "https://themazine.com/newwp/inconsl/wp-content/uploads/2024/04/logo.svg"
              }
              alt="logo"
              sizes="100%"
              fill
            />
          </div>
          <ul className="lg:flex gap-4 text-[#173401] font-medium text-lg  cursor-pointer hidden ">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" flex items-center pr-3">
          <div className="pr-5 hidden lg:block">
            <Button>Get Started</Button>
          </div>
          {/* Mobile Nabar  */}
          <div className="block lg:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
};
