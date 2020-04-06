import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { render } from "react-dom";

render(
  <BrowserRouter basename="f1/">
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
