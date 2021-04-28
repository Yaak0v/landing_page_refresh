import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 1254px) {
    height: 1500px;
  }

  @media screen and (max-width: 768px) {
    height: 2000px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1254px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 300px;
  padding: 30px;
  margin: 0 .5rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

@media screen and (max-width: 1254px) {
  height: 300px;
}

@media screen and (max-width: 768px) {
  height: 325px;
}

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  /* height: 160px;
  width: 160px; */
  width: 100%auto;
  max-width: 200px;
  margin-bottom: 10px;
  border-radius: 5px;

@media screen and (max-width: 1254px) {
  max-width: 225px;
}

@media screen and (max-width: 768px) {
  max-width: 250px;
}
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #253858;
  margin-bottom: 3rem;
  text-align: center;
  /* margin-top: 10rem; */

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;


export const ServicesH2 = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 10px;
  text-decoration: none;
  text-align: center;
  color: #212529;

`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #42526e;
  text-decoration: none;
  margin-bottom: 3rem;
`;

export const ServicesLinkOut = styled.a`
  text-decoration: none;
`;

export const ExperienceSubtitle = styled.p`
  color: #0045ff;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const CTAP = styled.p`
  color: #212529;
  font-size: 1.25rem;
  margin-top: 1.5rem;
`;

export const ExperienceCol = styled.div`
 align-items: center;
 flex: 1 0 0%;
 display: flex;
 flex-direction: column;
 justify-content: <space-between>/space-between>;
 /* display: grid; */
 /* grid-template-rows: 1fr 1fr 1fr 1fr; */
`
