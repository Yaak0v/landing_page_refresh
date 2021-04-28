import React from "react";
import { Button } from "../../ButtonElement";
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
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  ImgWrapSmall,
  ImgSmall,
} from "../../InfoSection/InfoElements";
import Fade from "react-reveal";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  listTitleOne,
  listOneObjectOne,
  listOneObjectTwo,
  listOneObjectThree,
  listOneObjectFour,
  listOneObjectFive,
  listTitleTwo,
  listTwoObjectOne,
  listTwoObjectTwo,
  listTwoObjectThree,
  listTwoObjectFour,
  listTwoObjectFive,
  fadeTitleLeft,
  fadeTitleRight,
  fadeContentLeft,
  fadeContentRight,
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
      <Element name={id}>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Fade left={fadeTitleLeft} right={fadeTitleRight} cascade>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button
                      to="/contact"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      onClick={toggleHome}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap>
                </Fade>
              </TextWrapper>
            </Column1>
            <Column2>
              <div className="row d-flex justify-content-center mb-2">
                <Fade left={fadeContentLeft} right={fadeContentRight} cascade>
                  <ImgWrapSmall>
                    <ImgSmall src={img} alt={alt} />
                  </ImgWrapSmall>
                </Fade>
              </div>
              <div className="row mt-5">
                <Fade left={fadeContentLeft} right={fadeContentRight} cascade>
                  <div className="col">
                    <div className="category-headline">{listTitleOne}</div>
                    <div>
                      <Fade left={fadeContentLeft} right={fadeContentRight} cascade>
                        <ul className="category-items">
                          <li>{listOneObjectOne}</li>
                          <li>{listOneObjectTwo}</li>
                          <li>{listOneObjectThree}</li>
                          <li>{listOneObjectFour}</li>
                          <li>{listOneObjectFive}</li>
                        </ul>
                      </Fade>
                    </div>
                  </div>
                </Fade>
                <Fade left={fadeContentLeft} right={fadeContentRight} cascade>
                  <div className="col">
                    <div className="category-headline">{listTitleTwo}</div>
                    <div>
                      <Fade left={fadeContentLeft} right={fadeContentRight} cascade>
                        <ul className="category-items">
                          <li>{listTwoObjectOne}</li>
                          <li>{listTwoObjectTwo}</li>
                          <li>{listTwoObjectThree}</li>
                          <li>{listTwoObjectFour}</li>
                          <li>{listTwoObjectFive}</li>
                        </ul>
                      </Fade>
                    </div>
                  </div>
                </Fade>
              </div>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      </Element>
    </>
  );
};

export default InfoSection;
