import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { Provider } from "react-redux";

import configureStore from "./Store/ConfigureStore";
import { addEvent, editEvent } from "./Actions/Events";
import { setFilters, resetFilters } from "./Actions/Filters";

const store = configureStore();

store.subscribe(() => console.log(store.getState()));

store.dispatch(addEvent({ eventName: "ahoj", cost: 100 }));
store.dispatch(addEvent({ eventName: "prdel" }));
const something = store.dispatch(addEvent({ eventName: "neco" }));

store.dispatch(
	editEvent(something.event.id, {
		ahoj: 1,
		note: "tohle je note",
		omg: "to je neco"
	})
);

store.dispatch(
	setFilters({
		fromDate: 100,
		noOfPlayers: 3,
		sortBy: "eventDate",
		sports: ["badminton", "squash"]
	})
);

// store.dispatch(resetFilters());

const ConnectedApp = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(ConnectedApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
