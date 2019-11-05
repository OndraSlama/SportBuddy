import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../Actions/Events";
import { NavLink } from "react-router-dom";
import moment from "moment";
import TimeSlider from "./TimeSlider";
import "rc-slider/assets/index.css";
import Switch from "react-switch";

// import "rheostat/initialize";
// import Rheostat from "rheostat";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

// import "rheostat/css/rheostat.css";
// import "react-dates/lib/css/_datepicker.css";

// import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
// import cssInterface from "react-with-styles-interface-css";
// import RheostatDefaultTheme from "rheostat/lib/themes/DefaultTheme";
// import ReactDatesDefaultTheme from "react-dates/lib/theme/DefaultTheme";

// ThemedStyleSheet.registerInterface(cssInterface);
// ThemedStyleSheet.registerTheme({
// 	...RheostatDefaultTheme,
// 	...ReactDatesDefaultTheme
// });

class CreateEvent extends Component {
	state = {
		eventName: "",
		note: "",
		eventStartTime: "16:00",
		eventEndTime: "18:00",
		eventDate: moment().startOf("day"),
		noOfPlayers: 0,
		showAcknowledge: false,
		calendarFocused: false,
		exactTimeChecked: false
	};

	editInputHandler(event) {
		event.persist();
		this.setState(prevState => {
			prevState[event.target.id] = event.target.value;
			return { ...prevState };
		});
	}

	dateChangeHandler = eventDate =>
		this.setState(() => {
			return { eventDate: eventDate.startOf("day") };
		});

	timeChangeHandler = ([eventStartTime, eventEndTime]) =>
		this.setState(() => {
			return {
				eventStartTime,
				eventEndTime
			};
		});

	focusChangeHandler = ({ focused }) =>
		this.setState(() => {
			return { calendarFocused: focused };
		});

	swithChangeHandler = exactTimeChecked =>
		this.setState(() => {
			return { exactTimeChecked };
		});

	submitHandler(event) {
		event.preventDefault();
		// console.log(this.state.eventStartTime);
		console.log(this.state.eventDate.format());

		const eventStartDate = moment(this.state.eventDate)
			.add(
				moment.duration(this.state.eventStartTime).asMinutes(),
				"minutes"
			)
			.valueOf();
		const eventEndDate = moment(this.state.eventDate)
			.add(
				moment.duration(this.state.eventEndTime).asMinutes(),
				"minutes"
			)
			.valueOf();

		this.props.dispatch(
			addEvent({
				...this.state,
				eventStartDate,
				eventEndDate
			})
		);

		this.setState(() => ({ showAcknowledge: true }));
		setTimeout(() => {
			this.setState(() => ({ showAcknowledge: false }));
		}, 2000);
	}

	renderTimeText() {
		if (this.state.exactTimeChecked) {
			return (
				<div>
					<input type="text" value={this.state.eventStartTime} />
					<br />
				</div>
			);
		} else {
			return (
				<div>
					<input type="text" value={this.state.eventStartTime} />
					<input type="text" value={this.state.eventEndTime} />
				</div>
			);
		}
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
						value={this.state.text}
						onChange={e => this.editInputHandler(e)}
					/>
					<br />
					<input
						type="number"
						id="cost"
						placeholder="Cost"
						value={this.state.cost}
						onChange={e => this.editInputHandler(e)}
					/>
					<br />
					<input
						type="number"
						id="noOfPlayers"
						placeholder="Number of players"
						value={this.state.noOfPlayers}
						onChange={e => this.editInputHandler(e)}
					/>
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
						eventStartTime={this.state.eventStartTime}
						eventEndTime={this.state.eventEndTime}
						exactTimeChecked={this.state.exactTimeChecked}
						step={15}
					/>
					<br />
					<SingleDatePicker
						date={this.state.eventDate} // momentPropTypes.momentObj or null
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
