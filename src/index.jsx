import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import "./styles/main.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
