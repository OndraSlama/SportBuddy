const eventsDefault = [];

export default (state = eventsDefault, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return [...state, action.event];
    default:
      return state;
  }
};
