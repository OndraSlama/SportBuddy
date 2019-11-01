import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Components/Home";
import CreateEvent from "../Components/CreateEvent";
import Events from "../Components/Events";
import Profile from "../Components/Profile";
import NotFound from "../Components/NotFound";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact={true} path="/" component={Home} />
				<Route
					exact={true}
					path="/CreateEvent"
					component={CreateEvent}
				/>
				<Route exact={true} path="/Events" component={Events} />
				<Route exact={true} path="/Profile" component={Profile} />
				<Route exact={true} component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
