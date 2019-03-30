import { Module } from "cerebral";

import App from "./App";
import Menu from "./Menu";
import MenuList from "./MenuList";
import Connections from "./Connections";

export default Module({
  modules: {
		App,
		Menu,
		MenuList,
		Connections
	}
})
