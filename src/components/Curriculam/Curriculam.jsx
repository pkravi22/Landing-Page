import React, { useState } from "react";
import DetailedCurriculum from "./DetailedCurriculam";
import { RiArrowDropDownLine } from "react-icons/ri";

const Curriculum = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  // Data for all curriculum sections
  const curriculumData = [
    {
      id: 1,
      title: "Section 1: Introduction to Web Development",
      duration: "4 Months",
      phase: "1",
      topics: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      batches: [
        { name: "Batch 1", timing: "9 AM - 11 AM", days: "Mon, Wed, Fri" },
        { name: "Batch 2", timing: "2 PM - 4 PM", days: "Tue, Thu" },
      ],
    },
    {
      id: 2,
      title: "Section 2: Front-End Development",
      duration: "4 Months",
      phase: "2",
      topics: ["React", "Redux", "Tailwind CSS"],
      batches: [
        { name: "Batch 1", timing: "10 AM - 12 PM", days: "Mon, Wed, Fri" },
        { name: "Batch 2", timing: "3 PM - 5 PM", days: "Tue, Thu" },
      ],
    },
    {
      id: 3,
      title: "Section 3: Back-End Development",
      duration: "2 Months",
      phase: "3",
      topics: ["Node.js", "Express", "MongoDB"],
      batches: [
        { name: "Batch 1", timing: "8 AM - 10 AM", days: "Mon, Wed, Fri" },
        { name: "Batch 2", timing: "1 PM - 3 PM", days: "Tue, Thu" },
      ],
    },
    {
      id: 4,
      title: "Section 4: Full-Stack Projects",
      duration: "4 Months",
      phase: "4",
      topics: ["Project 1", "Project 2", "Capstone"],
      batches: [
        { name: "Batch 1", timing: "11 AM - 1 PM", days: "Mon, Wed, Fri" },
        { name: "Batch 2", timing: "4 PM - 6 PM", days: "Tue, Thu" },
      ],
    },
  ];

  // Handle dropdown toggle
  const handleDropdown = (sectionId) => {
    setSelectedSection(selectedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="my-0 ">
      {/* Left Side - Curriculum Path */}
      <p className="text-3xl font-bold px-8">
        Data Science & AI Course - Curriculum
      </p>
      <p className=" w-full sm:w-1/2 felx wrap px-8">
        What you will learn at Newton School's Data Science & Artificial
        Intelligence course with certification
      </p>
      <div className="flex flex-col lg:flex-row justify-between   p-8">
        <div className="w-full lg:w-1/2 bg-[#edf4fe] py-4 px-8 ">
          {/* Render each section with its corresponding dropdown */}
          <div>
            {curriculumData.map((section) => (
              <div
                className=" relative mb-1 flex flex-col py-4   border-b "
                key={section.id}
              >
                <div className="absolute left-[-8px] top-8 w-[15px] h-[15px] bg-blue-200 text-transparent rounded-full">
                  .
                </div>
                <div className="w-[100px] bg-black h-auto"></div>

                <div>
                  <button
                    onClick={() => handleDropdown(section.id)}
                    className="grid grid-cols-4 items-center w-full"
                  >
                    {/* Section title */}
                    <div className="w-full text-left px-4 py-2 text-xl col-span-3 font-bold">
                      {section.title}
                    </div>

                    {/* Dropdown icon */}
                    <div className="w-full col-span-1 flex justify-end">
                      <RiArrowDropDownLine className="  w-[40px] h-[40px]" />{" "}
                      {/* Increase size */}
                    </div>
                  </button>
                </div>

                <div>
                  <span className="w-full text-left px-4    font-semibold">
                    Duration:{section.duration}
                  </span>
                  <span>Phase {section.phase}</span>
                </div>
                {selectedSection === section.id && (
                  <DetailedCurriculum section={section} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-right rounded-md text-white m-2 p-2">
              {" "}
              DownloadBrochure
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-8 border border-grey-400 p-4">
          <h2 className="text-2xl font-bold mb-4">Request Callback</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Highest Qualification
              </label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Select Qualification</option>
                <option>High School</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD</option>
              </select>
            </div>

            {/* Graduation Year */}
            <div>
              <label className="block text-gray-700">Graduation Year</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Select Graduation Year</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
