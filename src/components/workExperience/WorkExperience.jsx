import React from "react";
import Card from "./Card";
import microIntern from "../../assets/images/microIntern.jpg";
import resume from "../../assets/images/resume.jpg";
import contact from "../../assets/images/contact.jpg";
const WorkExperience = () => {
  const services = [
    {
      id: 1,
      url: "{ microIntern }",
      title: "Virtual Micro INternship",
      discription:
        " Get 9 certificates  from renowned compnies including Kpmg .PWC ,IBM eytc as a part of your course",
    },
    {
      id: 1,
      url: "{ resume}",
      title: "Resume Screening",
      discription:
        " Get 9 certificates  from renowned compnies including Kpmg .PWC ,IBM eytc as a part of your course from renowned compnies including Kpmg .P",
    },
    {
      id: 1,
      url: "{contact}",
      title: "Virtual Micro INternship",
      discription:
        " Get 9 certificates  from renowned compnies including Kpmg .PWC ,IBM eytc as a part of your course",
    },
  ];

  return (
    <div className=" p-4 mb-8 ">
      <div>
        <p className="text-[#090f1d] mb-0 pb-2.5 text-[26px] sm:text-[32px] md:text-[32px] lg:text-[32px] font-bold tracking-tight leading-2 ">
          Gain virtual work experience with our certification in Data Science &
          Artificial Intelligence
        </p>
        <p className="text-[#090f1d] text-lg sm:text-base font-bold leading-[1.333em] mb-8">
          Micro-Internships with top data companies
        </p>
        <div className="flex flex-col gap-8 px-2 justify-center sm:flex-row sm:w-100  ">
          <Card service={services[0]} url={microIntern} />
          <Card service={services[1]} url={resume} />
          <Card service={services[2]} url={contact} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WorkExperience;
