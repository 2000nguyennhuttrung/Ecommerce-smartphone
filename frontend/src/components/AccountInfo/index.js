import React, { Component, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import { Button } from "@material-ui/core";

import * as accountActions from "./../../actions/accounts";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./styles";

function AccountInfo(props) {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let accInfo = JSON.parse(localStorage.getItem("account"));

    fetch(`http://127.0.0.1:8000/accounts/account-detail/${accInfo.username}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
      });

    setUsername(accInfo.username);
    setPassword(accInfo.password);
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    updateInfo(event);
  };

  const updateInfo = (e) => {
    e.preventDefault();
    let accInfo = JSON.parse(localStorage.getItem("account"));
    let info = {
      first_name: firstName,
      last_name: lastName,
      email,
      username: accInfo.username,
      password: accInfo.password,
    };
    const { actInfoUpdateRequest } = props.accountActionCreators;
    actInfoUpdateRequest(accInfo.username, info);
    alert("Cập nhật tài khoản thành công!");
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
        <h3>Thông tin tài khoản</h3>
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

        <Form.Group as={Col} md="6" controlId="validationCustomEmail">
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

        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Tên đăng nhập</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Nhập tên đăng nhập..."
              aria-describedby="inputGroupPrepend"
              required
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Form.Control.Feedback type="invalid">
              Dùng tên đăng nhập mà bạn đã đăng ký.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        {/* <Form.Group as={Col} md="6" controlId="validationCustom03">
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
        </Form.Group> */}
      </Row>

      <center>
        <Row>
          <Button
            type="submit"
            variant="contained"
            className={classes.btnUpdate}
          >
            Cập nhật
          </Button>
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
  connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
);
