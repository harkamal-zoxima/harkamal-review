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
          <PageTopic>Future Plans</PageTopic>
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
          My short term goal is to learn 
          <ul>
            <li>
            GraphQL
            </li>
            <li>Next.js</li>
            <li>Gatsby</li>
            <li>React-Native</li>
            <li>UI/UX Designing</li>
            <li>Adobe XD</li>
            <li>Adobe Illustrator and
          Anime.js to make attractive animations in the project</li>
          </ul>I want to
          become the efficient dynamic coder and everyday I am making progress on
          this.
        </PageContentText>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
            marginTop: "20px"
          }}
        >
          Everyday I learn new things about the dynamicity of the code from
          Omkar sir, who is a great mentor for me. So my goal is to learn how he
          think and how he implement approach to solve a problem with so much
          dynamicity and re-usability.
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
