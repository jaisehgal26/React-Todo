import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";

const DUMMYTASKS = [
  {
    id: "t1",
    task: "Eat",
    completed: true,
  },
  {
    id: "t2",
    task: "Sleep",
    completed: false,
  },
  {
    id: "t3",
    task: "Code",
    completed: false,
  },
  {
    id: "t4",
    task: "Repeat",
    completed: false,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DUMMYTASKS} />
  </React.StrictMode>,
  document.getElementById("root")
);
