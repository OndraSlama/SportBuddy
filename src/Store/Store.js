import { createStore, combineReducers } from "redux";
import eventsReducer from "../Reducers/Events";
import sportsReducer from "../Reducers/Sports";
import cellReducer from "../Reducers/DatePick"

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      sports: sportsReducer,
      cell: cellReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
