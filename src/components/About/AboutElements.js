import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#f8f9fa")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1150px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2rem;
  justify-content: start;

  @media screen and (max-width: 981px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`;

export const AboutRow = styled.div`
  /* display: grid;
  grid-template-rows: 1fr 3fr; */
  align-items: center;
`;

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: #253858;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TextWrapper = styled.div`
  /* max-width: 540px; */
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
  color:  #253858;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #42526E;
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`
export const ImgWrapSmall = styled.div`
max-width: 555px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`

export const ImgSmall = styled.img`
width: 70%;
margin: 0 0 10px 0;
padding-right: 0;
`