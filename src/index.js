import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./Store/Store";
import addEvent from "./Actions/index";
import { addSports } from "./Actions/Sports";
import moment from "moment";
import { createCell } from "./Actions/DatePick";

const store = createStore();

// store.dispatch(
//   addEvent({
//     description: "Badminton pro prasata",
//     sport: "Badminton",
//     numberOfPlayers: "4 prasata",
//     to: "",
//     from: ""
//   })
// );

// store.dispatch(createCell({ start: 1, stop: 2 }));
// store.dispatch(createCell({ start: 3, stop: 4 }));

store.dispatch(addSports(["Tennis", "Ping Pong"]));

const ConnectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ConnectedApp, document.getElementById("root"));
