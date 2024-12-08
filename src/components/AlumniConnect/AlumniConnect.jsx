import React, { useState } from "react";
import alumni from "./AlumniData"; // Ensure this is an array
import Alumni1 from "../../assets/images/alumini1.jpeg";
import Alumni2 from "../../assets/images/alumini2.jpeg";
import Alumni3 from "../../assets/images/alumini3.jpeg";
import Alumni4 from "../../assets/images/alumni4.webp";

import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const AlumniConnect = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const isPhone = window.innerWidth < 640;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAlumni = alumni.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < alumni.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" mx-auto  mt-4 px-4 py-8">
      <div className="sm:hidden">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            src={
              currentIndex === 0
                ? Alumni1
                : currentIndex === 1
                ? Alumni2
                : currentIndex === 2
                ? Alumni3
                : Alumni4
            }
            alt={`Alumni ${currentIndex + 1}`}
            className="w-100 h-auto rounded-md"
          />
          <h2 className="text-xl font-semibold mb-2">
            {alumni[currentIndex].name}
          </h2>
          <p className="text-gray-700">
            Company:{" "}
            <span className="font-medium">
              {alumni[currentIndex].companyName}
            </span>
          </p>

          <div className="grid grid-cols-3 mt-4 justify-center items-center px-16">
            <div className="mx-auto">
              <div className="px-2 font-semibold border text-center text-orange-300 w-auto border-orange-300 rounded-xl uppercase text-xs sm:text-sm">
                Before
              </div>
              <div className="font-bold">
                {alumni[currentIndex].positionBefore}
              </div>
            </div>
            <div className="mx-auto">
              <div>{">>"}</div>
            </div>
            <div className="mx-auto">
              <div className="px-0 font-semibold border text-center text-green-300 w-auto border-green-300 rounded-xl uppercase text-sm">
                After
              </div>
              <div className="font-bold">
                {alumni[currentIndex].positionStart}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          {alumni.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCircleClick(index)}
              className={`w-4 h-4 rounded-full mx-1 ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {currentAlumni.map((member, index) => (
          <div
            key={index}
            className="border border-gray-200 p-2 pb-8 rounded-lg"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={
                  index === 0
                    ? Alumni1
                    : index === 1
                    ? Alumni2
                    : index === 2
                    ? Alumni3
                    : Alumni4
                }
                alt={`Alumni ${index + 1}`}
                className="w-full h-auto rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-gray-700">
                Company:{" "}
                <span className="font-medium">{member.companyName}</span>
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="flex items-center">
                <div className="text-center mr-4">
                  <div className="px-2 py-1 font-semibold border text-orange-300 border-orange-300 rounded-xl uppercase text-sm">
                    Before
                  </div>
                  <div className="font-bold">{member.positionBefore}</div>
                </div>

                <div className="mx-4 text-lg text-gray-500">{">>"}</div>

                <div className="text-center ml-4">
                  <div className="px-0 py-0 font-semibold border text-green-300 border-green-300 rounded-xl uppercase text-sm">
                    After
                  </div>
                  <div className="font-bold">{member.positionStart}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:flex justify-center gap-1  mt-6">
        <button
          onClick={prevPage}
          className={`px-2 py-2 border boder-gray-400 text-end rounded-full ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 0}
        >
          <GrFormPrevious className="text-2xl" />
        </button>
        <button
          onClick={nextPage}
          className={`px-2 py-2 text-start border boder-gray-300 rounded-full ${
            endIndex >= alumni.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={endIndex >= alumni.length}
        >
          <MdNavigateNext className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default AlumniConnect;
