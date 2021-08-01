import React, { useState } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import PlaceNewOrderCard from "../../../common/components/newOrderCard";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import SearchBar from "../../../common/components/headerComponents/SearchBar";
import ExportMenu from "../../../common/components/headerComponents/ExportMenu";
import Filter from "../../../common/components/headerComponents/Filter";
import Notifications from "../../../common/components/headerComponents/Notifications";
// STYLED COMPONENTS
import {
  MainContainer,
  HeaderContainer,
  RouteTopicContainer,
  BreadcrumbLink,
  PageTopic,
  HeaderBar,
  ResponsiveContainer,
  SearchBarContainer,
} from "../../../common/CommonStyle";
import { PlaceOrderContainer } from "./primaryStyles";

function NewPrimaryOrder() {
  const themeContext = useContext(ThemeContext);

  return (
    <MainContainer>
      <HeaderContainer
        theme={{
          borderBottomColor: themeContext.headerBorderBottom,
        }}
      >
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
                color: themeContext.breadcrumbInactiveColor,
                fontFamily: themeContext.fontFamily,
                fontSize: "15px",
              }}
              color="inherit"
              to="/primary"
            >
              Primary
            </BreadcrumbLink>
            <BreadcrumbLink
              custom={{
                color: themeContext.breadcrumbActiveColor,
                fontFamily: themeContext.fontFamily,
                fontSize: "15px",
              }}
              color="inherit"
              to="/newPrimaryOrder"
            >
              Place Order (Regular)
            </BreadcrumbLink>
          </Breadcrumbs>

          <HeaderBar> {/* PARENT CONTAINER FOR HEADER COMPONENTS */}
            <PageTopic> {/* PAGE TOPIC NAME AND SEARCH BAR IN ONE CONTAINER */}
            Place Order
              <SearchBarContainer> {/* CONTAINER FOR SEARCH BAR (Seprate due to Responsive screen ) */}
                <SearchBar />
              </SearchBarContainer>
            </PageTopic>

            <ResponsiveContainer> {/* OTHER THREE COMPONENTS IN OTHER CONTAINER */}
              <ExportMenu />
              <Filter />
              <Notifications />
            </ResponsiveContainer>

          </HeaderBar>
        </RouteTopicContainer>
      </HeaderContainer>

      <PlaceOrderContainer>
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
        <PlaceNewOrderCard />
      </PlaceOrderContainer>
    </MainContainer>
  );
}

export default NewPrimaryOrder;
