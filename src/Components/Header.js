import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header ">
        <NavLink to="/Home">
          <h1>Home</h1>
        </NavLink>
        <NavLink to="/CreateEvent">
          <h1>CreateEvent</h1>
        </NavLink>
        <NavLink to="/Events">
          <h1>Events</h1>
        </NavLink>
        <NavLink to="/Profile">
          <h1>Profile</h1>
        </NavLink>
      </div>
    );
  }
}

export default Header;
