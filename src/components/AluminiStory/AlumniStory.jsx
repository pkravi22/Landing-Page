import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const AlumniStory = () => {
  const videos = [
    {
      title: "Sky High at IndiGo",
      description:
        "Explore Nikhil Choudhary's leap from IIT Guwahati research to Data Science, driven by its market potential. Watch here!",
      thumbnail: "https://via.placeholder.com/150", // Replace with actual URLs
    },
    {
      title: "The Best Birthday Gift",
      description:
        "Relive The Mishra Siblings journey, Siddhanth and Mansi, as they rise over challenges, showcasing resilience and growth in their journey. Watch here!",
      thumbnail: "https://via.placeholder.com/150", // Replace with actual URLs
    },
    {
      title: "Research to IIT",
      description:
        "Prepare to be inspired as learners recount their journey to landing dream jobs at Indigo, powered by Newton School's innovative approach. Watch here!",
      thumbnail: "https://via.placeholder.com/150", // Replace with actual URLs
    },
    {
      title: "From Dream to Reality",
      description:
        "Relive The Mishra Siblings journey, Siddhanth and Mansi, as they rise over challenges, showcasing resilience and growth in their journey. Watch here!",
      thumbnail: "https://via.placeholder.com/150", // Replace with actual URLs
    },
  ];

  const itemsPerPage = 3; // Show 3 videos on larger screens
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentVideos = videos.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" mx-auto px-4 py-16 mt-4">
      <h2 className="text-2xl font-bold mb-4 px-4">Winning with Newton School</h2>
      <p className="mb-2 px-4">Watch what our learners have to say</p>

      {/* Buttons for navigation */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-2 py-2 text-gray-600 border border-gray-500 rounded-full disabled:opacity-50"
        >
          <GrFormPrevious/>
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="px-2 py-1 text-gray-600 border border-gray-500 rounded-full ml-2 disabled:opacity-50"
        >
          <MdNavigateNext/>
        </button>
      </div>

      {/* Video cards container */}
      <div className=" flex gap-4 overflow-hidden">
        {currentVideos.map((video, index) => (
          <div
            key={index}
            className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniStory;
