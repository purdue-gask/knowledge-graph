import { Module } from 'cerebral';
import {
    showConnections,
   // signOut,
} from '../Connections/chains';

import { clearCacheButtonClicked} from "../App/sequences";

export default Module({
  state: {
    open: false
  },

  signals: {
    connectionsClicked: showConnections,
   // signoutClicked: signOut,
  //  clearCacheClicked: clearCacheButtonClicked
  }
});
