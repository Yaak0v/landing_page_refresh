import React from "react";
import { Button } from '../ButtonElement'
import { animateScroll as scroll } from "react-scroll";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarLinkOut,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  const toggleHome = () => {
    scroll.scrollToTop({
      duration: 75,
      delay: -10,
      smooth: "easeOutQuint",
    });
  }
  
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Who We Are</SidebarLink>
          <SidebarLink to="products" onClick={toggle}>Products</SidebarLink>
          <SidebarLink to="team" onClick={toggle}>Team</SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
          <SidebarLinkOut to="/careers" onClick={() => {toggle(); toggleHome();}}>Careers</SidebarLinkOut>
          {/* <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink> */}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
