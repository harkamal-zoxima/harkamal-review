import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

export const Colors = {
  PrimaryColor: "#EE3137",
  SecondaryColor: "#3E3E3E",
  AccentColor1: "#DBDAD5",
  AccentColor2: "#F9F5F1",
  SecondaryColorTranslucent: "rgba(62, 62, 62, 0.7)",
  PrimaryColorTranslucent: "rgba(238, 49, 55, 0.7)",
  InactiveLinkColor: "#7C7C7C",
  ActiveLinkColor: "#2247E0",
  white: "#ffffff",
  black: "#000000",
};

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    body {
      width: 100%;
      float: left;
      position: relative;
      font-family: ${(props) => props.fontFamily};
      background-color: ${(props) => props.background};
      color: ${(props) => props.color};
      margin: 0;
      padding: 0;
      height: 100vh;
    }
    html {
      margin: 0;
      padding: 0;
    }
`;

export const MainContainer = styled.section`
  width: 100%;
  float: left;
  position: relative;
  margin: 0;
  padding: 0;
  height: auto;
  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
  
`;

export const MainLayout = styled.section`
  width: ${(props) => (props.activeNav ? "calc(100% - 250px)" : "100%")};
  font-family: ${(props) => props.theme.fontFamily};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  float: right;
  transition: 800ms;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  float: left;
  border-bottom: ${(props) => props.theme.borderBottomColor} 0.3px solid;
  margin-bottom: 15px;
  height: 140px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    height: 128px;
  }

  @media only screen and (min-width: 1008px) {
    height: auto;
  }
`;

export const HeaderBar = styled.section`
  height: 30px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1008px) {
    display: flex;
    flex-direction: row;
    height: auto;
  }
`;

export const RouteTopicContainer = styled.section`
  height: 100px;
  margin-left: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const PageTopic = styled.section`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.color};
  font-family: "futura_round";
  letter-spacing: 1px;
  /* line-height: 20px; */
  font-weight: 600;
  font-size: 17px;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 1008px) {
    font-size: 30px;
    width: 85%;
  }
`;

export const BreadcrumbLink = styled(Link)`
  font-family: ${(props) => props.custom.fontFamily};
  font-size: ${(props) => props.custom.fontSize};
  color: ${(props) => props.custom.color};
  text-decoration: none;
  font-weight: 600;
`;

export const PageSubTopic = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.color};
`;

export const PageContent = styled.section`
  width: calc(100% - 35px);
  margin-left: 25px;
  margin-bottom: 25px;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 75px);
    margin-left: 65px;
    margin-bottom: 25px;
  }
`;

export const PageContentText = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) =>
    props.theme.fontSize ? props.theme.fontSize : "14px"};
  color: ${(props) => props.theme.color};
  margin-top: ${(props) =>
    props.theme.marginTop ? props.theme.marginTop : "55px"};
    line-height: 40px;
`;

export const ListLi = styled.li`
  margin-top: 10px;
  letter-spacing: 1.5px;
`;

export const TableTextField = styled(TextField)`
  width: 50px !important;
  padding: 5px 5px !important;
`;

export const MouSignatureSpace = styled.section`
  display: none;

  @media only screen and (min-width: 768px) {
    width: 250px;
    border-bottom: 1px solid black;
  }
`;

export const MouButtons = styled.button`
  background-color: #454545;
  color: ${Colors.AccentColor2};
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-family: futura_book;
  letter-spacing: 1px;
`;

export const ChangeThemeButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  height: 50px;
  width: 50px;
  padding: 8px;
  background-color: #E5F9FF;
  color: #284d77;
  z-index: 1;
  border: none;
  font-family: futura_book;
  font-weight: 600;
  border-radius: 30px;
  letter-spacing: 1px;
  cursor: pointer;
`;

// HEADER COMPONENTS
export const SearchBarContainer = styled.section`
  display: flex;
`;

export const SearchHeaderComponent = styled.section`
  display: flex;
  justify-content: center;
  line-height: 30px;
  width: ${(props) => (props.activeSearch ? "115px" : "45px")};
  background-color: ${Colors.AccentColor1};
  border-radius: 15px;
  text-align: center;
  margin-right: 10px;
  padding-top: 6px;
  transition: 300ms;
  cursor: pointer;

  @media only screen and (min-width: 375px) {
    width: ${(props) => (props.activeSearch ? "150px" : "45px")};
  }

  @media only screen and (min-width: 768px) {
    width: ${(props) => (props.activeSearch ? "230px" : "45px")};
  }

  @media only screen and (min-width: 1008px) {
    width: ${(props) => (props.activeSearch ? "190px" : "45px")};
  }

  @media only screen and (min-width: 1440px) {
    width: ${(props) => (props.activeSearch ? "330px" : "45px")};
  }
