import uuid from "uuid";

// ADD_EVENT
export const addEvent = ({
	description = "",
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
		description,
		note,
		location,
		noOfPlayers,
		cost,
		eventDate,
		createdAt
	}
});

export const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EVENT",
	id
});

export const editEvent = (id, updates) => ({
	type: "EDIT_EVENT",
	id,
	updates
});
