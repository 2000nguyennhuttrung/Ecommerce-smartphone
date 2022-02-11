import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Products extends Component {
  render() {
    const { classes, children } = this.props;

    return <div className={classes.products}>{this.props.children}</div>;
  }
}

export default withStyles(styles)(Products);
