import React from "react";
import { CiCircleCheck } from "react-icons/ci";
const Feesection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 ">
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Admission and Fee Details</h2>
        <p className="text-gray-600">
          Admission into our courses involves a simple four-stage process. Below
          you will find the details of the admission process and the fee
          structure. Once the admission process is completed, you can proceed to
          pay your fees online.
        </p>
      </div>

      {/* Main Container for Process and Fee Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 items-center">
        {/* Admission Process */}
        <div >
          <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
          <div className=" flex flex-col gap-2 space-y-2  ">
            <div className=" pl-0">
              <h4 className="text-xl font-semibold">Step 1</h4>
              <p className="text-gray-600">
                Register for the course by filling out the online application
                form.
              </p>
            </div>
            <div className=" pl-0">
              <h4 className="text-xl font-semibold">Step 2</h4>
              <p className="text-gray-600">
                Appear for the entrance test to qualify for admission.
              </p>
            </div>
            <div className=" pl-0">
              <h4 className="text-xl font-semibold">Step 3</h4>
              <p className="text-gray-600">
              On clearing the Screening Round, receive offer letter and scholarship, if eligible for getting schlorship.
              </p>
            </div>
            <div className=" pl-0">
              <h4 className="text-xl font-semibold">Step 4</h4>
              <p className="text-gray-600">
                Receive confirmation and proceed to pay the course fees.
              </p>
            </div>
          </div>
        </div>

       
        <div className="bg-green-700 pt-2 px-2 rounded-lg">
          <h3 className="text-center p-2">Get Scholrship of worth 100000</h3>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg mb-2">
            <div className="flex flex-col ">
              <div className="flex  flex-wrap   gap-4 ">
                <div className="w-1/2">
                  <p className=" flex-1 text-2xl font-bold text-gray-600 mb-2">
                    The total course fee
                  </p>
                  <p className="flex flex-wrap w-50">Includes 6 month of pre-course content for free hwl.</p>
                </div>
                <div className=" flex-1 w-50 text-3xl   font-bold">2.23 Lakh</div>
              </div>

              <div >
                <ul className=" py-4 flex flex-col  gap-2 ">
                  <div className="flex flex-nowrap items-center gap-2">
                   <CiCircleCheck/>
                    <li>Flexible course duration according to your liking</li>
                  </div>
                  <div className="flex flex-nowrap items-center gap-2">
                  <CiCircleCheck/>
                  <li>Lifetime career assistance</li>
                  </div>
                 <div className="flex flex-nowrap items-center gap-2">
                 <CiCircleCheck/>
                   <li>Alumni community access with 2500+ professionals</li>
                 </div>
                 <div className="flex flex-nowrap items-center gap-2">
                 <CiCircleCheck/>
                   <li>Easy EMI available from ₹7232 per month</li>
                 </div>
                 <div className="flex flex-nowrap items-center gap-2">
                 <CiCircleCheck/>
                   <li>Easy EMI available from ₹7232 per month</li>
                 </div>

                  
                </ul>
              </div>
              <p className="text-center">Want to know if you're eligible for a scholarship?</p>
            </div>

            <button className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg">
              Get in touch with Counselor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feesection;
