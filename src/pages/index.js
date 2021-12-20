import React, { useState } from "react";
import FooterNew from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObj } from "../components/InfoSection/data";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import ExperienceNewIcons from "../components/ExperienceNewIcons";
import { TeamData } from "../components/Team/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <InfoSection {...homeObj} />
      <Team {...TeamData}/>
      <ExperienceNewIcons />
      <FooterNew />
    </>
  );
};

export default Home;
