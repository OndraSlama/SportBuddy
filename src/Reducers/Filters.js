const filtersDefault = {
	text: "",
	sports: [],
	noOfPlayers: undefined,
	fromDate: undefined,
	toDate: undefined,
	sortBy: ""
};

export default (state = filtersDefault, action) => {
	switch (action.type) {
		case "RESET_FILTERS":
			return {
				...state,
				...filtersDefault
			};
		case "SET_FILTERS":
			return {
				...state,
				...action.everything
			};
		default:
			return state;
	}
};
