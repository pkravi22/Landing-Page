import React from "react";

import { CiCircleCheck } from "react-icons/ci";

const Hero = () => {
  return (
    <div className=" relative top-32 mb-8 mt-16 py-15  px-4 grid grid-cols-1   md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-6  ">
      {/* Left Column */}
      <div className="px-4">
        <h2 className="text-[26px] sm:text[32px] lg:text-[38px] mt-5 mb-4 font-bold font-custom tracking-tight leading-[1.029em]">
          Newton School's Professional Certification in <br /> Data Science and
          Artificial Intelligence
        </h2>
        <p className="uppercase text-[16px] mb-4">
          Get hired as an AI & Data Science professional in the top product and
          service-based companies within a year.
        </p>

        <div className="space-y-4 justify-center">
          <div className="flex items-center gap-2">
          <CiCircleCheck className="text-2xl" />
            <div className="text-sm font-semibold tracking-tighest leading-tight">
              Top rated certification in Data Science & Artificial Intelligence
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="text-2xl" />
            <div className="text-sm font-semibold tracking-tighest leading-tight">
              Live classes 3 days/week + bonus sessions
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="text-2xl " />
            <div className="text-sm font-semibold tracking-tighest leading-tight">
              No prior coding knowledge needed
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="text-2xl font-bold " />
            <div className="text-sm font-semibold tracking-tighest leading-tight text-left  text-[.9375rem] sm:text-[.9375rem] text-[#090f1d]">
              1:1 mentorship from industry experts
            </div>
          </div>
        </div>
        <div>
          <button className=" w-full sm:w-auto py-2 px-4 my-4 border border-grey-600 rounded">
            Download Brochure
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className=" w-full sm:w-auto py-2 px-4 bg-red-500 text-white rounded">
            Sign Up
          </button>
          <button className=" w-full sm:w-auto py-2 px-4  bg-blue-500 text-white rounded">
            Request Callback
          </button>
        </div>
      </div>

      <div className=" w-auto  sm:w-[300px]  mb-4  lg:max-w- md:max-w-md bg-white p-6 border  border-gray-300 rounded-lg">
        <h3 className="text-2xl     font-semibold tracking-tight mb-6">
          Apply Now, Seats are filling fast!
        </h3>
        <form className="space-y-4">
          <div className="px-2">
            <label htmlFor="name" className="block mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 py-2 px-4 rounded focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="px-2">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 py-2 px-4 rounded focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div className="px-2">
            <label htmlFor="phone" className="block mb-2">
              Phone No
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 py-2 px-4 rounded focus:outline-none"
              placeholder="+91 9876543210"
            />
          </div>

          <div className="text-center text-sm">
            <div> By clicking Sign Up, you agree to our </div>
            <div>
              <a href="#" className="text-blue-500">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div className="mb-4">
            {" "}
            <button
              type="button"
              className="w-full py-2  font-bold bg-blue-400 text-white rounded"
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
