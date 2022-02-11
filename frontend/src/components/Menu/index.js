import React, { Component } from "react";
import { Route, NavLink as NLink, Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { withStyles } from "@material-ui/core";

import styles from "./styles";
import logo from "./../../commons/Images/logo.png";
import banner from "./../../commons/Images/banner.png";
import "./style.css";

import { connect } from "react-redux";
import * as accountActions from "./../../actions/accounts";
import { bindActionCreators } from "redux";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },

  {
    name: "Giới thiệu",
    to: "/about",
    exact: false,
  },
  {
    name: "Sản phẩm",
    to: "/products",
    exact: false,
  },
  {
    name: "Giỏ hàng",
    to: "/cart",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <NavItem>
            <NavLink className={active}>
              <NLink
                exact={activeOnlyWhenExact}
                to={to}
                className="link"
                style={{ color: "white" }}
              >
                {label}
              </NLink>
            </NavLink>
          </NavItem>
        );
      }}
    />
  );
};

function renderAccount(logout) {
  const accInfo = JSON.parse(localStorage.getItem("account"));

  if (!accInfo) {
    return (
      <NavDropdown title="Tài khoản" id="nav-dropdown">
        <NavDropdown.Item href="/login">Đăng nhập</NavDropdown.Item>
        <NavDropdown.Item href="/signup">Đăng ký</NavDropdown.Item>
      </NavDropdown>
    );
  } else {
    return (
      <NavDropdown title="Tài khoản" id="nav-dropdown">
        <NavDropdown.Item href="/account-info">
          Thông tin tài khoản
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
      </NavDropdown>
    );
  }
}

function DropdownLink({ logout, renderAccount }) {
  const accInfo = JSON.parse(localStorage.getItem("account"));
  return renderAccount(logout);
  // <NavDropdown title="Tài khoản" id="nav-dropdown">
  //   <NavDropdown.Item href="/login">Đăng nhập</NavDropdown.Item>
  //   <NavDropdown.Item href="/signup">Đăng ký</NavDropdown.Item>
  //   <NavDropdown.Item href="/account-info">
  //     Thông tin tài khoản
  //   </NavDropdown.Item>
  //   <NavDropdown.Divider />
  //   <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
  // </NavDropdown>
}

class Menu extends Component {
  state = {
    isOpen: false,
  };
  setIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  logout = () => {
    const { actLogout } = this.props.accountActionCreators;
    actLogout();
    window.location.replace("/login");
  };
  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;

    const toggle = () => this.setIsOpen();

    return (
      <div>
        <img src={banner} alt="Banner" className={classes.banner} />
        <Navbar light expand="md" sticky="top" className={classes.root}>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="mr-auto justify-content-center flex-grow-1 pe-3"
              navbar
            >
              <NavbarBrand href="/">
                <img src={logo} alt="Logo" className={classes.logo} />
              </NavbarBrand>

              {/* Menu */}
              {this.showMenus(menus)}

              <NavItem>
                <NavLink className="">
                  <a
                    href="http://127.0.0.1:8000/admin/"
                    className="link"
                    style={{ color: "white" }}
                  >
                    Quản trị
                  </a>
                </NavLink>
              </NavItem>

              <DropdownLink
                logout={this.logout}
                renderAccount={renderAccount}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  showMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }

    return result;
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    accountActionCreators: bindActionCreators(accountActions, dispatch),
  };
};

export default withStyles(styles)(connect(null, mapDispatchToProps)(Menu));
