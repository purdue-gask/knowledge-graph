import React, { Component } from "react";
import "./App.css";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
			  <Menu />
        <header className="App-header">
          <p>
            Connect to Apache Kafka.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Import Dataset
          </a>
        </header>
      </div>
    );
  }
}

export default connect(
	{

	},
	(App)
);
