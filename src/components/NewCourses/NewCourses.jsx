import src from "@emotion/styled";
import React from "react";
import companies from "../../assets/images/companies.png";
import { FaChalkboardTeacher, FaUsers, FaPaperPlane } from "react-icons/fa";

const NewCourses = () => {
  return (
    <div className="my-16 py-2.5 tracking-tight  ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mt-15">
        <div className="px-2.5 mt-15 ">
          <div className="container mx-auto mt-12">
            <h2 className="text-4xl  font-bold  mb-0 p-1">
              Artificial Intelligence & Data Science course with industry
              tie-ups for the best outcomes
            </h2>
            <p className=" mb-8 p-2  text-gray-500">
              With a partner network of 1500+ companies, we boast of having a
              strong industry tie-up that you will not find anywhere. Learn with
              folks from your dream companies, prepare for interviews, and get
              your resume forwarded as per your liking.
            </p>
          </div>
          <div className="h-10  ">
            <hr />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-2  ">
              <FaChalkboardTeacher className=" w-[80px] my-2" />
              <div>
                <h3 className="font-semibold text-xl my-1">
                  6+ hours of live classes per week
                </h3>
                <p className=" text-gray-500">
                  Learn with data scientists, data analysts, and business
                  analysts working in your dream companies in live classes that
                  take place from 9-11 PM for 3 days a week and additional 2
                  days of bonus sessions per week.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2 ">
              <FaUsers className=" w-[40px] my-2" />
              <div>
                <h3 className="font-semibold text-xl">
                  Company-specific interview prep
                </h3>
                <p className=" text-gray-500">
                  Stand out with 10+ company-specific interviews that will make
                  your ready for all interviews during placements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2 ">
              <FaPaperPlane className="  w-[60px] my-1" />
              <div>
                <h3 className="font-semibold text-xl">
                  Resume forwarding to companies of your preference
                </h3>
                <p className=" text-gray-500">
                  Tell us what type of companies you want us to forward your
                  resumes to, and get interviews with those on priority. We also
                  take care of other preferences you might have while looking
                  for the perfect job for yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" p-4 ">
            <img src={companies} alt="" className="  w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourses;
