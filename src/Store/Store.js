import { createStore, combineReducers } from "redux";
import eventsReducer from "../Reducers/Events";

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
