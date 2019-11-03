import uuid from "uuid";

// ADD_EVENT
export const addEvent = ({
	eventName = "",
	note = "",
	location = "",
	noOfPlayers = 2,
	cost = 0,
	eventDate = 0,
	createdAt = 0
} = {}) => ({
	type: "ADD_EVENT",
	event: {
		id: uuid(),
		eventName,
		note,
		location,
		noOfPlayers,
		cost,
		eventDate,
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
