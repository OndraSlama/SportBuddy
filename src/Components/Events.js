import React from "react";
import { connect } from "react-redux";
import Event from "./Event";
import selectEvents from "../Selectors/Events";
import EventsFilters from "./EventsFilters";

const Events = props => {
	const filteredEvents = selectEvents(props.events, props.filters);
	return (
		<div>
			<EventsFilters />
			<h1>Events</h1>
			<ul>
				{filteredEvents.map(event => (
					<li key={event.id}>
						<Event {...event} />
					</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Events);