`;

export const ActiveSearchContainer = styled.section`
  width: 95px;
  display: flex;
  justify-content: flex-start;

  @media only screen and (min-width: 375px) {
    width: 130px;
  }

  @media only screen and (min-width: 768px) {
    width: 180px;
  }

  @media only screen and (min-width: 1008px) {
    width: 140px;
  }

  @media only screen and (min-width: 1440px) {
    width: 280px;
  }
`;

export const ActiveSearchInput = styled.input`
  width: 65px;
  border: none;
  border-bottom: 1px solid #a7a7a7;
  margin-left: 5px;
  margin-bottom: 3px;

  @media only screen and (min-width: 375px) {
    width: 100px;
  }

  @media only screen and (min-width: 768px) {
    width: 140px;
  }

  @media only screen and (min-width: 1008px) {
    width: 100px;
  }

  @media only screen and (min-width: 1440px) {
    width: 240px;
  }
`;

export const ExportHeaderComponent = styled.section`
  height: 30px;
  width: 45px;
  background-color: ${Colors.AccentColor1};
  border-radius: 15px;
  border-bottom-right-radius: ${(props) =>
    props.activeExportMenu ? "0px" : "15px"};
  border-top-right-radius: ${(props) =>
    props.activeExportMenu ? "0px" : "15px"};
  text-align: center;
  margin-right: 10px;
  padding-top: 6px;
  cursor: pointer;
  transition: 100ms;
`;

export const ActiveExportMenuContainer = styled.section`
  width: 150px;
  height: ${(props) => (props.activeExportMenu ? "100px" : "0px")};
  box-shadow: rgb(217 217 217 / 95%) 2px 2px 6px;
  background-color: white;
  z-index: 10;
  position: absolute;
  top: 126px;
  right: 155px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  // display: ${(props) => (props.activeExportMenu ? "block" : "none")};
  transition: 100ms;

  @media only screen and (min-width: 1024px) {
    width: 180px;
    top: 87px;
    right: 156px;
  }
`;

export const ResponsiveContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  justify-content: flex-end;

  @media only screen and (min-width: 1008px) {
    margin-top: 5px;
  }

  @media only screen and (min-width: 1008px) {
    margin-top: 0px;
    display: flex;
    flex-direction: row;
  }
`;

export const FilterHeaderComponent = styled.section`
  line-height: 30px;
  width: 80px;
  background-color: ${Colors.AccentColor1};
  border-radius: 15px;
  border-bottom-right-radius: ${(props) =>
    props.activeFilter ? "0px" : "15px"};
  border-top-right-radius: ${(props) => (props.activeFilter ? "0px" : "15px")};
  text-align: center;
  margin-right: 10px;
  padding-top: 6px;
  transition: 500ms;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const FilterTitle = styled.section`
  color: ${Colors.PrimaryColor};
  font-size: 17px;
  font-weight: 600;
  margin-top: -2px;
  letter-spacing: 1px;
`;

export const ActiveFilterContainer = styled.section`
  width: 210px;
  height: ${(props) => (props.activeFilter ? "auto" : "0px")};
  box-shadow: rgb(217 217 217 / 95%) 2px 2px 6px;
  background-color: white;
  z-index: 10;
  position: absolute;
  top: 126px;
  right: 65px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: ${(props) => (props.activeFilter ? "block" : "none")};
  font-family: futura_book;
  padding: 15px;
  transition: 300ms;

  @media only screen and (min-width: 1024px) {
    width: 300px;
    height: ${(props) => (props.activeFilter ? "260px" : "0px")};
    box-shadow: rgb(217 217 217 / 95%) 2px 2px 6px;
    background-color: white;
    z-index: 10;
    position: absolute;
    top: 85px;
    right: 65px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    font-family: futura_book;
    padding: 40px;
    transition: 300ms;
  }
`;

export const HeaderComponents = styled.section`
  height: 30px;
  width: 45px;
  background-color: ${Colors.AccentColor1};
  border-radius: 15px;
  text-align: center;
  margin-right: 10px;
  padding-top: 6px;
  cursor: pointer;
`;

export const NotificationHeaderComponents = styled.section`
  height: 30px;
  width: 45px;
  background-color: ${Colors.AccentColor1};
  border-radius: 15px;
  text-align: center;
  margin-right: 10px;
  padding-top: 6px;
  cursor: pointer;
`;