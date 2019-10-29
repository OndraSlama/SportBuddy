import React from "react";
import "./CSS/App.css";
import Header from "./Components/Header.js";

const App = () => {
	return (
		<div className="App">
			<Header />
			<p> Ahoj Míšo </p>
			<p> No ahoj Ondro </p>
		</div>
	);
};

export default App;
