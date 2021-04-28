import React from "react";
import { Button } from "../../../ButtonElement";
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
} from "../../../InfoSection/InfoElements";
import Fade from "react-reveal";

const InfoSection2 = ({
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
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Fade right cascade>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
                </Fade>
              </TextWrapper>
            </Column1>
            <Column2>
              <div className="row">
                <Fade left cascade>
                <div className="col">
                  <div className="category-headline">Deal Diligence</div>
                  <div>
                    <Fade left cascade>
                    <ul className="category-items">
                      <li>Asset diligence</li>
                      <li>Risk identification and mitigation</li>
                      <li>Regulatory Management</li>
                      <li>Legal diligence & contract review</li>
                      <li>Full technical stack diligence</li>
                      <li>Independent engineer certification</li>
                    </ul>
                    </Fade>
                  </div>
                </div>
                  </Fade>
                <Fade left cascade>
                <div className="col">
                  <div className="category-headline">Deal Diligence</div>
                  <div>
                    <Fade left cascade>
                    <ul className="category-items">
                      <li>Asset diligence</li>
                      <li>Risk identification and mitigation</li>
                      <li>Regulatory Management</li>
                      <li>Legal diligence & contract review</li>
                      <li>Full technical stack diligence</li>
                      <li>Independent engineer certification</li>
                    </ul>
                    </Fade>
                  </div>
                </div>
                </Fade>
              </div>
              <div className="row">
                  <Fade left cascade>
                <div className="col">
                  <div className="category-headline">Deal Diligence</div>
                  <div>
                    <Fade left cascade>
                    <ul className="category-items">
                      <li>Asset diligence</li>
                      <li>Risk identification and mitigation</li>
                      <li>Regulatory Management</li>
                      <li>Legal diligence & contract review</li>
                      <li>Full technical stack diligence</li>
                      <li>Independent engineer certification</li>
                    </ul>
                    </Fade>
                  </div>
                </div>
                  </Fade>
                  <Fade left cascade>
                <div className="col">
                  <div className="category-headline">Deal Diligence</div>
                  <div>
                    <Fade left cascade>
                    <ul className="category-items">
                      <li>Asset diligence</li>
                      <li>Risk identification and mitigation</li>
                      <li>Regulatory Management</li>
                      <li>Legal diligence & contract review</li>
                      <li>Full technical stack diligence</li>
                      <li>Independent engineer certification</li>
                    </ul>
                    </Fade>
                  </div>
                </div>
                </Fade>
              </div>
              {/* <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap> */}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection2;
