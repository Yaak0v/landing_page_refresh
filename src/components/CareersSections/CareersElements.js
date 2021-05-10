import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#f8f9fa")};
  /* min-height: 800px; */

  @media screen and (max-width: 768px) {
    padding: 5px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 616px) {
    height: 900px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr; 
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const JdRow = styled.div`
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
  padding: 0 15px;
  transition: all 1s ease-in-out;
  display: ${({ JD }) => (JD ? "block" : "none")};
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #0045ff;
  font-size: 24px;
  /* line-height: 16px; */
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #253858;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CareerHeading = styled.h1`
  margin-bottom: 1rem;
  font-size: 28px;
  font-weight: 600;
  color: #253858;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #42526e;
`;

export const CareerDescription = styled.p`
  font-size: 14px;
  color: #42526e;
  margin-bottom: 3rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  /* max-width: 555px; */
  height: 100%;
`;
export const ImgWrapSmall = styled.div`
  /* max-width: 555px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ImgSmall = styled.img`
  width: 60%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CareerDropDownButton = styled.div`
  background-color: inherit;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 2px solid;
  border-color: ${({ JD }) => (JD ? "#253858" : "#fff")};
  color: #253858;
  font-size: 1.15rem;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-color: #253858;
  }
`;

export const SectionLine = styled.div`
margin: auto;
opacity: .3;
border-bottom: 2px solid;
border-color: #253858;
width: 90%;
margin-bottom: 3rem;
max-width: 1300px;
`
