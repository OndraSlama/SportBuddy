import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../Actions/Events";

import { NavLink } from "react-router-dom";
class CreateEvent extends Component {
	state = { eventName: "", showAcknowledge: false };
	render() {
		return (
			<div>
				<h1>Create Event</h1>

				<form
					onSubmit={e => {
						e.preventDefault();
						this.props.dispatch(
							addEvent({ description: this.state.eventName })
						);

						this.setState(() => {
							return { showAcknowledge: true };
						});

						setTimeout(() => {
							this.setState(() => {
								return { showAcknowledge: false };
							});
						}, 2000);
					}}
				>
					<input
						type="text"
						name="inputTest"
						id="text1"
						onChange={e => {
							e.persist();
							this.setState(prevState => {
								return { eventName: e.target.value };
							});
						}}
					/>
					<button
						type="submit"
						className="createEvent"
						id="submitEvent"
					>
						Create event
					</button>
					{this.state.showAcknowledge && (
						<p>Event saved. See Events.</p>
					)}
				</form>
			</div>
		);
	}
}

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(CreateEvent);
