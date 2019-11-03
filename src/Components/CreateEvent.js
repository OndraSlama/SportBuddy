import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../Actions/Events";
import moment from "moment";

import { NavLink } from "react-router-dom";
class CreateEvent extends Component {
	state = {
		eventName: "",
		note: "",
		eventTime: moment().format("HH:mm"),
		eventDate: moment().format("YYYY-MM-DD"),
		noOfPlayers: 0,
		showAcknowledge: false
	};

	editInputHandler(event) {
		event.persist();
		this.setState(prevState => {
			prevState[event.target.id] = event.target.value;
			console.log(prevState);
			return { ...prevState };
		});
	}

	submitHandler(event) {
		event.preventDefault();
		console.log(this.state);
		console.log(new Date(this.state.eventTime).getTime());

		this.props.dispatch(addEvent({ ...this.state }));

		this.setState(() => ({ showAcknowledge: true }));

		setTimeout(() => {
			this.setState(() => ({ showAcknowledge: false }));
		}, 2000);
	}

	render() {
		return (
			<div>
				<h1>Create Event</h1>

				<form onSubmit={e => this.submitHandler(e)}>
					<input
						type="text"
						id="eventName"
						placeholder="Event name"
						onChange={e => this.editInputHandler(e)}
					/>
					<br />

					<input
						type="number"
						id="cost"
						placeholder="Cost"
						onChange={e => this.editInputHandler(e)}
					/>
					<br />

					<input
						type="number"
						id="noOfPlayers"
						placeholder="Number of players"
						onChange={e => this.editInputHandler(e)}
					/>
					<br />

					<input
						type="date"
						id="eventDate"
						placeholder="Event date"
						defaultValue={moment().format("YYYY-MM-DD")}
						onChange={e => this.editInputHandler(e)}
					/>
					<br />

					<input
						type="time"
						id="eventTime"
						placeholder="Event time"
						defaultValue={moment().format("HH:mm")}
						onChange={e => this.editInputHandler(e)}
					/>
					<br />

					{/* <input
						type="datetime-local"
						id="eventDate"
						placeholder="Event time"
						defaultValue="2018-06-12T19:30"
						onChange={e => this.editInputHandler(e)}
					/>
					<br /> */}

					<textarea
						type="text"
						id="note"
						placeholder="Note"
						onChange={e => this.editInputHandler(e)}
					/>
					<br />

					<button
						type="submit"
						className="createEvent"
						id="submitEvent"
					>
						Create event
					</button>
					{this.state.showAcknowledge && (
						<p>
							Event saved.{" "}
							<NavLink to="/Events">See Events</NavLink>
						</p>
					)}
				</form>
			</div>
		);
	}
}

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(CreateEvent);
