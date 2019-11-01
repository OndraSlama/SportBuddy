import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css";

class Header extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<NavLink activeClassName="isActive" exact={true} to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="isActive"
							exact={true}
							to="/CreateEvent"
						>
							CreateEvent
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="isActive"
							exact={true}
							to="/Events"
						>
							Events
						</NavLink>
					</li>

					<li>
						<NavLink
							activeClassName="isActive"
							exact={true}
							to="/Profile"
						>
							Profile
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
