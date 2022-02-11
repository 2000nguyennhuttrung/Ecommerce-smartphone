import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import * as cartActions from "./../../actions/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./styles";

class BillItem extends Component {
  render() {
    const { billItem } = this.props;
    return (
      <Fragment>{billItem !== null ? this.renderBillItem() : ""}</Fragment>
    );
  }

  renderBillItem = () => {
    const { classes, billItem } = this.props;
    return (
      <tr className={classes.root}>
        <th scope="row" style={{ width: "20%" }}>
          <img
            src={billItem.image}
            alt="Photo"
            className="img-fruid z-depth-0"
            style={{ height: "50%", width: "50%" }}
          />
        </th>
        <td>
          <h5>
            <Typography variant="h6" component="h6">
              {billItem.product_name}
            </Typography>
          </h5>
        </td>
        <td>{billItem.price} vnd</td>
        <td className="center-on-small-only">
          <div>
            <span className="qty">{billItem.quantity}</span>
          </div>
        </td>
        <td>
          <Typography variant="h6" component="h6">
            {billItem.price * billItem.quantity} vnd
          </Typography>
        </td>
        <td>{billItem.status ? "Đã giao hàng" : "Đã xác nhận"}</td>
      </tr>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartActionCreators: bindActionCreators(cartActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(BillItem)
);
