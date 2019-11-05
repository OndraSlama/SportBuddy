export default (events, { text, sports, noOfPlayers, fromDate, toDate, sortBy }) => {
	return events
		.filter(event => {
			const fromDateMatch = typeof fromDate !== "number" || event.createdAt >= fromDate;
			const toDateMatch = typeof toDate !== "number" || event.createdAt <= toDate;
			const noOfPlayersMatch =
				typeof noOfPlayers !== "number" || event.noOfPlayers === noOfPlayers;
			const sportMatch = sports.length === 0 || sports.includes(event.sport);
			const eventTextMatch = event.eventName.toLowerCase().includes(text.toLowerCase());
			const sportTextMatch = false;
			const noteTextMatch = false;

			return (
				fromDateMatch &&
				toDateMatch &&
				noOfPlayersMatch &&
				sportMatch &&
				(eventTextMatch || sportTextMatch || noteTextMatch)
			);
		})
		.sort((a, b) => {
			switch (sortBy) {
				case "date":
					return a.eventStartDate > b.eventStartDate ? 1 : -1;
				case "cost":
					return a.cost > b.cost ? 1 : -1;
				case "noOfPlayers":
					return a.noOfPlayers < b.noOfPlayers ? 1 : -1;
				default:
					return 0;
			}
		});
};
