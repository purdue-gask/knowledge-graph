import { Module } from 'cerebral';
import * as signals from  './sequences';

export default Module({
  state : {
    records: {},
    loading: true,
    connection_id: "none",
  },

  signals,
	
	//: {
  //  handleWatchUpdate: handleWatchUpdate,
  //  resetDemo        : resetDemo
  //}
})
