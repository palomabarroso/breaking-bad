import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GlobalStyle from "style/GlobalStyle";
import store from "store";
import Routes from "./utils/routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <GlobalStyle />
  </Provider>,
  document.getElementById("root"),
);
