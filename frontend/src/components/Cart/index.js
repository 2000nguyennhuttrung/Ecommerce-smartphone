import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import { PermContactCalendar } from "@material-ui/icons/";
import Button from "@material-ui/core/Button";

import styles from "./styles";
class Cart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment className={classes.root}>
        <table className="table product-table" style={{ height: "50vh" }}>
          <thead>
            <tr>
              <th />
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th />
            </tr>
          </thead>
          <tbody style={{ verticalAlign: "middle" }}>
            {/* CartItem */}
            {/* <CartItem product={product} /> */}
            {/* Cart result */}
            {/* <CartResult /> */}
            {this.props.children}
          </tbody>
        </table>

        <center>
          <div style={{ width: "100%" }}>
            <Button color="primary" href="/bill" style={{ opacity: "75%" }}>
              <PermContactCalendar fontSize="large" />
              ĐƠN HÀNG
            </Button>
          </div>
        </center>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Cart);
