import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../common/layout"

const AppContainer = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout history={props.history}>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default AppContainer;
