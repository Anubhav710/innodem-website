import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HammerIcon } from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="w-7 h-7" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
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
        </SheetHeader>
        <div className=" pt-10">
          <ul className="space-y-5 border-t">
            <li className="text-xl border-b py-3  ">Home</li>
            <li className="text-xl border-b py-3 ">About Us</li>
            <li className="text-xl border-b py-3 ">Service</li>
            <li className="text-xl border-b py-3 ">Projects</li>
            <li className="text-xl border-b py-3 ">Blog</li>
            <li className="text-xl border-b py-3 ">Contact</li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
