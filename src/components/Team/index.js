import React from "react";
import Icon1 from "../../images/BDBW.jpg";
import Icon2 from "../../images/RGBW.jpg";
import Icon3 from "../../images/JSBW.jpg";
import Fade from "react-reveal";
import { Element } from "react-scroll";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesDiv,
  ServicesCardLink,
  TeamP,
  TopLine,
  ServicesListLink,
  ServicesCardSmall,
  TeamWrapper,
  TeamH2,
  TeamIcon
} from "./TeamElements";
import { Container, Row } from "react-bootstrap";

const Services = ({Data}) => {
  return (
    <Element id="team">
      <ServicesContainer id="team">
        <Fade bottom>
          <ServicesH1 className="mt-4">World Class Team</ServicesH1>
        </Fade>
        <Container className="text-center">
        <Row>
          <TeamH2>Co-Founders</TeamH2>
        </Row>
        </Container>
        <ServicesWrapper>
          <ServicesDiv>
            <Fade bottom>
             <ServicesCardLink href="https://www.linkedin.com/in/brian-demaio-935b4666/">
              <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Brian DeMaio</ServicesH2>
                <ServicesP>Co-Founder, COO</ServicesP>
              </ServicesCard>
              </ServicesCardLink>
              <ServicesH2 className="text-center mt-4">Prior Roles</ServicesH2>
              <TeamP>
                <ul className="list-group list-group-flush text-center mx-4">
                  <li className="list-group-item team-list-item">
                    Goldman Sachs Renewable Power
                  </li>
                  <li className="list-group-item team-list-item">GE Solar</li>
                  <li className="list-group-item team-list-item">
                    Blackstone (Onyx Renewable Partners)
                  </li>
                </ul>
              </TeamP>
              <TopLine className="mx-4">Key Deal Experience</TopLine>
              <TeamP>
                <ul className="mx-3">
                  <li><ServicesListLink href="https://www.globenewswire.com/news-release/2020/07/23/2066564/0/en/Goldman-Sachs-Renewable-Power-LLC-Acquires-123MW-Project-from-First-Solar.html"><b>American Kings</b> - 170MW PV</ServicesListLink></li>
                  <li><ServicesListLink href="https://pv-magazine-usa.com/2019/01/17/brown-goes-green-with-a-50-mw-solar-project/"><b>Brown University</b> - 52MW PV</ServicesListLink></li>
                  <li><ServicesListLink href="https://newsroom.sunpower.com/2019-10-29-SunPower-Building-New-35-Megawatt-DC-Solar-Project-to-Supply-Renewable-Energy-to-Chevrons-Lost-Hills-Oil-Field"><b>SunPower Dev Portfolio</b> - 82MW PV</ServicesListLink></li>
                  <li><ServicesListLink href="https://www.onyxrenewables.com/news/2017/06/29/onyx-completes-solar-ground-mount-on-brockton-landfill/"><b>NY/MA Dev Assets</b> - 300MW+ PV</ServicesListLink></li>
                </ul>
              </TeamP>
            </Fade>
          </ServicesDiv>
          <ServicesDiv>
            <Fade bottom>
              <ServicesCardLink href="https://www.linkedin.com/in/ryanguay/">
              <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Ryan Guay</ServicesH2>
                <ServicesP>Co-Founder, CFO</ServicesP>
              </ServicesCard>
              </ServicesCardLink>
              <ServicesH2 className="text-center mt-4">Prior Roles</ServicesH2>
              <TeamP>
                <ul className="list-group list-group-flush text-center mx-4">
                  <li className="list-group-item team-list-item">
                    Goldman Sachs Renewable Power
                  </li>
                  <li className="list-group-item team-list-item">Active Solar</li>
                  <li className="list-group-item team-list-item">
                    True Green Capital
                  </li>
                </ul>
              </TeamP>
              <TopLine className="mx-4">Key Deal Experience</TopLine>
              <TeamP>
                <ul className='mx-3'>
                  <li><ServicesListLink href="https://www.energy-storage.news/news/goldman-sachs-buys-california-solar-plus-storage-plant-from-canadian-solar"><b>Slate</b> - 380MW PV | 560MWH Storage</ServicesListLink></li>
                  <li><ServicesListLink href="https://www.energy-storage.news/news/goldman-sachs-renewable-power-buys-california-solar-plus-storage-plant"><b>High Desert</b> - 130MW PV | 200MWH Storage</ServicesListLink></li>
                  <li><ServicesListLink href="https://pv-magazine-usa.com/2018/07/03/goldman-sachs-buys-204-mw-of-east-coast-solar-from-sji/"><b>Marina Operating C&I</b> - 204MW PV</ServicesListLink></li>
                  <li><ServicesListLink href="https://www.wivb.com/news/new-solar-parks-take-shape-on-grand-island/"><b>Northeast Dev</b> - 300MW+ PV</ServicesListLink></li>
                </ul>
              </TeamP>
            </Fade>
          </ServicesDiv>
          <ServicesDiv>
            <Fade bottom>
              <ServicesCardLink href="https://www.linkedin.com/in/jacobsandry/">
              <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Jacob Sandry</ServicesH2>
                <ServicesP>Co-Founder, CEO</ServicesP>
              </ServicesCard>
              </ServicesCardLink>
              <ServicesH2 className="text-center mt-4">Prior Roles</ServicesH2>
              <TeamP>
                <ul className="list-group list-group-flush text-center mx-4">
                  <li className="list-group-item team-list-item">
                    Goldman Sachs Renewable Power
                  </li>
                  <li className="list-group-item team-list-item">Generate Capital</li>
                  <li className="list-group-item team-list-item">
                    Mosaic
                  </li>
                </ul>
              </TeamP>
              <TopLine className="mx-4">Key Deal Experience</TopLine>
              <TeamP>
                <ul className='mx-3'>
                  <li><ServicesListLink href="https://www.energy-storage.news/news/goldman-sachs-renewable-power-buys-california-solar-plus-storage-plant"><b>High Desert</b> - 130MW PV | 200MWH Storage </ServicesListLink></li>
                  <li><ServicesListLink href="https://www.greentechmedia.com/articles/read/goldman-sachs-becomes-solar-supplier-to-california-ccas-as-its-acquisition"><b>Mustang </b> - 135MW PV | 400MWH Storage</ServicesListLink></li>
                  <li><ServicesListLink href="https://www.greentechmedia.com/articles/read/sunpower-sells-commercial-solar-to-goldman-sachs"><b>SunPower Operating C&I </b> - 230MW+ PV</ServicesListLink></li>
                  <li><ServicesListLink href="https://www.chevron.com/stories/powering-the-world-forward-with-california-sunshine"><b>Chevron</b> - 35MW PV | 20MWH Storage</ServicesListLink></li>
                </ul>
              </TeamP>
            </Fade>
          </ServicesDiv>
        </ServicesWrapper>
        <Row className="mt-3">
          <TeamH2>Euclid Team</TeamH2>
        </Row>
        <TeamWrapper>
          {Data.map((item,index) => 
          (<ServicesDiv>
            <ServicesCardLink key={index} href={item["LinkedIn"]}>
            <ServicesCardSmall>
                <TeamIcon key={index} src={item["Image"]} />
                <ServicesH2 key={index}>{item["Name"]}</ServicesH2>
                <ServicesP key={index}>{item["Title"]}</ServicesP>
              </ServicesCardSmall>
            </ServicesCardLink>
          </ServicesDiv>
          ))}
        </TeamWrapper>
      </ServicesContainer>
    </Element>
  );
};

export default Services;
