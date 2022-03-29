import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// Bar at the top sandwich and to the left
export const Nav = styled.nav`
  background: #449DD1;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    width: 340px;
    height: 100vh;
    justify-content: center;
    // justify-content: flex-start;
    // align-items: center;
  }
`;
// Logo, both at the top sandwich and to the left
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // justify-content: flex-start;
  height: 80px;
  z-index: 10;
  width: 100%;
  // padding: 0 24px;
  max-width: 1100px;

  // Desktop, full screen
  @media screen and (min-width: 768px) {
    flex-direction: column;
    height: 120px;
    max-width: 180px; 
    margin: 24px;
    padding: 30px 20px;
    justify-content: center;
    // justify-content: flex-start;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #A9FFF7;
  // justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
// Sandwich
export const MobileIcon = styled.div` 
    display: none;
    
        @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #A9FFF7;        
      }
`;
// Menu at the left
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  // margin-right: -22px;
  flex-direction: column;
  // width: 180px;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
// each item, li
export const NavItem = styled.li`
  height: 50px;
  // color: #bfd9e7;
`;
// this is the react scrolling
export const NavLinks = styled(LinkS)` 
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  // padding: 1 rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
// Button that I'm not currently using
export const NavBtn = styled.nav`
    display: flex:
    align-items: center;
    // padding-top: 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
// Button link that I'm not currently using
export const NavBtnLink = styled(LinkR)`
    display: none;
    border-radius: 50px;
    text-decoration: none;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`