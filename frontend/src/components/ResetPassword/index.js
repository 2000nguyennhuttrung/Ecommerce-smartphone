import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Form } from 'react-bootstrap';

import styles from "./styles";

class ResetPassword extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Form className={classes.root}>
        <center><h3>Quên mật khẩu</h3></center>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control type="email" placeholder="Nhập email..." />
          <Form.Text className="text-muted">
            Dùng tài khoản gmail để đặt lại mật khẩu.
          </Form.Text>
        </Form.Group>

        <center>
          <Button variant="contained" color="default" type="submit" className={classes.btnReset}>
            Xác nhận
          </Button>
        </center>
      </Form>
    );
  }
}

export default withStyles(styles)(ResetPassword);
