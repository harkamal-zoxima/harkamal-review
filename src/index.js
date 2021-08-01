import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./app/routes";
import createStore from "./app/redux/stores";
import "./common/main.css"

const { store } = createStore();

const ParentContainer = () => {
  return (
    <Provider store={store} context={ReactReduxContext}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<ParentContainer />, document.getElementById("root"));
