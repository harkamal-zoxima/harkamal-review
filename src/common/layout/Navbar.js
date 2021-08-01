import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as TiIcons from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../app/assets/images/zoxima.png";
import userActions from "../../app/redux/stores/user/actions";
import {
  NavbarContainer,
  ToggleButton,
  Logo,
  NavList,
  NavListItems,
  SocialIcons,
  Button,
  SubNavContainer,
  Span,
  ArrowDropdown,
  NavMenu,
  NavLink,
} from "./navbarStyles";
import { Colors } from "../CommonStyle";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const NavbarData = [
  {
    title: "Introduction",
    path: "/intro",
    // icon: <BsIcons.BsGraphUp />,
  },
  {
    title: "Technology",
    path: "/tech",
    // icon: <BsIcons.BsBell />,
  },
  {
    title: "Learning",
    path: "/learning",
    // icon: <BsIcons.BsPeople />,
  },
  {
    title: "Future Plans",
    path: "/futurePlans",
    // icon: <BsIcons.BsExclamationCircle />,
  },
  {
    title: "Suggestions",
    path: "/suggestions",
    // icon: <BsIcons.BsFileSpreadsheet />,
  },
];

function Navbar(props) {
  const themeContext = useContext(ThemeContext);
  const buttonRef = useRef(null);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    props.setScreenWidth(true);
  };

  return (
    <NavbarContainer>
      <NavMenu active={sidebar}>
        <Logo src={logo} />
        <ToggleButton onClick={showSidebar} sidebar={sidebar}>
          {sidebar ? (
            <BsIcons.BsList color={Colors.AccentColor2} />
          ) : (
            <BsIcons.BsX color={Colors.AccentColor2} />
          )}
        </ToggleButton>

        {/* Nav menu list main container  */}
        <NavList>
          <NavListItems
            theme={{
              hoverBackground: Colors.AccentColor1,
              hoverColor: Colors.SecondaryColor,
            }}
          >
            {NavbarData.map((item, index) => {
              return <SubMenu key={item.path} item={item} />;
            })}
          </NavListItems>
        </NavList>

        <section style={{zIndex: 4000}}>
          <Button theme={{color:themeContext.color}}>
          <a href="https://zoxima.com/" target="_blank" style= {{textDecoration: "none", }}>About Zoxima</a>
          </Button>
        </section>
      </NavMenu>
    </NavbarContainer>
  );
}

// For the Sub-items in a particular list
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      {/* Sub-items container */}
      <NavLink to={item.path}>
        <Span onClick={item.subNav && showSubnav && showSubnav}>
          <div style={{ marginRight: 15 }}>{item.icon}</div>{" "}
          <Span style={{ width: 150 }}>
            <b>{item.title}</b>
            <ArrowDropdown>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </ArrowDropdown>
          </Span>
        </Span>
        {/* Sub-menu Arrow Icon */}
      </NavLink>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <SubNavContainer>
              <Link
                to={item.path}
                style={{ color: "white", textDecoration: "none" }}>
                {item.icon}
                <Span>{item.title}</Span>
              </Link>
            </SubNavContainer>
          );
        })}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: (params) => dispatch(userActions.logout(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
