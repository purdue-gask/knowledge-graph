import { sequence } from "cerebral";
import { state } from "cerebral/tags";
import { set } from "cerebral/operators";

export const init = sequence("App.init", [

  set(state`App.servio`, true)

]);
