import React from "react";
import "./index.css";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import store from "./services/store";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
