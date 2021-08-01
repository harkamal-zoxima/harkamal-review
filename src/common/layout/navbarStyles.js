import styled from "styled-components";
import { Colors } from "../CommonStyle";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.section``;

export const NavMenu = styled.section`
  background-color: #284d77;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${(props) => (props.active ? "-250px" : 0)};
  transition: 800ms;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;

export const ToggleButton = styled.section`
  font-size: 1.5rem;
  background: #284d77;
  position: absolute;
  left: ${props=> props.sidebar ? "100%" : "78%"};
  top: 0px;
  width: 39px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 7px;
  padding-left: 11px;
  display: block;
  transition: 800ms;

  & :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    width: 40px;
  }
`;

export const Logo = styled.img`
  height: 70px;
  border-radius: 56px;
  margin-top: 5px;
  width: 75px;
  padding: 10px;
  background-color: white;
  position: absolute;
  top: 20px;
`;

export const NavList = styled.ul`
  width: 80%;
   height: 90vh;
   position: fixed;
   top: 100px;

  @media only screen and (min-width: 768px){
    width: 80%;
    height: 70vh;
    position: relative;
  }
`;

export const NavListItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;

  & :hover {
    background: white;
    cursor: pointer;
    border-radius: 10px;
    color: ${props => props.theme.hoverColor};
    letter-spacing: 1px;
    transform: scale(1.01);
    transition: 500ms;
  }

`;

export const NavLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 25px;
  text-decoration: none;
  font-size: 20px;
  /* font-family: "futura_book"; */
  color: #f9f5f1;
  width: 190px;
  letter-spacing: 1px;
`;

export const SocialIcons = styled.section`
  height: 35px;
  width: 100%;
  color: white;
  position: absolute;
  font-size: 24px;
  bottom: 55px;
  display: flex;
  justify-content: space-evenly;

  & :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px){
    height: 8%;
    color: white;
    position: absolute;
    font-size: 28px;
    bottom: 30px;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  border: none;
  /* height: 30px; */
  border-radius: 20px;
  color: white;
  font-size: 17px;
  font-family: ${props => props.theme.fontFamily};
  letter-spacing: 1.5px;

  & :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px){
    width: 100%;
    background-color: ${props => props.theme.background};
    border: none;
    /* height: 5%; */
    border-radius: 20px;
    color: white;
    font-size: 17px;
    font-family: ${props => props.theme.fontFamily};
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
`;

export const SubNavContainer = styled.section`
  line-height: 35px;
  width: 66%;
  font-size: 15px;
  padding-left: 20px
`;

export const Span = styled.span`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowDropdown = styled.section``;
