import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import styles from "./styles";

class Search extends Component {
  render() {
    var { classes, handleChange } = this.props;
    return (
      <TextField
        id="standard-search"
        label="Enter keywords"
        type="search"
        className={classes.searchBox}
        onChange={handleChange}
      />
    );
  }
}

export default withStyles(styles)(Search);
