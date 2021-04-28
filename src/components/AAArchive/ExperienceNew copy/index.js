import React from "react";
import Icon1 from '../../images/BDBW.jpg'
import Icon2 from '../../images/RGBW.jpg'
import Icon3 from '../../images/JSBW.jpg'
import Fade from 'react-reveal'
import { Button } from '../ButtonElement'
import { animateScroll as scroll, Element } from "react-scroll";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesLinkOut,
  ExperienceSubtitle,
  CTAP
} from "./ExperienceElements";

const ExperienceNew = ({
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
    <Element id='experience'>
    <ServicesContainer id={id}>
      <Fade bottom>
      <ServicesH1>{sectionTitle}</ServicesH1>
      <ExperienceSubtitle>Utility Scale</ExperienceSubtitle>
      </Fade>
      <ServicesWrapper>
        <ServicesLinkOut href={oneLink}>
        <Fade bottom>
        <ServicesCard>
          <ServicesIcon src={oneImg} />
          <ServicesH2>{oneTopLine}</ServicesH2>
          <ServicesP>
            {oneHeadline}
          </ServicesP>
        </ServicesCard>
        </Fade>
        </ServicesLinkOut>
        <ServicesLinkOut href={twoLink}>
        <Fade bottom>
        <ServicesCard>
          <ServicesIcon src={twoImg} />
          <ServicesH2>{twoTopLine}</ServicesH2>
          <ServicesP>
            {twoHeadline}
          </ServicesP>
        </ServicesCard>
        </Fade>
        </ServicesLinkOut>
        <ServicesLinkOut href={threeLink}>
        <Fade bottom>
        <ServicesCard>
          <ServicesIcon src={threeImg} />
          <ServicesH2>{threeTopLine}</ServicesH2>
          <ServicesP>
            {threeHeadline}
          </ServicesP>
        </ServicesCard>
        </Fade>
        </ServicesLinkOut>
        <ServicesLinkOut href={fourLink}>
        <Fade bottom>
        <ServicesCard>
          <ServicesIcon src={fourImg} />
          <ServicesH2>{fourTopLine}</ServicesH2>
          <ServicesP>
            {fourHeadline}
          </ServicesP>
        </ServicesCard>
        </Fade>
        </ServicesLinkOut>
      </ServicesWrapper>
      <Fade bottom>
      <ExperienceSubtitle>Commercial & Industrial</ExperienceSubtitle>
      </Fade>
      <ServicesWrapper>
        <ServicesLinkOut href={fiveLink}>
        <Fade bottom>
        <ServicesCard>
          <ServicesIcon src={fiveImg} />
          <ServicesH2>{fiveTopLine}</ServicesH2>
          <ServicesP>
            {fiveHeadline}
          </ServicesP>
        </ServicesCard>
        </Fade>
        </ServicesLinkOut>
        <ServicesLinkOut href={sixLink}>
        <Fade bottom>
        <ServicesCard>
          <ServicesIcon src={sixImg} />
          <ServicesH2>{sixTopLine}</ServicesH2>
          <ServicesP>
            {sixHeadline}
          </ServicesP>
        </ServicesCard>
        </Fade>
        </ServicesLinkOut>
        <ServicesLinkOut href={sevenLink}>
        <Fade bottom>
        <ServicesCard>
          <ServicesIcon src={sevenImg} />
          <ServicesH2>{sevenTopLine}</ServicesH2>
          <ServicesP>
            {sevenHeadline}
          </ServicesP>
        </ServicesCard>
        </Fade>
        </ServicesLinkOut>
        <ServicesLinkOut href={eightLink}>
        <Fade bottom>
        <ServicesCard>
          <ServicesIcon src={eightImg} />
          <ServicesH2>{eightTopLine}</ServicesH2>
          <ServicesP>
            {eightHeadline}
          </ServicesP>
        </ServicesCard>
        </Fade>
        </ServicesLinkOut>
      </ServicesWrapper>
      <CTAP>Contact Us For a Full List of Our Quals</CTAP>
      <Button onClick={toggleHome} to="/contact">Contact Us</Button>
    </ServicesContainer>
    </Element>
  );
};

export default ExperienceNew;
