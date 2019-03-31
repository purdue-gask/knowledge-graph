import stateTree from "./stateTree.js";
import { Module } from "cerebral";
import * as signals from "./sequences";
//import StorageModule from "@cerebral/storage";

//const LocalCache = StorageModule({
//  target: window.localStorage ? localStorage : null,
//  json: true,
//  sync: {
//    Connections: "Connections"
//  },
//  prefix: "_GASK"
//});

export default Module({
  state: stateTree,
  signals,
	//modules: { LocalCache }
});
