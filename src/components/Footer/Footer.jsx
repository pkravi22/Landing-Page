import React from "react";
import { FaGoogle, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import newtonschool from "../../assets/images/newtonschool.png";

const Footer = () => {
  return (
    <div className="w-full border border-gray-300 max-w-full overflow-x-hidden pt-4 px-1 sm:px-8">
      <div className="px-2 sm:px-8">
        <div>
          <div className="w-[199px]">
            <img
              src={newtonschool}
              alt="Newton School Logo"
              className="max-w-full h-auto mb-8"
            />
          </div>
          <p className="text-slate-700">
            Building phenomenal outcomes with industry-oriented tech education.
          </p>
        </div>
        {/* Grid Layout for Footer Sections */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-start">
          {/* Courses Section */}
          <div className="py-4 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold py-2">Courses</h2>
            <ul className="grid grid-cols-1 gap-4">
              <li>Professional Certification in Data Science and AI</li>
              <li>Professional Certification in Data Science</li>
              <li>Professional Certification AI</li>
              <li>Professional Data Science and AI</li>
              <li>Professional Certification in Data and AI</li>
              <li>Professional Certification</li>
            </ul>
          </div>
          {/* Company Section */}
          <div className="py-4 col-span-1">
            <h3 className="text-xl font-semibold py-2">Company</h3>
            <ul className="grid grid-cols-1 gap-4">
              <li>Facebook</li>
              <li>Google</li>
              <li>Airbus</li>
              <li>Zomato</li>
              <li>American</li>
              <li>IBM</li>
            </ul>
          </div>
          {/* More Section */}
          <div className="py-4 col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-semibold py-2">More</h3>
            <ul className="grid grid-cols-1 gap-4">
              <li>Coderush</li>
              <li>Games</li>
              <li>Playground</li>
              <li>Teach At Newton</li>
              <li>Sign in</li>
            </ul>
          </div>
          {/* AI Tools Section */}
          <div className="py-4 justify-self-start col-span-1">
            <h3 className="text-xl font-semibold py-2 mb-4">AI Tools</h3>
            <ul className="grid grid-cols-1 gap-2">
              <li>Question of the Day</li>
              <li>AI Tryout</li>
            </ul>
            <p className="pt-8">Follow Us</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 py-4">
              <a href="">
                <FaGoogle className="p-1 text-2xl text-blue-500" />
              </a>
              <a href="">
                <FaFacebookF className="p-1 text-2xl text-blue-500" />
              </a>
              <a href="">
                <FaInstagram className="p-1 text-2xl text-blue-500" />
              </a>
              <a href="">
                <FaTwitter className="p-1 text-2xl text-blue-500" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom Links */}
        <div className="border-t border-gray-300 py-8">
          <div className="w-full md:w-70 lg:w-full  sm:justify-end  grid grid-cols-3  sm:justify-self-end md:justify-self-end text-base text-[#374151] gap-2">
            <a href="" className="text-center">
              Terms & Condition
            </a>
            <a href="" className="text-center">
              Privacy Policy
            </a>
            <a href="" className="text-center">
              Grievance Redressal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
