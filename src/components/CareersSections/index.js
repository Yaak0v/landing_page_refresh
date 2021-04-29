import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
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
  SectionLine,
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

  const [JD, setJD] = useState(false);

  const openJD = () => {
    if (JD === false) {
      setJD(true);
    } else {
      setJD(false);
    }
  };

  return (
    <>
      <InfoContainer id={SectionOneid} lightBg={SectionOnelightBg}>
        <InfoWrapper>
          <InfoRow imgStart={SectionOneimgStart}>
            <Column1>
              <TextWrapper>
                  <TopLine>{SectionOnetopLine}</TopLine>
                  <Heading>{SectionOneheadline}</Heading>
                  <Subtitle>{SectionOnedescription}</Subtitle>
                  <Row classname='d-flex flex-row'>
                    <Col>
                      <Button>Apply For This Role</Button>
                    
                    </Col>
                    <Col>
                    <BtnWrap>
                      <CareerDropDownButton
                        onClick={openJD}
                        lightBg={SectionOnelightBg}
                        JD={JD}
                      >
                        {SectionOnebuttonLabel}
                      </CareerDropDownButton>
                    </BtnWrap>
                    </Col>
                  </Row>
              </TextWrapper>
            </Column1>
            <Column2>
                  <ImgWrapSmall>
                    <ImgSmall src={SectionOneimg} alt={SectionOnealt} />
                  </ImgWrapSmall>
            </Column2>
          </InfoRow>
          <JdRow JD={JD}>
            <CareerHeading>{JDHeader1}</CareerHeading>
            <CareerDescription>{JDSection1}</CareerDescription>
            <CareerHeading>{JDHeader2}</CareerHeading>
            <CareerDescription>
                {JDSection2.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
            </CareerDescription>
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
