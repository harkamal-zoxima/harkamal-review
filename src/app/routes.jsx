import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppContainer from "./AppContainer";
import { helperService } from "../common/utils/helperService";
import { withRouter } from "react-router-dom";

// Home Pages
import Landing from "./landing";

// Notification Page
import Notification from "./notification";

// Mou page
import Mou from "./mou";

// Tod page
import TodPolicy from "./todPolicy";

// Credit Policy page
import CreditPolicy from "./creditPolicy";

function AllRoutes() {
  return (
    <Switch>
      {/* Landing Navigation */}
      <AppContainer path="/intro" component={Landing} />

      {/* Notification Navigation */}
      <AppContainer path="/tech" component={Notification} />

      {/* Mou Navigation */}
      <AppContainer path="/learning" component={Mou} />

      {/* Credit policy Navigation */}
      <AppContainer path="/futurePlans" component={CreditPolicy} />

      {/* TodPolicy Navigation */}
      <AppContainer path="/suggestions" component={TodPolicy} />

      {/* Default Navigation */}
      <Route
        exact
        path="/"
        render={() =>
          helperService.loggedIn() ? (
            <Redirect exact to="/intro" />
          ) : (
            <Redirect exact to="/intro" />
          )
        }
      />
    </Switch>
  );
}

export default withRouter(AllRoutes);
