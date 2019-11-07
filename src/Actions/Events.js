import uuid from "uuid";
import moment from "moment";

// ADD_EVENT
export const addEvent = ({
	name = "",
	note = "",
	sport = "",
	location = "",
	noOfPlayers = 2,
	cost = 0,
	date = moment().startOf("day"),
	startTime = "16:00",
	endTime = "18:00",
	createdAt = moment()
} = {}) => ({
	type: "ADD_EVENT",
	event: {
		id: uuid(),
		name,
		note,
		sport,
		location,
		noOfPlayers,
		cost,
		date,
		startTime,
		endTime,
		createdAt
	}
});

export const removeEvent = id => ({
	type: "REMOVE_EVENT",
	id
});

export const editEvent = (id, updates) => ({
	type: "EDIT_EVENT",
	id,
	updates
});
