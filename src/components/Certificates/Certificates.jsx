import src from "@emotion/styled";

import React from "react";
import Certificate from "../../assets/images/Certificate.png";
const Certificates = () => {
  return (
    <section className="flex flex-col lg:flex-row md:flex-row items-center  px-8 justify-between pb-8 pt-[80px] mb-[72px] bg-white">
      {/* Left Column */}
      <div className="lg:w-1/2 md:w-1/2 w-full space-y-4 flex flex-col gap-8">
        <p className="text-gray-500">Sample Certificate</p>
        <h1 className="text-4xl font-bold text-gray-900">
          Get a professional certificate
        </h1>
        <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-gray-700">
          Add it to your LinkedIn profile, resume, or CV.
        </p>
        <p className="text-lg font-semibold text-gray-700">
          Additionally receive 9 internship certificates
        </p>
        <p className="text-lg font-semibold text-gray-700">
        Highlight it during your performance evaluation.
        </p>
        </div>
       
        
      </div>

    
      <div className=" w-90 h-auto mt-16 lg:mt-0 flex flex-col  items-center rounded-md border border-gray-500">
        <img
          src={Certificate} // Replace with certificate image URL
          alt="Certificate"
          className="w-full max-w-md object-contain"
        />
       
      </div>
    </section>
  );
};

export default Certificates;
