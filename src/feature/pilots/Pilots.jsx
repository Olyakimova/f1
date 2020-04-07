import * as React from "react";
import { Switch, Route, Redirect } from "react-router"
import "./pilots.css";
import { PilotsStat } from "./stat/PilotsStat";
import { Pilot } from "./pilot/Pilot";

export const Pilots = () => (
  <Switch>
    <Route exact path='/pilots' component={PilotsStat}/>
    <Route path='/pilots/:year' component={PilotsStat}/>
    <Route path='/pilots/pilot/:id' component={Pilot}/>
  </Switch>
)