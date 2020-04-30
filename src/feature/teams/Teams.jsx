import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import "./teams.css";
import { TeamsMain } from "./TeamsMain";

export const Teams = () => (
  <Switch>
    <Route exact path="/teams" component={TeamsMain} />
  </Switch>
);
