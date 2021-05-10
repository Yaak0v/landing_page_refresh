import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav, homeNav }) => (scrollNav ? "#fff" : homeNav ? "transparent" : "#fff")};
  box-shadow: ${({ scrollNav }) => (scrollNav ? "0 2px 8px 0 rgb(0 0 0 / 10%)" : "none")};
  height: 80px;
  margin-top: ${({ homeNav }) => (homeNav ? '-80px' : '0px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.4s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1400px;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ scrollNav, homeNav }) => (scrollNav ? "#2d3440" : homeNav ? "#fff" : "#2d3440")};
  justify-self: flex-start;
  cursor: pointer;
  /* font-size: 1.3rem; */
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${({ scrollNav, homeNav }) => (scrollNav ? "#2d3440" : homeNav ? "#fff" : "#2d3440")};
  }

`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 925px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #2d3440;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  margin-left: -2rem;
  margin-bottom: 0rem;
  padding-left: 0rem;

  @media screen and (max-width: 925px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ scrollNav, homeNav }) => (scrollNav ? "#466880" : homeNav ? "#fff" : "#466880" )};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.15rem;
  cursor: pointer;
  transition: all 0.1s ease;
  
  &.active {
      border-bottom: 3px solid #2d3440;
    }
    
    &:hover {
        border-bottom: 3px solid ${({ scrollNav, homeNav }) => (scrollNav ? "#2d3440" : homeNav ? "#fff" : "#2d3440")};
        color: ${({ scrollNav, homeNav }) => (scrollNav ? "#466880" : homeNav ? "#fff" : '#466880')};
    
  }
`;

export const NavLinkr = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#466880" : "snow")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.15rem;
  cursor: pointer;
  transition: all 0.1s ease;
  
  &.active {
      border-bottom: 3px solid #2d3440;
    }
    
    &:hover {
        border-bottom: 3px solid ${({ scrollNav }) => (scrollNav ? "#2d3440" : "#fff")};
        color: ${({ scrollNav }) => (scrollNav ? "#466880" : "snow")};
    
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 925px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  display: inline-block;
  width: 150px;
  padding: 8px;
  color: #fff;
  border: 2px solid ${({ scrollNav, homeNav }) => (scrollNav ? "#2d3440" : homeNav? "#fff" : "#2d3440")};
  border-radius: 30px;
  text-align: center;
  outline: none;
  white-space: nowrap;
  text-decoration: none;
  background-color: ${({ scrollNav, homeNav }) => (scrollNav ? "#2d3440" : homeNav ? "transparent" : "#2d3440")};
  transition: background-color 0.2 ease-out, color 0.2s ease-out;
  font-size: 1.15rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #2d3440;
  }
`;
