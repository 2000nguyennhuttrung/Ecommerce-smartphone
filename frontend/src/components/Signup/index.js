import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Facebook, Email } from "@material-ui/icons/";

import styles from "./styles";

import * as accountActions from "./../../actions/accounts";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Signup(props) {
  const [validated, setValidated] = useState(false);

  // Info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    signUp(event);
  };

  const signUp = (e) => {
    e.preventDefault();
    let info = {
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password,
    };
    const { actSignUpRequest } = props.accountActionCreators;
    actSignUpRequest(info);

  };

  const { classes } = props;

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className={classes.root}
    >
      <center>
        <h3>Đăng ký</h3>
      </center>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Họ</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Họ..."
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback>Hoàn thành!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tên..."
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control.Feedback>Hoàn thành!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Gmail</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Nhập gmail..."
              aria-describedby="inputGroupPrepend"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Nhập gmail đúng định dạng @gmail.com.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên đăng nhập..."
            required
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Nhập tên đăng nhập để đăng ký.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu..."
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Nhập mật khẩu để đăng ký.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <center>
        <Row>
          <Button
            type="submit"
            variant="contained"
            className={classes.btnSignup}
          >
            Đăng ký
          </Button>
          <br />
          <p className="mt-3">
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
          <Form.Group as={Col} md="6">
            <Button
              variant="contained"
              color="primary"
              className={classes.btnSocial}
            >
              <Email className={classes.icon} />
              Đăng nhập Google
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
              Đăng nhập Facebook
            </Button>
          </Form.Group>
        </Row>
      </center>
    </Form>
  );
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
  connect(mapStateToProps, mapDispatchToProps)(Signup)
);
