import MobileDetect from "mobile-detect";
import * as oada from "@oada/cerebral-module/sequences";
import * as twitter from "../twitter/sequences";
import { sequence } from "cerebral";
import { state } from "cerebral/tags";
import { when, set } from "cerebral/operators";

const _SCOPE = "oada.yield:all";
const _TOKEN = "def";

// previous http
const _OPENATK_METADATA =
  "eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHA6Ly9vcGVuYXRrLmNvbS9GaWVsZFdvcmtBcHAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiLCJodHRwOi8vbG9jYWxob3N0L29hdXRoMi9yZWRpcmVjdC5odG1sIl0sInRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kIjoidXJuOmlldGY6cGFyYW1zOm9hdXRoOmNsaWVudC1hc3NlcnRpb24tdHlwZTpqd3QtYmVhcmVyIiwiZ3JhbnRfdHlwZXMiOlsiYXV0aG9yaXphdGlvbl9jb2RlIl0sInJlc3BvbnNlX3R5cGVzIjpbInRva2VuIiwiY29kZSIsImlkX3Rva2VuIiwiaWRfdG9rZW4gdG9rZW4iLCJjb2RlIGlkX3Rva2VuIiwiY29kZSB0b2tlbiIsImNvZGUgaWRfdG9rZW4gdG9rZW4iXSwiY2xpZW50X25hbWUiOiJPcGVuQVRLIiwiY2xpZW50X3VyaSI6Imh0dHA6Ly9vcGVuYXRrLmNvbSIsImNvbnRhY3RzIjpbIlNhbSBOb2VsIDxzYW5vZWxAcHVyZHVlLmVkdT4iXSwiandrcyI6eyJrZXlzIjpbeyJrdHkiOiJSU0EiLCJuIjoiemF1WkZCdU1kbHYxa1lqelViNHEtXzNtNHNtRnhuZnc0U1lvYUhxN2NpOFNjdFkzeGo3cmRBSHlrUXBuUVZyajZLTzhtYUh2LTBCdlc1TWhjZ2l2a3VZcy16SEV2ZllCZVZCbmN2SGdPa0pQYmM5MUN3X2l3T1k3RUhXQjhoTTdWaUxRVmNfRHYwaDhuSnliQnZoTDA0Q0hRdDdDcE10VllHNmZvSlhjM2RxNTJqTlFiQkhJWjVtN1Z6MUt0eXpvTGNwOE8ybWhhTHA0NVVyM0NfMWVHdHY4bjVOejliV19CaDVYRlliRHh2N0JuaFpOSXcxR0NiampBd210Ym5uTDdHZ2Y0Q3k2MHdSSG1SNHZvZTIxT0lqb0FTcTJqWjAzeDEybVhzN0hQSTNZQjR5Mjl3dlpNdzJnTHpPZFRvcnJxTy10bG1uMWJvUGtXS0pKU1hvQXZ3IiwiZSI6IkFRQUIifV19LCJzb2Z0d2FyZV9pZCI6ImE3MDNiZmRjLTNmYTEtNDk5Zi1iOTA1LTExZjBiNTRmMzgwNyIsInJlZ2lzdHJhdGlvbl9wcm92aWRlciI6Imh0dHBzOi8vaWRlbnRpdHkub2FkYS1kZXYuY29tIiwiaWF0IjoxNTMzODQ2MTEyfQ.Y9BlbqHzOvufADGAW9HG4Yx2rqbg6zPalpcjSS_97Mpg36lOuADGJ4YTQ2iQfRlZjzqBi1sUq3iFhReBfk89Oy2nSEY6RVPnONK5v6a73jce3xGPUWk8DDl3rf3lcrt-IqWFoAieUie7WK5nrPFIe-_xcgYdChnuGrugjO9dGOY";

const _REDIRECT_OPENATK = "https://openatk.com/GASK/oauth2/redirect.html";

/**
 * OpenATK domain - Production
 * @type {string}
 * @private
 */
const _CURRENT_METADATA = _OPENATK_METADATA;
const _CURRENT_REDIRECT = _REDIRECT_OPENATK;

const _OPTIONS =  {
  redirect: _CURRENT_REDIRECT,
  metadata: _CURRENT_METADATA,
  scope:    _SCOPE
};

export const init = sequence("App.init", [
  () => {
    console.log("--> app.init");
  },
	setMobile,
  //getConnectionsFromStorage,
  when(state`Connections.connection_id`),
  {
    true: sequence("autoInitSuccess", [
      ({ state }) => ({
        domain:        state.get("Connections.oada_domain"),
        options:       _OPTIONS,
        token:         _TOKEN,
        connection_id: state.get("twitter.connection_id")
      }),
      twitter.init,
    ]),
    false: [set(state`Connections.show`, true)]
  }
]);

/**
 * gets the Connections from localCache, it updates all necessary state to auto-init the app
 * @param state
 */
function getConnectionsFromStorage({ state }) {
  let connections = JSON.parse(
    localStorage.getItem("_GASK.Connections")
  );
  if (connections && connections["connection_id"]) {
    let connectionId = connections["connection_id"];
    let oadaDomain   = connections["oada_domain"];
    state.set("Connections.show", false);
    state.set(`twitter.connection_id`, connectionId);
    state.set(`Connections.connection_id`, connectionId);
    state.set("Connections.oada_domain", oadaDomain);
    state.set("Connections.oada_domain_text", oadaDomain);
  } else {
    state.set("Connections.show", true);
  }
}

export const clearCacheButtonClicked = [
  ({ state, props }) => ({
    connection_id: state.get("twitter.connection_id")
  }),
  oada.resetCache,
  init
];

function setMobile({ state }) {
  let md = new MobileDetect(window.navigator.userAgent);
  state.set(`App.is_mobile`, md.mobile() !== null);
}
