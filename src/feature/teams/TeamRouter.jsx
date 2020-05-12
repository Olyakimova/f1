import * as React from "react";
import { Switch, Route } from "react-router";
import "./teams.css";
import { TeamsMain } from "./TeamsMain";
import { Team } from "./team/Team";

export const TeamRouter = () => (
  <Switch>
    <Route exact path="/teams" component={TeamsMain} />
    <Route path="/teams/:key" component={Team} />
  </Switch>
);
