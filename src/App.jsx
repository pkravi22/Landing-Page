import React, { useState } from "react";
import Header from "./components/header/Header";

import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import AlumniStory from "./components/AluminiStory/AlumniStory";

import Alumni from "./components/AlumniConnect/Alumni";
import Expert from "./components/expert/Expert";
import Curriculum from "./components/Curriculam/Curriculam";
import LearnMore from "./components/LearnMore/LearnMore";

import NewCourses from "./components/NewCourses/NewCourses";
import Practical from "./components/practical/Practical";
import WorkExperience from "./components/workExperience/WorkExperience";
import Partners from "./components/PartnerCompanies/Partners";
import FounderSection from "./components/FounderSection/FounderSection";
import Footer from "./components/Footer/Footer";
import EmailContact from "./components/EmailContact/EmailContact";
import FaqsSection from "./components/FaqSection/FaqsSection";
import Feesection from "./components/FeeSection/Feesection";
import Certificates from "./components/Certificates/Certificates";
import WhyNewton from "./components/WhyNewton/WhyNewton";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <AlumniStory />
      <Alumni />
      <Expert />
      <Curriculum />
      <LearnMore />
      <NewCourses />
      <Practical />
      <WorkExperience />
      <Partners />
      <FounderSection />
<WhyNewton/>
      <EmailContact />
      <Feesection/>
      <Certificates/>
    <FaqsSection/>
      <EmailContact/>
      <Footer />
      <Banner/>
    </div>
  );
}

export default App;
