import React from "react";
import Fade from "react-reveal";
import { Button } from "../ButtonElement";
import { animateScroll as scroll, Element } from "react-scroll";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
  CTAP,
  ExperienceCol,
} from "./ExperienceElements";
import { FaCarBattery, FaDollarSign, FaSolarPanel } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const ExperienceNewIcons = ({
  id,
  sectionTitle,
  lightBg,
  oneTopLine,
  oneHeadline,
  oneDescription,
  oneImg,
  oneAlt,
  oneLink,
  twoLink,
  twoTopLine,
  twoHeadline,
  twoDescription,
  twoImg,
  twoAlt,
  threeLink,
  threeTopLine,
  threeHeadline,
  threeDescription,
  threeImg,
  threeAlt,
  fourLink,
  fourTopLine,
  fourHeadline,
  fourDescription,
  fourImg,
  fourAlt,
  fiveTopLine,
  fiveHeadline,
  fiveDescription,
  fiveImg,
  fiveAlt,
  fiveLink,
  sixLink,
  sixTopLine,
  sixHeadline,
  sixDescription,
  sixImg,
  sixAlt,
  sevenLink,
  sevenTopLine,
  sevenHeadline,
  sevenDescription,
  sevenImg,
  sevenAlt,
  eightLink,
  eightTopLine,
  eightHeadline,
  eightDescription,
  eightImg,
  eightAlt,
}) => {
  const toggleHome = () => {
    scroll.scrollToTop({
      duration: 75,
      delay: -10,
      smooth: "easeOutQuint",
    });
  };
  return (
    <Element id="experience">
      <IconContext.Provider value={{color:"#0045ff", size:"3rem"}}>
      <ServicesContainer id={id}>
        <Fade bottom>
          <ServicesH1>With World Class Experience</ServicesH1>
        </Fade>
        <ServicesWrapper>
          <Fade bottom cascade>
          <ExperienceCol>
            <FaSolarPanel className="mb-5 mt-2"/>
            <ServicesH2>3GW</ServicesH2>
            <ServicesP>
              Projects Developed, Acquired, and/or Constructed
            </ServicesP>
            <ServicesH2>1000+</ServicesH2>
            <ServicesP>
              Sites Developed, Acquired, and/or Constructed
            </ServicesP>
            <ServicesH2>25+</ServicesH2>
            <ServicesP>
              States Where We've Constructed or Acquired Projects
            </ServicesP>
          </ExperienceCol>
          </Fade>
          <Fade bottom cascade>
          <ExperienceCol className='text-center'>
            <FaDollarSign className="mb-5 mt-2" />
            <ServicesH2>$3bn</ServicesH2>
            <ServicesP>
              Equity Capital Invested
            </ServicesP>
            <ServicesH2>10+</ServicesH2>
            <ServicesP>
              Tax Equity Providers Diligenced or Closed
            </ServicesP>
            <ServicesH2>30+</ServicesH2>
            <ServicesP>
              Portfolio Financings Closed
            </ServicesP>
          </ExperienceCol>
          </Fade>
          <Fade bottom cascade>
          <ExperienceCol className='text-center'>
            <FaCarBattery className="mb-5 mt-2"/>
            <ServicesH2>250MW / 1GWH+</ServicesH2>
            <ServicesP>
              Storage Transactions Closed
            </ServicesP>
            <ServicesH2>10+</ServicesH2>
            <ServicesP>
              Storage Integrator Relationships
            </ServicesP>
            <ServicesH2>50+</ServicesH2>
            <ServicesP>
              Storage Transactions Closed
            </ServicesP>
          </ExperienceCol>
          </Fade>
        </ServicesWrapper>
        <Fade bottom cascade>
        <CTAP>Contact Us For a Full List of Our Quals</CTAP>
        <Button onClick={toggleHome} to="/contact">
          Contact Us
        </Button>
        </Fade>
      </ServicesContainer>
      </IconContext.Provider>
    </Element>
  );
};

export default ExperienceNewIcons;
