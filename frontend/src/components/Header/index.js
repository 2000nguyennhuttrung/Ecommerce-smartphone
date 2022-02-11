import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./styles";

import "./styleHeader.css";
import Menu from "./../Menu/index";
import routes from "./../../routes.js";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return <div>{this.renderHeader()}</div>;
  }

  renderHeader = () => {
    return (
      <Router>
        {/* Menu */}
        <Menu />
        {/* Content */}

        <Switch>{this.showContentMenus(routes)}</Switch>
      </Router>
    );
  };

  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}

export default withStyles(styles)(Header);
