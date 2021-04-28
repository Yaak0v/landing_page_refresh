import React from "react";
import {animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedin,
// } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  // SocialIcons,
  // SocialIconLink,
  BigClickWrapper
} from "./FooterElements";

const FooterNew = () => {

  const toggleHome = () => {
    scroll.scrollToTop({duration: 75,
      delay: -10,
      smooth: "easeOutQuint",});
    
  }

// const scrollToElement = (element) => {
//   console.log(element)
//   scroller.scrollTo(element, {
//   duration: 1000,
//   // delay: 0,
//   // smooth: 'easeInOutQuint',
//   offset: -80,
//   ignoreCancelEvents:true
// })
// }

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              {/* <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLinkR onClick={console.log("1")} to='/'>Products</FooterLinkR>
                <FooterLinkR onClick={console.log("2")} to='/'>Team</FooterLinkR>
                <FooterLinkR onClick={console.log("3")} to='/'>Experience</FooterLinkR>
                <FooterLinkR to="/contact" onClick={toggleHome}>Learn More</FooterLinkR>
              </FooterLinkItems> */}
            </FooterLinksWrapper>
            <BigClickWrapper>
            <p className="mb-0 py-0 px-1">Need help with a project?</p>
                    <h1 id="footer-main-link"><Link to='/contact' className="display-3 footer-main mt-0 mb-2 px-0" onClick={toggleHome}>
                        Let's Talk  
                        </Link></h1>
                    <div id="footer-main-link-underline" className="top-grow mx-1"></div>
            </BigClickWrapper>
            {/* <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper> */}
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                <h1 className="footlogo">Euclid</h1>
                </SocialLogo>
              <WebsiteRights>
                Euclid Power Inc. © {new Date().getFullYear()} All rights
                reserved.
              </WebsiteRights>
              {/* <SocialIcons>
                <SocialIconLink href="/" target="blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons> */}
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default FooterNew;
