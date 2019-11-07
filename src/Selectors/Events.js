export default (events, { text, sports, noOfPlayers, startDate, endDate, sortBy }) => {
	return events
		.filter(event => {
			const startDateMatch = startDate
				? startDate.startOf("day").isSameOrBefore(event.date)
				: true;
			const endDateMatch = endDate ? endDate.endOf("day").isSameOrAfter(event.date) : true;
			const noOfPlayersMatch =
				typeof noOfPlayers !== "number" || event.noOfPlayers === noOfPlayers;
			const sportMatch = sports || sports.includes(event.sport);
			const eventTextMatch = event.name.toLowerCase().includes(text.toLowerCase());
			const sportTextMatch = false;
			const noteTextMatch = false;

			return (
				startDateMatch &&
				endDateMatch &&
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
