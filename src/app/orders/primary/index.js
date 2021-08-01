import React, { useState } from "react";
import CollapsibleTable from "../../../common/components/CollapsibleTable";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import SearchBar from "../../../common/components/headerComponents/SearchBar";
import NewOrder from "../../../common/components/headerComponents/NewOrder";
import ExportMenu from "../../../common/components/headerComponents/ExportMenu";
import Filter from "../../../common/components/headerComponents/Filter";
import Notifications from "../../../common/components/headerComponents/Notifications";
import {
  MainContainer,
  HeaderContainer,
  RouteTopicContainer,
  BreadcrumbLink,
  PageTopic,
  HeaderBar,
  ResponsiveContainer,
  SearchBarContainer
} from "../../../common/CommonStyle";

function Primary() {
  const themeContext = useContext(ThemeContext);

  return (
    <MainContainer>
      <HeaderContainer>
        <RouteTopicContainer>
          <Breadcrumbs style={{ color: themeContext.breadcrumbInactiveColor }}>
            <BreadcrumbLink
              color="inherit"
              custom={{
                color: themeContext.breadcrumbInactiveColor,
                fontFamily: themeContext.fontFamily,
                fontSize: "15px",
              }}
            >
              Orders
            </BreadcrumbLink>
            <BreadcrumbLink
              custom={{
                color: themeContext.breadcrumbActiveColor,
                fontFamily: themeContext.fontFamily,
                fontSize: "15px",
              }}
              color="inherit"
              to="/primary"
            >
              Primary
            </BreadcrumbLink>
          </Breadcrumbs>
          <HeaderBar> {/* PARENT CONTAINER FOR HEADER COMPONENTS */}
            <PageTopic> {/* PAGE TOPIC NAME AND SEARCH BAR IN ONE CONTAINER */}
            Primary Orders (Regular)
              <SearchBarContainer> {/* CONTAINER FOR SEARCH BAR (Seprate due to Responsive screen ) */}
                <SearchBar />
              </SearchBarContainer>
            </PageTopic>

            <ResponsiveContainer> {/* OTHER THREE COMPONENTS IN OTHER CONTAINER */}
            <Link to="/newPrimaryOrder">
              <NewOrder />
            </Link>
              <ExportMenu />
              <Filter />
              <Notifications />
            </ResponsiveContainer>
          </HeaderBar>
        </RouteTopicContainer>
      </HeaderContainer>
      <CollapsibleTable />
    </MainContainer>
  );
}

export default Primary;
