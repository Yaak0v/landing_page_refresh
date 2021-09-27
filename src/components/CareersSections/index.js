import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ExternalButton } from "../ButtonElement";
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
import { Dropdown } from "bootstrap";

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
  JDHeader6,
  JDSection6,
  JDHeader7,
  JDSection7,
  JDSection8,
  JDLocation,
  JDHighLevel,
  JDCommitment,
  Dropdown, 
  ApplicationButton, 
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
                <Subtitle>
                  <p>{JDHighLevel}</p>
                  <ul>
                  <li>{JDLocation}</li>
                  <li>{JDCommitment}</li>
                  </ul>
                </Subtitle>
                <Row classname="d-flex flex-row">
                  <Col className="py-4">
                    <ExternalButton href="https://app.smartsheet.com/b/form/992b5517a91b417dad74706043be5c66">{ApplicationButton}</ExternalButton>
                  </Col>
                  <Col className="py-4">
                    <BtnWrap>
                      <CareerDropDownButton
                        onClick={openJD}
                        lightBg={SectionOnelightBg}
                        JD={JD}
                        Visible={Dropdown}
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
            <CareerDescription>{JDSection1.map((item, index) => (
                <p key={index}>{item}</p>))}</CareerDescription>
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
            <CareerHeading>{JDHeader6}</CareerHeading>
            <CareerDescription>
              <ul>
                {JDSection6.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CareerDescription>
            <CareerHeading>{JDHeader7}</CareerHeading>
            <CareerDescription>
              <ul>
                {JDSection7.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CareerDescription>
            <CareerDescription>{JDSection8}</CareerDescription>
            <ExternalButton href="https://app.smartsheet.com/b/form/992b5517a91b417dad74706043be5c66">{ApplicationButton}</ExternalButton>
          </JdRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default CareersSection;
