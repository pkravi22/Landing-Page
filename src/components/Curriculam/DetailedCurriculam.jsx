import React from "react";

// Reusable component to display detailed curriculum for a section
const DetailedCurriculum = ({ section }) => {
  return (
    <div className="m-2  p-4 flex flex-col gap-6">
      <div className="rounded-md bg-gray-100 p-4">
        {" "}
        <h3 className="text-xl  mb-2">Today You will learn</h3>
        {/* Render Topics */}
        <div className="mb-4">
          <h4 className="font-semibold">Some of the concept you will learn:</h4>
          <ul className="list-disc ml-5">
            {section.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
<div className="">{/* Batch Details */}
      <div className="  grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.batches.map((batch, index) => (
          <div key={index} className="p-6 border bg-gray-100 border-gray-300 rounded-md">
            <h4 className="font-semibold border-b-2 p-2">Batch details</h4>
            <p>Timing: {batch.timing}</p>
            <p>Days: {batch.days}</p>
          </div>
        ))}
      </div></div>
      
    </div>
  );
};

export default DetailedCurriculum;
