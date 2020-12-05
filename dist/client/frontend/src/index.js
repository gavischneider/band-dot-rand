import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
//const reportWebVitals: any = require("./reportWebVitals"); //"./reportWebVitals";
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
