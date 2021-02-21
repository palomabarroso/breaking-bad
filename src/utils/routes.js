import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as urls from "./constants/urls";
import Home from "../pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={urls.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
