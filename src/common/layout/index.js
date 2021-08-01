import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Colors, MainLayout, ChangeThemeButton } from "../CommonStyle";
import Navbar from "./Navbar";
import * as FiIcons from "react-icons/fi";

const Layout = ({ children }) => {
  const [activeNav, setActiveNav] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const lightTheme = {
    background: "#E5F9FF", 
    color: Colors.SecondaryColor,
    colors: Colors,
    breadcrumbActiveColor: Colors.ActiveLinkColor,
    breadcrumbInactiveColor: Colors.InactiveLinkColor,
    fontFamily: "futura_book",
    headerBorderBottom: Colors.SecondaryColorTranslucent,
    productCardColor: Colors.white,
    productLabelColor: Colors.SecondaryColor,
    productCardBoxShadow: "rgb(217 217 217 / 95%) 2px 2px 6px",
  }

  const darkTheme = {
    background: "#040D21", 
    color: Colors.AccentColor2,
    colors: Colors,
    breadcrumbActiveColor: "#63a7ff",
    breadcrumbInactiveColor: Colors.AccentColor1,
    fontFamily: "futura_book",
    headerBorderBottom: Colors.AccentColor1,
    productCardColor: Colors.SecondaryColor,
    productLabelColor: Colors.AccentColor2,
    productCardBoxShadow: "rgb(0 0 0 / 95%) 2px 2px 6px",
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : theme === "dark" ? darkTheme: "" }>
      <Navbar setScreenWidth={() => setActiveNav(!activeNav)} />
      <MainLayout activeNav={activeNav}>
        <ChangeThemeButton onClick={toggleTheme}>
          {theme === "light" ? <FiIcons.FiMoon fontSize= "35px" /> : <FiIcons.FiSun fontSize= "35px" /> }
        </ChangeThemeButton>
        {children}
      </MainLayout>
    </ThemeProvider>
  );
};
export default Layout;
