import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../Actions/Events";
import { NavLink } from "react-router-dom";
import moment from "moment";
import TimeSlider from "./TimeSlider";
import "rc-slider/assets/index.css";
import Switch from "react-switch";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

class CreateEventForm extends Component {
	state = {
		name: "",
		note: "",
		sport: "None",
		startTime: "16:00",
		endTime: "18:00",
		date: moment().startOf("day"),
		cost: [],
		noOfPlayers: [],
		showAcknowledge: false,
		calendarFocused: false,
		exactTimeChecked: false
	};

	// Render
	render() {
		return (
			<div>
				<form onSubmit={e => this.submitHandler(e)}>
					<input
						type="text"
						id="name"
						placeholder="Event name"
						value={this.state.text}
						onChange={e => this.inputChangeHandler(e)}
					/>
					<br />
					<input
						type="number"
						id="cost"
						placeholder="Cost"
						value={this.state.cost}
						onChange={e => this.inputChangeHandler(e)}
					/>
					<br />
					<input
						type="number"
						id="noOfPlayers"
						placeholder="Number of players"
						value={this.state.noOfPlayers}
						onChange={e => this.inputChangeHandler(e)}
					/>
					<br />
					<select
						name="Select Sport"
						id="sportSelect"
						value={this.state.sport}
						onChange={this.selectChangeHandler}>
						{this.props.sports.map(sport => (
							<option value={sport}>{sport}</option>
						))}
						<option value="None">None</option>
					</select>
					<br />
					Exact time
					<Switch
						onChange={this.swithChangeHandler}
						checked={this.state.exactTimeChecked}
						checkedIcon={false}
						uncheckedIcon={false}
					/>
					<br />
					{this.renderTimeText()}
					<TimeSlider
						onChange={this.timeChangeHandler}
						startTime={this.state.startTime}
						endTime={this.state.endTime}
						exactTimeChecked={this.state.exactTimeChecked}
						step={15}
					/>
					<br />
					<SingleDatePicker
						date={this.state.date} // momentPropTypes.momentObj or null
						onDateChange={this.dateChangeHandler}
						focused={this.state.calendarFocused} // PropTypes.bool
						onFocusChange={this.focusChangeHandler} // PropTypes.func.isRequired
						id="create_event_date" // PropTypes.string.isRequired,
						displayFormat="DD MMM YYYY"
					/>
					<br />
					<textarea
						type="text"
						id="note"
						placeholder="Note"
						value={this.state.note}
						onChange={e => this.inputChangeHandler(e)}
					/>
					<br />
					<button type="submit" className="createEvent" id="submitEvent">
						Create event
					</button>
					{this.state.showAcknowledge && (
						<p>
							Event saved. <NavLink to="/Events">See Events</NavLink>
						</p>
					)}
				</form>
			</div>
		);
	}
	// Render functions
	renderTimeText() {
		if (this.state.exactTimeChecked) {
			return (
				<div>
					<input type="text" value={this.state.startTime} />
					<br />
				</div>
			);
		} else {
			return (
				<div>
					<input type="text" value={this.state.startTime} />
					<input type="text" value={this.state.endTime} />
				</div>
			);
		}
	}

	// Handlers
	inputChangeHandler = event => {
		event.persist();
		this.setState(prevState => {
			prevState[event.target.id] = event.target.value;
			return { ...prevState };
		});
	};
	selectChangeHandler = event => {
		event.persist();
		this.setState(() => ({ sport: event.target.value }));
	};
	dateChangeHandler = date => this.setState(() => ({ date }));
	timeChangeHandler = ([startTime, endTime]) => this.setState(() => ({ startTime, endTime }));
	focusChangeHandler = ({ focused }) => this.setState(() => ({ calendarFocused: focused }));
	swithChangeHandler = exactTimeChecked => {
		this.setState(prevState => {
			if (exactTimeChecked) {
				prevState.endTime = prevState.startTime;
			}
			prevState.exactTimeChecked = exactTimeChecked;
			return { ...prevState };
		});
	};

	submitHandler(event) {
		event.preventDefault();
		this.props.dispatch(
			addEvent({
				...this.state
			})
		);

		this.setState(() => ({ showAcknowledge: true }));
		setTimeout(() => {
			this.setState(() => ({ showAcknowledge: false }));
		}, 2000);
	}
}

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(CreateEventForm);
