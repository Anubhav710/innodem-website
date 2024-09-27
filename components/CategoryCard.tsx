import React from "react";
import { Card, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";

const CategoryCard = ({
  imageSrc,
  title,
}: {
  imageSrc: any;
  title: string;
}) => {
  return (
    <div className=" w-max shadow-xl  rounded-2xl overflow-hidden bg-white ">
      <div className=" relative">
        <Image
          src={`/images/${imageSrc}`}
          alt="image"
          width={250}
          height={200}
          sizes="100%"
          className="rounded-t-lg"
        />
        <div className="absolute top-0 left-0 bg-black/15 h-full w-full"></div>
      </div>
      <div className="bg-white  pl-4 py-5 ">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
