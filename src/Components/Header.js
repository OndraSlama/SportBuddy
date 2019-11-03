import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/CreateEvent">CreateEvent</NavLink>
        <NavLink to="/Events">Events</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
      </div>
    );
  }
}

export default Header;
