import React from "react";
import { connect } from "react-redux";
import "../Styles/Events.css";
import moment from "moment";

const Event = props => {
  return (
    <div>
      {props.events.map(event => (
        <div>
          <h4>{event.description}</h4>
          <h5>{event.sport}</h5>
          <h5>{event.numberOfPlayers}</h5>
          <h5>{moment(event.from).format("DD MMM YYYY") + ", "}</h5>
          <h5>{moment(event.to).format("DD MMM YYYY") + ", "}</h5>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Event);
