import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* height: 1000px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  /* max-width: 1300px; */

  @media screen and (max-width: 1167px) {
    height: 3000px;
  }

  @media screen and (max-width: 768px) {
    height: 4850px;
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
  margin-bottom: 20px;

  @media screen and (max-width: 1167px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
export const TeamWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1167px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  margin: 0 1rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ServicesCardSmall = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  margin: 0 1rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

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
  max-width: 250px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const TeamIcon = styled.img`
  /* height: 160px;
  width: 160px; */
  width: 100%auto;
  max-width: 175px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #253858;
  margin-bottom: 64px;
  text-align: center;
  /* margin-top: 10rem; */

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-decoration: none;
  color: #212529;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  height: 48px;
  text-align: center;
  color: #42526e;
  text-decoration: none;
`;

export const TeamH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-decoration: none;
  color: #212529;
`;

export const TeamP = styled.p`
  font-size: .95rem;
  text-align: start;
  color: #42526e;
  text-decoration: none;
`;

export const ServicesDiv = styled.div`
  text-decoration: none;
`;
export const ServicesCardLink = styled.a`
  text-decoration: none;
`;
export const ServicesListLink = styled.a`
text-decoration: none;
color: #42526e;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
}
`;
export const TopLine = styled.p`
  color: #0045ff;
  font-size: 1.15rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-top: 2.3rem;
`;
