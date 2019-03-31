import { sequence } from "cerebral";
import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import Promise from "bluebird";
import oada from "@oada/cerebral-module/sequences";
//import uuid from "uuid";

/* Configuration values */
let _localPath = "/bookmarks/twitter";
//let _TYPE = "application/vnd.oada.yield.1+json";
/* Tree that resembles the data model for twitter module */
let tree = {
  bookmarks: {
    _type: "application/vnd.oada.bookmarks.1+json",
    _rev: "0-0",
    twitter: {
      _type: "application/vnd.oada.yield.1+json",
      _rev: "0-0",
      "*": {
        _type: "application/vnd.oada.yield.1+json",
        _rev: "0-0"
      }
    }
  }
};

/**
 * fetches the twitt
 * @type {Primitive}
 */
export const fetch = sequence("twitter.fetch", [
  ({ state, props }) => ({
    connection_id: state.get("twitter.connection_id"),
    path: _localPath,
    tree,
    watch: { signals: ["twitter.handleWatchUpdate"] }
  }),
  buildFetchRequest,
  oada.get,
  when(state`oada.${props`connection_id`}.bookmarks.twitter`),
  {
    true: sequence("fetchTwitterSuccess", [
      mapOadaToTwitter,
      set(state`App.emptyDataSet`, false),
    ]),
    false: sequence("fetchTwitterEmptySet", [
      () => (
        console.log("--> Twitter empty set")
      ),
      set(state`App.emptyDataSet`, true),
    ]),

  }
]);

/**
 * builds requests in the expected format in the cerebral-module
 * @param state
 * @returns {{requests: *[]}}
 */
function buildFetchRequest({ state }) {
  let requests = [
    {
      connection_id: state.get("twitter.connection_id"),
      path: _localPath,
      tree,
      watch: { signals: ["twitter.handleWatchUpdate"] }
    }
  ];
  return { requests };
}

export const fetchNoWatch = sequence("twitter.fetchNoWatch", [
  ({ state, props }) => ({
    connection_id: state.get("twitter.connection_id"),
    path: _localPath,
    tree
  }),
  when(state`oada.${props`connection_id`}.bookmarks.twitter`),
  {
    true: sequence("fetchTwitterSuccess", [
      mapOadaToTwitter,
      set(state`App.emptyDataSet`, false),
    ]),
    false: sequence("fetchTwitterEmptySetNoWatch", [
      () => (
        console.log("--> Twitter empty set no watch")
      ),
      set(state`App.emptyDataSet`, true),
    ])
  }
]);

/**
 * Initialize the twitter module
 * @type {Primitive}
 */
export const init = sequence("twitter.init", [
  //getConnectionsFromStorage,
  when(state`Connections.connection_id`),
  {
    true: [oada.connect],
    false: [
      oada.connect,
      set(state`twitter.connection_id`, props`connection_id`),
      set(state`Connections.connection_id`, props`connection_id`),
      set(state`connections.twitter.connection_id`, props`connection_id`)
    ]
  },
  //
  set(state`twitter.loading`, true),
  fetch,
  set(state`twitter.loading`, false),
  set(props`type`, "twitter")
]);

/**
 * gets the Connections from localCache, it updates all necessary state to auto-init the app
 * @param state
 */
//function getConnectionsFromStorage({ state }) {
//  let connections = JSON.parse(localStorage.getItem("_GASK.Connections"));
//  console.log("--> twitter.init storage connections --> ", connections);
//  if (connections && connections["connection_id"]) {
//    state.set("Connections.show", false);
//    let connectionId = connections["connection_id"];
//    let oadaDomain = connections["oada_domain"];
//    console.log("--> twitter init connectionId and OadaDomain", connectionId, oadaDomain);
//    state.set(`twitter.connection_id`, connectionId);
//    state.set("Connections.oada_domain", oadaDomain);
//    state.set("Connections.oada_domain_text", oadaDomain);
//  }
//}

/**
 * refresh the twitter module
 * when handling updates/watches
 * @type {Primitive}
 */
export const refresh = sequence("twitter.refresh", [
  set(state`twitter.connection_id`, props`connection_id`),
  set(state`twitter.loading`, true),
  fetchNoWatch,
  set(state`twitter.loading`, false),
  set(props`type`, "twitter")
]);

/**
 * Handles updates in the resource
 * @type {*[]}
 */
export const handleWatchUpdate = sequence("twitter.handleWatchUpdate", [
  () => {console.log("-->twitter.handleWatchUpdate");},
  refresh
]);

/**
 * Maps twitter records
 * @param props
 * @param state
 * @returns {*}
 */
export function mapOadaToTwitter({ props, state }) {
  let connection_id = state.get("twitter.connection_id");
  let twitter       = state.get("oada." + connection_id + ".bookmarks.twitter");

  if (twitter) {
    return Promise.map(Object.keys(twitter || {}), twitt => {
      if (twitt[0] !== "_" && twitt !== "twitter") {
        //let op = state.get(`oada.${connection_id}.bookmarks.twitter.${twitt}`);
        state.set(`twitter.records.${twitt}`, twitter[twitt]);       
				console.log("twitt record -> ", twitter[twitt]);
        return;
      }
    }).then(() => {
      return;
    });
  }
} //mapOadaToTwitter

/**
 *
 * @param props
 * @param state
 * @returns {*}
 */
export function mapTwitter({ props, state }) {
  let connection_id = state.get("twitter.connection_id");
  let twitter       = state.get("oada." + connection_id + ".bookmarks.twitter");

  if (twitter) {
    return Promise.map(Object.keys(twitter || {}), twitt => {
      if (twitt[0] !== "_" && twitt !== "twitter") {
        let op = state.get(`oada.${connection_id}.bookmarks.twitter.${twitt}`);
        if (op && op.id) {
          state.set(`twitter.records.${twitt}`, twitter[twitt]);
        }
        return;
      }
    }).then(() => {
      return;
    });
  }
} //mapOperations

