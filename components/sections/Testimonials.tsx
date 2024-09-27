import { testimonialsData } from "@/constants";
import React from "react";
import TestimonialCard from "../TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Testimonials = () => {
  return (
    <section className="max-w-screen-xl mx-auto pt-44 px-4 sm:px-6 lg:px-8">
      <div>
        {/* Heading Section */}
        <div className="space-y-5 text-center lg:text-left">
          <h5 className="text-lg sm:text-xl">TESTIMONIALS</h5>
          <h1 className="heading lineHeight font-semibold text-2xl ">
            Discover What Our Clients <br className="hidden sm:block" /> Have to
            Say
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="pt-10 gap-4">
          <Carousel className="relative overflow-hidden">
            <CarouselContent className="flex space-x-4">
              {testimonialsData.map((item, i) => (
                <CarouselItem
                  key={i}
                  className=" md:basis-1/3 transition-transform duration-300 ease-in-out"
                >
                  <TestimonialCard
                    title={item.compliment}
                    desc={item.testimonial}
                    name={item.name}
                    role={item.designation}
                    photo={item.photo}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
