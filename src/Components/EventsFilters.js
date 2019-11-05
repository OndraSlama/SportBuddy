import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setFilters } from "../Actions/Filters";
import moment from "moment";

class EventsFilters extends React.Component {
	state = {
		calendarFocused: null
	};
	onDatesChange = ({ startDate, endDate }) => {
		if (startDate) {
			this.props.dispatch(setFilters({ fromDate: startDate.startOf("day").valueOf() }));
		} else {
			// this.props.dispatch(setFilters({ fromDate: startDate }));
		}
		if (endDate) {
			this.props.dispatch(setFilters({ toDate: endDate.startOf("day").valueOf() }));
		} else {
			// this.props.dispatch(setFilters({ toDate: endDate }));
		}
	};
	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={e => {
						this.props.dispatch(setFilters({ text: e.target.value }));
					}}
				/>
				<select
					value={this.props.filters.sortBy}
					onChange={e => {
						this.props.dispatch(setFilters({ sortBy: e.target.value }));
					}}>
					<option value="date">Date</option>
					<option value="cost">Cost</option>
					<option value="noOfPlayers">Number of players</option>
				</select>
				<DateRangePicker
					startDate={moment(this.props.filters.fromDate)}
					endDate={moment(this.props.filters.toDate)}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					displayFormat="DD MMM YYYY"
					// numberOfMonths={1}
					// isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(EventsFilters);
