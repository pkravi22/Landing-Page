import React from "react";

const LearnMore = () => {
  return (
    <div className="bg-white px-6 my-4 md:px-12 py-[20px]">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          NEWTON SCHOOL'S DATA SCIENCE AND AI COURSE
        </h1>
        <p className="text-xl md:text-2xl font-semibold mt-4">
          The catalyst for your Data Science and Artificial Intelligence career
        </p>
      </div>

      {/* Feature Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <div className=" flex p-4 border-r ">
          <div className="mb-4">
            <span className="text-4xl">💬</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Learn with 20+ live projects</h2>
            <p className="text-gray-500 mt-2">
            Practical-first approach with 20+ live projects on real data sets by 
            MuSigma, Fractal, Tiger Analytics, Teg Analytics, and build an unmistakable resume.
             Projects to enhance your skills in Data Science and Artificial Intelligence.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className=" flex p-6  lg:border-r">
          <div className="mb-4">
            <span className="text-4xl">📚</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Taught from scratch</h2>
            <p className="text-gray-500 mt-2">
            Practical-first approach with 20+ live projects on real data sets by MuSigma, Fractal, Tiger Analytics, Teg Analytics, and build an unmistakable resume. Projects to enhance your skills in Data Science and Artificial Intelligence.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" flex p-6 border-r ">
          <div className="mb-4">
            <span className="text-4xl">🧑‍🏫</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Personalized mentorship</h2>
            <p className="text-gray-500 mt-2">
            Practical-first approach with 20+ live projects on real data sets by MuSigma, Fractal, Tiger Analytics, Teg Analytics, and build an unmistakable resume. Projects to enhance your skills in Data Science and Artificial Intelligence.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className=" flex p-6 lg:border-r ">
          <div className="mb-4">
            <span className="text-4xl">🏢</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Personal placement office</h2>
            <p className="text-gray-500 mt-2">
            Practical-first approach with 20+ live projects on real data sets by MuSigma, Fractal, Tiger Analytics, Teg Analytics, and build an unmistakable resume. Projects to enhance your skills in Data Science and Artificial Intelligence.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className=" flex p-6 border-r ">
          <div className="mb-4">
            <span className="text-4xl">💼</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Unlimited mock interviews</h2>
            <p className="text-gray-500 mt-2">
            Practical-first approach with 20+ live projects on real data sets by MuSigma, Fractal, Tiger Analytics, Teg Analytics, and build an unmistakable resume. Projects to enhance your skills in Data Science and Artificial Intelligence.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className=" flex p-6  ">
          <div className="mb-4">
            <span className="text-4xl">⭐</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Lifetime placement assistance</h2>
            <p className="text-gray-500 mt-2">
            Practical-first approach with 20+ live projects on real data sets by MuSigma, Fractal, Tiger Analytics, Teg Analytics, and build an unmistakable resume. Projects to enhance your skills in Data Science and Artificial Intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-12">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
          Sign Up
        </button>
        <button className="bg-gray-200 text-black px-6 py-3 rounded-lg">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
