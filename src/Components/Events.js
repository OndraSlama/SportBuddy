import React from "react";
import { connect } from "react-redux";
import "../Styles/Contain.css";

const Events = props => {
  return (
    <div className="Contain">
      <h1>Events</h1>
      <ul>
        {props.events.map(event => (
          <li>
            <span>{event.description + ", "}</span>
            <span>{event.sport + ", "}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Events);
