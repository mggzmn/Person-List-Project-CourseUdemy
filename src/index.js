import React from "react";
import ReactDOM from "react-dom";
import PersonList from "./PersonList";
const size = 20;
const rootElement = document.getElementById("root");
ReactDOM.render(<PersonList size={size} />, rootElement);
