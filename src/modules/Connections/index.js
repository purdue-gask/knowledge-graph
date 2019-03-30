import { Module } from 'cerebral';

import {
  setConnection,
  cancelConnection,
  updateOadaDomain,
  clearConnection
} from './chains';

let _OADA_HOST = "https://oada.openatk.com";
let _CURRENT_HOST = _OADA_HOST;

export default Module({

	state : {
		oada_domain_text:        _CURRENT_HOST,
    oada_fields_domain_text: _CURRENT_HOST,
		oada_domain:             _CURRENT_HOST,
    oada_fields_domain:      _CURRENT_HOST,
		show :                   false
	}, 

	signals: {
		submitClicked:           setConnection,
		cancelClicked:           cancelConnection,
		oadaDomainChanged:       updateOadaDomain,
    clearConnection:         clearConnection
  }
});
