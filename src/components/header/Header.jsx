import React from "react";
import newtonschool from "../../assets/images/newtonschool.png";
import { CiCircleInfo } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header  py-4 fixed top-0 left-0 w-full bg-white z-50 shadow-md  ">
      <div className="flex  mb-0 justify-between px-1 sm:px-4     ">
        <div className="  ">
          <img
            src={newtonschool}
            alt="Newton School Logo"
            className="w-[100px] sm:w-[200px] sm:h-auto  "
          />
        </div>
        <div className="contact-info flex-nowrap    ">
          <div className="w-full flex relative items-center">
            <div>
              <a
                href="/"
                className="flex flex-nowrap px-1 py-1 sm:py-2 sm:px-3 bg-[#086cd9] gap-1 text-white rounded-md"
              >
                <div className="py-1">
                  <IoCallOutline />
                </div>
                <div>
                  <a
                    href={`tel:${+917752810581}`}
                    className=" transition duration-300"
                  >
                    Call Customer Now
                  </a>
                </div>
              </a>
            </div>
            <div className="ml-1 opacity-80">
              <CiCircleInfo size={25} />
            </div>
          </div>

          <div className="flex  mt-2.5 sm:flex-row md:flex-row lg:flex-row ">
            <div className="text-center  text-sm pr-8">
              Or Give us a call at <span>+913233347488</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
