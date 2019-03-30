import React from 'react';
import PropTypes from "prop-types";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { Menu, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

var anchorEl;

const styles = theme => ({
  menuButton: {
    marginLeft: 2,
    marginRight: 2
  },
});

class MenuList extends React.Component {

  handleClose = () => {
    anchorEl = null;
  };

  handleMenuList = event => {
    anchorEl = event.currentTarget;
  };

  render() {

    const { classes } = this.props;

    anchorEl = this.props.open ? anchorEl : null;
    return (
      <div>
        <IconButton
          key={7}
          color="inherit"
          aria-label="simple-menu-button"
          id="simple-menu-button"
          aria-owns={"simple-menu"}
          aria-haspopup="true"
          onClick={(evt) => {this.handleMenuList(evt); this.props.handleMenuListOpen({})}}
          className={classes.menuButton}
          disabled={
            this.props.connection_id === "none" || this.props.fieldsEditing || this.props.emptyDataSet
          }
        >
          <MenuIcon />
        </IconButton>
        {(this.props.open) ?
          <Menu
            id="simple-menu"
            open={this.props.open}
            onClose={this.props.handleMenuListOpen}
            anchorEl={anchorEl}
          >
            <MenuItem onClick={()=>{ this.props.handleMenuListOpen({}); 
							this.props.handleMenuListOpen({}) }}>Add User</MenuItem>
            <MenuItem onClick={()=>{ this.props.handleMenuListOpen({}); 
							this.props.handleMenuListOpen({}) }}>Reset Cache</MenuItem>
            <MenuItem onClick={()=>{ this.props.handleMenuListOpen({}); 
							this.props.handleMenuListOpen({}) }}>Reset Demo</MenuItem>
            <MenuItem onClick={()=>{ this.props.handleMenuListOpen({}); 
							this.props.handleMenuListOpen({}) }}>Logout</MenuItem>
          </Menu>
          : null}
      </div>
    )}
}


MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default connect(
  {
    menuItems:          state`MenuList.records`,
    current:            state`MenuList.current`,
    open:               state`MenuList.open`,

    setCurrentItem:     signal`MenuList.setCurrentItem`,
  //  addOperatorClicked: signal`operators.addOperatorClicked`,
    clearConnection:    signal`Connections.clearConnection`,
    handleMenuListOpen: signal`MenuList.handleMenuListOpen`,
  },
  withStyles(styles, {withTheme: true})(MenuList)
);
