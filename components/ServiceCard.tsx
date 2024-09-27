import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const ServiceCard = ({
  title,
  icon,
  desp,
}: {
  title: string;
  icon: any;
  desp: string;
}) => {
  return (
    <Card className="w-full sm:w-auto px-3">
      <CardHeader className="flex flex-col sm:flex-row items-center sm:space-x-5 text-center sm:text-left">
        <div className="h-20 w-20 rounded-full bg-[#E2F6DB] flex items-center justify-center mb-4 sm:mb-0">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <CardTitle className="text-xl sm:text-2xl pb-3 w-[20ch]">
            {title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-md w-full sm:w-[40ch] leading-6">
            {desp}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
