import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import * as billActions from "./../../actions/bills";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles";
import Bill from "./../../components/Bill/index";
import BillItem from "./../../components/BillItem/index";
import BillResult from "./../../components/BillResult/index";


class BillContainer extends Component {

  componentDidMount() {
    const { classes, match, location, cart } = this.props;

    const { billActionCreators, bills } = this.props;
    const { actBillRequest } = billActionCreators;

    let accInfo = JSON.parse(localStorage.getItem("account"));

    try {
      actBillRequest(accInfo.username);
    } catch (error) {
      console.log(error);
    }
  }

  showBillItem = (bills) => {
    var result = null;
    if (bills.length > 0) {
      result = bills.map((item, index) => {
        return (
          <BillItem
            key={index}
            billItem={item}
            index={index}

          />
        );
      });
    }

    return result;
  };

  showTotalAmout = (bills) => {
    var result = null;

    if (bills.length > 0) {
      result = <BillResult billResult={bills} />;
    }

    return result;
  };


  render() {
    const { classes, bills } = this.props;

    return (
      <div className={`container ${classes.root}`}>
        <Bill>
          {this.showBillItem(bills.listBill)}
          {this.showTotalAmout(bills.listBill)}
        </Bill>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bills: state.bills,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    billActionCreators: bindActionCreators(billActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(BillContainer)
);
