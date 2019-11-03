import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../Actions/index";

class CreateEvent extends Component {
  state = { eventName: "", sport: "" };
  render() {
    return (
      <div>
        <h1>CreateEvent</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.dispatch(
              addEvent({
                description: this.state.eventName,
                sport: this.state.sport
              })
            );
          }}
        >
          <input
            type="text"
            name="eventName"
            id="text1"
            onChange={e => {
              e.persist();
              this.setState(prevState => {
                return { eventName: e.target.value };
              });
            }}
          />
          <input
            type="text"
            name="eventSport"
            id="text2"
            onChange={e => {
              e.persist();
              this.setState(prevState => {
                return { sport: e.target.value };
              });
            }}
          />
          <button type="submit" className="createEvent" id="submitEvent">
            Create event
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(CreateEvent);
