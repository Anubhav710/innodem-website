import React from "react";
import Button from "../Button";
import {
  Building,
  ChartNoAxesCombined,
  IndianRupee,
  LucideBriefcaseBusiness,
  MapPin,
  MousePointerClick,
  Package,
  UserPlus,
} from "lucide-react";

const CTA2 = () => {
  return (
    <div className="py-24 relative bg-[#F4FDFD]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        {/* Call to Action Section */}
        <div className="mb-8 flex flex-col items-center">
          <h2 className="heading font-bold text-gray-900 mb-4">
            Sell for free on{" "}
            <span className="text-[#173401]">India's largest</span>
          </h2>
          <Button>online B2B marketplace →</Button>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex flex-col items-center bg-white px-6 py-6 rounded-lg shadow-md">
            <ChartNoAxesCombined className="h-20 w-20" />
            <p className="font-semibold text-gray-700 mt-4">
              GROW YOUR BUSINESS
            </p>
          </div>

          <div className="flex flex-col items-center bg-white px-6 py-6 rounded-lg shadow-md">
            <div className="relative h-auto w-auto rounded-full border-4 border-black p-3">
              <IndianRupee className="h-20 w-20 stroke-[1.7px]" />
              <div className="w-[4px] rounded-md h-full bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            </div>
            <p className="font-semibold text-gray-700 mt-4">ZERO COST</p>
          </div>

          <div className="flex flex-col items-center bg-white px-6 py-6 rounded-lg shadow-md">
            <Building className="h-20 w-20" />
            <p className="font-semibold text-gray-700 mt-4">
              MANAGE BUSINESS EASILY
            </p>
          </div>

          <div className="flex flex-col items-center bg-white px-6 py-6 rounded-lg shadow-md">
            <UserPlus className="h-20 w-20" />
            <p className="font-semibold text-gray-700 mt-4">CREATE ACCOUNT</p>
          </div>

          <div className="flex flex-col items-center bg-white px-6 py-6 rounded-lg shadow-md">
            <MapPin className="h-20 w-20" />
            <p className="font-semibold text-gray-700 mt-4">ADD BUSINESS</p>
          </div>

          <div className="flex flex-col items-center bg-white px-6 py-6 rounded-lg shadow-md">
            <Package className="h-20 w-20" />
            <p className="font-semibold text-gray-700 mt-4">
              PRODUCTS/SERVICES
            </p>
          </div>

          <div className="flex flex-col items-center bg-white px-6 py-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
            <MousePointerClick className="h-20 w-20" />
            <p className="font-semibold text-gray-700 mt-4">
              START SELLING FOR FREE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA2;
