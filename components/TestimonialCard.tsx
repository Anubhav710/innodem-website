import React from "react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const TestimonialCard = ({
  title,
  desc,
  name,
  photo,
  role,
}: {
  title: string;
  desc: string;
  photo?: any;
  name: string;
  role: string;
}) => {
  return (
    <div className="px-4 py-6 md:px-6 md:py-8 bg-white rounded-md shadow-lg">
      <div className="w-full">
        {/* Title and Quote Icon */}
        <div className="flex justify-between items-center pb-6">
          <h2 className="text-xl sm:text-2xl font-medium max-w-[20ch] sm:max-w-[25ch]">
            {title}
          </h2>
          <div className="h-12 w-12 md:h-16 md:w-16 bg-[#E1FE6E] rounded-full flex items-center justify-center">
            <Quote className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-base sm:text-lg leading-relaxed sm:max-w-[35ch]">
          {desc}
        </p>

        {/* User Info and Rating */}
        <div className="flex justify-between items-center pt-6 sm:pt-8">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full relative overflow-hidden">
              <Image
                src={`/images/${photo}`}
                alt="User Photo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold">{name}</h4>
              <h6 className="text-sm sm:text-base text-gray-500">{role}</h6>
            </div>
          </div>

          {/* Star Icon */}
          <div className="hidden md:block">
            <Star className="h-6 w-6 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
