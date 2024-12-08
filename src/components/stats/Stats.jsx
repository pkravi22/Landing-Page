import React from "react";
import style from "./Stats.module.css";

const Stats = () => {
  return (
    <div className="bg-white mt-16 py-4 relative top-20 rounded-lg px-4 ">
      <div className="grid grid-cols-2 sm:grid-cols-5  gap-0 justify-center  border border-gray-300 rounded-md">
        <div className="border-r border-b border-gray-300 p-8 ">
          <p className="text-gray-500   text-xs sm:text-base font-semibold">Hiring Partners</p>
          <p className="text-xl pt-1  sm:text-3xl  md:text-3xl  lg:text-3xl font-semibold text-black">2,000+</p>
        </div>

        <div className="border-r border-b border-gray-300 p-8 ">
          <p className="text-gray-500  text-xs sm:text-base font-semibold">Careers Made</p>
          <p className="text-xl pt-1 sm:text-3xl  md:text-3xl  lg:text-3xl font-semibold text-black">3,000+</p>
        </div>

        <div className="border-r border-b border-gray-300 p-8">
          <p className="text-gray-500  text-xs sm:text-base font-semibold">Hours of Learning</p>
          <p className="text-xl pt-1 sm:text-3xl  md:text-3xl  lg:text-3xl font-semibold text-black">500+</p>
        </div>

        <div className=" border-r border-b  border-gray-300 p-8">
          <p className="text-gray-500  text-xs sm:text-base font-semibold">Highest Package</p>
          <p className="text-xl pt-1 sm:text-3xl  md:text-3xl  lg:text-3xl font-semibold text-black">26.6 LPA</p>
        </div>

        <div className=" border-gray-300 p-8">
          <p className="text-gray-500   text-xs sm:text-base font-semibold">Highest Salary Hike</p>
          <p className="text-xl pt-1 sm:text-3xl   md:text-3xl  lg:text-3xl font-semibold text-black">600%</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
