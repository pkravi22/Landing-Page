import src from '@emotion/styled';
import React from 'react';

import { FaRegHandPointer } from 'react-icons/fa';
import Fractal from "../../assets/images/Fractal.png";
const Practical = () => {
  const projects = [
    {
      logo: "Mu Sigma",
      description: "Financial Planning Transformation for a Leading Specialty Fortune 500 Retailer",
      domain: "Domain: Marketing",
    },
    {
      logo: "Fractal",
      description: "Using Behavioural Science & Human Centered Design for HIV Prevention",
      domain: "Domain: Healthcare",
    },
    {
      logo: "Tiger Analytics",
      description: "Risk Analytic Solution for Engineering Firm - High Risk projects",
      domain: "Domain: Construction and Real Estate",
    },
    {
      logo: "Tiger Analytics",
      description: "Enabling Better Decision Making: Streamlining Distribution Centre Data Systems for a Leading Retailer",
      domain: "Domain: Construction and Real Estate",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 py-10">
      <h2 className="text-[#090f1d] mb-0 pb-2.5 text-[26px] sm:text-[32px] md:text-[32px] lg:text-[32px] font-bold tracking-tight leading-2 ">Data Science and Artificial Intelligence certification with practical learning</h2>
      <p className="'text-slate-500 text-[15px] font-custom tracking-tight mb-8">Don't just learn. Learn by working on real-world projects and build a top-notch resume that stands out in front of recruiters.</p>
      <hr />
      <h3 className="text-2xl font-semibold mb-4">Live projects</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-2">
        {projects.map((project, index) => (
          <div key={index} className="">
            <div className="flex items-center mb-2">
              <img src={Fractal} alt={project.logo} className="h-12 mr-2" />
              
            </div>
            <p className=" font-bold text-gray-700 mb-1">{project.description}</p>
            <p className="text-xs text-gray-500">{project.domain}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Practical;
