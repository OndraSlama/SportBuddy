import React from "react";
import { connect } from "react-redux";
import { adEvent } from "../Actions/Events";

const Events = props => {
	return (
		<div>
			<h1>Events</h1>
			<ul>
				{props.events.map(event => (
					<li>
						<span>{event.description + ", "}</span>
						<span>{event.note + ", "}</span>
						<span>{event.cost}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
export default connect(storeState => ({ ...storeState }))(Events);
