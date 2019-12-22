import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../Actions/index";
import "../Styles/Contain.css";
// import DatePicker from "./DatePicker";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import moment from "moment";

class CreateEvent extends Component {
  state = {
    eventName: [],
    sport: "None",
    from: undefined,
    to: undefined,
    dayArray: ""
  };
  constructor() {
    super();
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    // this.daysToArray = this.daysToArray.bind(this);
  }
  selectChangeHandler = event => {
    event.persist();
    this.setState(() => ({ sport: event.target.value }));
  };

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      numberOfMonths: 1
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    let startD = this.state.from;
    let stopD = this.state.to;
    if (stopD) {
      var dateArray = [];
      var currentDate = moment(startD);
      var stopDate = moment(stopD);
      while (currentDate <= stopDate) {
        dateArray.push(moment(currentDate).format("DD-MM-YYYY"));
        currentDate = moment(currentDate).add(1, "days");
      }
      this.setState({ dayArray: dateArray });
    }

    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  // daysToArray() {

  //     console.log(this.state);
  //     console.log(dateArray);
  //   }
  //   if (this.state.dayArray !== dateArray) {
  //     this.setState(prevState => {
  //       return { dayArray: dateArray };
  //     });
  //   }
  // }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="Contain">
        <div className="contentBlock">
          {/* <div className="contentBlock"> */}
          <h1>CreateEvent</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              // this.daysToArray(from, to);
              this.props.dispatch(
                addEvent({
                  description: this.state.eventName,
                  sport: this.state.sport,
                  from: this.state.from,
                  to: this.state.to
                })
              );
            }}
            onChange={console.log(this.state)}
          >
            <label>Event name:</label>
            <input
              type="text"
              name="eventName"
              placeholder="Event name:"
              id="text1"
              onChange={e => {
                e.persist();
                this.setState(prevState => {
                  return { eventName: e.target.value };
                });
                console.log(this.state);
              }}
            />
            <label>Number of players:</label>
            <input
              type="text"
              name="numberOfPlayers"
              id="text2"
              placeholder="Number of players: "
              onChange={e => {
                e.persist();
                this.setState(prevState => {
                  return { sport: e.target.value };
                });
              }}
            />
            <label>Sport:</label>
            <select
              name="Select Sport"
              id="sportSelect"
              value={this.state.sport}
              onChange={this.selectChangeHandler}
            >
              {this.props.sports.map(sport => (
                <option value={sport}>{sport}</option>
              ))}
              <option value="None">None</option>
            </select>
            {/* <DatePicker /> */}

            <div className="RangeExample">
              <button
                type="button"
                className="link"
                onClick={this.handleResetClick}
              >
                Reset
              </button>
              <DayPicker
                className="Selectable"
                numberOfMonths={this.state.numberOfMonths}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
              />
              <Helmet>
                <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
              </Helmet>
            </div>

            <button type="submit" className="createEvent" id="submitEvent">
              Create event
            </button>
          </form>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(CreateEvent);
