import React from "react";
import { Row } from "react-bootstrap";
import { Button } from "../ButtonElement";
import { animateScroll as scroll, Element } from "react-scroll";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  CareerHeading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  ImgWrapSmall,
  ImgSmall,
  CareerDropDownButton,
  CareerDescription,
  JdRow,
} from "./CareersElements";
import Navbar from "../Navbar";
import Fade from "react-reveal";

const CareersSection = ({
  SectionOneid,
  SectionOnelightBg,
  SectionOneimgStart,
  SectionOnetopLine,
  SectionOneheadline,
  SectionOnedescription,
  SectionOnebuttonLabel,
  SectionOneimg,
  SectionOnealt,
  SectionOnelistTitleOne,
  SectionOnelistOneObjectOne,
  SectionOnelistOneObjectTwo,
  SectionOnelistOneObjectThree,
  SectionOnelistOneObjectFour,
  SectionOnelistOneObjectFive,
  SectionOnelistTitleTwo,
  SectionOnelistTwoObjectOne,
  SectionOnelistTwoObjectTwo,
  SectionOnelistTwoObjectThree,
  SectionOnelistTwoObjectFour,
  SectionOnelistTwoObjectFive,
  SectionOnefadeTitleLeft,
  SectionOnefadeTitleRight,
  SectionOnefadeContentLeft,
  SectionOnefadeContentRight,
  JDHeader1,
  JDSection1,
  JDHeader2,
  JDSection2,
  JDHeader3,
  JDSection3,
  JDHeader4,
  JDSection4,
  JDHeader5,
  JDSection5,
  JDSection6,
}) => {
  const toggleHome = () => {
    scroll.scrollToTop({
      duration: 75,
      delay: -10,
      smooth: "easeOutQuint",
    });
  };

  return (
    <>
      <InfoContainer id={SectionOneid} lightBg={SectionOnelightBg}>
        <InfoWrapper>
          <InfoRow imgStart={SectionOneimgStart}>
            <Column1>
              <TextWrapper>
                <Fade
                  left={SectionOnefadeTitleLeft}
                  right={SectionOnefadeTitleRight}
                  cascade
                >
                  <TopLine>{SectionOnetopLine}</TopLine>
                  <Heading>{SectionOneheadline}</Heading>
                  <Subtitle>{SectionOnedescription}</Subtitle>
                  <BtnWrap>
                    <CareerDropDownButton
                      to="/contact"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      onClick={toggleHome}
                      lightBg={SectionOnelightBg}
                    >
                      {SectionOnebuttonLabel}
                    </CareerDropDownButton>
                  </BtnWrap>
                </Fade>
              </TextWrapper>
            </Column1>
            <Column2>
              <div className="row d-flex justify-content-center mb-2">
                <Fade
                  left={SectionOnefadeContentLeft}
                  right={SectionOnefadeContentRight}
                  cascade
                >
                  <ImgWrapSmall>
                    <ImgSmall src={SectionOneimg} alt={SectionOnealt} />
                  </ImgWrapSmall>
                </Fade>
              </div>
            </Column2>
          </InfoRow>
          <JdRow>
            <CareerHeading>{JDHeader1}</CareerHeading>
            <CareerDescription>{JDSection1}</CareerDescription>
            <CareerHeading>{JDHeader2}</CareerHeading>
            <CareerDescription>{JDSection2}</CareerDescription>
            <CareerHeading>{JDHeader3}</CareerHeading>
            <CareerDescription>
              <ul>
                {JDSection3.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CareerDescription>
            <CareerHeading>{JDHeader4}</CareerHeading>
            <CareerDescription>
              <ul>
                {JDSection4.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CareerDescription>
            <CareerHeading>{JDHeader5}</CareerHeading>
            <CareerDescription>
              <ul>
                {JDSection5.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CareerDescription>
            <CareerDescription>{JDSection6}</CareerDescription>
            <Button>Apply For This Role</Button>
          </JdRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default CareersSection;
