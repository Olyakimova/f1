import * as React from "react";
import { Switch, Route, Redirect } from "react-router";
import "./pilots.css";
import { PilotsStat } from "./stat/PilotsStat";
import { Driver } from "./driver/Driver";

export const Pilots = () => (
  <Switch>
    <Route exact path="/drivers" component={PilotsStat} />
    <Route path="/drivers/driver/:key" component={Driver} />
    <Route path="/drivers/:year" component={PilotsStat} />
  </Switch>
);
