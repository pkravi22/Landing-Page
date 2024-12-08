import src from '@emotion/styled';
import React from 'react';


const Placements = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Data Science and Artificial Intelligence Course Placement Support</h2>
      <p className="text-lg mb-4">A dedicated career services team at your disposal.</p>
      <div className="flex justify-between items-center mb-4">
        <img src="https://www.newtonschool.co/images/logos/Newton-School-Logo.svg" alt="Newton School Logo" className="h-12" />
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Call a Counsellor Now</button>
          <p className="text-gray-700">Or Give us a call at +91 9845215909</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l7.5-7.5 7.5 7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-bold mb-2">Softskill preparation</h3>
          <p className="text-gray-700">We place a strong emphasis on developing soft skills and business communication and other skills which would help you stand out during the interview process.</p>
        </div>
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-7.5-7.5 7.5-7.5M5 18H9m10 0H21M5 18V12a9 9 0 0118 0v6" />
          </svg>
          <h3 className="text-lg font-bold mb-2">Receive personalized guidance</h3>
          <p className="text-gray-700">Your personal mentor will help you build your resume, LinkedIn profile, and guide you through the entire process.</p>
        </div>
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15L8.25 7.5m7.5 7.5-7.5-7.5M12 15l3-3m-3 3l-3-3" />
          </svg>
          <h3 className="text-lg font-bold mb-2">Interview with our hiring partners</h3>
          <p className="text-gray-700">You will receive interview opportunities from the best product companies in India with our network of 1500+ hiring partners, including Epsilon, Google, Axis Bank, SpiceJet, and many more.</p>
        </div>
      </div>
    </div>
  );
};



export default Placements