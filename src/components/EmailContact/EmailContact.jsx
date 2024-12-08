import React from "react";


const EmailContact = () => {
  return (
    <div className="flex mb-24 px-4 justify-center items-center">
      {/* Outer container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 border border-gray-300 bg-gradient-to-r from-violet-200 to-violet-50 py-16 px-8 rounded-lg w-full">
        {/* Heading */}
        <div>
          <h2 className="text-[24px] sm:text-[24px] md:text-[32px] lg:text-[32px] font-bold leading-tight tracking-normal">
            Ready to get started? Create a Newton account today
          </h2>
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <form className="flex flex-col space-y-4">
            <div
              className="
                flex flex-col sm:flex-row md:flex-row lg:flex-row
                items-center gap-4 border bg-no lg: bg-white sm:bg-white md:bg-white w-full rounded-lg py-2 px-4
              "
            >
              {/* Email input */}
              <input
                type="email"
                placeholder="Enter your email"
                className="relative px-4 py-2 w-full focus:outline-none border-none"
              />
              {/* Submit button */}
              <input
                type="submit"
                value="Get Started"
                className="
                  w-full sm:w-full md:w-auto lg:w-auto
                  px-4 py-2 bg-black rounded-lg text-white border border-gray-300
                "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailContact;

