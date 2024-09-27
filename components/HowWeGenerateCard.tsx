import Image from "next/image";
import React from "react";

const HowWeGenerateCard = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: any;
}) => {
  return (
    <div className="">
      <div className="h-auto  bg-neutral-900 group rounded-xl overflow-hidden  ">
        <div className="h-auto w-full group-hover:scale-90 transition-all duration-500">
          <div className="h-[17rem] w-full bg-violet-400 relative">
            <Image alt="image" src={`/images/${img}`} fill />
          </div>
          <div className="h-auto w-full bg-[#f3f1ed] group-hover:bg-[#E1FE6E] group-hover:rounded-t-2xl group-hover:scale-105 transition-all duration-500 px-4 py-4">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeGenerateCard;
