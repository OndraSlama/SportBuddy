import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./Store/Store";
import addEvent from "./Actions/index";

const store = createStore();

store.dispatch(addEvent({ description: "ahoj" }));

const ConnectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ConnectedApp, document.getElementById("root"));
