import { buyers } from "@/constants";
import React from "react";

const LatestBuyer = () => {
  return (
    <section className="w-full pt-28 pb-28">
      <div className="px-4">
        <h1 className="heading text-center font-semibold mb-14">
          Latest Buyer
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#E2F6DB]">
                <th className="border px-2 sm:px-4 py-2">Name</th>
                <th className="border px-2 sm:px-4 py-2">Product</th>
                <th className="border px-2 sm:px-4 py-2">Quantity</th>
                <th className="border px-2 sm:px-4 py-2">State / Country</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((buyer, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#FEF7E6]" : "bg-[#EFF8F8]"}
                >
                  <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">
                    {buyer.name}
                  </td>
                  <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">
                    {buyer.product}
                  </td>
                  <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">
                    {buyer.quantity}
                  </td>
                  <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">
                    {buyer.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default LatestBuyer;
