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
          <PageTopic>Experience and Learning in Zoxima</PageTopic>
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
          Before joining Zoxima, I had been with a startup (ITMTB Technologies)
          at which I was working in ReactJs and I got some experience over
          there. And then I got an offer for Zoxima as a ReactJs Developer which
          was a good offer for me. I joined and got training on both ReactJs and
          React Native. My mentors are so good and lenient with me. I was
          assigned to the JK-Paper DMS project which is a complex project. I
          learnt how Antd is being used in the project, how the UI is designed.
          But at one time the project stopped working because of the bundle size
          of the project which was very large (Around 500mb). So we (Team
          Supreme) decided to restructure the project and we were successful in
          this and the final bundle size was around 20mb.
        </PageContentText>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
          }}
        >
          After this I learnt about the functionalities in the project. I learnt
          tech stacks like Array methods, Object manipulation, React Hooks,
          Redux, Redux Saga, Generator Functions, React Sauce, Webpack, Babel,
          Dynamic coding, Material UI, Styled-Components, Dark Theme using
          ThemeProvider, CSS properties like Flex-box, Grid. I learnt how an API
          will be integrated through Redux and Redux-Saga, which was a great
          learning for me. I made a whole responsive design of this website and
          added another Side Menu Navigation Bar for Mobile design. After this I
          worked on the Analytics page which was also a great learning
          experience for me so far. I used different Npm packages like ChartJs,
          AnimeJs and integrated many Api’s with Front-end dynamic Filters.
          After this project, I was assigned to Prince Pipes DMS and I am
          currently working on this project. This is also a great opportunity
          for me to adapt functionalities from the scratch.
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
