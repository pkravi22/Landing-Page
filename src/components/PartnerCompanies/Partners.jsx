import React from "react";
import cognizant from "../../assets/images/cognizant.png";
import tata from "../../assets/images/tata.png";
import pwc from "../../assets/images/pwc.png";

const Partners = () => {
  const companies = [
    {
      id: 1,
      logo: "Mu Sigma",
      logoUrl: cognizant, // Use imported image directly
      title: "Digital Intelligence",
      description:
        "Work with our digital intelligence teams to deliver PwC expertise to our clients.",
    },
    {
      id: 2,
      logo: "KPMG",
      logoUrl: tata, // Use imported image directly
      title: "Data Analytics",
      description:
        "Analyze data sets and advise a client on customer targeting with the Data, Analytics & Modelling team.",
    },
    {
      id: 3,
      logo: "Accenture",
      logoUrl: pwc, // Use imported image directly
      title: "Navigating Numbers",
      description:
        "Apply your data analytics & visualization skills to advise a social media client on their content creation strategy as a Data Analyst at Accenture.",
    },
    {
      id: 4,
      logo: "Tata Consulting",
      logoUrl: tata,
      title: "Artificial Intelligence",
      description:
        "Artificial Intelligence and advanced consulting solutions to help enterprises.",
    },
    {
      id: 5,
      logo: "Cognizant",
      logoUrl: cognizant,
      title: "Artificial Intelligence",
      description:
        "Advisory and consulting in Artificial Intelligence through expert teams.",
    },
    {
      id: 6,
      logo: "PwC",
      logoUrl: pwc,
      title: "Power BI",
      description:
        "Utilize Power BI to deliver advanced business intelligence solutions.",
    },
  ];

  return (
    <div className=" my-8 px-4 py-8 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-300 py-16">
        {companies.map((company) => (
          <div key={company.id} className=" border-l-2 border-gray-300 p-4">
            <img
              src={company.logoUrl}
              alt={company.logo}
              className="w-[70px] h-auto"
            />
            <h3 className="text-md font-semibold mt-2">{company.title}</h3>
            <p className="text-gray-600 font-semibold mt-1">
              {company.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
