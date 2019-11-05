import { createStore, combineReducers } from "redux";
import eventsReducer from "../Reducers/Events";
import filtersReducer from "../Reducers/Filters";
import sportsReducer from "../Reducers/Sports";

export default () => {
	const store = createStore(
		combineReducers({
			events: eventsReducer,
			filters: filtersReducer,
			sports: sportsReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};
