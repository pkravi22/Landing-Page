
import React from 'react';

import partners from "../../assets/images/partners.webp";
const WhyNewton = () => {
  return (
    <div className="px-4 py-8 lg:py-12 lg:px-20">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">WHY NEWTON SCHOOL</h2>
      <p className="text-center text-2xl font-semibold text-gray-700 mb-8">
        Data Science and AI course with the best learning experience
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* First Column */}
        <div className="bg-white rounded-lg p-6">
          <img src={partners} alt="Hiring Partners" className="w-80 h-auto object-contain mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">2000+ Hiring Partners</h3>
          <p className="text-gray-500">
            Company-specific preparation for cracking interviews at top enterprises, SaaS, and analytics companies, as
            well as unicorn startups.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-white rounded-lg p-6">
          <img src={partners} alt="Students Placed" className="w-80 h-auto object-contain mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">3000+ Students Placed</h3>
          <p className="text-gray-500">
            We’ve placed more than 2500 students from varied backgrounds - tech, non-tech, arts, commerce, as well as
            working professionals.
          </p>
        </div>

        {/* Third Column */}
        <div className="bg-white  rounded-lg p-6">
          <img src={partners} alt="Average Package" className="w-80 h-auto object-contain mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">₹8-12 LPA Average Package</h3>
          <p className="text-gray-500">
            While we believe that all-round education in AI & Data Science will open up a lot of possibilities for jobs
            with different salaries, our placements combined have an average package of ₹8-12 LPA.
          </p>
         
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Fourth Column */}
        <div className="bg-white  rounded-lg p-6">
          <img src={partners} alt="Mentor Hours" className="w-80 h-auto object-contain mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">500+ Mentor Hours</h3>
          <p className="text-gray-500">
            1:1 mentorship sessions with assigned mentors working at the best tech companies in the world, like Google,
            Amazon, to guide you throughout the course and your career.
          </p>
        </div>

        {/* Fifth Column */}
        <div className="bg-white  rounded-lg p-6">
          <img src={partners} alt="Mock Interviews" className="w-80 h-auto object-contain mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">Unlimited Mock Interviews</h3>
          <p className="text-gray-500">
            Develop your soft skills to be able to pitch yourselves to recruiters and highlight your talent with
            unlimited AI-powered mock interviews.
          </p>
        </div>

        {/* Sixth Column */}
        <div className="bg-white  rounded-lg p-6">
          <img src={partners} alt="AI Teaching Assistant" className="w-80 h-auto object-contain mb-4" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">AI Teaching Assistant</h3>
          <p className="text-gray-500">
            Never worry about a concept or a question, or an entire assignment. Enjoy real-time doubt solving through
            AI-powered teaching assistants.
          </p>
        </div>
      </div>
    </div>
  );
};



export default WhyNewton