import React, { Component } from "react";
import "./App.css";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import Menu from "./Menu";
import Map from "./Map";

class App extends Component {
  render() {
    return (
      <div className="App">
			  <Menu />
			  <Map />
      </div>
    );
  }
}

export default connect(
	{

	},
	(App)
);
