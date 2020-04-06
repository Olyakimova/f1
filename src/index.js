import * as React from "react";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import { render } from "react-dom";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
