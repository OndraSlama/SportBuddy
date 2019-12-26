import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../Actions/index";
import { createCell } from "../Actions/DatePick";
import "../Styles/Contain.css";
// import DatePicker from "./DatePicker";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import moment from "moment";
import Table from "./ReactiveTable";
import uuid from "uuid";
import { withAlert } from "react-alert";

class CreateEvent extends Component {
  state = {
    eventName: [],
    sport: "None",
    from: undefined,
    to: undefined,
    numberOfPlayers: ""
  };
  constructor() {
    super();
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.setCells = this.setCells.bind(this);
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

  getDates(startDate, stopDate) {
    if (startDate && stopDate) {
      var dateArray = [];
      var currentDate = moment(startDate);
      var stopD = moment(stopDate);
      while (currentDate <= stopD) {
        dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
        currentDate = moment(currentDate).add(1, "days");
      }
      return dateArray;
    } else {
      return "";
    }
  }

  setCells(from, to) {
    var cell = [];
    let dateArray = this.getDates(from, to);
    console.log(dateArray);
    var i;
    for (i = 0; i < dateArray.length; i++) {
      cell.push({
        id: uuid(),
        selected: false,
        toggled: false,
        value: i,
        date: moment(dateArray[i]).format("DD MMM YYYY")
      });
    }
    console.log(cell);
    this.props.dispatch(createCell(cell));
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setCells(range.from, range.to);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  showTable() {
    if (this.state.from && this.state.to) {
      return <Table />;
    }
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const alert = this.props.alert;
    return (
      <div className="Contain">
        <div className="contentBlock" onChange={this.setCells}>
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
                  to: this.state.to,
                  numberOfPlayers: this.state.numberOfPlayers
                })
              );
            }}
            // onChange={console.log(this.state)}
            onChange={console.log("dispatch: ", this.props.cell)}
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
                  return { numberOfPlayers: e.target.value };
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
                <option value={sport} key={sport}>
                  {sport}
                </option>
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
        {this.showTable()}
      </div>
    );
  }
}

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(CreateEvent);
