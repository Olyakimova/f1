import * as React from "react";
import { Switch, Route } from "react-router";
import { Home } from "./feature/home/Home";
import { Pilots } from "./feature/pilots/Pilots";
import { PageNotFound } from "./common/PageNotFound";
import { Header } from "./common/header/Header";
import "./common/common.css";
import { Teams } from "./feature/teams/Teams";

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/drivers" component={Pilots} />
        <Route path="/teams" component={Teams} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};
