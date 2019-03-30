import React from "react";
import { connect } from "@cerebral/react";
import {
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { state, signal } from "cerebral/tags";

export default connect(
  {
    oadaDomainText:           state`Connections.oada_domain_text`,
    oadaFieldsDomainText:     state`Connections.oada_fields_domain_text`,
    show:                     state`Connections.show`,

    submitClicked:            signal`Connections.submitClicked`,
    cancelClicked:            signal`Connections.cancelClicked`,
    oadaDomainChanged:        signal`Connections.oadaDomainChanged`,
    oadaFieldsDomainChanged:  signal`Connections.oadaFieldsDomainChanged`
  },

  class Connections extends React.Component {
    render() {
      return (
        <Dialog open={this.props.show} className={"connections-dialog"}>
          <DialogTitle id="alert-dialog-title">
            {"Data Source [0.1.0]"}{" "}
          </DialogTitle>
          <DialogContent>
            At what OADA domain is your data stored?
          </DialogContent>
          <DialogContent>
            <div>
              <TextField
                label="Domain"
                value={this.props.oadaDomainText}
                onChange={e => this.props.oadaDomainChanged({ value: e.target.value })}
                style={{ width: 250 }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.props.cancelClicked({});
              }}
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {this.props.submitClicked({});}}
              color="secondary"
              autoFocus
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  }
);

