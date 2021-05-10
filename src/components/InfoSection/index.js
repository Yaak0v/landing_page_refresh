import React from "react";
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
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  ImgWrapSmall,
  ImgSmall,
} from "./InfoElements";
import Fade from "react-reveal";

const InfoSectionFull = ({
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
  SectionTwoid,
  SectionTwolightBg,
  SectionTwoimgStart,
  SectionTwotopLine,
  SectionTwoheadline,
  SectionTwodescription,
  SectionTwobuttonLabel,
  SectionTwoimg,
  SectionTwoalt,
  SectionTwolistTitleOne,
  SectionTwolistOneObjectOne,
  SectionTwolistOneObjectTwo,
  SectionTwolistOneObjectThree,
  SectionTwolistOneObjectFour,
  SectionTwolistOneObjectFive,
  SectionTwolistTitleTwo,
  SectionTwolistTwoObjectOne,
  SectionTwolistTwoObjectTwo,
  SectionTwolistTwoObjectThree,
  SectionTwolistTwoObjectFour,
  SectionTwolistTwoObjectFive,
  SectionTwofadeTitleLeft,
  SectionTwofadeTitleRight,
  SectionTwofadeContentLeft,
  SectionTwofadeContentRight,
  SectionThreeid,
  SectionThreelightBg,
  SectionThreeimgStart,
  SectionThreetopLine,
  SectionThreeheadline,
  SectionThreedescription,
  SectionThreebuttonLabel,
  SectionThreeimg,
  SectionThreealt,
  SectionThreelistTitleOne,
  SectionThreelistOneObjectOne,
  SectionThreelistOneObjectTwo,
  SectionThreelistOneObjectThree,
  SectionThreelistOneObjectFour,
  SectionThreelistOneObjectFive,
  SectionThreelistTitleTwo,
  SectionThreelistTwoObjectOne,
  SectionThreelistTwoObjectTwo,
  SectionThreelistTwoObjectThree,
  SectionThreelistTwoObjectFour,
  SectionThreelistTwoObjectFive,
  SectionThreefadeTitleLeft,
  SectionThreefadeTitleRight,
  SectionThreefadeContentLeft,
  SectionThreefadeContentRight,
  SectionFourid,
  SectionFourlightBg,
  SectionFourimgStart,
  SectionFourtopLine,
  SectionFourheadline,
  SectionFourdescription,
  SectionFourbuttonLabel,
  SectionFourimg,
  SectionFouralt,
  SectionFourlistTitleOne,
  SectionFourlistOneObjectOne,
  SectionFourlistOneObjectTwo,
  SectionFourlistOneObjectThree,
  SectionFourlistOneObjectFour,
  SectionFourlistOneObjectFive,
  SectionFourlistTitleTwo,
  SectionFourlistTwoObjectOne,
  SectionFourlistTwoObjectTwo,
  SectionFourlistTwoObjectThree,
  SectionFourlistTwoObjectFour,
  SectionFourlistTwoObjectFive,
  SectionFourfadeTitleLeft,
  SectionFourfadeTitleRight,
  SectionFourfadeContentLeft,
  SectionFourfadeContentRight,
  SectionFiveid,
  SectionFivelightBg,
  SectionFiveimgStart,
  SectionFivetopLine,
  SectionFiveheadline,
  SectionFivedescription,
  SectionFivebuttonLabel,
  SectionFiveimg,
  SectionFivealt,
  SectionFivelistTitleOne,
  SectionFivelistOneObjectOne,
  SectionFivelistOneObjectTwo,
  SectionFivelistOneObjectThree,
  SectionFivelistOneObjectFour,
  SectionFivelistOneObjectFive,
  SectionFivelistTitleTwo,
  SectionFivelistTwoObjectOne,
  SectionFivelistTwoObjectTwo,
  SectionFivelistTwoObjectThree,
  SectionFivelistTwoObjectFour,
  SectionFivelistTwoObjectFive,
  SectionFivefadeTitleLeft,
  SectionFivefadeTitleRight,
  SectionFivefadeContentLeft,
  SectionFivefadeContentRight,
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
      <Element name="products">
        <InfoContainer id={SectionOneid} lightBg={SectionOnelightBg}>
          <InfoWrapper>
            <InfoRow imgStart={SectionOneimgStart}>
              <Column1>
                <TextWrapper>
                  <Fade
                    // left={SectionOnefadeTitleLeft}
                    // right={SectionOnefadeTitleRight}
                    cascade
                  >
                    <TopLine>{SectionOnetopLine}</TopLine>
                    <Heading>{SectionOneheadline}</Heading>
                    <Subtitle>{SectionOnedescription}</Subtitle>
                    <BtnWrap>
                      <Button
                        to="/contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={toggleHome}
                      >
                        {SectionOnebuttonLabel}
                      </Button>
                    </BtnWrap>
                  </Fade>
                </TextWrapper>
              </Column1>
              <Column2>
                <div className="row d-flex justify-content-center mb-2">
                  <Fade
                    // left={SectionOnefadeContentLeft}
                    // right={SectionOnefadeContentRight}
                    cascade
                  >
                    <ImgWrapSmall>
                      <ImgSmall src={SectionOneimg} alt={SectionOnealt} />
                    </ImgWrapSmall>
                  </Fade>
                </div>
                <div className="row mt-5">
                  <Fade
                    // left={SectionOnefadeContentLeft}
                    // right={SectionOnefadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionOnelistTitleOne}
                      </div>
                      <div>
                        <Fade
                          left={SectionOnefadeContentLeft}
                          right={SectionOnefadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionOnelistOneObjectOne}</li>
                            <li>{SectionOnelistOneObjectTwo}</li>
                            <li>{SectionOnelistOneObjectThree}</li>
                            <li>{SectionOnelistOneObjectFour}</li>
                            <li>{SectionOnelistOneObjectFive}</li>
                          </ul>
                        </Fade>
                      </div>
                    </div>
                  </Fade>
                  <Fade
                    // left={SectionOnefadeContentLeft}
                    // right={SectionOnefadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionOnelistTitleTwo}
                      </div>
                      <div>
                        <Fade
                          left={SectionOnefadeContentLeft}
                          right={SectionOnefadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionOnelistTwoObjectOne}</li>
                            <li>{SectionOnelistTwoObjectTwo}</li>
                            <li>{SectionOnelistTwoObjectThree}</li>
                            <li>{SectionOnelistTwoObjectFour}</li>
                            <li>{SectionOnelistTwoObjectFive}</li>
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
        <InfoContainer id={SectionTwoid} lightBg={SectionTwolightBg}>
          <InfoWrapper>
            <InfoRow imgStart={SectionTwoimgStart}>
              <Column1>
                <TextWrapper>
                  <Fade
                    // // left={SectionTwofadeTitleLeft}
                    // right={SectionTwofadeTitleRight}
                    cascade
                  >
                    <TopLine>{SectionTwotopLine}</TopLine>
                    <Heading>{SectionTwoheadline}</Heading>
                    <Subtitle>{SectionTwodescription}</Subtitle>
                    <BtnWrap>
                      <Button
                        to="/contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={toggleHome}
                      >
                        {SectionTwobuttonLabel}
                      </Button>
                    </BtnWrap>
                  </Fade>
                </TextWrapper>
              </Column1>
              <Column2>
                <div className="row d-flex justify-content-center mb-2">
                  <Fade
                    // // left={SectionTwofadeContentLeft}
                    // // right={SectionTwofadeContentRight}
                    cascade
                  >
                    <ImgWrapSmall>
                      <ImgSmall src={SectionTwoimg} alt={SectionTwoalt} />
                    </ImgWrapSmall>
                  </Fade>
                </div>
                <div className="row mt-5">
                  <Fade
                    // // left={SectionTwofadeContentLeft}
                    // // right={SectionTwofadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionTwolistTitleOne}
                      </div>
                      <div>
                        <Fade
                          left={SectionTwofadeContentLeft}
                          right={SectionTwofadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionTwolistOneObjectOne}</li>
                            <li>{SectionTwolistOneObjectTwo}</li>
                            <li>{SectionTwolistOneObjectThree}</li>
                            <li>{SectionTwolistOneObjectFour}</li>
                            <li>{SectionTwolistOneObjectFive}</li>
                          </ul>
                        </Fade>
                      </div>
                    </div>
                  </Fade>
                  <Fade
                    // // left={SectionTwofadeContentLeft}
                    // // right={SectionTwofadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionTwolistTitleTwo}
                      </div>
                      <div>
                        <Fade
                          left={SectionTwofadeContentLeft}
                          right={SectionTwofadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionTwolistTwoObjectOne}</li>
                            <li>{SectionTwolistTwoObjectTwo}</li>
                            <li>{SectionTwolistTwoObjectThree}</li>
                            <li>{SectionTwolistTwoObjectFour}</li>
                            <li>{SectionTwolistTwoObjectFive}</li>
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
        <InfoContainer id={SectionThreeid} lightBg={SectionThreelightBg}>
          <InfoWrapper>
            <InfoRow imgStart={SectionThreeimgStart}>
              <Column1>
                <TextWrapper>
                  <Fade
                    // // left={SectionThreefadeTitleLeft}
                    // // right={SectionThreefadeTitleRight}
                    cascade
                  >
                    <TopLine>{SectionThreetopLine}</TopLine>
                    <Heading>{SectionThreeheadline}</Heading>
                    <Subtitle>{SectionThreedescription}</Subtitle>
                    <BtnWrap>
                      <Button
                        to="/contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={toggleHome}
                      >
                        {SectionThreebuttonLabel}
                      </Button>
                    </BtnWrap>
                  </Fade>
                </TextWrapper>
              </Column1>
              <Column2>
                <div className="row d-flex justify-content-center mb-2">
                  <Fade
                    // // left={SectionThreefadeContentLeft}
                    // // right={SectionThreefadeContentRight}
                    cascade
                  >
                    <ImgWrapSmall>
                      <ImgSmall src={SectionThreeimg} alt={SectionOnealt} />
                    </ImgWrapSmall>
                  </Fade>
                </div>
                <div className="row mt-5">
                  <Fade
                    // // left={SectionThreefadeContentLeft}
                    // // right={SectionThreefadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionThreelistTitleOne}
                      </div>
                      <div>
                        <Fade
                          left={SectionThreefadeContentLeft}
                          right={SectionThreefadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionThreelistOneObjectOne}</li>
                            <li>{SectionThreelistOneObjectTwo}</li>
                            <li>{SectionThreelistOneObjectThree}</li>
                            <li>{SectionThreelistOneObjectFour}</li>
                            <li>{SectionThreelistOneObjectFive}</li>
                          </ul>
                        </Fade>
                      </div>
                    </div>
                  </Fade>
                  <Fade
                    // // left={SectionThreefadeContentLeft}
                    // // right={SectionThreefadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionThreelistTitleTwo}
                      </div>
                      <div>
                        <Fade
                          left={SectionThreefadeContentLeft}
                          right={SectionThreefadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionThreelistTwoObjectOne}</li>
                            <li>{SectionThreelistTwoObjectTwo}</li>
                            <li>{SectionThreelistTwoObjectThree}</li>
                            <li>{SectionThreelistTwoObjectFour}</li>
                            <li>{SectionThreelistTwoObjectFive}</li>
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
        <InfoContainer id={SectionFourid} lightBg={SectionFourlightBg}>
          <InfoWrapper>
            <InfoRow imgStart={SectionFourimgStart}>
              <Column1>
                <TextWrapper>
                  <Fade
                    // // left={SectionFourfadeTitleLeft}
                    // // right={SectionFourfadeTitleRight}
                    cascade
                  >
                    <TopLine>{SectionFourtopLine}</TopLine>
                    <Heading>{SectionFourheadline}</Heading>
                    <Subtitle>{SectionFourdescription}</Subtitle>
                    <BtnWrap>
                      <Button
                        to="/contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={toggleHome}
                      >
                        {SectionFourbuttonLabel}
                      </Button>
                    </BtnWrap>
                  </Fade>
                </TextWrapper>
              </Column1>
              <Column2>
                <div className="row d-flex justify-content-center mb-2">
                  <Fade
                    // // left={SectionFourfadeContentLeft}
                    // // right={SectionFourfadeContentRight}
                    cascade
                  >
                    <ImgWrapSmall>
                      <ImgSmall src={SectionFourimg} alt={SectionOnealt} />
                    </ImgWrapSmall>
                  </Fade>
                </div>
                <div className="row mt-5">
                  <Fade
                    // // left={SectionFourfadeContentLeft}
                    // // right={SectionFourfadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionFourlistTitleOne}
                      </div>
                      <div>
                        <Fade
                           left={SectionFourfadeContentLeft}
                          right={SectionFourfadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionFourlistOneObjectOne}</li>
                            <li>{SectionFourlistOneObjectTwo}</li>
                            <li>{SectionFourlistOneObjectThree}</li>
                            <li>{SectionFourlistOneObjectFour}</li>
                            <li>{SectionFourlistOneObjectFive}</li>
                          </ul>
                        </Fade>
                      </div>
                    </div>
                  </Fade>
                  <Fade
                    // // left={SectionFourfadeContentLeft}
                    // // right={SectionFourfadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionFourlistTitleTwo}
                      </div>
                      <div>
                        <Fade
                          left={SectionFourfadeContentLeft}
                          right={SectionFourfadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionFourlistTwoObjectOne}</li>
                            <li>{SectionFourlistTwoObjectTwo}</li>
                            <li>{SectionFourlistTwoObjectThree}</li>
                            <li>{SectionFourlistTwoObjectFour}</li>
                            <li>{SectionFourlistTwoObjectFive}</li>
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
        <InfoContainer id={SectionFiveid} lightBg={SectionFivelightBg}>
          <InfoWrapper>
            <InfoRow imgStart={SectionFiveimgStart}>
              <Column1>
                <TextWrapper>
                  <Fade
                    // // left={SectionFivefadeTitleLeft}
                    // // right={SectionFivefadeTitleRight}
                    cascade
                  >
                    <TopLine>{SectionFivetopLine}</TopLine>
                    <Heading>{SectionFiveheadline}</Heading>
                    <Subtitle>{SectionFivedescription}</Subtitle>
                    <BtnWrap>
                      <Button
                        to="/contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={toggleHome}
                      >
                        {SectionFivebuttonLabel}
                      </Button>
                    </BtnWrap>
                  </Fade>
                </TextWrapper>
              </Column1>
              <Column2>
                <div className="row d-flex justify-content-center mb-2">
                  <Fade
                    // // left={SectionFivefadeContentLeft}
                    // // right={SectionFivefadeContentRight}
                    cascade
                  >
                    <ImgWrapSmall>
                      <ImgSmall src={SectionFiveimg} alt={SectionOnealt} />
                    </ImgWrapSmall>
                  </Fade>
                </div>
                <div className="row mt-5">
                  <Fade
                    // // left={SectionFivefadeContentLeft}
                    // // right={SectionFivefadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionFivelistTitleOne}
                      </div>
                      <div>
                        <Fade
                          left={SectionFivefadeContentLeft}
                          right={SectionFivefadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionFivelistOneObjectOne}</li>
                            <li>{SectionFivelistOneObjectTwo}</li>
                            <li>{SectionFivelistOneObjectThree}</li>
                            <li>{SectionFivelistOneObjectFour}</li>
                            <li>{SectionFivelistOneObjectFive}</li>
                          </ul>
                        </Fade>
                      </div>
                    </div>
                  </Fade>
                  <Fade
                    // // left={SectionFivefadeContentLeft}
                    // // right={SectionFivefadeContentRight}
                    cascade
                  >
                    <div className="col-sm">
                      <div className="category-headline">
                        {SectionFivelistTitleTwo}
                      </div>
                      <div>
                        <Fade
                          left={SectionFivefadeContentLeft}
                          right={SectionFivefadeContentRight}
                          cascade
                        >
                          <ul className="category-items">
                            <li>{SectionFivelistTwoObjectOne}</li>
                            <li>{SectionFivelistTwoObjectTwo}</li>
                            <li>{SectionFivelistTwoObjectThree}</li>
                            <li>{SectionFivelistTwoObjectFour}</li>
                            <li>{SectionFivelistTwoObjectFive}</li>
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

export default InfoSectionFull;
