import { Module } from "cerebral";

import oadaModule from "@oada/cerebral-module";
import oadaProvider from "@oada/cerebral-provider";

import App from "./App";
import Menu from "./Menu";
import MenuList from "./MenuList";
import Connections from "./Connections";
import twitter from "./twitter";

export default Module({
  modules: {
		App,
		Menu,
		MenuList,
		Connections,
		oada: oadaModule,
		twitter
	},

	providers: {
		oada: oadaProvider
	}
})
