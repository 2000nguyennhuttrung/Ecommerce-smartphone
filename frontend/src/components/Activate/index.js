import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Form } from 'react-bootstrap';

import styles from "./styles";

class Activate extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Form className={classes.root}>
        <center><h3>Xác thực tài khoản</h3></center>
        <center>
          <Button variant="contained" color="secondary" type="submit" className={classes.btnVerify}>
            Xác thực
          </Button>
        </center>
      </Form>
    );
  }
}

export default withStyles(styles)(Activate);
