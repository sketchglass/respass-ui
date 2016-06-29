import * as React from "react";
import * as ReactDOM from "react-dom";
import ThreadView from "./views/ThreadView";
import "../styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<ThreadView></ThreadView>, document.getElementById("app"));
});
