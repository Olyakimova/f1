import * as React from "react";
import { Switch, Route } from "react-router"
import { Home } from "./feature/home/Home"
import { Pilots } from "./feature/pilots/Pilots"
import { PageNotFound } from "./common/PageNotFound";
import { Header } from "./common/header/Header";
import "./common/common.css";

export const App = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/pilots" component={Pilots}/>
                <Route component={PageNotFound}/>
            </Switch>
        </>
    );
}