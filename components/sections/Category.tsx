import { CategoryData } from "@/constants";
import React from "react";
import CategoryCard from "../CategoryCard";

const Category = () => {
  return (
    <section className="w-full bg-[#FDFCF0] py-28">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="heading  font-bold text-center pb-14 uppercase">
          Our CATEGORY
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 justify-items-center">
          {CategoryData.map((item) => (
            <CategoryCard
              key={item.title}
              title={item.title}
              imageSrc={item.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
