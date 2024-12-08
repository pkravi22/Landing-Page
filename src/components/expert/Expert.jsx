import React from 'react';
import Experts from './ExpertData';

const Expert = () => {
  return (
    <div className="max-w-6xl mx-auto  mt-16 px-4 py-8">
      <h2 className="text-3xl text-center mb-4 uppercase">1000+ industry experts</h2>
      <h2 className="text-4xl  text-center font-bold mb-4">Learn AI & Data Science directly from industry veterans</h2>
      <div className="grid grid-cols-1  sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {Experts.map((expert, index) => (
          <div key={index} className="bg-white p-1 flex flex-col items-center">
            <img 
              src={expert.picture} 
              alt={expert.name} 
              className=" w-[300px] h-auto  sm:w-32 md:w-32 lg:w-32 object-cover rounded-tl-lg rounded-tr-lg mb-2" 
            />
            <h3 className="text-xl font-semibold">{expert.name}</h3>
            <p className="text-gray-600">{expert.college}</p>
            <p className="text-gray-600">{expert.position}</p>
            <p className="text-gray-500">{expert.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expert;
