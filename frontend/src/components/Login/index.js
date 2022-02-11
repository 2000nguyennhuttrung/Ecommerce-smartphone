import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { Facebook, Email } from "@material-ui/icons/";
import { Link } from "react-router-dom";

import * as accountActions from "./../../actions/accounts";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: { username: "", password: "" },
    };
  }

  componentDidUpdate() {
    const { accounts, history } = this.props;

    if (accounts.token) {
      return history.goBack();
    }
  }

  onChange = (e) => {
    let { credentials } = this.state;
    credentials[e.target.name] = e.target.value;
    this.setState({ credentials: credentials });
  };

  login = (e) => {
    e.preventDefault();
    const { actLoginRequest } = this.props.accountActionCreators;
    const { credentials } = this.state;
    actLoginRequest(credentials);
  };

  render() {
    const { classes } = this.props;
    let { username, password } = this.state;

    return (
      <div className={classes.root}>
        <Form>
          <center>
            <h3>Đăng nhập</h3>
          </center>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên đăng nhập..."
              name="username"
              value={username}
              onChange={this.onChange}
            />

            <Form.Text className="text-muted">
              Bạn hãy dùng tài khoản đã đăng ký để đăng nhập.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu..."
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </Form.Group>

          <center>
            <Row>
              <Button
                variant="contained"
                color="default"
                type="submit"
                className={classes.btnLogin}
                onClick={this.login}
              >
                Đăng nhập
              </Button>
              <br />

              <p className="mt-3">
                Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
              </p>

              <p>
                Quên tài khoản?{" "}
                <Link to="/reset-password">Đặt lại mật khẩu</Link>
              </p>
              <Form.Group as={Col} md="6">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnSocial}
                >
                  <Email className={classes.icon} />
                  Đăng nhập với Google
                </Button>
              </Form.Group>

              <br />

              <Form.Group as={Col} md="6">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btnSocial}
                >
                  <Facebook className={classes.icon} />
                  Đăng nhập với Facebook
                </Button>
              </Form.Group>
            </Row>
          </center>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    accountActionCreators: bindActionCreators(accountActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
