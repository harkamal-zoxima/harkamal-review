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
          <PageTopic>Technology on Which I Am Working</PageTopic>
        </RouteTopicContainer>
      </HeaderContainer>

      <PageContent>
        <PageSubTopic
          theme={{
            fontFamily: "futura_book",
            fontSize: "25px",
          }}
        >
          <b>ReactJS</b>
        </PageSubTopic>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
            marginTop: "20px"
          }}
        >
          ReactJs is a free and open-source front-end JavaScript library for
          building user interfaces or UI components. It is maintained by
          Facebook and a community of individual developers and companies. React
          can be used as a base in the development of single-page or mobile
          applications.
        </PageContentText>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
          }}
        >
          ReactJs is a library for building composable user interfaces. It
          encourages the creation of reusable UI components, which present data
          that changes over time. Lots of people use React as the V in MVC.
          React abstracts away the DOM from you, offering a simpler programming
          model and better performance. React can also render on the server
          using Node, and it can power native apps using React Native. React
          implements one-way reactive data flow, which reduces the boilerplate
          and is easier to reason about than traditional data binding.
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
