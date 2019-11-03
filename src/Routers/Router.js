import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Components/Home";
import CreateEvent from "../Components/CreateEvent";
import Events from "../Components/Events";
import Profile from "../Components/Profile";
import Footer from "../Components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/CreateEvent" component={CreateEvent} />
        <Route path="/Events" component={Events} />
        <Route path="/Profile" component={Profile} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
