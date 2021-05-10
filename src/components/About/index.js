import React from "react";
import { Element } from "react-scroll";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  TextWrapper,
  TopLine,
  Subtitle,
  // BtnWrap,
  // Heading,
  AboutH1,
} from "./AboutElements";
import Fade from "react-reveal";

const About = () => {

  return (
    <>
      <Element name="about">
        <AboutContainer lightBg={false}>
          <AboutWrapper>
            <AboutRow>
              <Fade bottom>
              <AboutH1>Our Mission: Build Great Clean Energy Projects</AboutH1>
              </Fade>
              <TextWrapper>
                <Fade cascade>
                  <TopLine>Who We Are</TopLine>
                  <Subtitle>
                  Euclid Power is a renewable energy company that helps renewables developers and investors develop, diligence, execute, and asset-manage renewables projects. Euclid provides a transformative data and project management platform alongside value-add services to guide developers and investors through execution on complex projects at all stages of the project lifecycle. Euclid is led by a world-class team of industry-leading veterans within renewable energy project development, diligence, finance, and execution with over 3GW of PV and 1GWh of energy storage experience. We have developed the diligence, investing, and execution process for some of the industry’s leading developers and investors including Goldman Sachs Renewable Power, Blackstone (Onyx), GE Solar, Generate Capital, and True Green Capital. Our results-centered approach focuses on success for our clients no matter the project stage, size, or challenge.
                  </Subtitle>
                  <TopLine>We do not believe in shortcuts</TopLine>
                  <Subtitle>
                  We have developed the diligence, investing, and execution process for some of the industry’s leading developers and investors. We work alongside our clients to put every portfolio or project through our proven execution process to ensure execution certainty and success. Our process relies on the data and the details. We track and manage every aspect of a project to identify risks long before others can, and our results speak for themselves. Through our comprehensive firsthand experience, we are skilled in seeing the seemingly unforeseeable and we approach every project as if we were the ultimate long term asset owner.
                  </Subtitle>
                  <TopLine>Execution Ethos</TopLine>
                  <Subtitle>
                  We are passionate about renewables, and we work with our clients to get their projects developed, managed, and built right: on time, on budget, and with results that speak for themselves. 
                  </Subtitle>
                </Fade>
              </TextWrapper>
            </AboutRow>
          </AboutWrapper>
        </AboutContainer>
      </Element>
    </>
  );
};

export default About;
