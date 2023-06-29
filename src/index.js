import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TopScroll from "./utility/TopScroll";
import { store } from "../src/Redux-Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <TopScroll />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
