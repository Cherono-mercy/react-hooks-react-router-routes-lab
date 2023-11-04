import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Routes } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <Routes>
    <App />
  </Routes>,
  document.getElementById("root")
);
