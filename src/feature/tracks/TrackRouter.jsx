import * as React from "react";
import { Switch, Route } from "react-router";
import { Tracks } from "./Tracks";
import { Track } from "./track/Track";

export const TrackRouter = () => (
  <Switch>
    <Route exact path="/tracks" component={Tracks} />
    <Route path="/tracks/:key" component={Track} />
  </Switch>
);
