import { blue } from "@mui/material/colors";
import React from "react";
import { AiOutlineLaptop } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full text-white min-h-14 bg-[#c11574] text-center ">
      <div className="flex justify-center  items-center  gap-10 sm:gap-0">
        <div className="flex items-center  cursor-pointer gap-1">
          <div className= "text-md text-white sm:text-center text-left sm:text-xl not-italic font-normal leading-9 tracking-[-0.4px] font-custom">
            💻 Need Help?
          </div>
        </div>
        <div className="flex min-h-[48px] justify-center items-center pl-1.5 pr-[15px] py-3 rounded-[5px] bg-[#c11574]">
          <a
            href="/"
            className=" text-white text-center  text-md sm:text-[21.6px] not-italic font-400 leading-[28.79px] tracking-[-0.432px] underline "
          >
            Request Callback
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
