import React from "react";
import { connect } from "react-redux";
import Event from "./Event";

const Events = props => {
	return (
		<div>
			<h1>Events</h1>
			<ul>
				{props.events.map(event => (
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
