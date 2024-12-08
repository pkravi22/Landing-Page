import React from "react";
import Founders from "../../assets/images/Founder.webp";
import Founder1 from "../../assets/images/Founder1.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Founder2 from "../../assets/images/Founder2.webp";
import src from "@emotion/styled";

const FounderSection = () => {
  return (
    <div className="grid grid-cols-1 mt-16 px-8 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      <div className="pb-16">
        <div className="flex flex-col-reverse  items-center lg:flex-row gap-6 ">
          <div className=" w-full md:[500px] lg:w-1/2 ">
            <img
              src={Founders}
              alt=""
              className=" md:w-[500px] rounded-l-3xl rounded-r-lg lg:w-full"
            />
          </div>
          <div className="   w-full md:w-full lg:w-1/2  py-4">
            <h2 className="text-4xl font-bold mb=4">Note from Founders</h2>
            <p className="text-slate-700 mb-0 font-sans">
              “India is filled with untapped potential in the field of data
              analysis and decision-making, and Newton School’s Professional
              Certification in Data Science and Artificial Intelligence will
              lead to job opportunities in this field. We have created an
              outcome-oriented learning program that includes live sessions from
              experts such as an ML Engineer from Google and other top
              companies. Within a short period of time, we already have over a
              hundred students enrolled for the course, who come from different
              backgrounds with unique stories to tell. To improve our users'
              experiences and learning, we pledge to provide lifetime placement
              assistance, allowing their careers to be protected and supported
              during these difficult times."
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-3xl">Meet the founders</h1>
        <a href="/">
          <button className="border-2 border-gray-400 rounded-md px-4 py-2">
            Know the team
          </button>
        </a>
      </div>

      {/* Child Div 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 justify-center items-center justify ">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className=" relative  my-auto">
            <img
              src={Founder1}
              alt="Placeholder"
              className=" rounded-md sm:w-[150px]"
            />
            <div className="absolute right-12 rounded-md shadow-md bg-white p-2 flex bottom-4 ">
              <FaLinkedin className="m-1"/>
              <FaSquareXTwitter className="m-1"/>
            </div>
          </div>
          <div className="p-2 ">
            <p>Sidharth</p>
            <p>Ex-IIT Roorkee</p>
            <p>Founder & CEO</p>
            <p>Forbes Asia 30 Under 30: 2022</p>
            <p>Forbes India 30 Under 30</p>
            <p>Entrepreneur India: Startup Leader of the Year</p>
          </div>
        </div>

        {/* Child Div 2 */}
        <div className="grid grid-cols-2 gap-4">
          <div className=" relative my-auto">
            <img
              src={Founder1}
              alt="Placeholder"
              className="rounded-md sm:w-[150px] "
            />
            <div className="absolute right-12  rounded-md shadow-md bg-white p-2 flex bottom-4 ">
              <FaLinkedin className="m-1" />
              <FaSquareXTwitter className="m-1" />
            </div>
          </div>
          <div className="p-2">
            <p>John Doe</p>
            <p>Ex-IIT Bombay</p>
            <p>CTO</p>
            <p>MIT Technology Review Innovator Under 35</p>
            <p>Forbes India 30 Under 30</p>
            <p>Tech Startup Leader</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FounderSection;
