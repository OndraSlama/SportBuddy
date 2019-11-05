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
			{props.note && (
				<div>
					<span>Note: {props.note} </span>
					<br />
				</div>
			)}

			{props.sport && (
				<div>
					<span>Sport: {props.sport} </span>
					<br />
				</div>
			)}

			{(props.cost || props.cost === 0) && (
				<div>
					<span>Cost: {props.cost} </span>
					<br />
				</div>
			)}

			{(props.noOfPlayers || props.noOfPlayers === 0) && (
				<div>
					<span>Players: {props.noOfPlayers} </span>
					<br />
				</div>
			)}

			{(props.eventStartDate || props.eventStartDate === 0) && (
				<div>
					<span>Date: {moment(props.eventStartDate).format("DD-MMM-YYYY")} </span>
					<br />
				</div>
			)}

			<TimeSlider
				eventStartTime={moment(props.eventStartDate).format("HH:mm")}
				eventEndTime={moment(props.eventEndDate).format("HH:mm")}
				disable={true}
				step={15}
			/>
			{console.log(
				moment(props.eventStartDate).hours() * 60 + moment(props.eventStartDate).minutes()
			)}
			<br />

			<button
				className="deleteButton"
				id={props.id}
				onClick={e => deleteEventHandler(e, props.dispatch)}>
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
