import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

class Sort extends Component {
  ASCOrdering = () => {
    this.props.handleASCOrdering();
  }

  DESCOrdering = () => {
    this.props.handleDESCOrdering();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Dropdown className="d-inline mx-2" autoClose={true}>
          <Dropdown.Toggle
            id="dropdown-autoclose-false"
            variant=""
            className={classes.btnToggle}
          >
            Sắp xếp
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={this.ASCOrdering}>
              Thấp đến cao
              <ArrowDropUp
                fontSize="medium"
                style={{ color: "rgba(0,0,0,0.7)" }}
              />
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={this.DESCOrdering}>
              Cao đến thấp
              <ArrowDropDown
                fontSize="medium"
                style={{ color: "rgba(0,0,0,0.7)" }}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default withStyles(styles)(Sort);
