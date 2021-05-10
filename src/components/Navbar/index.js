import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinkr,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [homeNav, setHomeNav] = useState(true);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHomeNav(true);
      console.log("homenav");
    } else {
      setHomeNav(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop({
      duration: 1000,
      delay: 0,
      smooth: "easeOutQuint",
    });
  };

  return (
    <>
      <IconContext.Provider
        value={
          scrollNav
            ? { color: "#2d3440" }
            : homeNav
            ? { color: "#fff" }
            : { color: "#2d3440" }
        }
      >
        <Nav scrollNav={scrollNav} homeNav={homeNav}>
          <NavbarContainer>
            <NavLogo
              to="/"
              onClick={toggleHome}
              scrollNav={scrollNav}
              homeNav={homeNav}
            >
              <h1 className="navlogo">Euclid</h1>
            </NavLogo>
            {homeNav && 
            (
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
            )}
            {homeNav ? (
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    scrollNav={scrollNav}
                    homeNav={homeNav}
                  >
                    Who We Are
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="products"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    scrollNav={scrollNav}
                    homeNav={homeNav}
                  >
                    Products
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="team"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    scrollNav={scrollNav}
                    homeNav={homeNav}
                  >
                    Team
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="experience"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    scrollNav={scrollNav}
                    homeNav={homeNav}
                  >
                    Experience
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinkr
                    to="/careers"
                    onClick={toggleHome}
                    offset={-80}
                    scrollNav={scrollNav}
                    homeNav={homeNav}
                  >
                    Careers
                  </NavLinkr>
                </NavItem>
              </NavMenu>
            ) : (
              <></>
            )}
            {homeNav && (
              <NavBtn onClick={toggleHome}>
                <NavBtnLink
                  to="/contact"
                  scrollNav={scrollNav}
                  homeNav={homeNav}
                >
                  Contact Us
                </NavBtnLink>
              </NavBtn>
            )}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
