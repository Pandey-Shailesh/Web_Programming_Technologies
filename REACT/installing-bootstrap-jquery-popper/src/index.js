import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";
import "./index.css";

//var element = <button className="btn btn-warning">Click Me.</button>;
//ReactDOM.render(element, document.getElementById("root"));
ReactDOM.render(<NavBar />, document.getElementById("root"));
