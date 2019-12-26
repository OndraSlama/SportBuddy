import React from "react";
import { connect } from "react-redux";
import "../Styles/Contain.css";
import moment from "moment";

const Event = props => {
  return (
    <div>
      {props.events.map(event => (
        <div>
          <span>{event.description}</span>
          <span>{event.sport}</span>
          <span>{event.numberOfPlayers}</span>
          <span>{moment(event.from).format("DD MMM YYYY") + ", "}</span>
          <span>{moment(event.to).format("DD MMM YYYY") + ", "}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Event);
