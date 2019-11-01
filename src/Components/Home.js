import React from "react";
import { connect } from "react-redux";

const Home = props => {
	return (
		<div>
			<h1>Home page</h1>
		</div>
	);
};

const mapStateToProps = storeState => ({ ...storeState });
export default connect(mapStateToProps)(Home);
