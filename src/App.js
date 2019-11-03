import React, { Component } from "react";
import "./Styles/App.css";
import Router from "./Routers/Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}
export default App;
