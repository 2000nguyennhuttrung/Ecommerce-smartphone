import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Form } from 'react-bootstrap';

import styles from "./styles";

class ResetPasswordConfirm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Form className={classes.root}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mật khẩu mới</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu..." />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu xác nhận..." />

        </Form.Group>

        <center>
          <Button variant="contained" color="default" type="submit" className={classes.btnReset}>
            Đặt lại mật khẩu
          </Button>
        </center>
      </Form>
    );
  }
}

export default withStyles(styles)(ResetPasswordConfirm);
