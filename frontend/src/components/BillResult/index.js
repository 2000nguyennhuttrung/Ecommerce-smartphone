import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import styles from "./styles";

class BillResult extends Component {
  totalAmout = (bills) => {
    var total = null;
    if (bills.length > 0) {
      for (let i = 0; i < bills.length; i++) {
        total += bills[i].price * bills[i].quantity;
      }
    }
    return total;
  };

  render() {
    const { classes, billResult } = this.props;
    return (
      <Fragment>
        <tr>
          <td colSpan={4} />
          <td>
            <h4>
              <strong>Tổng Tiền</strong>
            </h4>
          </td>

          <td>
            <h4>
              <strong>{this.totalAmout(billResult)}$</strong>
            </h4>
          </td>
        </tr>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bills: state.listBill,
  };
};

export default withStyles(styles)(connect(mapStateToProps, null)(BillResult));
