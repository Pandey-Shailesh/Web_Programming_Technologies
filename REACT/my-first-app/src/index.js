import React from "react";
import ReactDOM from "react-dom/client";

function Heading() {
  return <h1>Welcome to the Coder world</h1>;
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render("|welcome to Rect |");

const head = document.getElementById("heading");
const root2 = ReactDOM.createRoot(head);
root2.render(<Heading />);
