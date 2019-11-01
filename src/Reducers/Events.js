const eventsDefault = [];

export default (state = eventsDefault, action) => {
	switch (action.type) {
		case "ADD_EVENT":
			return [...state, action.event];
		case "REMOVE_EVENT":
			return state.filter(({ id }) => id !== action.id);
		case "EDIT_EVENT":
			return state.map(event => {
				if (event.id === action.id) {
					return {
						...event,
						...action.updates
					};
				} else {
					return event;
				}
			});
		default:
			return state;
	}
};
