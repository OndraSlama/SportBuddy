import moment from "moment";
const filtersDefault = {
	text: "",
	sports: [],
	noOfPlayers: undefined,
	startDate: moment().startOf("day"),
	endDate: moment().endOf("month"),
	startTime: "00:00",
	endTime: "23:59",
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
