import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NotificationActions from "../redux/stores/notification/actions";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  MainContainer,
  HeaderContainer,
  RouteTopicContainer,
  BreadcrumbLink,
  HeaderBar,
  PageTopic,
  ResponsiveContainer,
  Colors,
  PageContent,
  PageSubTopic,
  PageContentText,
  SearchBarContainer,
} from "../../common/CommonStyle";

const Notification = (props) => {
  const themeContext = useContext(ThemeContext);
  const { notificationList } = props;

  useEffect(() => {
    props.getNotification();
  }, []);

  //Table
  return (
    <MainContainer>
      <HeaderContainer>
        <RouteTopicContainer>
          <PageTopic>Suggestions</PageTopic>
        </RouteTopicContainer>
      </HeaderContainer>

      <PageContent>
        {/* <PageSubTopic
          theme={{
            fontFamily: "futura_book",
            fontSize: "25px",
          }}
        >
          <b>ReactJS</b>
        </PageSubTopic> */}
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
          }}
        >
          Employees are Valuable Assets of an Organization and the Key to
          Success.There is both pro and cons of a company. But in this company,
          every employee is very co-operative and cheerful. Especially Dinesh
          sir, Omkar sir, Harjeet sir, Sukhjit Ji, Simran Ji, and Sukhbir Ji are
          very helpful and I am very thankful to them.
        </PageContentText>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          My suggestion to the company is that the company should provide laptop
          and other accessories to its employees so that the privacy of the
          projects should remain secure and There should be a proper traning
          session for the freshers so that they can also achieve the same level
          as others.
        </PageContentText>
      </PageContent>
    </MainContainer>
  );
};

const mapStateToProps = (state) => ({
  notificationList:
    state.notifications.landingNotifications &&
    state.notifications.landingNotifications.length > 0
      ? state.notifications.landingNotifications
      : [],
});

const mapDispatchToProps = (dispatch) => ({
  getNotification: (params) =>
    dispatch(NotificationActions.landingNotification(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
