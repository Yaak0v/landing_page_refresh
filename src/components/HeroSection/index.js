import React, { useState } from "react";
import Video from "../../videos/LandingPageVideoConvertedMOre.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroButton
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted playsinline src={Video} type="video/MP4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Renewables Built Right</HeroH1>
        <HeroP>Tools and Services for Renewable Energy Project Developers and Investors</HeroP>
        <HeroBtnWrapper>
          <HeroButton
            to="/contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            // smooth={true}
            // duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
