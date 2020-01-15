import React from "react";
import { connect } from "react-redux";
import "../Styles/Events.css";
import moment from "moment";

const Event = props => {
  return (
    <div className="Event">
      {props.events.map(event => (
        <div className="eventItem">
          <div className="eventInfo">
            <h4>Event description: {event.description}</h4>
            <h5>Sport: {event.sport}</h5>
            <h5>Number of players: {event.numberOfPlayers}</h5>
            <h5>From: {moment(event.from).format("DD MMM YYYY")}</h5>
            <h5>To: {moment(event.to).format("DD MMM YYYY")}</h5>
          </div>
          <div className="eventSchedule">
            {event.schedule.map(cell => (
              <div
                style={{ userSelect: "none" }}
                key={cell.id}
                className={cell.selected ? "kliknute" : "kokotina"}
              >
                <h5 style={{ margin: 0 }}>{cell.value}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Event);
