import React from "react";
import { connect } from "react-redux";
import "../Styles/Contain.css";
import Event from "./Event";

const Events = props => {
  return (
    <div className="Contain">
      <div className="contentBlock">
        <h1>Events</h1>
        <Event />
      </div>
    </div>
  );
};

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Events);
