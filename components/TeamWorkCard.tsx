import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { desc } from "framer-motion/client";
import Image from "next/image";

const TeamWorkCard = ({
  title,
  icon,
  desc,
}: {
  title: string;
  icon: any;
  desc: string;
}) => {
  return (
    <Card className="">
      <CardHeader>
        <div className="w-20 h-20 bg-blue-200 relative rounded-lg overflow-hidden">
          <Image src={`/images/${icon}`} alt={title} fill />
        </div>
        <h1 className="text-3xl font-semibold">{title}</h1>
      </CardHeader>
      <CardContent>
        <p className="">{desc}</p>
      </CardContent>
    </Card>
  );
};

export default TeamWorkCard;
