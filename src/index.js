import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./Store/Store";
import addEvent from "./Actions/index";
import { addSports } from "./Actions/Sports";
import moment from "moment";

const store = createStore();

store.dispatch(
  addEvent({
    description: "ahoj",
    to: moment(new Date()).add(1, "days"),
    from: moment(new Date())
  })
);
store.dispatch(addSports(["Tennis", "Ping Pong"]));

const ConnectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ConnectedApp, document.getElementById("root"));
