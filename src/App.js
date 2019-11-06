import React, { Component } from "react";
import "./Styles/App.css";
import "./Styles/index.css";
import Router from "./Routers/Router";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router />
      </div>
    );
  }
}
export default App;
