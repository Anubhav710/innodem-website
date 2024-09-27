import { teamWorkData } from "@/constants";
import React from "react";
import TeamWorkCard from "../TeamWorkCard";

const TeamWork = () => {
  return (
    <section className="max-w-screen-xl mx-auto pt-32 ">
      <div className=" grid md:grid-cols-2 grid-cols-1 px-4 gap-5">
        {teamWorkData.map((item) => (
          <TeamWorkCard
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamWork;
