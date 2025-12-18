import React from "react";
import { ArrowUpRight } from "lucide-react";
const Leftcontent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 ">
      <div className="p-5">
        <h3 className="mb-7 text-6xl font-bold">
          Prospective <br /> Customer <br /> Segmentation
        </h3>

        <p className="text-lg font-medium text-gray-700">
          We prioritize employee satisfaction through reviews to boost morale,
          productivity, and retention, achieving our company goals.
        </p>
      </div>

      <div>
        <ArrowUpRight className="size-26" />
      </div>
    </div>
  );
};

export default Leftcontent;
