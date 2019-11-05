import uuid from "uuid";

// ADD_EVENT
export const addEvent = ({
	eventName = "",
	note = "",
	location = "",
	noOfPlayers = 2,
	cost = 0,
	eventStartDate = new Date().getTime(),
	eventEndDate = new Date().getTime(),
	createdAt = new Date().getTime()
} = {}) => ({
	type: "ADD_EVENT",
	event: {
		id: uuid(),
		eventName,
		note,
		location,
		noOfPlayers,
		cost,
		eventStartDate,
		eventEndDate,
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
