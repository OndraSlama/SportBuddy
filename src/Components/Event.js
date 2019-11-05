import React from "react";
import { connect } from "react-redux";
import { removeEvent } from "../Actions/Events";
import "../Styles/Event.css";
import TimeSlider from "./TimeSlider";
import moment from "moment";

const Event = props => {
	return (
		<div className="event">
			<h3>{props.eventName}</h3>
			<span>Note: {props.note} </span>
			<br />
			<span>Cost: {props.cost}</span>
			<br />
			<span>Players: {props.noOfPlayers}</span>
			<br />
			<span>
				Date: {moment(props.eventStartDate).format("DD-MMM-YYYY")}
			</span>
			<br />
			<TimeSlider
				eventStartTime="18:30"
				eventEndTime="19:30"
				disable={true}
				step={15}
			/>
			<br />

			<button
				className="deleteButton"
				id={props.id}
				onClick={e => deleteEventHandler(e, props.dispatch)}
			>
				Delete
			</button>
		</div>
	);
};

function deleteEventHandler(event, dispatch) {
	// console.log(event.target.id);

	dispatch(removeEvent(event.target.id));
}

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Event);
