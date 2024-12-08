import React from "react";
import AlumniConnect from "./AlumniConnect";

const Alumni = () => {
  return (
    <div>
      <div className=" ">
        <p className=" text-3xl  sm:text-4xl md:text-4xl lg:text-4xl text-center  font-semibold mb-2">Discover & connect with Alumni</p>
        <p className="text-sm   sm:text-4xl md:text-4xl lg:text-4xl text-center   ">
          who have walked the same path as you
        </p>
      </div>
      <div>
        <AlumniConnect />
      </div>
      <div className="flex flex-col mt-24 justify-center items-center">
        <p className="text-sm  text-center">
          WANT TO KNOW MORE ABOUT PLACEMENT STORIES
        </p>
        <p className="text-sm text-center font-bold">AT NEWTON SCHOOL?</p>

        <button className="text-md  p-2 my-1 bg-black text-white  font-semibold  w-auto mx-auto rounded-md">
          Explore More Stories
        </button>

        <button className="text-md bg-blue-600  text-white font-semibold p-2 my-1 w-auto mx-auto rounded-md">
          Request to connect with alumni
        </button>
      </div>
    </div>
  );
};

export default Alumni;
